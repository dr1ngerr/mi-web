"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import { isProjectSlug } from "@/lib/i18n/projects";
import { useLanguage } from "./LanguageProvider";

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="border-b-2 border-slate-200 bg-sky-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-2 text-base text-slate-700">{t.portfolio.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
          {caseStudies.map((study) => {
            if (!isProjectSlug(study.slug)) return null;
            const copy = t.portfolio.projects[study.slug];

            return (
              <Link
                key={study.slug}
                href={`/proyectos/${study.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-slate-300 bg-white shadow-sm sm:hover:border-sky-400 sm:hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <Image
                    src={study.coverImage}
                    alt={copy.imageAlt}
                    width={1200}
                    height={750}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={study.slug === "gestion-personal"}
                  />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-900">
                    {copy.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-slate-950">{copy.title}</h3>
                  {copy.proof && (
                    <p className="mt-2 text-xs font-bold text-emerald-800">{copy.proof}</p>
                  )}
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-sky-900">
                    {t.portfolio.viewCase}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-center">
          <Link
            href="/proyectos"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-sky-900 underline-offset-2 hover:underline"
          >
            {t.portfolio.viewAll}
          </Link>
        </p>
      </div>
    </section>
  );
}
