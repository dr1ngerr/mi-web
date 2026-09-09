"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonios" className="border-b-2 border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-2 text-base text-slate-700">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3 lg:gap-8 lg:items-stretch">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name + item.role}
              className="flex h-full flex-col border-l-2 border-sky-600 pl-5 sm:pl-6"
            >
              <blockquote className="text-base leading-relaxed text-slate-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-5">
                <p className="text-sm font-bold text-slate-950">{item.name}</p>
                <p className="mt-0.5 text-sm text-slate-600">{item.role}</p>
                <p className="mt-2">
                  <Link
                    href={`/proyectos/${item.projectSlug}`}
                    className="text-sm font-semibold text-sky-900 underline-offset-2 hover:underline"
                  >
                    {item.projectLabel}
                  </Link>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
