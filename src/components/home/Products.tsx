const families = [
  {
    code: "01",
    name: "Solaria Everyday",
    kind: "General purpose",
    grade: "OPC 43 / PPC — IS 1489",
    homeowner: "For the walls, plaster and floors of a house you build once.",
    mason: "Predictable setting time, clean workability, forgiving on site.",
  },
  {
    code: "02",
    name: "Solaria Struct",
    kind: "High strength",
    grade: "OPC 53 — IS 269",
    homeowner: "For the parts that carry weight: columns, beams, foundations.",
    mason: "Early strength gain, tighter tolerance, fewer props held longer.",
  },
  {
    code: "03",
    name: "Solaria Terra",
    kind: "Blended low carbon",
    grade: "PSC — IS 455",
    homeowner: "Same structure, a lighter footprint, better in coastal air.",
    mason: "Lower heat of hydration, strong sulphate and chloride resistance.",
  },
];

export function Products() {
  return (
    <section id="products" className="border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="label-eyebrow">03 — The material</span>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,3.6rem)]">Three families, one standard</h2>
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {families.map((f) => (
            <article key={f.code} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex items-baseline justify-between">
                <span className="label-eyebrow">{f.code}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {f.kind}
                </span>
              </div>
              <h3 className="mt-6 text-2xl">{f.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-card-foreground">{f.homeowner}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.mason}</p>
              <p className="mt-6 border-t border-border pt-4 font-display text-xs tracking-widest text-primary">
                {f.grade}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
