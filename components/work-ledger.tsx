import { projects } from "@/content/projects";

/**
 * The work as an index before it is a gallery.
 * Five lines tell the visitor the shape of the practice in one glance —
 * and prove, before any screenshot loads, that these are different kinds of work.
 */
export default function WorkLedger() {
  return (
    <div className="mt-14 reveal">
      {projects.map((p, i) => (
        <a
          key={p.slug}
          href={`#${p.slug}`}
          className="ledger-row group"
        >
          <span className="font-mono text-xs text-muted">
            {String(i + 1).padStart(2, "0")}
          </span>

          <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="ledger-name font-display">{p.name}</span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {p.discipline}
            </span>
          </span>

          <span className="font-mono text-xs uppercase tracking-[0.16em] text-signal whitespace-nowrap">
            {p.stage}
          </span>
        </a>
      ))}
    </div>
  );
}
