"use client";

import { type PointerEvent, type ReactNode, useRef } from "react";

/**
 * A restrained desktop-only physical response for the work imagery.
 * Values live in CSS custom properties, so there is no animation library or
 * per-frame React rendering. Touch devices retain native scrolling instead.
 */
export default function WorkTilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function supportsTilt(pointerType: string) {
    return (
      pointerType === "mouse" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--plane-lift", "0px");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!supportsTilt(event.pointerType)) return;

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty("--tilt-x", `${(-y * 3).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
    el.style.setProperty("--plane-lift", "-4px");
  }

  return (
    <div
      ref={ref}
      className="work-tilt"
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </div>
  );
}
