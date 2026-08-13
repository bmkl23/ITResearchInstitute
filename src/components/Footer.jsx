import { NavLink } from "react-router-dom";
import { Zap } from "lucide-react";

const socials = ["FB", "IG", "IN"];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-signal/15 text-signal">
                <Zap size={16} strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-semibold">
                IT<span className="text-signal">TECH</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Engineering resilient web, mobile, and AI systems for
              businesses that refuse to stand still.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-line font-mono text-[10px] font-medium text-mute transition-colors hover:border-signal hover:text-signal"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li><NavLink to="/" className="hover:text-paper">Home</NavLink></li>
              <li><NavLink to="/products" className="hover:text-paper">Products</NavLink></li>
              <li><NavLink to="/services" className="hover:text-paper">Services</NavLink></li>
              <li><NavLink to="/case-studies" className="hover:text-paper">Case Studies</NavLink></li>
              <li><NavLink to="/about" className="hover:text-paper">About</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI &amp; Machine Learning</li>
              <li>Cybersecurity</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li>hello@ittech.com</li>
              <li>+94 76 000 0000</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-mute md:flex-row">
          <p>© {new Date().getFullYear()} IT Tech. All systems operational.</p>
          <p className="font-mono">Built with React · Vite · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
