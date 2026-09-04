"use client";

import Image from "next/image";
import type { ProjectScreenshotCopy } from "@/lib/i18n/projects";

export function CaseStudyGallery({
  screenshots,
  screenshotLabel,
}: {
  screenshots: (ProjectScreenshotCopy & { src: string })[];
  screenshotLabel: string;
}) {
  if (screenshots.length === 0) {
    return null;
  }

  return (
    <div className="space-y-10">
      {screenshots.map((shot, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <figure
            key={shot.src}
            className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-900">
                {screenshotLabel} {number}
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-950">{shot.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{shot.explanation}</p>
            </div>

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
          </figure>
        );
      })}
    </div>
  );
}
