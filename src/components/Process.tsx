"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Assess",
    desc: "Deep-dive analysis of your current data ecosystem, workflows, and technology stack.",
  },
  {
    num: "02",
    title: "Architect",
    desc: "Design a tailored solution architecture with clear milestones and measurable outcomes.",
  },
  {
    num: "03",
    title: "Automate",
    desc: "Deploy intelligent automation that scales with your portfolio and evolves with your needs.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: "easeOut" as const },
  },
};

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 sm:py-36 relative" aria-label="Our process">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={fadeUp} className="label-uppercase mb-4">
            How We Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] max-w-xl leading-tight"
          >
            From insight to automation
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-3 md:gap-0"
        >
          {steps.map((s, i) => (
            <motion.div key={s.num} variants={fadeUp} className="relative flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-6">
              {/* connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-navy-bright to-blue-muted/40"
                  aria-hidden="true"
                />
              )}
              {/* connecting line (mobile) */}
              {i < steps.length - 1 && (
                <div
                  className="md:hidden absolute left-[18px] top-[52px] w-px h-[calc(100%-20px)] bg-gradient-to-b from-navy-bright to-blue-muted/20"
                  aria-hidden="true"
                />
              )}

              {/* number circle */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border border-navy-bright/60 bg-navy-deep mb-5 font-[family-name:var(--font-mono)] text-lg font-semibold text-blue-ice">
                {s.num}
              </div>

              <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)] mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-silver/65 leading-relaxed max-w-xs">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
