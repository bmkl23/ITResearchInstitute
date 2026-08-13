import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Atmosphere from "../components/Atmosphere";
import Reveal from "../components/Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <Atmosphere />
        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
              &gt;&gt; core_technology_services
            </p>
            <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Every service, one
              <span className="text-gradient"> connected system</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-paper/65">
              From first line of code to ongoing security, our services are
              designed to plug into each other — not sit in silos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-line py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-7 transition-all hover:-translate-y-1 hover:border-signal/50">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-signal/12 text-signal transition-transform group-hover:-rotate-6">
                        <Icon size={22} />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-mute">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/65">
                      {s.desc}
                    </p>
                    <button className="mt-6 flex items-center gap-2 self-start font-mono text-xs uppercase tracking-wider text-signal">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-t border-line py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-paper/65">
              Send us a short brief and we'll map it to the right service —
              no sales pitch, just a plan.
            </p>
            <NavLink
              to="/contact"
              className="glow-btn mt-7 inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider text-paper"
            >
              Talk To Us <ArrowRight size={16} />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
