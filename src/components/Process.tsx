const steps = [
  {
    num: "01",
    title: "Diagnostico",
    desc: "Audit completo de presencia digital, posicionamiento local y experiencia de cliente.",
  },
  {
    num: "02",
    title: "Diseno y ejecucion",
    desc: "Construimos web, SEO y canales en un sistema coherente con enfoque comercial.",
  },
  {
    num: "03",
    title: "Optimizacion continua",
    desc: "Medimos, ajustamos y escalamos para sostener crecimiento con menos friccion operativa.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-y border-[#1A1A1A]/15 py-24 md:py-32" aria-label="Our process">
      <div className="lux-container">
        <p className="section-label mb-5">Nuestro proceso</p>
        <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-[#1A1A1A] md:text-7xl">
          Estrategia <span className="italic text-[#D4AF37]">sin complicaciones</span>, ejecucion con detalle
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <article key={s.num} className="relative border-t border-[#1A1A1A] pt-7">
              {i < steps.length - 1 && (
                <div
                  className="absolute -right-4 top-7 hidden h-px w-8 bg-[#1A1A1A]/25 md:block"
                  aria-hidden="true"
                />
              )}

              <div className="mb-5 font-[family-name:var(--font-display)] text-4xl text-[#1A1A1A]/30">
                {s.num}
              </div>

              <h3 className="mb-2 font-[family-name:var(--font-display)] text-3xl leading-tight text-[#1A1A1A]">
                {s.title}
              </h3>
              <p className="max-w-sm text-base leading-relaxed text-[#6C6863]">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
