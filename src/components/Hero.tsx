"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ── floating data-viz nodes ─────────────────────────────────── */
const nodes = [
  { x: 80, y: 100, r: 3 },
  { x: 200, y: 60, r: 4 },
  { x: 320, y: 130, r: 2.5 },
  { x: 140, y: 230, r: 3.5 },
  { x: 360, y: 200, r: 3 },
  { x: 260, y: 310, r: 4.5 },
  { x: 420, y: 90, r: 2 },
  { x: 170, y: 370, r: 3 },
  { x: 340, y: 370, r: 2.5 },
  { x: 440, y: 270, r: 3.5 },
  { x: 50, y: 300, r: 2 },
  { x: 470, y: 180, r: 2.5 },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [2, 4], [3, 5],
  [4, 6], [5, 8], [4, 9], [1, 6], [7, 8],
  [3, 10], [6, 11], [9, 11], [5, 7], [10, 7],
];

/* stagger container */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="noise-overlay relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* animated grid + dot matrix */}
      <div className="animated-grid absolute inset-0" />
      <div className="dot-matrix absolute inset-0" />

      {/* floating network viz (right side) */}
      <svg
        viewBox="0 0 500 450"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] max-w-[600px] opacity-[0.18] hidden lg:block"
        aria-hidden="true"
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={`e${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--blue-muted)"
            strokeWidth="0.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.12, 0.45, 0.12] }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="var(--blue-electric)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.25, 0.85, 0.25],
              scale: [0.85, 1.25, 0.85],
            }}
            transition={{
              duration: 3.5 + i * 0.45,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: i * 0.18,
            }}
          />
        ))}
      </svg>

      {/* content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:pt-40 lg:pb-32"
      >
        <motion.p variants={fadeUp} className="label-uppercase mb-6">
          Data &middot; AI &middot; Automation
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white font-[family-name:var(--font-display)]"
        >
          <span className="gradient-text-shimmer">Intelligent</span>{" "}
          Infrastructure for Commercial Real Estate
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base sm:text-lg text-silver/80 leading-relaxed"
        >
          We design AI-powered workflows and precision data systems that help
          commercial real estate firms operate faster, smarter, and with
          greater confidence.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <a href="#services" className="btn-primary">
            Explore Our Services
          </a>
          <a href="#about" className="btn-ghost">
            See Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="label-uppercase text-[0.65rem] text-silver/50">Scroll</span>
        <div className="scroll-indicator text-silver/40">
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
}
