"use client";

import { useEffect, useRef } from "react";

/**
 * Plays a construction animation once, when the element is actually seen.
 *
 * Scroll-linked timelines can't do this job: `view()` needs a CSS layout box,
 * and SVG <path> elements don't have one — and an element at the very bottom
 * of the page can never scroll far enough to finish a scrubbed animation.
 *
 * Progressive enhancement: with no JS, neither class is applied and the mark
 * renders complete. `is-armed` installs the hidden start state only once we
 * know we are able to finish it.
 */
export default function DrawOnView({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("is-armed");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-drawn");
        io.disconnect();
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
