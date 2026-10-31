import { LegalPage } from "@/components/LegalPage";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    title: "Política de cookies | Andrei Benedec",
    description: "Qué cookies usa andreibenedec.com y cómo gestionarlas.",
    path: "/cookies",
  }),
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies">
      <p>
        Una cookie es un pequeño archivo que un sitio guarda en tu navegador. Esta web solo activa
        cookies opcionales si las aceptas.
      </p>

      <h2>Qué uso</h2>
      <ul>
        <li>
          <strong>Preferencia de cookies (necesaria):</strong> tu elección se guarda en el
          almacenamiento local del navegador para no volver a preguntarte.
        </li>
        <li>
          <strong>Vercel Analytics (sin cookies):</strong> cuenta visitas de forma agregada y no usa
          cookies.
        </li>
        <li>
          <strong>Google Tag Manager (opcional):</strong> se carga solo si aceptas y puede activar
          herramientas de medición de Google, que usan sus propias cookies.
        </li>
      </ul>

      <h2>Cómo cambiar tu elección</h2>
      <p>Puedes cambiarla cuando quieras. También puedes borrar las cookies desde tu navegador.</p>
      <CookieSettingsButton />
    </LegalPage>
  );
}
