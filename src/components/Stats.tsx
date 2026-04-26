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
  { end: 120, suffix: "+", label: "Web pages optimizadas" },
  { end: 4, suffix: "x", label: "Mas leads locales" },
  { end: 92, suffix: "%", label: "Clientes retienen estrategia" },
  { end: 30, suffix: "d", label: "Primeras mejoras SEO" },
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
      <span className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-[#0F2742] sm:text-6xl lg:text-7xl">
        {count}
        <span className="text-[#2F78C4]">{suffix}</span>
      </span>
      <span className="section-label mt-3 text-[#4F6680]">{label}</span>
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
    <section className="bg-[#DFEAF7] py-24 md:py-32" aria-label="Key statistics">

      <motion.div
        ref={ref}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="lux-container grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12"
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
