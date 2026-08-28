const stats = [
  { value: "1874", label: "Founded in Germany, building ever since" },
  { value: "23", label: "Countries with Solaria plants and terminals" },
  { value: "11", label: "Indian plants across south, west and north" },
  { value: "38", label: "Quality checks on every batch, before it leaves" },
];

export function Trust() {
  return (
    <section
      id="trust"
      className="border-t border-border bg-secondary/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <span className="label-eyebrow">04 — Proof of trust</span>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,3.6rem)]">
          A hundred and fifty years of the same answer
        </h2>
        <dl className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="bg-background p-8">
              <dt className="font-display text-5xl font-bold text-primary">{s.value}</dt>
              <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every Solaria plant in India runs on the group&apos;s environmental protocol: alternative
          fuels, waste heat recovery and blended clinker. The 30% curing water saving is measured
          in the same labs that sign the batch.
        </p>
      </div>
    </section>
  );
}
