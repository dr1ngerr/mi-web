"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { aboutAndreiContent, siteConfig } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (
    <section className="relative overflow-x-clip border-b-2 border-slate-200/90">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-[28rem] w-[28rem] rounded-full bg-sky-300/25 blur-3xl sm:h-[36rem] sm:w-[36rem]" />
        <div className="absolute top-32 -right-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-20 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:px-8 lg:pb-24">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={aboutAndreiContent.photo}
              alt={aboutAndreiContent.photoAlt}
              width={48}
              height={48}
              priority
              className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-md"
            />
            <p className="text-sm leading-snug text-slate-700">
              <span className="block font-bold text-slate-950">{siteConfig.name}</span>
              {t.hero.eyebrow}
            </p>
          </div>

          <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight [text-wrap:wrap] text-slate-950 sm:text-5xl lg:text-[2.9rem]">
            {t.hero.headline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
            {t.hero.support}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="/contacto"
              variant="primary"
              className="min-h-12 w-full px-7 py-3.5 text-base sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={whatsappUrl}
              variant="secondary"
              external
              onClick={() => trackEvent("whatsapp_click")}
              className="min-h-12 w-full px-6 py-3.5 text-base sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              {t.hero.secondaryCta}
            </Button>
          </div>

          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
            {t.hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <Check className="h-4 w-4 shrink-0 text-emerald-700" strokeWidth={3} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-10 sm:pb-8">
          <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl shadow-slate-900/10">
            <div aria-hidden className="flex gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>
            <Image
              src="/portfolio/gestion-personal/01-panel-admin.png"
              alt="Panel de administración del sistema de gestión de personal"
              width={1024}
              height={721}
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="h-auto w-full"
            />
          </div>

          <Link
            href="/proyectos/gestion-personal"
            className="absolute right-3 bottom-0 left-3 rounded-xl border-2 border-slate-200 bg-white p-4 shadow-lg transition-colors hover:border-sky-400 sm:right-auto sm:left-6 sm:max-w-xs"
          >
            <span className="block text-2xl font-bold tracking-tight text-slate-950">
              {t.hero.proofValue}
            </span>
            <span className="mt-0.5 block text-sm leading-snug text-slate-700">
              {t.hero.proofLabel}
            </span>
            <span className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-sky-900">
              {t.hero.proofCta} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
