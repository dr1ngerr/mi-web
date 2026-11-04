"use client";

import { useId, useState } from "react";
import { ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react";
import { prefillContact } from "@/lib/contactPrefill";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function Pricing() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const baseId = useId();
  const situation = t.pricing.situations[active] ?? t.pricing.situations[0];

  function startHere() {
    prefillContact({
      need: situation.need,
      message: t.pricing.prefill
        .replace("{situation}", situation.label)
        .replace("{start}", situation.steps[0].name),
    });
  }

  return (
    <section id="precios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        {/* Aviso de precios de lanzamiento: bajos al empezar, subirán con los primeros clientes */}
        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-wine/25 bg-wine-soft p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-wine px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t.pricing.launchTitle}
          </span>
          <p className="text-sm leading-relaxed text-wine-dark sm:text-base">{t.pricing.launchText}</p>
        </div>

        {/* Selector de situación */}
        <p className="mt-10 text-sm font-semibold text-ink">{t.pricing.situationLabel}</p>
        <div
          role="tablist"
          aria-label={t.pricing.situationLabel}
          className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.pricing.situations.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.id}
                id={`${baseId}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => setActive(index)}
                className={cn(
                  "flex min-h-16 items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all",
                  selected
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-card text-ink hover:border-ink/40",
                )}
              >
                {item.label}
                <ChevronRight
                  className={cn("h-4 w-4 shrink-0 transition-transform", selected ? "rotate-90 text-blush" : "text-ink-mute")}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>

        {/* Recorrido para la situación elegida */}
        <div
          key={situation.id}
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="animate-rise mt-8 rounded-3xl border border-line bg-paper-deep p-5 sm:p-8"
        >
          <p className="max-w-2xl font-display text-xl leading-snug text-ink sm:text-2xl">
            {situation.intro}
          </p>

          <ol className="mt-8 grid gap-4 lg:grid-cols-3">
            {situation.steps.map((step, index) => {
              const first = index === 0;
              return (
                <li
                  key={step.name}
                  className={cn(
                    "relative flex flex-col rounded-2xl p-6",
                    first ? "bg-ink text-paper" : "border border-line bg-card text-ink",
                  )}
                >
                  <p
                    className={cn(
                      "inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase",
                      first ? "text-blush" : "text-wine",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] tracking-normal",
                        first ? "bg-wine text-white" : "bg-wine-soft text-wine",
                      )}
                    >
                      {index + 1}
                    </span>
                    {t.pricing.stepLabels[index]}
                  </p>
                  <h3 className="mt-5 text-lg font-semibold">{step.name}</h3>
                  <p
                    className={cn(
                      "mt-2 font-display text-3xl font-medium tracking-tight",
                      first ? "text-paper" : "text-ink",
                    )}
                  >
                    {step.price}
                  </p>
                  <p className={cn("mt-3 text-sm leading-relaxed", first ? "text-paper/75" : "text-ink-soft")}>
                    {step.description}
                  </p>
                  <ul
                    className={cn(
                      "mt-5 space-y-2 border-t pt-5",
                      first ? "border-paper/15" : "border-line",
                    )}
                  >
                    {step.includes.map((include) => (
                      <li key={include} className="flex gap-2.5 text-sm">
                        <Check
                          className={cn("mt-0.5 h-4 w-4 shrink-0", first ? "text-blush" : "text-wine")}
                          strokeWidth={2.5}
                          aria-hidden
                        />
                        {include}
                      </li>
                    ))}
                  </ul>

                  {index < situation.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-1/2 -right-4 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-wine lg:flex"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          <button
            type="button"
            onClick={startHere}
            className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-wine px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-wine-dark sm:w-auto"
          >
            {t.pricing.startCta}: {situation.steps[0].name}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Catálogo completo y garantías */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div>
            <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              {t.pricing.catalogTitle}
            </h3>
            <p className="mt-2 text-base text-ink-soft">{t.pricing.catalogSubtitle}</p>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {t.pricing.catalog.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-6 py-4">
                  <dt>
                    <span className="block text-base font-semibold text-ink">{item.name}</span>
                    <span className="mt-0.5 block text-sm text-ink-soft">{item.description}</span>
                  </dt>
                  <dd className="shrink-0 pt-0.5 text-right font-display text-lg font-medium whitespace-nowrap text-wine">
                    {item.price}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl bg-ink p-7 text-paper">
              <h3 className="text-xs font-bold tracking-[0.18em] text-blush uppercase">
                {t.pricing.alwaysTitle}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {t.pricing.always.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wine">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-dashed border-ink/25 p-7">
              <h3 className="font-display text-lg font-medium text-ink">{t.pricing.noteTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.pricing.note}</p>
              <Button href="/#contacto" className="mt-5 px-6">
                {t.pricing.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
