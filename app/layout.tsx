import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/components/layout/header";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { Analytics } from "@/components/scripts/analytics";
import { CONTACT } from "@/lib/constants/contact";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.siteUrl),
  title: {
    default: "VYRO — Growth & Tech para Clinicas de Estetica",
    template: "%s | VYRO",
  },
  description:
    "A VYRO transforma clinicas de estetica e negocios locais em maquinas previsiveis de atracao e agendamentos atraves de tecnologia de alta conversao e trafego pago focado em performance.",
  keywords: [
    "marketing para clinicas de estetica",
    "trafego pago para clinicas",
    "agencia de growth",
    "site de alta conversao",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: CONTACT.siteUrl,
    siteName: CONTACT.brandName,
    title: "VYRO — Growth & Tech para Clinicas de Estetica",
    description:
      "Tecnologia de alta conversao e trafego pago focado em performance para clinicas de estetica e negocios locais.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VYRO — Growth & Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VYRO — Growth & Tech para Clinicas de Estetica",
    description:
      "Tecnologia de alta conversao e trafego pago focado em performance para clinicas de estetica e negocios locais.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: CONTACT.legalName,
  image: `${CONTACT.siteUrl}/og-image.png`,
  url: CONTACT.siteUrl,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.city,
    addressRegion: CONTACT.state,
    addressCountry: CONTACT.country,
  },
  areaServed: "BR",
  sameAs: [CONTACT.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
