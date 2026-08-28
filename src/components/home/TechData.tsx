const docs = [
  { name: "Solaria Everyday — PPC technical datasheet", meta: "PDF · 1.2 MB · Rev 04/2026" },
  { name: "Solaria Struct — OPC 53 mix design guide", meta: "PDF · 2.4 MB · Rev 02/2026" },
  { name: "Solaria Terra — PSC durability report", meta: "PDF · 3.1 MB · Rev 01/2026" },
  { name: "Curing water study — 30% reduction methodology", meta: "PDF · 860 KB · Rev 03/2026" },
  { name: "BIS conformance certificates — all grades", meta: "ZIP · 5.8 MB · 2026" },
];

export function TechData() {
  return (
    <section id="technical" className="border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <span className="label-eyebrow">05 — For architects and engineers</span>
        <h2 className="mt-5 text-[clamp(2rem,5vw,3.6rem)]">Documents and numbers</h2>
        <ul className="mt-12 border-t border-border">
          {docs.map((d) => (
            <li key={d.name}>
              <a
                href="#technical"
                className="flex items-center justify-between gap-6 border-b border-border py-5 transition-colors hover:bg-secondary"
              >
                <span>
                  <span className="block text-sm font-semibold">{d.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{d.meta}</span>
                </span>
                <span aria-hidden className="font-display text-sm tracking-widest text-primary">
                  ↓
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
