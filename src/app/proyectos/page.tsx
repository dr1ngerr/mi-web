import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Contact } from "@/components/Contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Proyectos | Andrei Benedec",
  description:
    "Casos reales: software de personal en producción, webs pensadas para contacto y automatización de lo repetitivo.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
