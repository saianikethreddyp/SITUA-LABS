/**
 * The U from the wordmark — the identical path, at its true proportions.
 * Centreline x 10→86, bowl r38, stroke 20, so the visual box is exactly
 * 96 x 100, the same ratio the letter has inside the logo.
 */
export default function Aperture({
  className = "",
  draw = false,
}: {
  className?: string;
  draw?: boolean;
}) {
  return (
    <svg viewBox="0 0 96 100" className={className} fill="none" aria-hidden>
      <path
        d="M10,0 V52 A38,38 0 0 0 86,52 V0"
        stroke="currentColor"
        strokeWidth="20"
        pathLength="1"
        className={draw ? "draw-path" : undefined}
      />
    </svg>
  );
}
