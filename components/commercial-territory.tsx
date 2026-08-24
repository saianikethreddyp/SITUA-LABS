import Aperture from "./aperture";

const places = [
  {
    title: "Be understood",
    body: "Ten seconds to say what you do and why you're credible. Most businesses don't.",
  },
  {
    title: "Be chosen",
    body: "Interest dies in confusion and missed handoffs. That costs more than price does.",
  },
  {
    title: "Be delivered well",
    body: "The promise takes minutes to make and months to keep. That needs a system.",
  },
];

/**
 * Loud and vertical. Three statements at display size — deliberately not
 * a three-column grid, so it cannot be confused with the Approach strip.
 */
export default function CommercialTerritory() {
  return (
    <section className="section container-site">
      <p className="eyebrow reveal">
        <Aperture className="w-[14px] h-[15px] flex-none text-signal" />
        Where we work
      </p>

      <h2 className="mt-8 text-2xl measure-md reveal">
        Three places a business loses people.
      </h2>

      <div className="mt-16 reveal-stagger">
        {places.map((p, i) => (
          <div key={p.title} className="manifesto-row">
            <div className="flex items-start gap-5">
              <span className="font-mono text-xs tracking-[0.18em] text-signal pt-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="manifesto-title">{p.title}</h3>
            </div>
            <p className="text-muted leading-relaxed text-lg max-w-[46ch] md:pt-3">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
