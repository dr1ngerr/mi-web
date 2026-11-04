"use client";

import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="relative border-t-2 border-ink pt-6">
              <span className="font-display text-6xl leading-none font-light text-wine">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
