import Link from "next/link";
import { ArrowRight, Bot, Building2, Globe, MessageCircle, Workflow, type LucideIcon } from "lucide-react";
import { getWhatsAppUrl, services, servicesContent } from "@/lib/content";
import { Button } from "./Button";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  globe: Globe,
  building: Building2,
  workflow: Workflow,
  bot: Bot,
};

export function Services() {
  return (
    <section id="servicios" className="bg-transparent py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {servicesContent.title}
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:mt-4 sm:text-lg">{servicesContent.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col rounded-2xl border-2 border-slate-200/80 bg-white/75 p-5 shadow-sm backdrop-blur-sm sm:p-8 sm:hover:border-sky-400 sm:hover:bg-white sm:hover:shadow-md"
              >
                <div className="mb-5 inline-flex self-start rounded-xl bg-indigo-100 p-3 text-indigo-800 transition-colors group-hover:bg-indigo-200">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-base font-semibold text-slate-900 sm:text-lg">{service.offer}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>

                <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-semibold text-indigo-800">
                  Ver servicio <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button href="/contacto" variant="primary" className="min-h-12 w-full px-6 py-3.5 text-base sm:w-auto sm:px-8">
            {servicesContent.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href={getWhatsAppUrl()}
            variant="secondary"
            external
            className="min-h-12 w-full px-6 py-3.5 text-base sm:w-auto sm:px-8"
          >
            <MessageCircle className="h-4 w-4 text-emerald-700" />
            {servicesContent.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
