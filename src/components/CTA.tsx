"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: "easeOut" as const },
  },
};

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative py-32 sm:py-44 overflow-hidden"
      aria-label="Call to action"
    >
      {/* animated gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, var(--navy-darkest) 0%, var(--navy-base) 40%, var(--navy-mid) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 12s ease infinite",
        }}
        aria-hidden="true"
      />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] leading-tight"
        >
          Ready to transform how your firm&nbsp;operates?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 text-silver/70 text-base sm:text-lg leading-relaxed"
        >
          Schedule a discovery call to explore how intelligent automation can
          elevate your operations.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10">
          <a href="mailto:diego.ruiz@avenueadvisors.ai?subject=Consultation%20Request" className="btn-primary glow-pulse text-base px-8 py-4">
            Schedule a Consultation
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
