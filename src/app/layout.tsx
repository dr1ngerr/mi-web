import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://andreibenedec.com";
const title =
  "Andrei Benedec | Desarrollo web, automatización e IA para empresas";
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
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
