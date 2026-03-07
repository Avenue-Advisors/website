"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

/* ── testimonial data ──────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "We had reporting processes that took our team two full weeks every quarter. Avenue rebuilt our entire data pipeline and automated the workflows end to end — we now close the books in under two days. Genuinely transformative.",
    role: "VP of Asset Management",
    org: "Multifamily Owner-Operator · 12,000+ Units",
    metric: "85% reduction in reporting cycle time",
  },
  {
    quote:
      "Most consultants we talked to tried to sell us generic dashboards. Avenue actually understood our deal structure, our LP reporting requirements, and the nuances of our data. They built something custom that our analysts use every single day.",
    role: "Managing Director, Portfolio Analytics",
    org: "Institutional Investment Manager · $4B+ AUM",
    metric: "Adopted by 100% of the analytics team",
  },
  {
    quote:
      "The agentic workflows Avenue deployed have fundamentally changed how we operate. Lease abstractions that used to require a paralegal now run autonomously with human-in-the-loop review. We reallocated three FTEs to higher-value work.",
    role: "Chief Operating Officer",
    org: "National Office & Industrial Platform",
    metric: "3 FTEs redeployed to strategic initiatives",
  },
  {
    quote:
      "What impressed me most was the speed and rigor. Avenue scoped our data governance framework in two weeks, implemented it in six, and we passed our next LP audit without a single finding. They don’t over-promise — they over-deliver.",
    role: "Director of Fund Operations",
    org: "Private Equity Real Estate Fund · Fund III",
    metric: "Zero audit findings post-implementation",
  },
  {
    quote:
      "Our property managers were drowning in manual data entry across four different systems. Avenue consolidated everything into one source of truth with real-time syncing. Errors dropped to near zero and our NOI forecasts are actually reliable now.",
    role: "SVP of Property Operations",
    org: "Mixed-Use Developer & Operator · 30+ Properties",
    metric: "98% reduction in data entry errors",
  },
];

/* ── animation variants ──────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" as const },
  },
};

/* ── component ───────────────────────────────────────────── */
export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* subtle background texture */}
      <div
        className="dot-matrix absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.p variants={fadeUp} className="label-uppercase mb-4">
            Client Impact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-display)]"
          >
            Trusted by CRE operators
            <br className="hidden sm:block" />
            &nbsp;who demand{" "}
            <span className="gradient-text">results</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-silver/60 max-w-xl mx-auto leading-relaxed"
          >
            We let our work speak. Here&rsquo;s what leadership teams say after
            partnering with Avenue&nbsp;Advisors.
          </motion.p>
        </motion.div>

        {/* testimonial grid — masonry layout */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="break-inside-avoid glass-card group relative"
            >
              {/* quote icon */}
              <Quote
                size={20}
                className="text-blue-electric/30 mb-4 shrink-0"
                strokeWidth={1.5}
              />

              {/* quote text */}
              <blockquote className="text-[0.92rem] text-silver/80 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* metric badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-electric/[0.07] border border-blue-electric/[0.12] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-electric animate-pulse" />
                <span className="text-xs font-medium text-blue-light font-[family-name:var(--font-mono)] tracking-wide">
                  {t.metric}
                </span>
              </div>

              {/* attribution */}
              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-sm font-medium text-white font-[family-name:var(--font-display)]">
                  {t.role}
                </p>
                <p className="text-xs text-silver/45 mt-0.5">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
