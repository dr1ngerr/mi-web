"use client";

import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="precios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.pricing.items.map((item) => (
            <li
              key={item.name}
              className={cn(
                "relative flex flex-col rounded-3xl p-7",
                item.featured
                  ? "bg-ink text-paper shadow-[0_30px_60px_-30px_rgb(23_20_15/0.6)]"
                  : "border border-line bg-card text-ink",
              )}
            >
              {item.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-wine px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  {t.pricing.badge}
                </span>
              )}
              <h3 className="text-base font-semibold">{item.name}</h3>
              <p
                className={cn(
                  "mt-4 font-display text-3xl font-medium tracking-tight",
                  item.featured ? "text-paper" : "text-ink",
                )}
              >
                {item.price}
              </p>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  item.featured ? "text-paper/75" : "text-ink-soft",
                )}
              >
                {item.description}
              </p>
              <ul
                className={cn(
                  "mt-6 space-y-2.5 border-t pt-6",
                  item.featured ? "border-paper/15" : "border-line",
                )}
              >
                {item.includes.map((include) => (
                  <li key={include} className="flex gap-2.5 text-sm">
                    <Check
                      className={cn("mt-0.5 h-4 w-4 shrink-0", item.featured ? "text-blush" : "text-wine")}
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    {include}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-dashed border-ink/25 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft">{t.pricing.note}</p>
          <Button href="/#contacto" className="shrink-0 px-6">
            {t.pricing.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
