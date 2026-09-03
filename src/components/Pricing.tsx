import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, pricingContent } from "@/lib/content";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="precios" className="border-y border-slate-200/70 bg-sky-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {pricingContent.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{pricingContent.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {pricingContent.items.map((item) => (
            <article
              key={item.name}
              className={cn(
                "flex flex-col rounded-2xl border-2 bg-white p-6 shadow-sm sm:p-8",
                item.featured
                  ? "border-indigo-400 shadow-md shadow-indigo-100"
                  : "border-slate-200",
              )}
            >
              {item.featured && (
                <span className="mb-4 inline-flex self-start rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-900">
                  Referencia clara
                </span>
              )}

              <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
              <p className="mt-3 text-2xl font-bold text-indigo-900">{item.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>

              <ul className="mt-6 space-y-2">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-slate-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
          {pricingContent.note}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contacto" variant="primary" className="w-full sm:w-auto px-8 py-3 text-base">
            {pricingContent.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href={getWhatsAppUrl()}
            variant="secondary"
            external
            className="w-full sm:w-auto px-8 py-3 text-base"
          >
            <MessageCircle className="h-4 w-4 text-emerald-700" />
            {pricingContent.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
