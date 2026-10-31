import Link from "next/link";
import { LegalHolder, LegalPage } from "@/components/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    title: "Aviso legal | Andrei Benedec",
    description: "Datos del titular y condiciones de uso de andreibenedec.com.",
    path: "/aviso-legal",
  }),
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <p>
        En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de
        comercio electrónico (LSSI), estos son los datos del titular de andreibenedec.com:
      </p>
      <LegalHolder />

      <h2>Uso de la web</h2>
      <p>
        Esta web informa sobre servicios de desarrollo web, automatización y software a medida. Quien
        la visita se compromete a usarla de forma lícita y a no dañar su funcionamiento.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el diseño y el código de esta web pertenecen a su titular, salvo indicación en
        contrario. No pueden reproducirse sin autorización.
      </p>

      <h2>Precios y propuestas</h2>
      <p>
        Los precios de la web son orientativos. Lo que vincula a ambas partes es la propuesta
        aceptada por escrito para cada proyecto.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        Procuro que la información sea correcta y esté actualizada, pero no respondo de los
        contenidos de sitios externos enlazados desde esta web.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Esta web se rige por la legislación española. Consulta también la{" "}
        <Link href="/privacidad">política de privacidad</Link> y la{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>
    </LegalPage>
  );
}
