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
    <footer className="relative bg-[#F4F8FF] pb-10 pt-20" aria-label="Site footer">
      <div className="edge-line mb-16" />

      <div className="lux-container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-full.svg"
              alt="Avenue Advisors"
              width={250}
              height={28}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#4F6680]">
              Websites, SEO y presencia digital para PyMEs en Puerto Rico.
            </p>
          </div>

          <div>
            <h4 className="section-label mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {colServices.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#4F6680] transition-colors duration-500 hover:text-[#2F78C4]"
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
                    className="text-sm text-[#4F6680] transition-colors duration-500 hover:text-[#2F78C4]"
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
                    className="text-sm text-[#4F6680] transition-colors duration-500 hover:text-[#2F78C4]"
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
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#4F6680]">
          &copy; 2026 Avenue Advisors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
