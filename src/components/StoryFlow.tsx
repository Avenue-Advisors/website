"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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

const chapterThemes = [
  {
    accent: "#2F78C4",
    accentSoft: "rgba(47,120,196,0.22)",
    backdropA: "#081B32",
    backdropB: "#12345D",
  },
  {
    accent: "#43A6FF",
    accentSoft: "rgba(67,166,255,0.24)",
    backdropA: "#071A2A",
    backdropB: "#0C4871",
  },
  {
    accent: "#7A95FF",
    accentSoft: "rgba(122,149,255,0.24)",
    backdropA: "#111A3A",
    backdropB: "#2D3E90",
  },
  {
    accent: "#27D4C6",
    accentSoft: "rgba(39,212,198,0.24)",
    backdropA: "#072B33",
    backdropB: "#11616D",
  },
] as const;

function PolygonStage({
  progress,
  activeChapter,
  language,
}: {
  progress: MotionValue<number>;
  activeChapter: number;
  language: "es" | "en";
}) {
  const theme = chapterThemes[activeChapter] ?? chapterThemes[0];
  const rotateOuter = useTransform(progress, [0, 1], [-12, 36]);
  const rotateInner = useTransform(progress, [0, 1], [22, -30]);
  const rotateOrbital = useTransform(progress, [0, 1], [0, 220]);
  const yLift = useTransform(progress, [0, 1], [65, -92]);
  const scalePulse = useTransform(progress, [0, 0.5, 1], [0.9, 1.18, 0.94]);
  const glow = useTransform(progress, [0, 0.5, 1], [0.24, 0.74, 0.38]);
  const pathLength = useTransform(progress, [0.1, 0.9], [0, 1]);
  const spin = useTransform(progress, [0, 1], [0, 210]);
  const chapterTitle =
    language === "es"
      ? ["Descubrimiento", "Sistema", "Escala", "Resultados"][activeChapter] ?? "Descubrimiento"
      : ["Discovery", "System", "Scale", "Results"][activeChapter] ?? "Discovery";

  return (
    <div
      className="relative h-full w-full overflow-hidden border border-white/20 shadow-[0_28px_80px_rgba(8,20,42,0.38)]"
      style={{
        background: `linear-gradient(135deg, ${theme.backdropA} 0%, ${theme.backdropB} 100%)`,
      }}
    >
      <motion.div
        className="absolute -left-[15%] -top-[20%] h-[72%] w-[72%] blur-3xl"
        style={{
          rotate: spin,
          opacity: glow,
          background: `conic-gradient(from 0deg, ${theme.accentSoft}, transparent 45%, ${theme.accentSoft}, transparent 75%, ${theme.accentSoft})`,
        }}
      />
      <motion.div
        className="absolute -bottom-[25%] -right-[15%] h-[66%] w-[66%] rounded-full blur-[84px]"
        style={{
          scale: scalePulse,
          opacity: glow,
          background: theme.accentSoft,
        }}
      />

      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 border border-white/35"
        style={{
          clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
          rotate: rotateOuter,
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2"
        style={{
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          background: theme.accentSoft,
          rotate: rotateInner,
          y: yLift,
          scale: scalePulse,
          opacity: glow,
        }}
      />
      <motion.div
        className="absolute left-[8%] top-[12%] h-28 w-28 border border-white/50"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          rotate: rotateOrbital,
        }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[10%] h-40 w-40 border border-white/40"
        style={{
          clipPath: "polygon(0% 20%, 60% 0%, 100% 35%, 85% 100%, 25% 85%)",
          rotate: rotateOrbital,
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 1000" aria-hidden="true">
        <defs>
          <linearGradient id="chapter-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={theme.accent} />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <motion.path
          d="M90 790 L250 640 L390 710 L540 540 L710 620 L900 390"
          fill="none"
          stroke="url(#chapter-line)"
          strokeWidth="9"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M140 520 L300 460 L460 360 L620 420 L790 320 L900 210"
          fill="none"
          stroke="rgba(255,255,255,0.78)"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>

      <motion.div
        className="absolute bottom-6 left-6 right-6 border-t border-white/25 pt-4"
        style={{ opacity: glow }}
      >
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/80">
          Avenue Advisors Live Engine / {chapterTitle}
        </p>
      </motion.div>
    </div>
  );
}

export default function StoryFlow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const chapters = chaptersByLanguage[language];
  const [activeChapter, setActiveChapter] = useState(0);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const raw = Math.floor(latest * chapters.length);
    const bounded = Math.max(0, Math.min(chapters.length - 1, raw));
    setActiveChapter(bounded);
  });

  const titleY = useTransform(scrollYProgress, [0, 0.22], [0, -70]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.3]);

  return (
    <section ref={rootRef} className="relative border-b border-[#0F2742]/15 pt-32 md:pt-36" aria-label="Narrative scroll experience">
      <div className="fixed left-0 right-0 top-[72px] z-[55] h-[2px] bg-[#0F2742]/10">
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: scrollYProgress,
            background: chapterThemes[activeChapter]?.accent ?? "#2F78C4",
          }}
        />
      </div>

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
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className={`group min-h-[80vh] border-t border-[#0F2742]/20 py-10 transition-opacity duration-700 md:min-h-[92vh] ${
                activeChapter === index ? "opacity-100" : "opacity-50"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#4F6680]">{chapter.label}</p>
              <h2
                className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-tight text-[#0F2742] sm:text-5xl md:text-6xl"
                style={{ color: activeChapter === index ? chapterThemes[index]?.accent : undefined }}
              >
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
            <PolygonStage progress={scrollYProgress} activeChapter={activeChapter} language={language} />
          </div>
          <div className="mt-3 h-[50vh] lg:hidden">
            <PolygonStage progress={scrollYProgress} activeChapter={activeChapter} language={language} />
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
