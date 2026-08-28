import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import frameEmpty from "@/assets/frame-empty.png.asset.json";
import frameCement from "@/assets/frame-cement.png.asset.json";

function Beat({
  opacity,
  children,
}: {
  opacity: ReturnType<typeof useTransform<number, number>> | number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    >
      {children}
    </motion.div>
  );
}

export function ScrollStage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const cementOpacity = useTransform(scrollYProgress, [0.14, 0.34], [0, 1]);
  const stageScale = useTransform(scrollYProgress, [0.55, 0.95], [1, 3.4]);
  const starOpacity = useTransform(scrollYProgress, [0.55, 0.8], [1, 0]);

  const beat1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const beat2 = useTransform(scrollYProgress, [0.28, 0.38, 0.5, 0.58], [0, 1, 1, 0]);
  const beat3 = useTransform(scrollYProgress, [0.78, 0.9], [0, 1]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  if (reduced) {
    return (
      <section aria-label="Introduction" className="bg-ink">
        <StaticBeats />
      </section>
    );
  }

  return (
    <section ref={ref} aria-label="Introduction" className="relative h-[520vh] bg-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: starOpacity }}
          className="absolute inset-0 bg-ink"
          aria-hidden
        />

        <motion.div
          style={{ scale: stageScale }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <div className="relative aspect-[1658/944] w-full max-w-none">
            <img
              src={frameEmpty.url}
              alt="A polished metal frame floating in a starfield, empty"
              className="absolute inset-0 h-full w-full object-cover"
              width={1658}
              height={944}
            />
            <motion.img
              style={{ opacity: cementOpacity }}
              src={frameCement.url}
              alt="The same frame, now filled with a grey cement wall"
              className="absolute inset-0 h-full w-full object-cover"
              width={1658}
              height={944}
            />
          </div>
        </motion.div>

        <Beat opacity={beat1}>
          <h1 className="max-w-[46rem] text-[clamp(1.9rem,5.2vw,4.2rem)] text-foreground">
            The world&apos;s second most used material is almost invisible.
          </h1>
          <p className="mt-6 max-w-md text-sm text-cement sm:text-base">
            You&apos;ve probably never stopped to look at it.
          </p>
          <motion.span
            style={{ opacity: cueOpacity }}
            className="label-eyebrow absolute bottom-10 animate-pulse"
          >
            (Scroll)
          </motion.span>
        </Beat>

        <Beat opacity={beat2}>
          <h2 className="text-[clamp(2.6rem,9vw,7rem)] text-ink drop-shadow-[0_2px_24px_rgba(255,255,255,0.35)]">
            Look closer.
          </h2>
          <p className="mt-5 max-w-md text-sm font-medium text-ink/80 sm:text-base">
            Because what holds the world together deserves a closer look.
          </p>
        </Beat>

        <Beat opacity={beat3}>
          <span className="label-eyebrow mb-5">Est. 1874 — Solaria Baustoffe GmbH</span>
          <h2 className="text-[clamp(2.8rem,11vw,9rem)] text-ink">Solaria Cement</h2>
          <p className="mt-4 text-base font-medium tracking-wide text-ink/80 sm:text-lg">
            Materials that stand the test of time.
          </p>
        </Beat>
      </div>
    </section>
  );
}

function StaticBeats() {
  return (
    <div className="mx-auto max-w-3xl space-y-24 px-6 py-32 text-center">
      <div>
        <h1 className="text-[clamp(1.9rem,5vw,3.6rem)]">
          The world&apos;s second most used material is almost invisible.
        </h1>
        <p className="mt-5 text-cement">You&apos;ve probably never stopped to look at it.</p>
      </div>
      <img
        src={frameCement.url}
        alt="A metal frame filled with a grey cement wall"
        className="w-full"
        width={1658}
        height={944}
        loading="lazy"
      />
      <div>
        <h2 className="text-[clamp(2.4rem,7vw,5rem)]">Look closer.</h2>
        <p className="mt-5 text-cement">
          Because what holds the world together deserves a closer look.
        </p>
      </div>
      <div>
        <h2 className="text-[clamp(2.6rem,9vw,7rem)]">Solaria Cement</h2>
        <p className="mt-4 text-cement">Materials that stand the test of time.</p>
      </div>
    </div>
  );
}
