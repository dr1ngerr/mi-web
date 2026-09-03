import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl, type CaseStudy } from "@/lib/content";
import { Button } from "./Button";
import { CaseStudyGallery } from "./CaseStudyGallery";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { WhatsAppFloat } from "./WhatsAppFloat";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      <Navbar />
      <main className="border-b border-slate-200 bg-white pt-28 pb-8 sm:pt-32">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm">
            <Link href="/proyectos" className="font-medium text-indigo-800 hover:underline">
              ← Todos los proyectos
            </Link>
          </p>

          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-indigo-800">
            {study.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {study.headline}
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-600">{study.client}</p>
          {study.proof && (
            <p className="mt-4 inline-flex rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900">
              {study.proof}
            </p>
          )}

          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100">
            <Image
              src={study.coverImage}
              alt={study.coverImageAlt}
              width={1200}
              height={750}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>

          <Section title="Contexto">
            <p>{study.context}</p>
          </Section>

          <Section title="Problema">
            <p>{study.problem}</p>
          </Section>

          <Section title="Solución">
            <p>{study.solution}</p>
          </Section>

          {study.architecture && study.architecture.length > 0 && (
            <Section title="Arquitectura">
              <ul className="space-y-2">
                {study.architecture.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section title="Qué incluye / capacidades">
            <div className="flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Capturas">
            <CaseStudyGallery screenshots={study.screenshots} />
          </Section>

          <Section title="Resultado">
            <p>{study.result}</p>
          </Section>

          <Section title="Aprendizajes">
            <ul className="space-y-3">
              {study.learnings.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="mt-14 rounded-2xl border-2 border-indigo-200 bg-indigo-50 px-6 py-8 text-center">
            <p className="text-lg font-semibold text-indigo-950 sm:text-xl">{study.cta}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contacto" variant="primary" className="px-8 py-3 text-base">
                Cuéntame tu proyecto
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={getWhatsAppUrl()} variant="secondary" external className="px-8 py-3 text-base">
                WhatsApp
              </Button>
            </div>
          </div>
        </article>

        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
