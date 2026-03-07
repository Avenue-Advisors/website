"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, BarChart3, Brain, Workflow } from "lucide-react";

const services = [
  {
    num: "01",
    Icon: Shield,
    title: "Data Governance",
    desc: "Establish robust frameworks for data quality, lineage tracking, and regulatory compliance across your entire portfolio.",
  },
  {
    num: "02",
    Icon: BarChart3,
    title: "Data Analysis & Reporting",
    desc: "Transform raw property data into actionable intelligence with custom dashboards and automated reporting pipelines.",
  },
  {
    num: "03",
    Icon: Brain,
    title: "AI Implementation",
    desc: "Deploy production-ready machine learning models for predictive analytics, valuation, and market intelligence.",
  },
  {
    num: "04",
    Icon: Workflow,
    title: "Agentic AI Workflows",
    desc: "Build autonomous AI systems that execute complex multi-step processes\u200A\u2014\u200Afrom data ingestion to decision support.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 sm:py-36 relative" aria-label="Services">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={item} className="label-uppercase mb-4">
            What We Build
          </motion.p>
          <motion.h2
            variants={item}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] max-w-2xl leading-tight"
          >
            Precision-Engineered Data Solutions
          </motion.h2>

          <motion.div
            variants={container}
            className="mt-14 grid gap-6 sm:grid-cols-2"
          >
            {services.map((s) => (
              <motion.div key={s.num} variants={item} className="glass-card group">
                <span className="block text-3xl sm:text-4xl font-bold text-navy-bright/40 font-[family-name:var(--font-mono)] mb-4 select-none">
                  {s.num}
                </span>
                <s.Icon
                  size={28}
                  className="text-blue-light mb-4 transition-colors duration-300 group-hover:text-blue-electric"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-white font-[family-name:var(--font-display)] mb-2">
                  {s.title}
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
