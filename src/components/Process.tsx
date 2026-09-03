import { processContent } from "@/lib/content";

export function Process() {
  return (
    <section id="proceso" className="border-y border-slate-200/70 bg-sky-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {processContent.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{processContent.subtitle}</p>
        </div>

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processContent.steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border-2 border-slate-200 bg-white p-5"
            >
              <span className="text-sm font-bold text-indigo-800">{step.number}</span>
              <h3 className="mt-3 text-base font-bold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
