import { NavLink } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import Atmosphere from "../components/Atmosphere";
import Reveal from "../components/Reveal";
import { caseStudies } from "../data/content";

export default function CaseStudies() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <Atmosphere />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
              &gt;&gt; case_studies
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Results, traced end
              <span className="text-gradient"> to end</span>
            </h1>
            <p className="mt-5 max-w-xl text-paper/65">
              A handful of the systems we've shipped, and what changed for
              the businesses running them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-line py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-10 md:pl-20">
          <div className="flex flex-col gap-6">
            {caseStudies.map((c, i) => (
              <Reveal key={c.client} delay={i * 0.08}>
                <div className="group grid gap-6 rounded-2xl border border-line bg-panel p-8 transition-colors hover:border-signal/50 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-mute">
                      {c.industry}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {c.client}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/65">
                      {c.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-signal/30 bg-signal/10 px-5 py-4 sm:flex-col sm:items-start sm:text-left">
                    <TrendingUp size={18} className="text-signal" />
                    <span className="font-display text-lg font-semibold text-signal">
                      {c.result}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-16 text-center">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Want to be the next result on this page?
            </h2>
            <NavLink
              to="/contact"
              className="glow-btn mt-7 inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider text-paper"
            >
              Start Your Project <ArrowRight size={16} />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
