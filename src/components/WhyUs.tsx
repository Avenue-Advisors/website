"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Layers, Bot, TrendingUp } from "lucide-react";

const points = [
  {
    Icon: Building2,
    title: "CRE-Native Expertise",
    desc: "Deep understanding of commercial real estate data structures, workflows, and regulatory requirements.",
  },
  {
    Icon: Layers,
    title: "End-to-End Delivery",
    desc: "From strategy through implementation\u200A\u2014\u200Awe build, deploy, and optimize your data infrastructure.",
  },
  {
    Icon: Bot,
    title: "Agentic-First Architecture",
    desc: "Every solution is designed for autonomous operation\u200A\u2014\u200Areducing manual intervention by design.",
  },
  {
    Icon: TrendingUp,
    title: "Measurable Impact",
    desc: "We track ROI from day one. Every system we build has clear, quantifiable performance metrics.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" as const },
  },
};

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-label="Why Avenue Advisors"
    >
      {/* decorative background */}
      <div className="diagonal-lines absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 lg:gap-24 items-start"
      >
        {/* Left — statement */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={fadeUp} className="label-uppercase mb-4">
            Why Avenue
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-display)]"
          >
            Built for the complexity of commercial&nbsp;real&nbsp;estate
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-silver/70 leading-relaxed max-w-md"
          >
            We don&rsquo;t adapt generic tools to CRE. We engineer purpose-built
            data systems that reflect the nuances of your asset class, your
            markets, and your operations.
          </motion.p>
        </motion.div>

        {/* Right — differentiators */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className={`flex gap-5 py-7 ${
                i !== points.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <div className="shrink-0 mt-1">
                <p.Icon size={22} className="text-blue-light" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white font-[family-name:var(--font-display)] mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-silver/65 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
