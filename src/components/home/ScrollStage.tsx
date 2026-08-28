import { useEffect, useRef, useState } from "react";

import frameEmpty from "@/assets/frame-empty.png.asset.json";
import frameCement from "@/assets/frame-cement.png.asset.json";

/** Maps x through a piecewise ramp, clamped at both ends. */
function ramp(x: number, a: number, b: number) {
  if (x <= a) return 0;
  if (x >= b) return 1;
  return (x - a) / (b - a);
}

function band(x: number, a: number, b: number, c: number, d: number) {
  return Math.min(ramp(x, a, b), 1 - ramp(x, c, d));
}

export function ScrollStage() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY - el.offsetTop) / total : 0;
      setP(Math.min(1, Math.max(0, progress)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  if (reduced) {
    return (
      <section aria-label="Introduction" className="bg-ink">
        <StaticBeats />
      </section>
    );
  }

  const cementOpacity = ramp(p, 0.14, 0.34);
  const scale = 1 + ramp(p, 0.55, 0.98) * 2.6;
  const beat1 = band(p, -1, 0, 0.12, 0.22);
  const beat2 = band(p, 0.28, 0.38, 0.5, 0.58);
  const beat3 = ramp(p, 0.8, 0.92);
  const cue = 1 - ramp(p, 0, 0.05);

  return (
    <section ref={ref} aria-label="Introduction" className="relative h-[520vh] bg-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center will-change-transform"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="relative aspect-[1658/944] w-full">
            <img
              src={frameEmpty.url}
              alt="A polished metal frame floating in a starfield, empty"
              className="absolute inset-0 h-full w-full object-cover"
              width={1658}
              height={944}
            />
            <img
              src={frameCement.url}
              alt="The same frame, now filled with a grey cement wall"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: cementOpacity }}
              width={1658}
              height={944}
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: beat1 }}
        >
          <h1 className="max-w-[46rem] text-[clamp(1.9rem,5.2vw,4.2rem)] text-foreground">
            The world&apos;s second most used material is almost invisible.
          </h1>
          <p className="mt-6 max-w-md text-sm text-cement sm:text-base">
            You&apos;ve probably never stopped to look at it.
          </p>
          <span className="label-eyebrow absolute bottom-10 animate-pulse" style={{ opacity: cue }}>
            (Scroll)
          </span>
        </div>

        <div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: beat2 }}
        >
          <h2 className="text-[clamp(2.6rem,9vw,7rem)] text-ink">Look closer.</h2>
          <p className="mt-5 max-w-md text-sm font-semibold text-ink sm:text-base">
            Because what holds the world together deserves a closer look.
          </p>
        </div>

        <div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: beat3 }}
        >
          <span className="label-eyebrow mb-5">Est. 1874 — Solaria Baustoffe GmbH</span>
          <h2 className="text-[clamp(2.8rem,11vw,9rem)] text-ink">Solaria Cement</h2>
          <p className="mt-4 text-base font-semibold tracking-wide text-ink sm:text-lg">
            Materials that stand the test of time.
          </p>
        </div>
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
