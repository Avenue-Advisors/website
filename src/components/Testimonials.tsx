const testimonials = [
  {
    quote:
      "Nos rediseñaron la web completa y en seis semanas empezamos a recibir consultas de clientes que antes ni sabian que existiamos.",
    role: "Fundadora",
    org: "Clinica de bienestar, San Juan",
    metric: "+63% solicitudes de cita",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=220&q=80",
  },
  {
    quote:
      "Por primera vez nuestra presencia se siente consistente en Google, Instagram y la pagina. El negocio se ve serio y eso cambia todo.",
    role: "Director General",
    org: "Empresa de servicios para el hogar, Ponce",
    metric: "Top 3 local en keywords clave",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80",
  },
  {
    quote:
      "No solo disenaron bonito. Construyeron un sistema comercial que nuestro equipo entiende y puede operar sin depender de terceros.",
    role: "Co-fundadora",
    org: "Marca retail local, Mayaguez",
    metric: "2.4x conversion web-to-WhatsApp",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=220&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-[#0F2742]/15 py-24 md:py-32" aria-label="Client testimonials">
      <div className="lux-container">
        <p className="section-label mb-5">Testimonios</p>
        <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-[#0F2742] md:text-7xl">
          Marcas locales que
          <br />
          ya viven esta <span className="italic text-[#2F78C4]">transformacion</span>
        </h2>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.metric}
              className="group border-l border-[#0F2742]/20 px-6 py-7 transition-all duration-700 ease-out hover:border-l-[#2F78C4] hover:pl-8"
            >
              <div className="mb-5 flex items-center gap-1 text-[#2F78C4] transition-transform duration-500 group-hover:scale-110">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <blockquote className="text-base leading-relaxed text-[#4F6680]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-5 inline-block border border-[#2F78C4]/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#4F6680]">
                {t.metric}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[#0F2742]/15 pt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.role}
                  className="image-editorial h-12 w-12 object-cover"
                />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-xl text-[#0F2742] transition-colors duration-500 group-hover:text-[#2F78C4]">
                    {t.role}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#4F6680]">{t.org}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
