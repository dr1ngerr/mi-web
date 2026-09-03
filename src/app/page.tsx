import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Differentiation } from "@/components/Differentiation";
import { Trust } from "@/components/Trust";
import { Portfolio } from "@/components/Portfolio";
import { AboutAndrei } from "@/components/AboutAndrei";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title:
    "Andrei Benedec | Desarrollo web, automatización e IA para empresas",
  description:
    "Creo webs orientadas a conseguir clientes y soluciones digitales que automatizan procesos, ahorran tiempo y hacen crecer tu empresa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Andrei Benedec | Desarrollo web, automatización e IA para empresas",
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
        <Problem />
        <Services />
        <Differentiation />
        <Trust />
        <Portfolio />
        <AboutAndrei />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
