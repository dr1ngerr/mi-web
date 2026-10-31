import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Contact } from "@/components/Contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Proyectos | Andrei Benedec",
  description:
    "Caso real: software de gestión de personal en producción, con 191 personas, turnos, fichajes y varios centros.",
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
