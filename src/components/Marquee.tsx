"use client";

const items = [
  "Websites de alto impacto",
  "SEO local para Google Maps",
  "Google Business Profile",
  "Omnichannel para ventas",
  "Contenido y social media",
  "Analitica y conversiones",
];

export default function Marquee() {
  const row = items.map((t) => (
    <span
      key={t}
      className="mx-8 whitespace-nowrap text-xs uppercase tracking-[0.22em] text-[#1A1A1A]/55"
    >
      {t}
    </span>
  ));

  return (
    <div className="relative overflow-hidden py-6" aria-label="Capabilities marquee">
      <div className="edge-line mb-6" />
      <div className="marquee-track font-[family-name:var(--font-body)]">
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0" aria-hidden="true">{row}</div>
      </div>
      <div className="edge-line mt-6" />
    </div>
  );
}
