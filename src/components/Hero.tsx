export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-[#1A1A1A]/15 pt-30 md:pt-36">
      <div className="lux-container grid gap-14 pb-24 md:grid-cols-12 md:gap-12 md:pb-32">
        <div className="order-2 md:order-1 md:col-span-7 md:col-start-2 md:self-end">
          <div className="mb-8 flex items-center gap-5">
            <span className="decor-line" />
            <p className="section-label">Diseno web, SEO y omnicanal</p>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.9] tracking-tight text-[#1A1A1A] sm:text-6xl md:text-8xl lg:text-9xl">
            Presencia
            <br />
            digital <span className="italic text-[#D4AF37]">que vende</span>
            <br />
            en Puerto Rico
          </h1>

          <p className="drop-cap mt-8 max-w-xl text-base leading-relaxed text-[#6C6863] md:text-lg">
            Creamos experiencias digitales para pequenas y medianas empresas que
            quieren verse premium, aparecer primero en busquedas locales y
            conectar en cada canal con consistencia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary-lux">
              <span className="btn-primary-fill" />
              <span className="btn-primary-content">Book a free consultation</span>
            </a>
            <a
              href="#services"
              className="btn-secondary-lux inline-flex items-center justify-center"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 md:col-span-4 md:col-start-9 md:pt-10">
          <div className="group relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
              alt="Duenos de negocio de Puerto Rico planificando su presencia digital"
              className="image-editorial aspect-[4/5] w-full object-cover"
            />
            <span className="vertical-label absolute right-3 top-4 hidden text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/70 md:block">
              Editorial / Vol. 01
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6C6863]">
            Spanish-first strategy with English-ready messaging for tourism,
            retail, servicios profesionales y e-commerce local.
          </p>
        </div>
      </div>
    </section>
  );
}
