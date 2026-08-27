import Aperture from "./aperture";
import Image from "next/image";
import type { Project } from "@/lib/types";
import WorkTilt from "./work-tilt";

/**
 * One project, one band. The work breaks the container and runs off the
 * screen edge — the container is a reading guide, not a cage. A ghost
 * numeral sits behind the type to hold the left edge.
 */
export default function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flipped = index % 2 === 1;
  const {
    slug, stage, name, discipline, headline, body,
    actionLabel, href, external, image, imageAlt, imageZoom, stamp,
  } = project;

  const action = href ? (
    <a
      href={href}
      className="link-cut"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {actionLabel}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      <span aria-hidden> →</span>
    </a>
  ) : (
    <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
      Case study in preparation
    </span>
  );

  const plane = (
    <WorkTilt>
      <div
        className={`plane ${image ? "plane-cut" : ""} ${flipped ? "bleed-left" : "bleed-right"}`}
        style={{ ["--base-ry" as string]: flipped ? "3deg" : "-3deg" }}
      >
      {stamp && <span className="stamp">{stamp}</span>}

      {image ? (
        <div className="plane-inner">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            width={1440}
            height={900}
            sizes="(max-width: 1024px) 100vw, 58vw"
            quality={70}
            style={
              imageZoom
                ? { transform: `scale(${imageZoom})`, transformOrigin: "top left" }
                : undefined
            }
          />
        </div>
      ) : (
        /* No publishable artefact yet — say so, don't fake one. */
        <div
          className="plane-inner grid place-items-center aspect-video"
        >
          <div className="text-center px-8">
            <Aperture className="mx-auto w-6 h-[25px] text-line" />
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Redacted capture pending client approval
            </p>
          </div>
        </div>
      )}
      </div>
    </WorkTilt>
  );

  return (
    <article
      id={slug}
      className="relative overflow-hidden scroll-mt-24 py-[clamp(56px,8vw,110px)]"
    >
      <div className="container-site relative">
        <span aria-hidden className="ghost-num" style={{ [flipped ? "right" : "left"]: "-0.06em" }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div
          className={`relative grid items-center gap-10 lg:gap-16 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] ${
            flipped ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* ---- the text side ---- */}
          <div className="relative z-10 reveal">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
                {stage}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <h3 className="mt-7 text-xl">{headline}</h3>

            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {name} — {discipline}
            </p>

            <p className="body-copy mt-6">{body}</p>

            <div className="mt-9">{action}</div>
          </div>

          {plane}
        </div>
      </div>
    </article>
  );
}
