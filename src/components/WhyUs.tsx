"use client";

import { Handshake, Brush, MapPinned, Gauge } from "lucide-react";

const points = [
  {
    Icon: Handshake,
    title: "Estrategia aterrizada a tu negocio",
    desc: "No usamos plantillas genericas. Investigamos tu cliente real, tu competencia local y tu ciclo de ventas.",
  },
  {
    Icon: Brush,
    title: "Diseno premium, ejecucion simple",
    desc: "Tu marca se ve impecable en web, redes y anuncios sin perder claridad para vender y escalar.",
  },
  {
    Icon: MapPinned,
    title: "Enfoque Puerto Rico",
    desc: "Entendemos comportamiento local, lenguaje y geografia comercial para optimizar presencia por zona.",
  },
  {
    Icon: Gauge,
    title: "Resultados medibles cada mes",
    desc: "Tableros simples de rendimiento para saber que canal trae clientes y donde invertir el proximo dolar.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-[#1A1A1A] py-24 text-[#F9F8F6] md:py-32" aria-label="Why us">
      <div className="lux-container grid gap-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 md:col-start-2">
          <p className="section-label text-[#EBE5DE]/70">Por que nosotros</p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
            Menos ruido,
            <br />
            mas <span className="italic text-[#D4AF37]">claridad</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#EBE5DE]/80 md:text-lg">
            Tu equipo necesita una presencia digital que inspire confianza y
            convierta. Disenamos esa experiencia completa, de la primera visita
            al cierre.
          </p>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          {points.map((p, i) => (
            <article
              key={p.title}
              className={`group flex gap-5 py-7 transition-[padding] duration-500 ease-out ${
                i !== points.length - 1 ? "border-b border-[#EBE5DE]/20" : ""
              }`}
            >
              <div className="mt-1 shrink-0">
                <p.Icon size={22} className="text-[#EBE5DE]/80 transition-colors duration-500 group-hover:text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-1 font-[family-name:var(--font-display)] text-2xl leading-tight text-[#F9F8F6] transition-colors duration-500 group-hover:text-[#D4AF37]">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-[#EBE5DE]/75">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
