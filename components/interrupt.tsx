/**
 * A pattern interrupt. Skimmers lock into a rhythm of
 * eyebrow → headline → paragraph; this band breaks it with
 * one statement and nothing else to read.
 */
export default function Interrupt({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative border-y border-line py-[clamp(72px,11vw,150px)]">
      <div className="container-site">
        <span aria-hidden className="block h-[6px] w-[92px] bg-signal rule-draw" />
        <p className="mt-10 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2rem,5.4vw,4.5rem)] max-w-[19ch] reveal">
          {children}
        </p>
      </div>
    </section>
  );
}
