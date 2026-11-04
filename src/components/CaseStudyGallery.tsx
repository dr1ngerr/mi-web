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
            className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm"
          >
            <div className="border-b border-line bg-paper-deep px-5 py-4 sm:px-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-wine">
                {screenshotLabel} {number}
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">{shot.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{shot.explanation}</p>
            </div>

            <div className="bg-paper-deep">
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
