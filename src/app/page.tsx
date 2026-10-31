import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { siteConfig } from "@/lib/content";

const Services = dynamic(() =>
  import("@/components/Services").then((mod) => mod.Services),
);
const Differentiation = dynamic(() =>
  import("@/components/Differentiation").then((mod) => mod.Differentiation),
);
const Portfolio = dynamic(() =>
  import("@/components/Portfolio").then((mod) => mod.Portfolio),
);
const Process = dynamic(() =>
  import("@/components/Process").then((mod) => mod.Process),
);
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((mod) => mod.Testimonials),
);
const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ));
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
    "Andrei Benedec | Desarrollo web y automatización con IA para empresas",
  description:
    "Webs pensadas para conseguir clientes y automatizaciones que ahorran horas a tu equipo. Trato directo y precio cerrado. La Rioja y toda España.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Andrei Benedec | Desarrollo web y automatización con IA para empresas",
    description:
      "Webs pensadas para conseguir clientes y automatizaciones que ahorran horas a tu equipo. Trato directo y precio cerrado. La Rioja y toda España.",
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
        <Portfolio />
        <Differentiation />
        <Process />
        {siteConfig.showTestimonials && <Testimonials />}
        <AboutAndrei />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
