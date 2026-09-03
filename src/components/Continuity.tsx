import { ArrowRight } from "lucide-react";
import { continuityContent } from "@/lib/content";
import { Button } from "./Button";

export function Continuity() {
  return (
    <section id="continuidad" className="bg-white/50 py-20 backdrop-blur-[2px] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-800">
            {continuityContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {continuityContent.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{continuityContent.subtitle}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{continuityContent.text}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {continuityContent.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/mantenimiento" variant="primary" className="px-8 py-3 text-base">
            {continuityContent.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={continuityContent.secondaryHref} variant="secondary" className="px-8 py-3 text-base">
            {continuityContent.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
