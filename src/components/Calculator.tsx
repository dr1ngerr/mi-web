"use client";

import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n/config";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

const WORKING_WEEKS = 46;

const numberLocales: Record<Locale, string> = { es: "es-ES", en: "en-GB", ro: "ro-RO" };

function Slider({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  const id = useId();
  const fill = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-ink-soft">
          {label}
        </label>
        <span className="font-display text-2xl font-medium text-ink tabular-nums">{value}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range mt-3 w-full"
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
      />
    </div>
  );
}

export function Calculator() {
  const { locale, t } = useLanguage();
  const [people, setPeople] = useState(3);
  const [hours, setHours] = useState(5);
  const [cost, setCost] = useState(20);

  const hoursPerYear = people * hours * WORKING_WEEKS;
  const moneyPerYear = hoursPerYear * cost;

  const numberFormat = new Intl.NumberFormat(numberLocales[locale], { maximumFractionDigits: 0, useGrouping: "always" });
  const money = (value: number) =>
    new Intl.NumberFormat(numberLocales[locale], {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
      useGrouping: "always",
    }).format(value);

  const whatsappText = t.calculator.whatsappTemplate.replace(
    "{hours}",
    numberFormat.format(hoursPerYear),
  );

  return (
    <section id="calculadora" className="bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
        <SectionHeading
          eyebrow={t.calculator.eyebrow}
          title={t.calculator.title}
          subtitle={t.calculator.subtitle}
        />

        <div className="rounded-3xl border border-line bg-card p-6 shadow-[0_24px_48px_-32px_rgb(23_20_15/0.4)] sm:p-9">
          <div className="space-y-7">
            <Slider label={t.calculator.people} value={people} min={1} max={30} onChange={setPeople} />
            <Slider label={t.calculator.hours} value={hours} min={1} max={20} onChange={setHours} />
            <Slider label={t.calculator.cost} value={cost} min={10} max={60} onChange={setCost} />
          </div>

          <div
            className="mt-9 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
            aria-live="polite"
          >
            <div>
              <p className="font-display text-4xl font-medium tracking-tight text-ink tabular-nums sm:text-5xl">
                {numberFormat.format(hoursPerYear)}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{t.calculator.hoursResult}</p>
            </div>
            <div>
              <p className="font-display text-4xl font-medium tracking-tight text-wine tabular-nums sm:text-5xl">
                {money(moneyPerYear)}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{t.calculator.moneyResult}</p>
            </div>
          </div>

          <p className="mt-6 rounded-xl bg-wine-soft px-4 py-3 text-sm font-medium text-wine-dark">
            {t.calculator.half.replace("{money}", money(moneyPerYear / 2))}
          </p>

          <Button
            href={getWhatsAppUrl(whatsappText)}
            external
            onClick={() => trackEvent("whatsapp_click")}
            className="mt-6 min-h-12 w-full text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.calculator.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <p className="mt-3 text-center text-xs text-ink-mute">{t.calculator.method}</p>
        </div>
      </div>
    </section>
  );
}
