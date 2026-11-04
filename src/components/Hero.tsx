"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-x-clip">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pt-24 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8 lg:pb-20">
        <div>
          <p className="animate-rise inline-flex items-center gap-2.5 text-sm leading-snug text-ink-soft">
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-wine" />
            <span>
              <span className="font-semibold text-ink">{siteConfig.name}</span> · {t.hero.eyebrow}
            </span>
          </p>

          <h1
            className="animate-rise mt-6 font-display text-[2.6rem] leading-[1.03] font-medium tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]"
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.titleA} <em className="font-normal text-wine italic">{t.hero.titleB}</em>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "160ms" }}
          >
            {t.hero.support}
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/#contacto" variant="primary" className="min-h-13 px-7 text-base">
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              href={getWhatsAppUrl(t.whatsappMessage)}
              variant="secondary"
              external
              onClick={() => trackEvent("whatsapp_click")}
              className="min-h-13 px-6 text-base"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              {t.hero.secondaryCta}
            </Button>
          </div>

          <ul
            className="animate-rise mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6"
            style={{ animationDelay: "320ms" }}
          >
            {t.hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink">
                <Check className="h-4 w-4 shrink-0 text-wine" strokeWidth={3} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise relative pb-16 lg:pb-0" style={{ animationDelay: "200ms" }}>
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[2rem] bg-wine-soft sm:-inset-6 lg:rotate-2"
          />
          <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_60px_-30px_rgb(23_20_15/0.45)] lg:-rotate-1">
            <div
              aria-hidden
              className="flex items-center gap-1.5 border-b border-line bg-paper-deep px-4 py-2.5"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            </div>
            <Image
              src="/portfolio/gestion-personal/01-panel-admin.png"
              alt="Panel de administración del sistema de gestión de personal"
              width={1024}
              height={721}
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="h-auto w-full"
            />
          </div>

          <Link
            href="/proyectos/gestion-personal"
            className="group absolute right-3 bottom-0 left-3 rounded-2xl bg-ink p-5 text-paper shadow-xl transition-transform hover:-translate-y-0.5 sm:right-auto sm:left-[-1rem] sm:max-w-[17rem] lg:bottom-[-3rem]"
          >
            <span className="block font-display text-4xl font-medium tracking-tight">
              {t.hero.cardValue}
            </span>
            <span className="mt-1 block text-sm leading-snug text-paper/75">
              {t.hero.cardLabel}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blush">
              {t.hero.cardCta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>

      <Ticker items={t.hero.ticker} scrollHint={t.hero.scrollHint} />
    </section>
  );
}

function Ticker({ items, scrollHint }: { items: string[]; scrollHint: string }) {
  const loop = [...items, ...items];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Pegada al borde inferior de la pantalla hasta llegar a su sitio bajo la portada
    <div className="sticky bottom-0 z-40">
      {/* Pista de que hay más contenido; desaparece al empezar a bajar */}
      <Link
        href="/#servicios"
        aria-hidden={scrolled}
        tabIndex={scrolled ? -1 : 0}
        className={cn(
          "absolute bottom-full left-4 mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-card/95 px-3 py-2 text-sm font-medium text-ink shadow-sm backdrop-blur transition-opacity duration-300 sm:left-1/2 sm:-translate-x-1/2 sm:px-4",
          scrolled && "pointer-events-none opacity-0",
        )}
      >
        <ChevronDown className="h-4 w-4 animate-bounce text-wine" aria-hidden />
        <span className="hidden sm:inline">{scrollHint}</span>
        <span className="sr-only sm:hidden">{scrollHint}</span>
      </Link>

      <div className="overflow-hidden bg-ink py-2.5 text-paper sm:py-4">
        <p className="sr-only">{items.join(", ")}</p>
        <ul aria-hidden className="animate-ticker flex w-max items-center">
          {loop.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-center gap-6 pr-6 font-display text-lg whitespace-nowrap italic sm:gap-8 sm:pr-8 sm:text-2xl"
            >
              {item}
              <span className="text-blush not-italic">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
