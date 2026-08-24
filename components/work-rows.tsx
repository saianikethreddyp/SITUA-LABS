import Aperture from "./aperture";
import { projects } from "@/content/projects";
import ProjectRow from "./project-row";
import WorkLedger from "./work-ledger";

export default function WorkRows() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="container-site pt-[clamp(40px,6vw,80px)]">
        <p className="eyebrow reveal">
          <Aperture className="w-[14px] h-[15px] flex-none text-signal" />
          Selected work
        </p>
        <h2 className="mt-8 text-2xl measure-md reveal">
          Real businesses. Real friction. Open it and check.
        </h2>
        <p className="body-copy mt-7 reveal">
          Five engagements. Not one of them the same kind of work.
        </p>

        <WorkLedger />
      </div>

      <div className="mt-[clamp(56px,8vw,120px)]">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
