import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, servicePages, type SeoLanding, siteConfig } from "@/lib/content";
import { Button } from "./Button";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SeoLandingPage({ page }: { page: SeoLanding }) {
  const relatedServices = servicePages.filter((item) => item.slug !== page.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-slate-200/70 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {page.eyebrow && (
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-800">
                {page.eyebrow}
              </p>
            )}
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {page.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">{page.intro}</p>

            <ul className="mt-8 space-y-3">
              {page.points.map((point) => (
                <li key={point} className="flex gap-3 text-slate-800">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-700" aria-hidden />
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
                <MessageCircle className="h-4 w-4 text-emerald-700" />
                WhatsApp
              </Button>
            </div>

            {page.relatedHref && page.relatedLabel && (
              <p className="mt-8 text-sm text-slate-600">
                <Link href={page.relatedHref} className="font-medium text-indigo-800 hover:underline">
                  {page.relatedLabel}
                </Link>
              </p>
            )}

            <p className="mt-4 text-sm text-slate-600">
              Estoy en {siteConfig.location}. Trabajo con empresas de aquí y de toda España, independientemente del tamaño.
            </p>
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="bg-slate-50 py-12">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <p className="text-sm font-semibold text-slate-800">Otros servicios</p>
              <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
                {relatedServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${item.slug}`}
                      className="text-sm font-medium text-indigo-800 underline-offset-2 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
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
