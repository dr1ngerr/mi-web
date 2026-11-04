"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { aboutAndreiContent, siteConfig } from "@/lib/content";
import { Button } from "./Button";
import { useLanguage } from "./LanguageProvider";

export function AboutAndrei() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-wine" />
          <Image
            src={aboutAndreiContent.photo}
            alt={aboutAndreiContent.photoAlt}
            width={400}
            height={400}
            sizes="(max-width: 1024px) 384px, 400px"
            className="relative aspect-square w-full rounded-[2rem] object-cover grayscale-[15%]"
          />
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

          <ul className="mt-8 flex flex-wrap gap-2">
            {t.about.credentials.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink"
              >
                <Check className="h-4 w-4 text-wine" strokeWidth={2.5} aria-hidden />
                {item}
              </li>
            ))}
          </ul>

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
