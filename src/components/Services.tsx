import { Bot, Sparkles, Target, type LucideIcon } from "lucide-react";
import { services, servicesContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  sparkles: Sparkles,
  target: Target,
  bot: Bot,
};

export function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {servicesContent.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{servicesContent.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.id}
                className={cn(
                  "group relative rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-md",
                  "comingSoon" in service && service.comingSoon && "opacity-95",
                )}
              >
                {"comingSoon" in service && service.comingSoon && (
                  <span className="absolute top-4 right-4 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-800">
                    {"badge" in service && service.badge ? service.badge : "Próximamente"}
                  </span>
                )}

                <div className="mb-5 inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-800 transition-colors group-hover:bg-indigo-200">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-700">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
