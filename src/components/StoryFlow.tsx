"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
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

const scenes = [
  {
    primary: "M84 804 C154 782, 242 738, 306 694 C385 640, 448 590, 526 548 C610 502, 708 458, 816 390 C878 350, 926 308, 958 250",
  },
  {
    primary: "M82 804 C170 778, 238 742, 322 694 C396 652, 474 602, 548 546 C630 484, 706 426, 806 356 C872 308, 926 258, 964 196",
  },
  {
    primary: "M80 812 C176 792, 264 756, 356 700 C444 648, 522 586, 624 518 C716 456, 796 406, 866 346 C916 304, 950 254, 972 188",
  },
  {
    primary: "M74 818 C186 786, 286 742, 392 676 C494 612, 592 542, 690 468 C782 398, 854 326, 914 242 C940 206, 960 168, 978 126",
  },
] as const;

function LineStage({
  progress,
  activeChapter,
}: {
  progress: MotionValue<number>;
  activeChapter: number;
}) {
  const scene = scenes[activeChapter] ?? scenes[0];
  const frameShift = useTransform(progress, [0, 1], [0, -42]);
  const lowerFrameShift = useTransform(progress, [0, 1], [0, 32]);
  const lineLength = useTransform(progress, [0.05, 0.92], [0.02, 1]);
  const lineGlow = useTransform(progress, [0, 0.5, 1], [0.08, 0.22, 0.12]);
  const pulseOffset = useTransform(progress, [0, 1], [180, -260]);
  const stageScale = useTransform(progress, [0, 0.5, 1], [1.08, 1, 0.96]);
  const stageRotate = useTransform(progress, [0, 0.5, 1], [-5, 0, 4]);
  const frameOpacity = useTransform(progress, [0, 0.25, 1], [0.28, 0.52, 0.34]);

  return (
    <div className="relative h-full w-full overflow-hidden border border-[#0F2742]/10 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.96),rgba(236,243,250,0.98)_42%,rgba(223,233,244,1)_100%)] shadow-[0_28px_90px_rgba(15,39,66,0.08)]">
      <motion.div className="absolute inset-x-0 top-[14%] h-px bg-[#0F2742]/16" style={{ y: frameShift, opacity: frameOpacity }} />
      <motion.div className="absolute inset-x-0 bottom-[16%] h-px bg-[#0F2742]/14" style={{ y: lowerFrameShift, opacity: frameOpacity }} />
      <motion.div className="absolute left-[8%] top-[10%] bottom-[10%] w-px bg-[#0F2742]/10" style={{ opacity: frameOpacity }} />
      <motion.div className="absolute right-[8%] top-[10%] bottom-[10%] w-px bg-[#0F2742]/10" style={{ opacity: frameOpacity }} />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ opacity: lineGlow, background: "rgba(15,39,66,0.12)" }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ scale: stageScale, rotate: stageRotate, transformOrigin: "50% 50%" }}
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 1000" aria-hidden="true">
          <defs>
            <filter id="line-blur">
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <linearGradient id="line-core" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f2742" />
              <stop offset="52%" stopColor="#173a61" />
              <stop offset="100%" stopColor="#081321" />
            </linearGradient>
          </defs>
          <motion.path
            d={scene.primary}
            fill="none"
            stroke="rgba(34,76,122,0.14)"
            strokeWidth="36"
            strokeLinecap="round"
            animate={{ d: scene.primary }}
            transition={{ duration: 1.1, ease: [0.2, 1, 0.3, 1] }}
            style={{ pathLength: lineLength, filter: "url(#line-blur)" }}
          />
          <motion.path
            d={scene.primary}
            fill="none"
            stroke="url(#line-core)"
            strokeWidth="12"
            strokeLinecap="round"
            animate={{ d: scene.primary }}
            transition={{ duration: 1.1, ease: [0.2, 1, 0.3, 1] }}
            style={{ pathLength: lineLength }}
          />
          <motion.path
            d={scene.primary}
            fill="none"
            stroke="rgba(255,255,255,0.78)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ d: scene.primary }}
            transition={{ duration: 1.1, ease: [0.2, 1, 0.3, 1] }}
            style={{ pathLength: lineLength }}
          />
          <motion.path
            d={scene.primary}
            fill="none"
            stroke="rgba(255,255,255,0.96)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="140 900"
            animate={{ d: scene.primary }}
            transition={{ duration: 1.1, ease: [0.2, 1, 0.3, 1] }}
            style={{ pathLength: lineLength, strokeDashoffset: pulseOffset }}
          />
        </svg>
      </motion.div>
      <motion.path
        className="absolute bottom-[12%] left-[10%] right-[10%] h-px bg-[linear-gradient(90deg,transparent,rgba(15,39,66,0.26),transparent)]"
        animate={{ opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
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
      <div className="fixed left-0 right-0 top-[72px] z-[55] h-px bg-[#0F2742]/10">
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: scrollYProgress,
            background: "#0F2742",
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
          <span className="text-[#2F78C4]">
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
              className={`group min-h-[80vh] border-t border-[#0F2742]/16 py-10 transition-[opacity,transform] duration-700 md:min-h-[92vh] ${
                activeChapter === index ? "opacity-100" : "opacity-[0.42]"
              }`}
              style={{ transform: activeChapter === index ? "translateX(0px)" : "translateX(10px)" }}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#4F6680]">{chapter.label}</p>
              <h2
                className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-tight text-[#0F2742] sm:text-5xl md:text-6xl"
                style={{ color: activeChapter === index ? "#2F78C4" : undefined }}
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
            <LineStage progress={scrollYProgress} activeChapter={activeChapter} />
          </div>
          <div className="mt-3 h-[50vh] lg:hidden">
            <LineStage progress={scrollYProgress} activeChapter={activeChapter} />
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
