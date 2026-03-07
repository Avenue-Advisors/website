"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-navy-deep/95 shadow-lg shadow-black/20"
            : "bg-navy-deep/60"
        } backdrop-blur-2xl border-b border-white/[0.04]`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="relative shrink-0">
            <img
              src="/logo-full.svg"
              alt="Avenue Advisors"
              width={250}
              height={28}
              className="hidden md:block"
            />
            <img
              src="/logo-short.svg"
              alt="Avenue Advisors"
              width={70}
              height={28}
              className="md:hidden"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-silver/80 hover:text-white transition-colors duration-200 font-[family-name:var(--font-body)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:diego.ruiz@avenueadvisors.ai?subject=Consultation%20Request"
              className="btn-ghost text-xs px-5 py-2.5"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-[60] md:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Full-screen mobile menu ─────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="fixed inset-0 z-[55] bg-navy-deep/[0.98] backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.06,
                  ease: "easeOut" as const,
                }}
                className="text-2xl text-white font-[family-name:var(--font-display)] hover:text-blue-light transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:diego.ruiz@avenueadvisors.ai?subject=Consultation%20Request"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
                delay: links.length * 0.06,
                ease: "easeOut" as const,
              }}
              className="btn-primary text-sm mt-4"
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
