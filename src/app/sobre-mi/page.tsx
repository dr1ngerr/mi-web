import { Navbar } from "@/components/Navbar";
import { Differentiation } from "@/components/Differentiation";
import { Trust } from "@/components/Trust";
import { AboutAndrei } from "@/components/AboutAndrei";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Continuity } from "@/components/Continuity";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Contact } from "@/components/Contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Sobre mí | Andrei Benedec — Desarrollo digital para empresas",
  description:
    "Conoce a Andrei Benedec: desarrollo digital para empresas, con mentalidad operativa y software en producción.",
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <AboutAndrei />
        <Differentiation />
        <Trust />
        <Process />
        <Continuity />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
