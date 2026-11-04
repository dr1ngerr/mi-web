import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl, navServicePages, type SeoLanding, siteConfig } from "@/lib/content";
import { Button } from "./Button";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { WhatsAppIcon } from "./WhatsAppIcon";

const relatedProjectsByService: Record<string, { href: string; label: string }[]> = {
  "desarrollo-web": [
    { href: "/landing-page-para-empresas", label: "Landing page para conseguir clientes" },
  ],
  automatizacion: [
    { href: "/automatizacion-whatsapp-empresas", label: "Automatización con WhatsApp" },
  ],
  "desarrollo-software": [
    { href: "/proyectos/gestion-personal", label: "Caso: gestión de personal en producción" },
  ],
  "desarrollo-web-la-rioja": [
    { href: "/desarrollo-web", label: "Servicio: desarrollo web" },
    { href: "/desarrollo-web-logrono", label: "También: desarrollo web en Logroño" },
  ],
  "automatizacion-empresas-la-rioja": [
    { href: "/automatizacion", label: "Servicio: automatización con IA" },
  ],
  "desarrollo-software-la-rioja": [
    { href: "/desarrollo-software", label: "Servicio: desarrollo de software" },
    { href: "/proyectos/gestion-personal", label: "Caso: software interno" },
  ],
  "landing-page-para-empresas": [
    { href: "/desarrollo-web", label: "Servicio: desarrollo web" },
  ],
  "automatizacion-whatsapp-empresas": [
    { href: "/automatizacion", label: "Servicio: automatización con IA" },
  ],
  "desarrollo-web-logrono": [
    { href: "/desarrollo-web", label: "Servicio: desarrollo web" },
    { href: "/desarrollo-web-la-rioja", label: "También: desarrollo web en La Rioja" },
  ],
};

export function SeoLandingPage({ page }: { page: SeoLanding }) {
  const relatedServices = navServicePages.filter((item) => item.slug !== page.slug).slice(0, 3);
  const relatedProjects = relatedProjectsByService[page.slug] ?? [];

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-line pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm">
              <Link href="/" className="font-medium text-wine hover:underline">
                ← Inicio
              </Link>
            </p>
            {page.eyebrow && (
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-wine">
                {page.eyebrow}
              </p>
            )}
            <h1
              className={`${page.eyebrow ? "mt-3" : "mt-6"} font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-6xl`}
            >
              {page.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{page.intro}</p>

            <ul className="mt-8 space-y-3">
              {page.points.map((point) => (
                <li key={point} className="flex gap-3 text-ink">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-wine" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contacto" variant="primary" className="px-8 py-3 text-base">
                {page.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={getWhatsAppUrl()}
                variant="secondary"
                external
                className="px-8 py-3 text-base"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </Button>
            </div>

            <p className="mt-10 text-sm leading-relaxed text-ink-mute">
              Estoy en {siteConfig.location}. Trabajo con empresas de aquí y de toda España,
              independientemente del tamaño. Mi referencia:{" "}
              <Link
                href="/proyectos/gestion-personal"
                className="font-medium text-wine underline-offset-2 hover:underline"
              >
                un sistema de personal en producción con 191 personas
              </Link>
              .
            </p>
          </div>
        </section>

        {(page.relatedHref || relatedProjects.length > 0 || relatedServices.length > 0) && (
          <section className="border-t border-line bg-paper-deep py-14 sm:py-16">
            <div className="mx-auto grid max-w-3xl gap-10 px-4 sm:px-6 lg:px-8">
              {(page.relatedHref || relatedProjects.length > 0) && (
                <div>
                  <h2 className="text-xs font-bold tracking-[0.18em] text-ink-mute uppercase">
                    Relacionado
                  </h2>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {page.relatedHref && page.relatedLabel && (
                      <li>
                        <Link
                          href={page.relatedHref}
                          className="flex items-center justify-between gap-4 py-3.5 text-sm font-medium text-wine underline-offset-2 hover:underline"
                        >
                          <span>{page.relatedLabel}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
                        </Link>
                      </li>
                    )}
                    {relatedProjects.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between gap-4 py-3.5 text-sm font-medium text-wine underline-offset-2 hover:underline"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedServices.length > 0 && (
                <div>
                  <h2 className="text-xs font-bold tracking-[0.18em] text-ink-mute uppercase">
                    Otros servicios
                  </h2>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {relatedServices.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}`}
                          className="flex items-center justify-between gap-4 py-3.5 text-sm font-medium text-wine underline-offset-2 hover:underline"
                        >
                          <span>{item.title}</span>
                          <ArrowRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
