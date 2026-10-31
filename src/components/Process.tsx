"use client";

import { useLanguage } from "./LanguageProvider";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="border-b-2 border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:text-lg">{t.process.subtitle}</p>
        </div>

        <ol className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-700 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
