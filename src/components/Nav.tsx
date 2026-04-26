"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const linksByLanguage = {
  es: [
    { label: "Historia", href: "#chapter-01" },
    { label: "Sistema", href: "#chapter-02" },
    { label: "Resultados", href: "#chapter-04" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Story", href: "#chapter-01" },
    { label: "System", href: "#chapter-02" },
    { label: "Results", href: "#chapter-04" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = linksByLanguage[language];

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
      <nav
        className={`fixed top-0 inset-x-0 z-[60] border-b border-[#0F2742]/15 transition-colors duration-500 ${
          scrolled
            ? "bg-[#F4F8FF]/95"
            : "bg-[#F4F8FF]/80"
        } backdrop-blur-xl`}
        aria-label="Main navigation"
      >
        <div className="lux-container flex h-18 items-center justify-between">
          <a href="#" className="relative shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-full.svg"
              alt="Avenue Advisors"
              width={250}
              height={28}
              className="hidden md:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-short.svg"
              alt="Avenue Advisors"
              width={70}
              height={28}
              className="md:hidden"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-[#0F2742]/80 transition-colors duration-500 hover:text-[#2F78C4]"
              >
                {l.label}
              </a>
            ))}
            <div className="inline-flex items-center border border-[#0F2742]/20 text-[10px] uppercase tracking-[0.18em]">
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-2 transition-colors duration-300 ${
                  language === "es" ? "bg-[#0F2742] text-[#F4F8FF]" : "text-[#0F2742]/75"
                }`}
                aria-label="Cambiar a espanol"
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2 transition-colors duration-300 ${
                  language === "en" ? "bg-[#0F2742] text-[#F4F8FF]" : "text-[#0F2742]/75"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
            <a
              href={`mailto:diego.ruiz@avenueadvisors.ai?subject=${
                language === "es" ? "Consulta%20Inicial" : "Initial%20Consultation"
              }`}
              className="btn-secondary-lux inline-flex items-center"
            >
              {language === "es" ? "Consulta gratis" : "Free consultation"}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-[70] md:hidden text-[#0F2742]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[65] flex flex-col items-center justify-center gap-7 bg-[#F4F8FF] md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-display)] text-4xl text-[#0F2742] transition-colors duration-500 hover:text-[#2F78C4]"
            >
              {l.label}
            </a>
          ))}
          <div className="inline-flex items-center border border-[#0F2742]/20 text-xs uppercase tracking-[0.18em]">
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-2 ${language === "es" ? "bg-[#0F2742] text-[#F4F8FF]" : "text-[#0F2742]/75"}`}
              aria-label="Cambiar a espanol"
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 ${language === "en" ? "bg-[#0F2742] text-[#F4F8FF]" : "text-[#0F2742]/75"}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
          <a
            href={`mailto:diego.ruiz@avenueadvisors.ai?subject=${
              language === "es" ? "Consulta%20Inicial" : "Initial%20Consultation"
            }`}
            onClick={() => setOpen(false)}
            className="btn-primary-lux mt-3"
          >
            <span className="btn-primary-fill" />
            <span className="btn-primary-content">
              {language === "es" ? "Reserva consulta" : "Book a free consultation"}
            </span>
          </a>
        </div>
      )}
    </>
  );
}
