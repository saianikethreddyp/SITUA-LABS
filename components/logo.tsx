/**
 * The Situa wordmark, drawn as geometric paths — no font dependency.
 * Cap height 100, stroke 20, butt terminals, true radii.
 * The A's crossbar overshoots the letter by 30 units: "the cut".
 *
 * With `draw`, the strokes construct themselves, the A resolves, and the
 * cut wipes in last — the mark showing its own geometry. Once, on view.
 */
export default function Logo({
  className,
  draw = false,
  mono = false,
}: {
  className?: string;
  draw?: boolean;
  /** Render every part in currentColor, including the cut. */
  mono?: boolean;
}) {
  const stroke = draw ? "draw-path" : undefined;
  return (
    <svg
      viewBox="0 0 368 100"
      className={className}
      role="img"
      aria-label="Situa"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="20">
        <path pathLength="1" className={stroke} d="M47.32,20 A20,20 0 1 0 30,50 A20,20 0 1 1 12.68,80" />
        <path pathLength="1" className={stroke} d="M76,0 V100" />
        <path pathLength="1" className={stroke} d="M92,10 H158" />
        <path pathLength="1" className={stroke} d="M125,0 V100" />
        <path pathLength="1" className={stroke} d="M172,0 V52 A38,38 0 0 0 248,52 V0" />
      </g>
      <path
        fill="currentColor"
        className={draw ? "draw-fill" : undefined}
        d="M290,0 L310,0 L338,100 L316,100 L300,42 L284,100 L262,100 Z"
      />
      <path
        fill={mono ? "currentColor" : "#F4511E"}
        className={draw ? "draw-cut" : undefined}
        d="M275,54 L368,54 L368,74 L269.4,74 Z"
      />
    </svg>
  );
}
