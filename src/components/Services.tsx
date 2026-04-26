import { Globe, Search, Megaphone, LineChart } from "lucide-react";

const services = [
  {
    num: "01",
    Icon: Globe,
    title: "Creacion y rediseno web",
    desc: "Sitios elegantes, veloces y preparados para convertir visitas en llamadas, reservas o compras.",
  },
  {
    num: "02",
    Icon: Search,
    title: "SEO local y tecnico",
    desc: "Optimizacion para que tu negocio aparezca donde importa: Google Search, Maps y resultados por municipio.",
  },
  {
    num: "03",
    Icon: Megaphone,
    title: "Estrategia omnicanal",
    desc: "Unificamos web, redes, anuncios, email y mensajeria para una marca consistente que genera confianza.",
  },
  {
    num: "04",
    Icon: LineChart,
    title: "Analitica y mejora continua",
    desc: "Medimos embudos y conversiones cada mes para que tu presencia digital crezca con decisiones claras.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-[#1A1A1A]/15 py-24 md:py-32" aria-label="Services">
      <div className="lux-container">
        <p className="section-label mb-5">Servicios clave</p>
        <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-[#1A1A1A] md:text-7xl">
          Soluciones <span className="italic text-[#D4AF37]">curadas</span> para marcas que quieren crecer localmente
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.num} className="editorial-card group">
              <span className="mb-4 block font-[family-name:var(--font-display)] text-4xl text-[#1A1A1A]/25">
                {s.num}
              </span>
              <s.Icon
                size={26}
                className="mb-4 text-[#1A1A1A]/70 transition-colors duration-500 group-hover:text-[#D4AF37]"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-3xl leading-tight text-[#1A1A1A]">
                {s.title}
              </h3>
              <p className="max-w-md text-base leading-relaxed text-[#6C6863]">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
