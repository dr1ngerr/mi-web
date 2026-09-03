import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { serviceLadderContent } from "@/lib/content";
import { Button } from "./Button";

export function ServiceLadder() {
  return (
    <section id="escalera" className="border-y border-slate-200 bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {serviceLadderContent.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{serviceLadderContent.subtitle}</p>
        </div>

        <ol className="mx-auto mt-14 max-w-3xl space-y-0">
          {serviceLadderContent.steps.map((step, index) => {
            const isLast = index === serviceLadderContent.steps.length - 1;

            return (
              <li key={step.title} className="relative">
                <Link
                  href={step.href}
                  className="group flex gap-4 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md sm:gap-6 sm:p-6"
                >
                  <div className="flex w-10 shrink-0 flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-900">
                      {index + 1}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                        {step.stage}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {step.ticket}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-slate-950 group-hover:text-indigo-900 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{step.description}</p>
                  </div>

                  <ArrowRight className="mt-2 hidden h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-700 sm:block" />
                </Link>

                {!isLast && (
                  <div className="flex justify-center py-2" aria-hidden>
                    <ArrowDown className="h-5 w-5 text-indigo-400" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-600">
          {serviceLadderContent.note}
        </p>

        <div className="mt-8 flex justify-center">
          <Button href="/contacto" variant="primary" className="px-8 py-3 text-base">
            {serviceLadderContent.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
