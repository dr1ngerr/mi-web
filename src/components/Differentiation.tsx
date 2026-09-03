import { differentiationContent } from "@/lib/content";

export function Differentiation() {
  return (
    <section
      id="diferenciacion"
      className="relative overflow-hidden border-y-2 border-slate-900 bg-slate-950 py-14 text-white sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_80%,rgba(15,118,110,0.2),transparent_50%)]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-sky-300">
            {differentiationContent.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {differentiationContent.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
            {differentiationContent.text} {differentiationContent.detail}
          </p>

          <div className="mt-8 grid gap-2 sm:grid-cols-3 sm:gap-3">
            {differentiationContent.proofs.map((proof) => (
              <div
                key={proof.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  {proof.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{proof.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
