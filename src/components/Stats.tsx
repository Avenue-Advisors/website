"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/* ── count-up hook ───────────────────────────────────────────── */
function useCountUp(target: number, duration: number, trigger: boolean) {
  const [value, setValue] = useState(0);

  const run = useCallback(() => {
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);          // ease-out cubic
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (trigger) run();
  }, [trigger, run]);

  return value;
}

/* ── stats data ──────────────────────────────────────────────── */
const stats = [
  { end: 40, suffix: "+", label: "Workflows Automated" },
  { end: 10, suffix: "x", label: "Faster Reporting" },
  { end: 100, suffix: "%", label: "Custom Solutions" },
  { end: 24, suffix: "/7", label: "Autonomous Operation" },
];

/* ── individual stat cell ────────────────────────────────────── */
function StatCell({ end, suffix, label, trigger }: {
  end: number;
  suffix: string;
  label: string;
  trigger: boolean;
}) {
  const count = useCountUp(end, 1.8, trigger);
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
        {count}
        <span className="text-blue-electric">{suffix}</span>
      </span>
      <span className="mt-3 label-uppercase text-silver/60">{label}</span>
    </div>
  );
}

/* ── section ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="noise-overlay relative py-28 sm:py-36 overflow-hidden"
      aria-label="Key statistics"
    >
      {/* soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(74,158,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        ref={ref}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-5xl px-6 grid grid-cols-2 md:grid-cols-4 gap-12"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp}>
            <StatCell end={s.end} suffix={s.suffix} label={s.label} trigger={inView} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
