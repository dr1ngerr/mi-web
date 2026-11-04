"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import { isProjectSlug, projectDictionaries } from "@/lib/i18n/projects";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Portfolio() {
  const { locale, t } = useLanguage();
  const projects = projectDictionaries[locale];

  return (
    <section id="caso" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        {caseStudies.map((study) => {
          if (!isProjectSlug(study.slug)) return null;
          const copy = projects[study.slug];

          return (
            <article key={study.slug}>
              <SectionHeading
                dark
                eyebrow={t.work.eyebrow}
                title={t.work.title}
                subtitle={t.work.subtitle}
                className="max-w-3xl"
              />

              <dl className="mt-12 grid grid-cols-3 border-y border-paper/15">
                {copy.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={index > 0 ? "border-l border-paper/15 py-6 pl-4 sm:pl-8" : "py-6 pr-4"}
                  >
                    <dd className="font-display text-4xl font-medium tracking-tight text-paper sm:text-6xl">
                      {stat.value}
                    </dd>
                    <dt className="mt-2 text-xs leading-snug text-paper/65 sm:text-sm">{stat.label}</dt>
                  </div>
                ))}
              </dl>

              <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-paper/15 p-6">
                    <p className="text-xs font-bold tracking-[0.18em] text-paper/50 uppercase">
                      {t.work.beforeLabel}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-paper/80">{t.work.before}</p>
                  </div>
                  <div className="rounded-2xl bg-wine p-6">
                    <p className="text-xs font-bold tracking-[0.18em] text-blush uppercase">
                      {t.work.afterLabel}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-white">{t.work.after}</p>
                  </div>

                  <div className="pt-4">
                    <Button href={`/proyectos/${study.slug}`} variant="light" className="px-6 text-base">
                      {t.work.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                    <p className="mt-4 text-sm text-paper/60">{t.work.note}</p>
                  </div>
                </div>

                <Link
                  href={`/proyectos/${study.slug}`}
                  className="block overflow-hidden rounded-2xl border border-paper/15 bg-card shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={study.coverImage}
                    alt={copy.imageAlt}
                    width={1024}
                    height={721}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 640px"
                    loading="lazy"
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
