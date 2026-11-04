"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />

        <div className="divide-y divide-line border-y border-line">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex min-h-16 w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-display text-lg font-medium text-ink sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all",
                      isOpen ? "rotate-45 border-wine bg-wine text-white" : "border-line text-ink",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                {isOpen && (
                  <p id={panelId} className="pr-12 pb-6 text-base leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
