"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our quarterly close used to take two weeks. Avenue rebuilt the pipeline and got it down to two days. My team actually has time for real work now.",
    role: "VP of Asset Management",
    org: "Multifamily Owner-Operator \u00b7 12,000+ Units",
    metric: "85% faster reporting cycles",
  },
  {
    quote:
      "Every other firm pitched us cookie-cutter dashboards. Avenue actually sat down and learned how we report to our LPs. The tool they built is the only one my analysts open every morning.",
    role: "Managing Director, Portfolio Analytics",
    org: "Institutional Investment Manager \u00b7 $4B+ AUM",
    metric: "100% analyst adoption",
  },
  {
    quote:
      "We had a paralegal spending days on lease abstractions. Avenue automated the whole thing with a review step baked in. Freed up three people for higher-impact projects.",
    role: "Chief Operating Officer",
    org: "National Office & Industrial Platform",
    metric: "3 FTEs redeployed to strategy",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" as const },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cards = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-label="Client testimonials"
    >
      <div
        className="dot-matrix absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14 sm:mb-18"
        >
          <motion.p variants={fadeUp} className="label-uppercase mb-4">
            Client Impact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-display)]"
          >
            Trusted by CRE operators who demand{" "}
            <span className="gradient-text">results</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-[var(--navy-deep)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-[var(--navy-deep)] to-transparent" />

            <div className="overflow-hidden">
              <div className="testimonial-track flex gap-5">
                {cards.map((t, i) => (
                  <div
                    key={i}
                    className="glass-card shrink-0 w-[85vw] sm:w-[420px] flex flex-col hover:!transform-none"
                  >
                    <Quote
                      size={18}
                      className="text-blue-electric/30 mb-3 shrink-0"
                      strokeWidth={1.5}
                    />
                    <blockquote className="text-[0.9rem] text-silver/80 leading-relaxed mb-4 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-electric/[0.07] border border-blue-electric/[0.12] mb-4 self-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-electric animate-pulse" />
                      <span className="text-xs font-medium text-blue-light font-[family-name:var(--font-mono)] tracking-wide">
                        {t.metric}
                      </span>
                    </div>

                    <div className="border-t border-white/[0.06] pt-3">
                      <p className="text-sm font-medium text-white font-[family-name:var(--font-display)]">
                        {t.role}
                      </p>
                      <p className="text-xs text-silver/45 mt-0.5">{t.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
