"use client";

import Link from "next/link";
import { ArrowRight, Building2, Globe, Workflow, type LucideIcon } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const serviceMeta = [
  { id: "web" as const, icon: Globe, href: "/desarrollo-web" },
  { id: "automatizacion" as const, icon: Workflow, href: "/automatizacion" },
  { id: "software" as const, icon: Building2, href: "/desarrollo-software" },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="border-b-2 border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {t.services.title}
          </h2>
          <p className="mt-2 text-base text-slate-700">{t.services.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {serviceMeta.map((service) => {
            const Icon = service.icon as LucideIcon;
            const copy = t.services.items[service.id];

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex gap-4 rounded-2xl border-2 border-slate-200/80 bg-white p-4 shadow-sm sm:p-5 sm:hover:border-sky-400 sm:hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-900">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-950">{copy.title}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-slate-800">{copy.offer}</p>
                  <p className="mt-1 text-sm leading-snug text-slate-600">{copy.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sky-900">
                    {t.services.see} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
