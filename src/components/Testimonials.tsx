"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonios" className="border-b-2 border-line bg-card py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-2 text-base text-ink-soft">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3 lg:gap-8 lg:items-stretch">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name + item.role}
              className="flex h-full flex-col border-l-2 border-wine pl-5 sm:pl-6"
            >
              <blockquote className="text-base leading-relaxed text-ink-soft">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-5">
                <p className="text-sm font-bold text-ink">{item.name}</p>
                <p className="mt-0.5 text-sm text-ink-mute">{item.role}</p>
                <p className="mt-2">
                  <Link
                    href={`/proyectos/${item.projectSlug}`}
                    className="text-sm font-semibold text-wine underline-offset-2 hover:underline"
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
