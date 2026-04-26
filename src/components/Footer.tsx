"use client";


const colServices = [
  { label: "Diseno web", href: "#services" },
  { label: "SEO local", href: "#services" },
  { label: "Omnichannel", href: "#services" },
  { label: "Analitica", href: "#services" },
];

const colCompany = [
  { label: "Nosotros", href: "#about" },
  { label: "Proceso", href: "#process" },
  { label: "Sectores", href: "#industries" },
];

const colConnect = [
  { label: "Contacto", href: "#contact" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#F9F8F6] pb-10 pt-20" aria-label="Site footer">
      <div className="edge-line mb-16" />

      <div className="lux-container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-[family-name:var(--font-display)] text-4xl leading-none text-[#1A1A1A]">
              Isla Presencia
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6C6863]">
              Presencia digital de lujo para PyMEs en Puerto Rico.
            </p>
          </div>

          <div>
            <h4 className="section-label mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {colServices.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {colCompany.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">Conecta</h4>
            <ul className="space-y-2.5">
              {colConnect.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="edge-line mb-6 mt-16" />
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#6C6863]">
          &copy; 2026 Isla Presencia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
