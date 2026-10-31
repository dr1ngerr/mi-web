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
    "Cuéntame qué te frena y te envío una propuesta con precio, plazos y qué incluye. Web, automatización o software a medida.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Contact />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
