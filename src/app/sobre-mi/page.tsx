import { Navbar } from "@/components/Navbar";
import { AboutAndrei } from "@/components/AboutAndrei";
import { Differentiation } from "@/components/Differentiation";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Contact } from "@/components/Contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Sobre mí | Andrei Benedec — Desarrollo digital para empresas",
  description:
    "Conoce a Andrei Benedec: desarrollador en La Rioja, con titulación oficial DAM y software en producción usado a diario.",
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutAndrei />
        <Differentiation />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
