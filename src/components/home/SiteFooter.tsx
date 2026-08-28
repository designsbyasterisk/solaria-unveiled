const columns = [
  {
    title: "Contact",
    items: ["Solaria Cement India, Pune", "dealers@solaria.in", "1800 200 4400"],
  },
  { title: "Careers", items: ["Plant operations", "Sales and dealer network", "Graduate programme"] },
  { title: "Investors", items: ["Annual report 2025", "Quarterly results", "Governance"] },
  { title: "CSR", items: ["Water stewardship", "Mason skilling", "Community housing"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="label-eyebrow">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display tracking-[0.22em] text-foreground">SOLARIA CEMENT</span>
          <span>Part of Solaria Baustoffe GmbH, founded 1874. © 2026.</span>
        </div>
      </div>
    </footer>
  );
}
