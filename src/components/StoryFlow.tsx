"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const chaptersByLanguage = {
  es: [
    {
      id: "chapter-01",
      label: "01 / Descubrimiento",
      title: "Tu marca no necesita otra pagina. Necesita momentum.",
      body: "Disenamos una presencia digital que convierte atencion en intencion, y en intencion de compra. Cada pixel responde a una meta comercial.",
      accent: "Auditoria de marca, posicionamiento y propuesta de valor.",
    },
    {
      id: "chapter-02",
      label: "02 / Sistema",
      title: "Web, SEO y canales: un solo sistema, no piezas sueltas.",
      body: "Construimos un ecosistema conectado para que tu mensaje, tus ofertas y tu experiencia sean consistentes en todos los puntos de contacto.",
      accent: "Arquitectura omnicanal con rutas claras de conversion.",
    },
    {
      id: "chapter-03",
      label: "03 / Escala",
      title: "Cada scroll cuenta una historia. Cada historia produce accion.",
      body: "Ajustamos contenido, velocidad, claridad y embudo para que cada visita avance un paso mas cerca de la decision.",
      accent: "Optimizacion continua basada en comportamiento real.",
    },
    {
      id: "chapter-04",
      label: "04 / Resultados",
      title: "Presencia premium. Crecimiento medible.",
      body: "Tu negocio se ve mejor, se encuentra mas facil y convierte mas rapido. Eso es diseno con impacto real.",
      accent: "Reportes claros con KPIs que importan al negocio.",
    },
  ],
  en: [
    {
      id: "chapter-01",
      label: "01 / Discovery",
      title: "Your brand does not need another website. It needs momentum.",
      body: "We design a digital presence that turns attention into intent, and intent into revenue. Every pixel supports a business outcome.",
      accent: "Brand audit, positioning, and value proposition.",
    },
    {
      id: "chapter-02",
      label: "02 / System",
      title: "Website, SEO, and channels: one system, not disconnected parts.",
      body: "We build a connected ecosystem so your message, offers, and customer experience stay consistent across every touchpoint.",
      accent: "Omnichannel architecture with clear conversion paths.",
    },
    {
      id: "chapter-03",
      label: "03 / Scale",
      title: "Every scroll tells a story. Every story creates action.",
      body: "We refine content, speed, clarity, and funnel design so each visitor moves one step closer to a decision.",
      accent: "Continuous optimization based on real user behavior.",
    },
    {
      id: "chapter-04",
      label: "04 / Results",
      title: "Premium presence. Measurable growth.",
      body: "Your business looks stronger, ranks higher, and converts faster. That is what high-performance design should do.",
      accent: "Clear reporting with KPIs that matter.",
    },
  ],
} as const;

function PolygonStage({ progress }: { progress: MotionValue<number> }) {
  const rotateOuter = useTransform(progress, [0, 1], [-8, 22]);
  const rotateInner = useTransform(progress, [0, 1], [14, -18]);
  const yLift = useTransform(progress, [0, 1], [50, -70]);
  const glow = useTransform(progress, [0, 0.5, 1], [0.25, 0.55, 0.3]);
  const pathLength = useTransform(progress, [0.1, 0.9], [0, 1]);

  return (
    <div className="relative h-full w-full overflow-hidden border border-[#0F2742]/20 bg-gradient-to-br from-[#F4F8FF] via-[#DFEAF7] to-[#CCDDF4] shadow-[0_18px_48px_rgba(15,39,66,0.14)]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 border border-[#0F2742]/25"
        style={{
          clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
          rotate: rotateOuter,
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 bg-[#2F78C4]/20"
        style={{
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          rotate: rotateInner,
          y: yLift,
          opacity: glow,
        }}
      />
      <motion.div
        className="absolute left-[12%] top-[16%] h-28 w-28 border border-[#2F78C4]/45"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          rotate: rotateInner,
        }}
      />
      <motion.div
        className="absolute bottom-[14%] right-[14%] h-36 w-36 border border-[#0F2742]/25"
        style={{
          clipPath: "polygon(0% 20%, 60% 0%, 100% 35%, 85% 100%, 25% 85%)",
          rotate: rotateOuter,
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 1000" aria-hidden="true">
        <motion.path
          d="M110 760 L260 650 L410 700 L540 560 L690 590 L860 440"
          fill="none"
          stroke="#2F78C4"
          strokeWidth="8"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M140 490 L280 470 L430 390 L580 430 L740 360 L860 260"
          fill="none"
          stroke="#0F2742"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>

      <motion.div
        className="absolute bottom-6 left-6 right-6 border-t border-[#0F2742]/15 pt-4"
        style={{ opacity: glow }}
      >
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#4F6680]">
          Avenue Advisors Scroll Engine / Narrative Canvas
        </p>
      </motion.div>
    </div>
  );
}

export default function StoryFlow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const chapters = chaptersByLanguage[language];
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.22], [0, -70]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.3]);

  return (
    <section ref={rootRef} className="relative border-b border-[#0F2742]/15 pt-32 md:pt-36" aria-label="Narrative scroll experience">
      <div className="lux-container pb-14">
        <motion.p style={{ y: titleY, opacity: titleOpacity }} className="section-label mb-4">
          {language === "es" ? "Avenue Advisors / Historia en Scroll" : "Avenue Advisors / Scroll Story"}
        </motion.p>
        <motion.h1
          style={{ y: titleY, opacity: titleOpacity }}
          className="max-w-5xl font-[family-name:var(--font-display)] text-5xl leading-[0.9] tracking-tight text-[#0F2742] sm:text-6xl md:text-8xl"
        >
          {language === "es" ? "Una experiencia que demuestra" : "An experience that proves"}
          <br />
          <span className="italic text-[#2F78C4]">
            {language === "es" ? "como pensamos, disenamos y ejecutamos" : "how we think, design, and execute"}
          </span>
        </motion.h1>
      </div>

      <div className="lux-container grid gap-12 pb-24 lg:grid-cols-12 lg:gap-10 lg:pb-32">
        <div className="space-y-8 lg:col-span-6">
          {chapters.map((chapter) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="group min-h-[80vh] border-t border-[#0F2742]/20 py-10 md:min-h-[92vh]"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#4F6680]">{chapter.label}</p>
              <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-tight text-[#0F2742] sm:text-5xl md:text-6xl">
                {chapter.title}
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#4F6680] md:text-lg">{chapter.body}</p>
              <p className="mt-8 inline-block border border-[#2F78C4]/35 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#2F78C4]">
                {chapter.accent}
              </p>
            </article>
          ))}
        </div>

        <div className="lg:col-span-6">
          <div className="sticky top-24 hidden h-[72vh] lg:block">
            <PolygonStage progress={scrollYProgress} />
          </div>
          <div className="mt-3 h-[50vh] lg:hidden">
            <PolygonStage progress={scrollYProgress} />
          </div>
        </div>
      </div>

      <div className="lux-container pb-24 md:pb-28">
        <div className="edge-line mb-8" />
        <div className="flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn-primary-lux">
            <span className="btn-primary-fill" />
            <span className="btn-primary-content">
              {language === "es" ? "Reserva consulta" : "Book a free consultation"}
            </span>
          </a>
          <a href="#chapter-02" className="btn-secondary-lux inline-flex items-center justify-center">
            {language === "es" ? "Ver sistema" : "See the system"}
          </a>
        </div>
      </div>
    </section>
  );
}
