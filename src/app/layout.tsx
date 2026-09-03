import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrei Benedec | Webs y automatizaciones",
  description:
    "Desarrollo web y automatizaciones para empresas que quieren vender más y trabajar mejor. Freelance en La Rioja.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-white font-sans text-slate-950 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
