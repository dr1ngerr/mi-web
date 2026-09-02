import Image from "next/image";
import { portfolioContent } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="proyectos" className="border-y border-slate-200 bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {portfolioContent.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioContent.projects.map((project) => {
            const cardContent = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="border-t-2 border-slate-300 bg-white p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-slate-950">{project.title}</h3>
                </div>
              </>
            );

            const className =
              "group overflow-hidden rounded-2xl border-2 border-slate-400 bg-white shadow-md transition-all duration-300 hover:border-indigo-400 hover:shadow-lg";

            if (project.href) {
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={project.title} className={className}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
