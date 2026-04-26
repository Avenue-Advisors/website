"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Sectores", href: "#industries" },
  { label: "Contacto", href: "#contact" },
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
      <nav
        className={`fixed top-0 inset-x-0 z-[60] border-b border-[#1A1A1A]/15 transition-colors duration-500 ${
          scrolled
            ? "bg-[#F9F8F6]/95"
            : "bg-[#F9F8F6]/80"
        } backdrop-blur-xl`}
        aria-label="Main navigation"
      >
        <div className="lux-container flex h-18 items-center justify-between">
          <a href="#" className="flex items-end gap-3">
            <span className="font-[family-name:var(--font-display)] text-2xl leading-none tracking-tight text-[#1A1A1A]">
              Isla Presencia
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.28em] text-[#6C6863] md:block">
              Puerto Rico
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/80 transition-colors duration-500 hover:text-[#D4AF37]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:hola@islapresencia.com?subject=Consulta%20Inicial"
              className="btn-secondary-lux inline-flex items-center"
            >
              Consulta gratis
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-[70] md:hidden text-[#1A1A1A]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[65] flex flex-col items-center justify-center gap-7 bg-[#F9F8F6] md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-display)] text-4xl text-[#1A1A1A] transition-colors duration-500 hover:text-[#D4AF37]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hola@islapresencia.com?subject=Consulta%20Inicial"
            onClick={() => setOpen(false)}
            className="btn-primary-lux mt-3"
          >
            <span className="btn-primary-fill" />
            <span className="btn-primary-content">Book a free consultation</span>
          </a>
        </div>
      )}
    </>
  );
}
