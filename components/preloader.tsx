import Logo from "./logo";

/**
 * "The vessel" — the wordmark fills with orange from the bottom up, then the
 * panel lifts away.
 *
 * Two copies of the mark stacked: a dim one beneath, a solid orange one above
 * revealed by a rising clip. Linear timing, because an eased fill finishes
 * almost immediately and never reads as filling.
 *
 * Entirely CSS, with `forwards` — no JavaScript, so it cannot fail to clear.
 * There is deliberately no "seen this already" flag: the site is one page with
 * anchor navigation, so only a hard refresh replays it, and the flag needed a
 * pre-paint inline script that mutated <html> and broke hydration.
 */
export default function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="pl-wrap">
        <Logo mono className="pl-mark text-[rgb(245_243_239_/_0.14)]" />
        <Logo mono className="pl-mark pl-fill-layer text-signal" />
      </div>
    </div>
  );
}
