"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl, type CaseStudy } from "@/lib/content";
import { isProjectSlug, projectDictionaries } from "@/lib/i18n/projects";
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
      <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">{title}</h2>
      <div className="mt-4 text-base leading-relaxed text-ink-soft">{children}</div>
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
  const { locale, t } = useLanguage();
  const copy = isProjectSlug(study.slug)
    ? projectDictionaries[locale][study.slug]
    : null;

  if (!copy) {
    return null;
  }

  const screenshots = availableScreenshotSrcs.flatMap((src) => {
    if (src === study.coverImage) return [];
    const index = study.screenshots.findIndex((shot) => shot.src === src);
    if (index < 0 || !copy.screenshots[index]) return [];
    return [{ src, ...copy.screenshots[index] }];
  });

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p className="text-sm">
        <Link href="/" className="font-medium text-wine hover:underline">
          {t.caseStudy.backToHome}
        </Link>
        <span className="mx-2 text-line" aria-hidden>
          /
        </span>
        <Link href="/proyectos" className="font-medium text-wine hover:underline">
          {t.caseStudy.backToProjects.replace(/^←\s*/, "")}
        </Link>
      </p>

      <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-wine">
        {copy.category}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-6xl">
        {copy.headline}
      </h1>
      <p className="mt-4 text-sm font-medium text-ink-mute">{copy.client}</p>
      {copy.proof && (
        <p className="mt-4 inline-flex rounded-full border border-wine/20 bg-wine-soft px-3 py-1.5 text-xs font-bold text-wine-dark">
          {copy.proof}
        </p>
      )}

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-paper-deep">
        <Image
          src={study.coverImage}
          alt={copy.coverImageAlt}
          width={1200}
          height={750}
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>

      <dl className="mt-8 grid grid-cols-3 gap-3">
        {copy.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-line bg-paper-deep p-3 text-center sm:p-4">
            <dd className="text-2xl font-bold text-ink sm:text-3xl">{stat.value}</dd>
            <dt className="mt-1 text-xs font-medium text-ink-mute sm:text-sm">{stat.label}</dt>
          </div>
        ))}
      </dl>

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
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wine" aria-hidden />
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
              className="rounded-full border border-line bg-paper-deep px-3 py-1 text-sm font-semibold text-ink"
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
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wine" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="mt-14 mb-4 rounded-2xl border border-wine/20 bg-wine-soft px-6 pt-8 pb-10 text-center sm:px-8 sm:pt-10 sm:pb-12">
        <p className="text-lg font-semibold text-wine sm:text-xl">{copy.cta}</p>
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
