import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const Services = dynamic(() =>
  import("@/components/Services").then((mod) => mod.Services),
);
const Differentiation = dynamic(() =>
  import("@/components/Differentiation").then((mod) => mod.Differentiation),
);
const Portfolio = dynamic(() =>
  import("@/components/Portfolio").then((mod) => mod.Portfolio),
);
const AboutAndrei = dynamic(() =>
  import("@/components/AboutAndrei").then((mod) => mod.AboutAndrei),
);
const Contact = dynamic(() =>
  import("@/components/Contact").then((mod) => mod.Contact),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((mod) => mod.Footer),
);
const WhatsAppFloat = dynamic(() =>
  import("@/components/WhatsAppFloat").then((mod) => mod.WhatsAppFloat),
);

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
