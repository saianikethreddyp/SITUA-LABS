/**
 * Countable facts only. No percentages, no invented metrics.
 * If a number stops being true, change the number — not the claim.
 */
const facts = [
  { n: "5", label: "businesses" },
  { n: "5", label: "industries" },
  { n: "2", label: "sites you can open" },
  { n: "1", label: "programme running now" },
];

export default function ProofBand() {
  return (
    <section className="container-site py-[clamp(72px,10vw,140px)]">
      <div className="grid grid-cols-2 lg:grid-cols-4 reveal-stagger">
        {facts.map((f) => (
          <div key={f.label} className="border-l border-line pl-5 py-4 lg:py-0">
            <span className="block font-mono text-[clamp(2.75rem,6vw,5rem)] leading-none font-medium tracking-tight">
              {f.n}
            </span>
            <span className="mt-4 block font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
