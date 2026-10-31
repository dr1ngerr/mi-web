"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import { isProjectSlug, projectDictionaries } from "@/lib/i18n/projects";
import { useLanguage } from "./LanguageProvider";

export function Portfolio() {
  const { locale, t } = useLanguage();
  const projects = projectDictionaries[locale];

  return (
    <section id="proyectos" className="border-b-2 border-slate-200 bg-sky-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        {caseStudies.map((study) => {
          if (!isProjectSlug(study.slug)) return null;
          const copy = projects[study.slug];

          return (
            <article
              key={study.slug}
              className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12"
            >
              <div>
                <p className="text-sm font-bold tracking-wider text-sky-900 uppercase">
                  {t.portfolio.eyebrow} · {copy.category}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {t.portfolio.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  {t.portfolio.subtitle}
                </p>

                <dl className="mt-6 grid grid-cols-3 gap-3">
                  {copy.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border-2 border-slate-200 bg-white p-3">
                      <dd className="text-2xl font-bold text-slate-950 sm:text-3xl">{stat.value}</dd>
                      <dt className="mt-1 text-xs leading-snug font-medium text-slate-600">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                <Link
                  href={`/proyectos/${study.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-base font-bold text-sky-900 underline-offset-2 hover:underline"
                >
                  {t.portfolio.viewCase}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-1 text-sm text-slate-600">{t.portfolio.note}</p>
              </div>

              <Link
                href={`/proyectos/${study.slug}`}
                className="block overflow-hidden rounded-2xl border-2 border-slate-300 bg-white shadow-md transition-colors hover:border-sky-400"
              >
                <Image
                  src={study.coverImage}
                  alt={copy.imageAlt}
                  width={1024}
                  height={721}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  loading="lazy"
                />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
