import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contacto | Andrei Benedec",
  description:
    "¿Tienes un proyecto en mente? Cuéntamelo. Web, automatización o una idea aún sin categoría.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <Contact />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
