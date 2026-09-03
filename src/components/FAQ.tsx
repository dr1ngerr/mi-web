"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqContent } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white/50 py-14 backdrop-blur-[2px] sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {faqContent.title}
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:mt-4 sm:text-lg">{faqContent.subtitle}</p>
        </div>

        <div className="mt-8 divide-y-2 divide-slate-200 border-y-2 border-slate-200 sm:mt-12">
          {faqContent.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-3 py-4 text-left sm:gap-4 sm:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-950 sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-indigo-800 motion-safe:transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
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
