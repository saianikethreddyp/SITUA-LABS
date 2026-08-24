import Aperture from "./aperture";
import DrawOnView from "./draw-on-view";

const steps = [
  {
    title: "Understand it",
    body: "What the customer wants. What the business needs. Where they stop meeting.",
  },
  {
    title: "Shape the response",
    body: "What changes, what proof they need, what the team needs behind it.",
  },
  {
    title: "Put it to work",
    body: "Build it, ship it, refine it in real conditions.",
  },
];

/**
 * Quiet and horizontal — a process strip, not a headline moment.
 * The connecting rule draws across as the section enters view.
 */
export default function Approach() {
  return (
    <section id="approach" className="section container-site scroll-mt-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,26ch)_1fr] lg:gap-20 lg:items-start">
        <div className="reveal">
          <p className="eyebrow">
            <Aperture className="w-[14px] h-[15px] flex-none text-signal" />
            How Situa works
          </p>
          <h2 className="mt-7 text-xl">We don&apos;t start with what to build.</h2>
        </div>

        <ol className="relative grid gap-10 sm:grid-cols-3 sm:gap-8">
          {/* the line the three steps sit on */}
          <span
            aria-hidden
            className="hidden sm:block absolute left-0 right-0 top-[7px] h-px bg-line rule-draw"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative reveal">
              <DrawOnView>
                <Aperture draw className="block w-4 h-[18px] text-signal" />
              </DrawOnView>
              <span className="mt-5 block font-mono text-xs tracking-[0.18em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold tracking-tight font-display">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
