import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import Atmosphere from "../components/Atmosphere";
import Reveal from "../components/Reveal";

const infoItems = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Moratuwa, Sri Lanka", "Postcode: 10400"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+94 70 299 4459"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["edulifesolutionslanka@gmail.com", "mirobits.projects@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["24 x 7 Working"],
  },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <Atmosphere />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10 md:pl-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
            &gt;&gt; contact_us
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's build something
            <span className="text-gradient"> extraordinary</span>
          </h1>
          <p className="mt-5 max-w-lg text-paper/65">
            Ready to bring your vision to life? Connect with our team and
            we'll respond within one business day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.05}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-panel p-6 sm:p-8"
            >
              <h2 className="font-display text-xl font-semibold">
                Send Us a Message
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name *">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="input"
                  />
                </Field>
                <Field label="Email Address *">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className="input"
                  />
                </Field>
                <Field label="Company">
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="input"
                  />
                </Field>
                <Field label="Service Interest">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI & Machine Learning</option>
                    <option>Digital Marketing</option>
                    <option>Cybersecurity</option>
                    <option>Consulting</option>
                  </select>
                </Field>
                <Field label="Subject *" full>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="input"
                  />
                </Field>
                <Field label="Message *" full>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="input resize-none"
                  />
                </Field>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="glow-btn mt-7 w-full rounded-full bg-signal py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-paper"
              >
                Send Message
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-sm text-signal"
                >
                  <CheckCircle2 size={16} /> Message sent — we'll be in touch shortly.
                </motion.p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-line bg-panel/60 p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Get In Touch</h2>
              <p className="mt-2 text-sm text-paper/65">
                Choose your preferred way to reach us — we'll respond
                promptly, 24 x 7.
              </p>
              <div className="mt-7 flex flex-col gap-6">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal/12 text-signal">
                        <Icon size={17} />
                      </span>
                      <div>
                        <p className="font-medium text-paper">{item.title}</p>
                        {item.lines.map((l) => (
                          <p key={l} className="mt-0.5 text-sm text-paper/60">
                            {l}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, full }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-medium text-paper/70">{label}</span>
      {children}
    </label>
  );
}