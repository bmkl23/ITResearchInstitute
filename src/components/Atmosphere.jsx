import { motion } from "framer-motion";

/**
 * Ambient background: faint grid + two slow-pulsing ember glows.
 * Absolutely positioned, sits behind section content.
 */
export default function Atmosphere({ variant = "default" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <motion.div
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-signal/25 blur-[120px]"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-ember/20 blur-[110px]"
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      {variant === "dense" && (
        <motion.div
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/15 blur-[100px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
