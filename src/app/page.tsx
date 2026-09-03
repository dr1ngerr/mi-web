import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Differentiation } from "@/components/Differentiation";
import { Portfolio } from "@/components/Portfolio";
import { AboutAndrei } from "@/components/AboutAndrei";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title:
    "Andrei Benedec | Desarrollo web, automatización con IA para empresas",
  description:
    "Creo webs orientadas a conseguir clientes y soluciones digitales que automatizan procesos, ahorran tiempo y hacen crecer tu empresa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Andrei Benedec | Desarrollo web, automatización con IA para empresas",
    description:
      "Creo webs orientadas a conseguir clientes y soluciones digitales que automatizan procesos, ahorran tiempo y hacen crecer tu empresa.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differentiation />
        <Portfolio />
        <AboutAndrei />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
