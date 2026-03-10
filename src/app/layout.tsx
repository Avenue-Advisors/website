import type { Metadata } from "next";
import { Syne, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Avenue Advisors | AI & Data Infrastructure for Commercial Real Estate";
const description =
  "Avenue Advisors builds precision-engineered data pipelines, AI workflows, and agentic automation for commercial real estate operators, investors, and developers.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.avenueadvisors.ai"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "commercial real estate data",
    "CRE analytics",
    "real estate AI",
    "agentic AI workflows",
    "data governance CRE",
    "real estate automation",
    "property data pipeline",
    "AI consulting real estate",
    "commercial real estate consulting",
    "Avenue Advisors",
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
    locale: "en_US",
    url: "https://www.avenueadvisors.ai",
    siteName: "Avenue Advisors",
    title,
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Avenue Advisors - Intelligent Infrastructure for Commercial Real Estate",
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
    <html lang="en" className="scroll-smooth">
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
              areaServed: "United States",
              serviceType: [
                "Data Governance Consulting",
                "AI Implementation",
                "Agentic AI Workflows",
                "Data Analytics & Reporting",
              ],
              industry: "Commercial Real Estate",
              knowsAbout: [
                "Commercial Real Estate",
                "Data Governance",
                "Artificial Intelligence",
                "Machine Learning",
                "Agentic AI",
                "Workflow Automation",
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
