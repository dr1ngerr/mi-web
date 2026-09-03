import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, heroContent } from "@/lib/content";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-x-clip border-b border-slate-200/70 pt-24 pb-12 sm:pt-32 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-300/25 blur-3xl sm:h-[36rem] sm:w-[36rem]" />
        <div className="absolute top-20 -left-16 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute top-32 -right-10 h-56 w-56 rounded-full bg-slate-400/20 blur-3xl sm:h-72 sm:w-72" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {heroContent.name}
          </p>

          <h1 className="mt-4 text-[1.35rem] leading-snug font-bold tracking-tight text-slate-950 sm:mt-5 sm:text-3xl sm:leading-tight lg:text-4xl">
            {heroContent.headline}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
            {heroContent.support}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
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
              <MessageCircle className="h-5 w-5 text-emerald-700" />
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
