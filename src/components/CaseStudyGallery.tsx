import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import type { CaseStudyScreenshot } from "@/lib/caseStudies";

function screenshotExists(src: string) {
  const relative = src.replace(/^\//, "");
  return existsSync(path.join(process.cwd(), "public", relative));
}

export function CaseStudyGallery({
  screenshots,
}: {
  screenshots: CaseStudyScreenshot[];
}) {
  return (
    <div className="space-y-10">
      <p className="text-sm text-slate-600">
        Recorrido por pantallas reales del sistema — no un único recorte de dashboard.
      </p>

      {screenshots.map((shot, index) => {
        const available = screenshotExists(shot.src);
        const number = String(index + 1).padStart(2, "0");

        return (
          <figure
            key={shot.src}
            className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                Captura {number}
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-950">{shot.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{shot.explanation}</p>
            </div>

            {available ? (
              <div className="bg-slate-100">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1400}
                  height={900}
                  className="h-auto w-full object-contain object-top"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            ) : (
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-2 bg-slate-100 px-6 py-16 text-center">
                <p className="text-sm font-semibold text-slate-800">Captura pendiente</p>
                <p className="max-w-md text-xs leading-relaxed text-slate-600">
                  Añade el archivo{" "}
                  <code className="break-all rounded bg-white px-1.5 py-0.5 text-slate-900">{shot.src}</code>{" "}
                  para mostrar esta pantalla a tamaño completo.
                </p>
              </div>
            )}
          </figure>
        );
      })}
    </div>
  );
}
