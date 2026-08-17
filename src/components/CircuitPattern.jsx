/**
 * Decorative circuit-board pattern: a tiled SVG of traces and nodes,
 * used as a low-opacity background texture behind content sections.
 * Purely decorative — aria-hidden, non-interactive.
 */
export default function CircuitPattern({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full opacity-[0.16]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="220"
            height="220"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 0 V50 H70 V90 M70 90 H130 V40 H190 V0
                 M0 110 H40 V160 H100 V220
                 M130 220 V180 H180 V140 H220
                 M190 0 V-10"
              stroke="var(--color-circuit)"
              strokeWidth="1.8"
              fill="none"
            />
            <circle cx="10" cy="0" r="3.2" fill="var(--color-circuit)" />
            <circle cx="70" cy="50" r="3.2" fill="var(--color-circuit)" />
            <circle cx="70" cy="90" r="3.2" fill="var(--color-circuit)" />
            <circle cx="130" cy="90" r="3.2" fill="var(--color-circuit)" />
            <circle cx="190" cy="40" r="3.2" fill="var(--color-circuit)" />
            <circle cx="40" cy="110" r="3.2" fill="var(--color-circuit)" />
            <circle cx="40" cy="160" r="3.2" fill="var(--color-circuit)" />
            <circle cx="100" cy="160" r="3.2" fill="var(--color-circuit)" />
            <circle cx="130" cy="220" r="3.2" fill="var(--color-circuit)" />
            <circle cx="180" cy="180" r="3.2" fill="var(--color-circuit)" />
            <circle cx="180" cy="140" r="3.2" fill="var(--color-circuit)" />
          </pattern>
          <radialGradient id="circuit-fade" cx="50%" cy="45%" r="95%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0.25" />
          </radialGradient>
          <mask id="circuit-mask">
            <rect width="100%" height="100%" fill="url(#circuit-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#circuit-pattern)"
          mask="url(#circuit-mask)"
        />
      </svg>
    </div>
  );
}