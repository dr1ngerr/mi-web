import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { siteConfig } from "@/lib/content";

const Services = dynamic(() =>
  import("@/components/Services").then((mod) => mod.Services),
);
const Portfolio = dynamic(() =>
  import("@/components/Portfolio").then((mod) => mod.Portfolio),
);
const Differentiation = dynamic(() =>
  import("@/components/Differentiation").then((mod) => mod.Differentiation),
);
const Process = dynamic(() =>
  import("@/components/Process").then((mod) => mod.Process),
);
const Pricing = dynamic(() =>
  import("@/components/Pricing").then((mod) => mod.Pricing),
);
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((mod) => mod.Testimonials),
);
const AboutAndrei = dynamic(() =>
  import("@/components/AboutAndrei").then((mod) => mod.AboutAndrei),
);
const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ));
const Contact = dynamic(() =>
  import("@/components/Contact").then((mod) => mod.Contact),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((mod) => mod.Footer),
);
const WhatsAppFloat = dynamic(() =>
  import("@/components/WhatsAppFloat").then((mod) => mod.WhatsAppFloat),
);

const title = "Andrei Benedec | Desarrollo web y automatización con IA para empresas";
const description =
  "Webs que consiguen clientes y automatizaciones que ahorran horas a tu equipo. Auditoría gratis, precio cerrado y trato directo. La Rioja y toda España.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
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
        <Pricing />
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
