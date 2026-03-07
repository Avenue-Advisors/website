"use client";

import Image from "next/image";

const colServices = [
  { label: "Data Governance", href: "#services" },
  { label: "Data Analysis", href: "#services" },
  { label: "AI Implementation", href: "#services" },
  { label: "Agentic Workflows", href: "#services" },
];

const colCompany = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#about" },
  { label: "Industries", href: "#industries" },
];

const colConnect = [
  { label: "Contact", href: "#contact" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10" aria-label="Site footer">
      {/* top divider */}
      <div className="section-divider mb-16" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/shortLogo (2).svg"
              alt="Avenue Advisors"
              width={70}
              height={28}
            />
            <p className="mt-4 text-sm text-silver/55 leading-relaxed max-w-xs">
              Intelligent infrastructure for commercial real&nbsp;estate.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-uppercase mb-4 text-white/60">Services</h4>
            <ul className="space-y-2.5">
              {colServices.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver/55 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="label-uppercase mb-4 text-white/60">Company</h4>
            <ul className="space-y-2.5">
              {colCompany.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver/55 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="label-uppercase mb-4 text-white/60">Connect</h4>
            <ul className="space-y-2.5">
              {colConnect.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver/55 hover:text-white transition-colors duration-200"
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

        {/* bottom legal */}
        <div className="section-divider mt-16 mb-6" />
        <p className="text-xs text-silver/35 font-[family-name:var(--font-mono)]">
          &copy; 2026 Avenue Advisors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
