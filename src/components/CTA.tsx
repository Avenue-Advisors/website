"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function CTA() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="bg-[#0F2742] py-24 text-[#F4F8FF] md:py-32" aria-label="Call to action">
      <div className="lux-container grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6 md:col-start-2">
          <p className="section-label text-[#DFEAF7]/70">{language === "es" ? "Contacto" : "Contact"}</p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            {language === "es" ? "Llevemos tu negocio" : "Let us move your business"}
            <br />
            {language === "es" ? "al siguiente " : "to the next "}
            <span className="italic text-[#2F78C4]">{language === "es" ? "nivel" : "level"}</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#DFEAF7]/80 md:text-lg">
            {language === "es"
              ? "Agenda una consultoria inicial para definir tu plan de presencia digital en web, SEO local y canales de venta."
              : "Book an initial strategy call to define your growth plan across website, local SEO, and conversion channels."}
          </p>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[#DFEAF7]/60">
            diego.ruiz@avenueadvisors.ai · +1 (787) 555-0186 · Puerto Rico
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-8">
          <form className="border-t border-[#DFEAF7]/35 pt-7">
            <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-[#DFEAF7]/65">
              {language === "es" ? "Nombre" : "Name"}
            </label>
            <input type="text" className="editorial-input" placeholder={language === "es" ? "Tu nombre" : "Your name"} />

            <label className="mb-2 mt-7 block text-[10px] uppercase tracking-[0.25em] text-[#DFEAF7]/65">
              Email
            </label>
            <input type="email" className="editorial-input" placeholder="tu@empresa.com" />

            <label className="mb-2 mt-7 block text-[10px] uppercase tracking-[0.25em] text-[#DFEAF7]/65">
              {language === "es" ? "Necesidad principal" : "Main need"}
            </label>
            <input
              type="text"
              className="editorial-input"
              placeholder={language === "es" ? "Website, SEO local, omnicanal" : "Website, local SEO, omnichannel"}
            />

            <a
              href={`mailto:diego.ruiz@avenueadvisors.ai?subject=${
                language === "es" ? "Consulta%20Inicial" : "Book%20a%20free%20consultation"
              }`}
              className="btn-primary-lux mt-10 w-full"
            >
              <span className="btn-primary-fill" />
              <span className="btn-primary-content">
                {language === "es" ? "Reserva consulta" : "Book a free consultation"}
              </span>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
