import Image from "next/image";
import { projects } from "@/content/projects";
import WorkTilt from "./work-tilt";

const tiles = projects.filter((p) => p.image);

/**
 * The page's only loop. Project evidence and privacy-safe concept imagery
 * drifting on tilted planes. Desktop drifts slowly; touch devices use the
 * browser's native, momentum-preserving horizontal scroll instead.
 */
export default function WorkRail() {
  const doubled = [...tiles, ...tiles];

  return (
    <div
      className="rail work-rail-scroll relative mt-[clamp(56px,8vw,110px)] overflow-x-auto overflow-y-hidden md:overflow-hidden"
      aria-label="Selected work — swipe to explore"
    >
      <div className="rail-track">
        {doubled.map((p, i) => (
          <WorkTilt key={`${p.slug}-${i}`}>
            <div
              className="plane w-[min(74vw,460px)] flex-none"
              aria-hidden={i >= tiles.length ? true : undefined}
              style={{ ["--base-ry" as string]: "-3deg" }}
            >
              <div className="plane-inner">
                <Image
                  src={p.image!}
                  alt={i < tiles.length ? p.imageAlt! : ""}
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 74vw, 460px"
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={75}
                  style={
                    p.imageZoom
                      ? { transform: `scale(${p.imageZoom})`, transformOrigin: "top left" }
                      : undefined
                  }
                />
              </div>
            </div>
          </WorkTilt>
        ))}
      </div>

      {/* the room swallows the rail at both edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[12vw] bg-gradient-to-r from-void to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[12vw] bg-gradient-to-l from-void to-transparent"
      />

      <p className="container-site mt-8 font-mono text-xs tracking-[0.16em] uppercase text-muted">
        {tiles.map((p) => p.name).join("  ·  ")}
      </p>
    </div>
  );
}
