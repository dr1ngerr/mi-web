import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioContent } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="proyectos" className="border-y border-slate-200/70 bg-slate-900/[0.03] py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {portfolioContent.title}
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:mt-4 sm:text-lg">
            {portfolioContent.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-3">
          {portfolioContent.projects.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-slate-300 bg-white shadow-sm sm:shadow-md sm:hover:border-indigo-400 sm:hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={750}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={project.slug === "gestion-personal"}
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">{project.client}</p>

                {project.proof && (
                  <p className="mt-3 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900 sm:mt-4">
                    {project.proof}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4">{project.teaser}</p>

                <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-bold text-indigo-800">
                  {project.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center sm:mt-10">
          <Link
            href="/proyectos"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-indigo-800 underline-offset-2 hover:underline"
          >
            Ver todos los proyectos
          </Link>
        </p>
      </div>
    </section>
  );
}
