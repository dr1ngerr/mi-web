import { problemContent } from "@/lib/content";

export function Problem() {
  return (
    <section id="problema" className="border-b border-slate-200/70 bg-white/55 py-14 backdrop-blur-[2px] sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-800">
            {problemContent.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {problemContent.title}
          </h2>
          <ul className="mt-8 grid gap-3 text-left sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {problemContent.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-800 sm:px-5 sm:py-4 sm:text-base"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-700" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
