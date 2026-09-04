"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl, type CaseStudy } from "@/lib/content";
import { isProjectSlug } from "@/lib/i18n/projects";
import { Button } from "./Button";
import { CaseStudyGallery } from "./CaseStudyGallery";
import { useLanguage } from "./LanguageProvider";
import { WhatsAppIcon } from "./WhatsAppIcon";

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

export function CaseStudyContent({
  study,
  availableScreenshotSrcs,
}: {
  study: CaseStudy;
  availableScreenshotSrcs: string[];
}) {
  const { t } = useLanguage();
  const copy = isProjectSlug(study.slug)
    ? t.portfolio.projects[study.slug]
    : null;

  if (!copy) {
    return null;
  }

  const screenshots = availableScreenshotSrcs.flatMap((src) => {
    const index = study.screenshots.findIndex((shot) => shot.src === src);
    if (index < 0 || !copy.screenshots[index]) return [];
    return [{ src, ...copy.screenshots[index] }];
  });

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p className="text-sm">
        <Link href="/proyectos" className="font-medium text-indigo-800 hover:underline">
          {t.caseStudy.backToProjects}
        </Link>
      </p>

      <p className="mt-6 text-sm font-bold uppercase tracking-wider text-indigo-800">
        {copy.category}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {copy.headline}
      </h1>
      <p className="mt-4 text-sm font-medium text-slate-600">{copy.client}</p>
      {copy.proof && (
        <p className="mt-4 inline-flex rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900">
          {copy.proof}
        </p>
      )}

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100">
        <Image
          src={study.coverImage}
          alt={copy.coverImageAlt}
          width={1200}
          height={750}
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>

      <Section title={t.caseStudy.context}>
        <p>{copy.context}</p>
      </Section>

      <Section title={t.caseStudy.problem}>
        <p>{copy.problem}</p>
      </Section>

      <Section title={t.caseStudy.solution}>
        <p>{copy.solution}</p>
      </Section>

      {copy.architecture.length > 0 && (
        <Section title={t.caseStudy.architecture}>
          <ul className="space-y-2">
            {copy.architecture.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title={t.caseStudy.stack}>
        <div className="flex flex-wrap gap-2">
          {copy.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-800"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      {screenshots.length > 0 ? (
        <Section title={t.caseStudy.screenshots}>
          <CaseStudyGallery
            screenshots={screenshots}
            screenshotLabel={t.caseStudy.screenshotLabel}
          />
        </Section>
      ) : null}

      <Section title={t.caseStudy.result}>
        <p>{copy.result}</p>
      </Section>

      <Section title={t.caseStudy.learnings}>
        <ul className="space-y-3">
          {copy.learnings.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="mt-14 rounded-2xl border-2 border-indigo-200 bg-indigo-50 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-indigo-950 sm:text-xl">{copy.cta}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contacto" variant="primary" className="px-8 py-3 text-base">
            {t.nav.cta}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href={getWhatsAppUrl(t.whatsappMessage)}
            variant="secondary"
            external
            className="px-8 py-3 text-base"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            {t.contact.whatsapp}
          </Button>
        </div>
      </div>
    </article>
  );
}
