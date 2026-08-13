import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Signature element: a glowing PCB-style trace that draws itself down
 * the page as the visitor scrolls, with node dots marking each section.
 * Positioned as a fixed vertical accent on the left edge (desktop) /
 * hidden on small screens to keep mobile calm.
 */
export default function CircuitTrace() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
  const nodeYs = [120, 280, 520, 720];
  const nodeXs = [20, 8, 32, 20];
  const opacity0 = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
  const opacities = [opacity0, opacity1, opacity2, opacity3];

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-10 hidden h-full w-10 md:block"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M20 0 L20 120 L8 140 L8 260 L20 280 L20 500 L32 520 L32 700 L20 720 L20 1000"
          style={{ stroke: "var(--color-line)" }}
          strokeWidth="1"
          fill="none"
          opacity="0.25"
        />
        <motion.path
          d="M20 0 L20 120 L8 140 L8 260 L20 280 L20 500 L32 520 L32 700 L20 720 L20 1000"
          className="trace-line"
          style={{ pathLength }}
          pathLength={1}
        />
        {nodeYs.map((y, i) => (
          <motion.circle
            key={i}
            cx={nodeXs[i]}
            cy={y}
            r="3"
            className="node-dot"
            style={{ opacity: opacities[i] }}
          />
        ))}
      </svg>
    </div>
  );
}
