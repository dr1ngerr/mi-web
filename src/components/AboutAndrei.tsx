"use client";

import { ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { Button } from "./Button";
import { useLanguage } from "./LanguageProvider";

export function AboutAndrei() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-wine" />
          <div className="relative rounded-[2rem] bg-ink p-8 text-paper sm:p-10">
            <span
              aria-hidden
              className="flex h-16 w-16 items-center justify-center rounded-full bg-paper font-display text-2xl font-semibold text-ink"
            >
              AB
            </span>
            <p className="mt-6 font-display text-2xl font-medium">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-paper/70">{t.positioning}</p>
            <ul className="mt-8 space-y-3 border-t border-paper/15 pt-6">
              {t.about.credentials.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-paper/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blush" strokeWidth={2.5} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-wine uppercase">
            <span aria-hidden className="h-px w-6 bg-wine" />
            {t.about.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] font-medium tracking-tight text-ink sm:text-[2.6rem]">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{t.about.story}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.about.story2}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contacto" className="px-6 text-base">
              {t.about.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href={siteConfig.linkedin} variant="secondary" newTab className="px-6 text-base">
              {t.about.linkedinCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
