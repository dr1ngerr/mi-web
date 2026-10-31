import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = "https://www.andreibenedec.com";
const title =
  "Andrei Benedec | Desarrollo web y automatización con IA para empresas";
const description =
  "Webs pensadas para conseguir clientes y automatizaciones que ahorran horas a tu equipo. Trato directo y precio cerrado. La Rioja y toda España.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s",
  },
  description,
  applicationName: "Andrei Benedec",
  authors: [{ name: "Andrei Benedec", url: siteUrl }],
  creator: "Andrei Benedec",
  publisher: "Andrei Benedec",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Andrei Benedec",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  category: "technology",
  keywords: [
    "Andrei Benedec",
    "desarrollo web La Rioja",
    "desarrollo web para empresas",
    "automatización con IA",
    "automatización para empresas",
    "software interno",
    "landing page para conseguir clientes",
    "SEO La Rioja",
    "freelance desarrollo web España",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen overflow-x-clip pb-20 font-sans text-slate-950 antialiased md:pb-0"
        suppressHydrationWarning
      >
        <JsonLd />
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
