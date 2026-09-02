import { Briefcase, Code2, GitBranch, Zap, type LucideIcon } from "lucide-react";
import { aboutContent } from "@/lib/content";

const iconMap: Record<(typeof aboutContent.highlights)[number]["icon"], LucideIcon> = {
  briefcase: Briefcase,
  zap: Zap,
  code: Code2,
  git: GitBranch,
};

export function About() {
  return (
    <section id="enfoque" className="border-y border-slate-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {aboutContent.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">{aboutContent.text}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutContent.highlights.map((highlight) => {
              const Icon = iconMap[highlight.icon];

              return (
                <div
                  key={highlight.title}
                  className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-indigo-100 p-2.5 text-indigo-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-950">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
