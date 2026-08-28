import { useState } from "react";

const LITRES_PER_BAG_OPC = 22; // invented working figure
const BAGS_PER_100_SQFT = 10; // invented working figure

function bagsFor(area: number) {
  return Math.round((area / 100) * BAGS_PER_100_SQFT);
}

export function WaterProof() {
  const [area, setArea] = useState(900);
  const bags = bagsFor(area);
  const opc = bags * LITRES_PER_BAG_OPC;
  const solaria = Math.round(opc * 0.7);
  const saved = opc - solaria;
  const buckets = Math.round(saved / 15);
  const fmt = (n: number) => n.toLocaleString("en-IN");

  return (
    <section id="water" className="border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <span className="label-eyebrow">02 — The proof point</span>
        <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,6vw,4.2rem)]">
          Thirty percent less water to cure
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Curing is where cement quietly drinks. Move the slider to your slab size and watch what
          the same structure costs in water, poured with Solaria against a conventional OPC bag.
        </p>

        <div className="mt-14">
          <label htmlFor="slab" className="flex items-baseline gap-3">
            <span className="text-sm font-semibold">Slab area</span>
            <span className="font-display text-2xl font-bold text-primary">
              {fmt(area)} sq ft
            </span>
          </label>
          <input
            id="slab"
            type="range"
            min={200}
            max={3000}
            step={50}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
            aria-describedby="slab-help"
          />
          <p id="slab-help" className="mt-3 text-xs text-muted-foreground">
            About {bags} bags of 50 kg. Use arrow keys for fine steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2" aria-live="polite">
          <Card
            title="Conventional OPC"
            value={`${fmt(opc)} L`}
            note="Baseline curing demand"
            fill={100}
            accent={false}
          />
          <Card
            title="Solaria Cement"
            value={`${fmt(solaria)} L`}
            note={`${fmt(saved)} litres saved on this slab`}
            fill={30}
            accent
          />
        </div>

        <p className="mt-10 max-w-2xl border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
          On a {fmt(area)} sq ft slab that is{" "}
          <strong className="text-foreground">{fmt(saved)} litres</strong> — roughly {buckets}{" "}
          buckets a mason never has to carry, and a structure that keeps curing through a dry week.
        </p>
      </div>
    </section>
  );
}

function Card({
  title,
  value,
  note,
  fill,
  accent,
}: {
  title: string;
  value: string;
  note: string;
  fill: number;
  accent: boolean;
}) {
  return (
    <div className="border border-border bg-card p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-sans text-sm font-semibold normal-case tracking-normal text-card-foreground">
          {title}
        </h3>
        <span
          className={`font-display text-3xl font-bold ${accent ? "text-primary" : "text-foreground"}`}
        >
          {value}
        </span>
      </div>
      <div className="mt-5 h-2.5 w-full bg-secondary">
        <div
          className={`h-full transition-all duration-500 ${accent ? "bg-primary" : "bg-cement"}`}
          style={{ width: `${fill}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
