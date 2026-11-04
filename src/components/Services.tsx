"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceKey } from "@/lib/i18n/dictionaries";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

const serviceOrder: { key: ServiceKey; href: string }[] = [
  { key: "web", href: "/desarrollo-web" },
  { key: "automatizacion", href: "/automatizacion" },
  { key: "software", href: "/desarrollo-software" },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {serviceOrder.map(({ key, href }, index) => {
            const item = t.services.items[key];

            return (
              <li key={key}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-wine/40 hover:shadow-[0_24px_48px_-28px_rgb(23_20_15/0.35)] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-5xl leading-none font-light text-wine/30 transition-colors group-hover:text-wine">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-wine group-hover:bg-wine group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-2xl leading-snug font-medium text-ink">
                    {item.pain}
                  </h3>
                  <p className="mt-2 text-sm font-bold tracking-wide text-wine uppercase">
                    {item.offer}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">{item.description}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-sm text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-wine" strokeWidth={2.5} aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto pt-8 text-sm font-semibold text-ink underline decoration-wine/40 decoration-2 underline-offset-4 group-hover:decoration-wine">
                    {t.services.see}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
