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

const title = "Avenue Advisors | Web y Marketing Local para PyMEs en Puerto Rico";
const description =
  "Disenamos sitios web, SEO local y estrategias omnicanal para PyMEs en Puerto Rico que quieren mas clientes y una presencia digital impecable.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.avenueadvisors.ai"),
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
    "avenue advisors",
  ],
  authors: [{ name: "Avenue Advisors" }],
  creator: "Avenue Advisors",
  publisher: "Avenue Advisors",
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
    url: "https://www.avenueadvisors.ai",
    siteName: "Avenue Advisors",
    title,
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Avenue Advisors - Presencia digital para PyMEs en Puerto Rico",
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
              name: "Avenue Advisors",
              url: "https://www.avenueadvisors.ai",
              logo: "https://www.avenueadvisors.ai/logo-full.svg",
              description,
              email: "diego.ruiz@avenueadvisors.ai",
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
        {children}
      </body>
    </html>
  );
}
