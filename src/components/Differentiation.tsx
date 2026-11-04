"use client";

import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Differentiation() {
  const { t } = useLanguage();

  return (
    <section id="por-que" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, index) => (
            <li key={item.title} className="bg-card p-7 sm:p-8">
              <span className="font-display text-sm text-wine italic">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
