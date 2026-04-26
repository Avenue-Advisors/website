const industries = [
  {
    title: "Hospitalidad",
    desc: "Hoteles boutique, guesthouses y experiencias turisticas.",
    image:
      "https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Salud y bienestar",
    desc: "Clinicas, dental, spas y practicas privadas.",
    image:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Retail y food",
    desc: "Tiendas locales, restaurantes y marcas DTC.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Servicios profesionales",
    desc: "Firmas legales, contabilidad, seguros y consultorias.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Construccion y home services",
    desc: "Contratistas, remodelacion y servicios tecnicos.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32" aria-label="Industries we serve">
      <div className="lux-container">
        <p className="section-label mb-5">Sectores</p>
        <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-[#1A1A1A] md:text-7xl">
          Experiencia con negocios
          <br />
          locales de <span className="italic text-[#D4AF37]">alto potencial</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind) => (
            <article key={ind.title} className="group border-t border-[#1A1A1A] pt-5">
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="image-editorial aspect-[3/4] w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl leading-tight text-[#1A1A1A]">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6C6863]">
                {ind.desc}
              </p>
              <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/45">
                SMB Focus
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
