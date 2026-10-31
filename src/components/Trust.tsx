import { Check } from "lucide-react";
import { trustContent } from "@/lib/content";

export function Trust() {
  return (
    <section id="confianza" className="border-b border-slate-200/70 bg-white/55 py-14 backdrop-blur-[2px] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-indigo-800">
            {trustContent.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {trustContent.title}
          </h2>
          <p className="mt-3 text-base text-slate-700">{trustContent.subtitle}</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustContent.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-xl border-2 border-emerald-200 bg-emerald-50 px-4 py-3.5"
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
              </span>
              <span className="text-sm font-semibold text-slate-950 sm:text-base">{item.label}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
