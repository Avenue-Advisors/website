"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, ShoppingBag, Home, Factory, LayoutGrid } from "lucide-react";

const industries = [
  {
    Icon: Building2,
    title: "Office",
    desc: "Lease optimization, tenant analytics, and space utilization intelligence.",
  },
  {
    Icon: ShoppingBag,
    title: "Retail",
    desc: "Foot traffic analysis, tenant mix optimization, and revenue forecasting.",
  },
  {
    Icon: Home,
    title: "Multifamily",
    desc: "Resident lifecycle management, rent optimization, and maintenance prediction.",
  },
  {
    Icon: Factory,
    title: "Industrial",
    desc: "Supply chain proximity analysis, warehouse optimization, and IoT integration.",
  },
  {
    Icon: LayoutGrid,
    title: "Mixed-Use",
    desc: "Cross-asset analytics, unified reporting, and portfolio-wide intelligence.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-28 sm:py-36 relative" aria-label="Industries we serve">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={fadeUp} className="label-uppercase mb-4">
            Our Focus
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] max-w-xl leading-tight"
          >
            Built for Commercial Real&nbsp;Estate
          </motion.h2>

          <motion.div
            variants={container}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.title}
                variants={fadeUp}
                className="glass-card group cursor-default text-center flex flex-col items-center"
              >
                <ind.Icon
                  size={30}
                  className="text-blue-light mb-4 transition-colors duration-300 group-hover:text-blue-electric"
                  strokeWidth={1.5}
                />
                <h3 className="text-base font-semibold text-white font-[family-name:var(--font-display)] mb-1">
                  {ind.title}
                </h3>
                <p className="text-sm text-silver/60 leading-relaxed mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
