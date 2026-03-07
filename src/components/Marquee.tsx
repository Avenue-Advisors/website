"use client";

const items = [
  "Agentic AI",
  "Data Governance",
  "CRE Analytics",
  "Workflow Automation",
  "Custom Reporting",
  "AI Implementation",
  "Data Architecture",
  "Intelligence Systems",
];

export default function Marquee() {
  const row = items.map((t) => (
    <span key={t} className="mx-8 whitespace-nowrap text-silver/50 text-sm tracking-widest">
      {t}
    </span>
  ));

  return (
    <div className="relative overflow-hidden py-5" aria-label="Capabilities marquee">
      <div className="section-divider mb-5" />
      <div className="marquee-track font-[family-name:var(--font-mono)]">
        {/* duplicate for seamless loop */}
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0" aria-hidden="true">{row}</div>
      </div>
      <div className="section-divider mt-5" />
    </div>
  );
}
