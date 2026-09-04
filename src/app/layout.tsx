import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const GTM_ID = "GTM-TRJJDHW5";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = "https://andreibenedec.com";
const title =
  "Andrei Benedec | Desarrollo web, automatización con IA para empresas";
const description =
  "Creo webs orientadas a conseguir clientes y soluciones digitales que automatizan procesos, ahorran tiempo y hacen crecer tu empresa.";

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
    "desarrollo digital para empresas",
    "desarrollo web La Rioja",
    "automatización para empresas",
    "software interno",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen overflow-x-clip pb-20 font-sans text-slate-950 antialiased md:pb-0"
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
