import Link from "next/link";
import { LegalHolder, LegalPage } from "@/components/LegalPage";
import { legalConfig } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    title: "Política de privacidad | Andrei Benedec",
    description: "Cómo se tratan los datos personales en andreibenedec.com.",
    path: "/privacidad",
  }),
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <LegalHolder />

      <h2>Qué datos trato y para qué</h2>
      <p>
        Si me escribes por el formulario, trato tu nombre, tu email y lo que me cuentes en el mensaje
        para responderte y, si lo pides, prepararte una propuesta. Si me escribes por WhatsApp o por
        email, trato los datos que me envíes con la misma finalidad.
      </p>

      <h2>Base legal</h2>
      <p>
        La aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD) y mi interés
        legítimo en responder a quien me contacta (art. 6.1.f RGPD). Las cookies opcionales se basan
        en tu consentimiento (art. 6.1.a RGPD).
      </p>

      <h2>Cuánto tiempo los conservo</h2>
      <p>
        Mientras dure la conversación y, si no llegamos a trabajar juntos, hasta un máximo de 12
        meses. Si hay contrato, durante los plazos que exija la ley.
      </p>

      <h2>Quién más interviene</h2>
      <p>No vendo ni cedo tus datos. Solo acceden proveedores necesarios para que la web funcione:</p>
      <ul>
        <li>Vercel Inc. (alojamiento de la web y medición de visitas sin cookies).</li>
        <li>El proveedor de correo que entrega los mensajes del formulario.</li>
        <li>Google (Tag Manager), solo si aceptas las cookies opcionales.</li>
        <li>WhatsApp (Meta), solo si decides escribirme por ese canal.</li>
      </ul>
      <p>
        Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo, con las
        garantías previstas en el RGPD.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad
        escribiendo a <a href={`mailto:${legalConfig.email}`}>{legalConfig.email}</a>. Si crees que no
        he atendido bien tu petición, puedes reclamar ante la Agencia Española de Protección de Datos
        (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
      </p>

      <p>
        Más información sobre cookies en la <Link href="/cookies">política de cookies</Link>.
      </p>
    </LegalPage>
  );
}
