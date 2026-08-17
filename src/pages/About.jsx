import { NavLink } from "react-router-dom";
import { ArrowRight, Target, Compass, Sparkles } from "lucide-react";
import Atmosphere from "../components/Atmosphere";
import CircuitPattern from "../components/CircuitPattern";
import Reveal from "../components/Reveal";
import { team } from "../data/content";

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "We scope tight and build exactly what moves the needle - nothing bolted on for show.",
  },
  {
    icon: Compass,
    title: "Direction",
    desc: "Every engagement starts with a clear map: what we're building, why, and how we'll know it worked.",
  },
  {
    icon: Sparkles,
    title: "Craft",
    desc: "Code, design, and copy get the same level of care - the details are the product.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <Atmosphere />
        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
              &gt;&gt; about_us
            </p>
            <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              The team behind
              <span className="text-gradient"> IT Tech</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-paper/65">
              A small, senior team that would rather ship one thing well than
              five things half-finished.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-20">
        <CircuitPattern />
        <div className="relative mx-auto max-w-5xl px-5 md:px-10 md:pl-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              who we are
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-paper/75">
              IT Tech is a technology studio building web platforms, mobile
              apps, and applied AI for businesses that are done tolerating
              slow, fragile software. We work as an extension of your team —
              scoping honestly, shipping in the open, and staying on the hook
              after launch.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-line bg-panel p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/12 text-signal">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-20">
        <CircuitPattern />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
              &gt;&gt; our_team
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Meet the people building it
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group overflow-hidden rounded-2xl border border-line bg-panel">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-panel-2 to-ink">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-display text-4xl font-semibold text-signal/30 transition-colors group-hover:text-signal/50">
                          {m.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="mb-1.5 inline-block rounded-md border border-signal/40 bg-signal/10 px-2 py-0.5 font-mono text-[10px] uppercase leading-snug tracking-wide text-signal">
                      {m.role}
                    </span>
                    <h3 className="font-display text-base font-semibold">
                      {m.name}
                    </h3>
                    {m.bio && (
                      <p className="mt-2 text-sm leading-relaxed text-paper/65">
                        {m.bio}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-16 text-center">
            <NavLink
              to="/contact"
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider text-paper"
            >
              Work With Us <ArrowRight size={16} />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}