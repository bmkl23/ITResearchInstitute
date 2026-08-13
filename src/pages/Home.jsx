import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Atmosphere from "../components/Atmosphere";
import Reveal from "../components/Reveal";
import { services } from "../data/content";

const stats = [
  { value: "120+", label: "Systems shipped" },
  { value: "3+", label: "Years in operation" },
  { value: "99.9%", label: "Average uptime" },
  { value: "24/7", label: "Monitoring" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <Atmosphere />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-signal"
          >
            &gt;&gt; IT_TECH / DIGITAL_SYSTEMS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl"
          >
            We engineer digital
            <span className="text-gradient"> systems </span>
            that hold up under real growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg"
          >
            IT Tech designs and builds web platforms, mobile apps, and applied
            AI — wired together like a circuit, so every part of your product
            carries the load.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <NavLink
              to="/services"
              className="glow-btn flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper"
            >
              Explore Services <ArrowRight size={16} />
            </NavLink>
            <NavLink
              to="/contact"
              className="rounded-full border border-line px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper transition-colors hover:border-signal hover:text-signal"
            >
              Get In Touch
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mute">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mute"
        >
          <ChevronDown size={22} />
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative border-t border-line bg-panel/40 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
              &gt;&gt; core_services
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What we build, wire to wire
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="group h-full rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-signal/50">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/12 text-signal transition-transform group-hover:-rotate-6">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-signal hover:underline"
            >
              View all services <ArrowRight size={15} />
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden border-t border-line py-24">
        <Atmosphere variant="dense" />
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to ship something that
              <span className="text-gradient"> holds up?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-paper/65">
              Tell us what you're building. We'll reply with a straight
              answer on scope, timeline, and cost.
            </p>
            <NavLink
              to="/contact"
              className="glow-btn mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider text-paper"
            >
              Start a Project <ArrowRight size={16} />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
