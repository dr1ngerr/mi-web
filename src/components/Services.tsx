import Link from "next/link";
import { ArrowRight, Building2, Globe, Workflow, type LucideIcon } from "lucide-react";
import { services, servicesContent } from "@/lib/content";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  globe: Globe,
  building: Building2,
  workflow: Workflow,
};

export function Services() {
  return (
    <section id="servicios" className="border-b-2 border-slate-200 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {servicesContent.title}
          </h2>
          <p className="mt-2 text-base text-slate-700">{servicesContent.subtitle}</p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex gap-4 rounded-2xl border-2 border-slate-200/80 bg-white/75 p-4 shadow-sm backdrop-blur-sm sm:p-5 sm:hover:border-sky-400 sm:hover:bg-white sm:hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-900">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-slate-800">{service.offer}</p>
                  <p className="mt-1 text-sm leading-snug text-slate-600">{service.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sky-900">
                    Ver <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
