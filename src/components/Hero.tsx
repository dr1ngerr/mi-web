import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/content";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-100/80 to-white"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-indigo-300 bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-900">
            {heroContent.badge}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            {heroContent.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contacto" variant="primary" className="w-full sm:w-auto px-8 py-3 text-base">
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#servicios" variant="secondary" className="w-full sm:w-auto px-8 py-3 text-base">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
