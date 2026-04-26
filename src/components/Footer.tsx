"use client";

import { useLanguage } from "@/components/LanguageProvider";

const columnsByLanguage = {
  es: {
    services: [
      { label: "Diseno web", href: "#chapter-01" },
      { label: "SEO local", href: "#chapter-02" },
      { label: "Omnichannel", href: "#chapter-03" },
      { label: "Analitica", href: "#chapter-04" },
    ],
    company: [
      { label: "Historia", href: "#chapter-01" },
      { label: "Sistema", href: "#chapter-02" },
      { label: "Resultados", href: "#chapter-04" },
    ],
    connect: [
      { label: "Contacto", href: "#contact" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
  en: {
    services: [
      { label: "Web design", href: "#chapter-01" },
      { label: "Local SEO", href: "#chapter-02" },
      { label: "Omnichannel", href: "#chapter-03" },
      { label: "Analytics", href: "#chapter-04" },
    ],
    company: [
      { label: "Story", href: "#chapter-01" },
      { label: "System", href: "#chapter-02" },
      { label: "Results", href: "#chapter-04" },
    ],
    connect: [
      { label: "Contact", href: "#contact" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
} as const;

export default function Footer() {
  const { language } = useLanguage();
  const columns = columnsByLanguage[language];

  return (
    <footer className="relative bg-[#F4F8FF] pb-10 pt-20" aria-label="Site footer">
      <div className="edge-line mb-16" />

      <div className="lux-container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-full.svg"
              alt="Avenue Advisors"
              width={250}
              height={28}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#4F6680]">
              {language === "es"
                ? "Websites, SEO y presencia digital para PyMEs en Puerto Rico."
                : "Websites, SEO, and digital presence for SMBs in Puerto Rico."}
            </p>
          </div>

          <div>
            <h4 className="section-label mb-4">{language === "es" ? "Servicios" : "Services"}</h4>
            <ul className="space-y-2.5">
              {columns.services.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#4F6680] transition-colors duration-500 hover:text-[#2F78C4]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">{language === "es" ? "Empresa" : "Company"}</h4>
            <ul className="space-y-2.5">
              {columns.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#4F6680] transition-colors duration-500 hover:text-[#2F78C4]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">{language === "es" ? "Conecta" : "Connect"}</h4>
            <ul className="space-y-2.5">
              {columns.connect.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#4F6680] transition-colors duration-500 hover:text-[#2F78C4]"
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="edge-line mb-6 mt-16" />
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#4F6680]">
          &copy; 2026 Avenue Advisors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
