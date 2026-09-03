import { ArrowDown, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, heroContent } from "@/lib/content";
import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-x-clip border-b-2 border-slate-200/90">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-300/25 blur-3xl sm:h-[36rem] sm:w-[36rem]" />
        <div className="absolute top-20 -left-16 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute top-32 -right-10 h-56 w-56 rounded-full bg-slate-400/20 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pt-24 pb-8 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {heroContent.name}
          </p>

          <h1 className="mt-4 text-[1.35rem] leading-snug font-bold tracking-tight text-slate-950 sm:mt-5 sm:text-3xl sm:leading-tight lg:text-4xl">
            {heroContent.headline}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
            {heroContent.support}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Button
              href="/contacto"
              variant="primary"
              className="min-h-12 w-full px-6 py-3.5 text-base sm:w-auto sm:px-8"
            >
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={getWhatsAppUrl()}
              variant="secondary"
              external
              className="min-h-12 w-full px-6 py-3.5 text-base sm:w-auto sm:px-8"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-8">
        <a
          href="#servicios"
          className="group inline-flex flex-col items-center gap-1.5 rounded-full px-4 py-3 text-slate-600 transition-colors hover:text-sky-800"
          aria-label="Seguir hacia abajo"
        >
          <span className="text-xs font-semibold tracking-wide uppercase">Descubre más</span>
          <span className="hero-scroll-hint inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 bg-white/80 shadow-sm group-hover:border-sky-400">
            <ArrowDown className="h-5 w-5" />
          </span>
        </a>
      </div>
    </section>
  );
}
