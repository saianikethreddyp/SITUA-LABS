import Aperture from "./aperture";
import Link from "next/link";
import WorkRail from "./work-rail";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[clamp(72px,11vw,140px)]">
      {/* the room: one slow, off-centre bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[10%] left-[58%] w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full opacity-[0.09]"
        style={{
          background:
            "radial-gradient(circle, #F4511E 0%, rgba(244,81,30,0.35) 32%, transparent 68%)",
        }}
      />

      <div className="container-site relative">
        <p className="eyebrow fade-up" style={{ ["--i" as string]: 0 }}>
          <Aperture className="w-[14px] h-[15px] flex-none text-signal" />
          Situa / Design + Technology
        </p>

        <h1 className="mt-8 text-3xl">
          {["We build how", "customers experience", "your business."].map((line, i) => (
            <span key={line} className="line-mask" style={{ ["--i" as string]: i }}>
              <span>
                {i === 1 ? (
                  <>
                    <span className="relative inline-block">
                      customers
                      <span
                        aria-hidden
                        className="cut-in absolute left-0 -bottom-[0.06em] h-[0.075em] w-full bg-signal origin-left"
                      />
                    </span>{" "}
                    experience
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 max-w-[58rem]">
          <div className="fade-up" style={{ ["--i" as string]: 3 }}>
            <p className="body-copy">
              Every business loses customers somewhere. Between interest and
              enquiry. In the follow-up that never came.
            </p>
            <p className="mt-5 text-lg font-semibold text-text">
              We find that point and rebuild it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 fade-up" style={{ ["--i" as string]: 4 }}>
            <Link href="#work" className="btn btn-primary">See the work</Link>
            <Link href="#contact" className="btn btn-ghost">Start a conversation</Link>
          </div>
        </div>
      </div>

      <WorkRail />
    </section>
  );
}
