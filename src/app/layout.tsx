import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Isla Presencia | Web y Marketing Local para PyMEs en Puerto Rico";
const description =
  "Disenamos sitios web, SEO local y estrategias omnicanal para PyMEs en Puerto Rico que quieren mas clientes y una presencia digital impecable.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.islapresencia.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "diseno web puerto rico",
    "seo local puerto rico",
    "agencia marketing pymes puerto rico",
    "presencia digital para negocios",
    "estrategia omnicanal pymes",
    "google business profile puerto rico",
    "isla presencia",
  ],
  authors: [{ name: "Isla Presencia" }],
  creator: "Isla Presencia",
  publisher: "Isla Presencia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://www.islapresencia.com",
    siteName: "Isla Presencia",
    title,
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Isla Presencia - Presencia digital elegante para PyMEs en Puerto Rico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Isla Presencia",
              url: "https://www.islapresencia.com",
              logo: "https://www.islapresencia.com/logo-full.svg",
              description,
              email: "hola@islapresencia.com",
              areaServed: "Puerto Rico",
              serviceType: [
                "Diseno y desarrollo web",
                "SEO local",
                "Estrategia omnicanal",
                "Gestion de presencia digital",
              ],
              industry: "Servicios de marketing digital para PyMEs",
              knowsAbout: [
                "Small Business Marketing",
                "SEO",
                "Brand Presence",
                "Website Design",
                "Lead Generation",
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <div className="pointer-events-none fixed inset-y-0 left-[6%] z-40 hidden w-px bg-[#1A1A1A]/20 lg:block" />
        <div className="pointer-events-none fixed inset-y-0 left-1/3 z-40 hidden w-px bg-[#1A1A1A]/20 lg:block" />
        <div className="pointer-events-none fixed inset-y-0 left-2/3 z-40 hidden w-px bg-[#1A1A1A]/20 lg:block" />
        <div className="pointer-events-none fixed inset-y-0 right-[6%] z-40 hidden w-px bg-[#1A1A1A]/20 lg:block" />
        {children}
      </body>
    </html>
  );
}
