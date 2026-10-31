import { legalConfig } from "@/lib/content";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="border-b border-slate-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-slate-600">Última actualización: {legalConfig.updated}</p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-700 [&_a]:font-medium [&_a]:text-sky-900 [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-950 [&_li]:ml-5 [&_li]:list-disc">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

/** Solo muestra los datos del titular que ya están rellenados en legalConfig. */
export function LegalHolder() {
  const rows = [
    ["Titular", legalConfig.holder],
    ["NIF", legalConfig.nif],
    ["Domicilio", legalConfig.address],
    ["Email", legalConfig.email],
    ["Teléfono", legalConfig.phone],
  ].filter(([, value]) => value);

  return (
    <ul>
      {rows.map(([label, value]) => (
        <li key={label}>
          <strong>{label}:</strong> {value}
        </li>
      ))}
    </ul>
  );
}
