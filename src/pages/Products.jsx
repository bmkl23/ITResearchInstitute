import { NavLink } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Atmosphere from "../components/Atmosphere";
import Reveal from "../components/Reveal";
import { products } from "../data/content";

export default function Products() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <Atmosphere />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
              &gt;&gt; our_products
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Software we've built,
              <span className="text-gradient"> refined, and shipped</span>
            </h1>
            <p className="mt-5 max-w-xl text-paper/65">
              Beyond client work, we build our own products — proof that the
              systems we design actually run in production.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-line py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-8 transition-colors hover:border-signal/50">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-mute">
                      {p.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/65">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-16 rounded-2xl border border-line bg-panel/60 p-10 text-center">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Have a product idea in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-paper/65">
              We partner with founders to design, build, and ship v1 products
              from scratch.
            </p>
            <NavLink
              to="/contact"
              className="glow-btn mt-7 inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper"
            >
              Get Started <ArrowRight size={16} />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
