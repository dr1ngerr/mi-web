"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { aboutAndreiContent, siteConfig } from "@/lib/content";
import { Button } from "./Button";
import { useLanguage } from "./LanguageProvider";

export function AboutAndrei() {
  const { t } = useLanguage();
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <section id="sobre-mi" className="border-b-2 border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
          <div className="mx-auto">
            {showPhoto ? (
              <Image
                src={aboutAndreiContent.photo}
                alt={aboutAndreiContent.photoAlt}
                width={200}
                height={200}
                className="h-44 w-44 rounded-2xl border-2 border-slate-200 object-cover shadow-md sm:h-48 sm:w-48"
                priority
                onError={() => setShowPhoto(false)}
              />
            ) : (
              <div
                className="flex h-44 w-44 items-center justify-center rounded-2xl border-2 border-sky-200 bg-sky-100 text-4xl font-bold text-sky-900 sm:h-48 sm:w-48"
                aria-label={aboutAndreiContent.photoAlt}
              >
                AB
              </div>
            )}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-sky-900">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {aboutAndreiContent.name}
            </h2>
            <p className="mt-1 text-base font-semibold text-sky-900">{t.about.role}</p>
            <p className="mt-1 text-sm text-slate-600">{t.about.location}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">{t.about.story}</p>

            <ul className="mt-5 space-y-2">
              {t.about.credentials.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-800" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/#contacto" variant="primary" className="min-h-11 px-6 py-2.5 text-base">
                {t.about.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={siteConfig.linkedin}
                variant="secondary"
                external
                className="min-h-11 px-6 py-2.5 text-base"
              >
                {t.about.linkedinCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
