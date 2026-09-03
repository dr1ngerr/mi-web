import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { aboutAndreiContent, siteConfig } from "@/lib/content";
import { Button } from "./Button";

export function AboutAndrei() {
  const photoPath = path.join(process.cwd(), "public", "about", "andrei.jpg");
  const hasPhoto = existsSync(photoPath);

  return (
    <section id="sobre-mi" className="bg-white/50 py-14 backdrop-blur-[2px] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <div className="mx-auto">
            {hasPhoto ? (
              <Image
                src={aboutAndreiContent.photo}
                alt={aboutAndreiContent.photoAlt}
                width={240}
                height={240}
                className="h-56 w-56 rounded-2xl border-2 border-slate-200 object-cover shadow-md sm:h-60 sm:w-60"
                priority
              />
            ) : (
              <div
                className="flex h-56 w-56 items-center justify-center rounded-2xl border-2 border-indigo-200 bg-indigo-100 text-5xl font-bold text-indigo-900 sm:h-60 sm:w-60"
                aria-label={aboutAndreiContent.photoAlt}
              >
                AB
              </div>
            )}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-800">
              {aboutAndreiContent.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {aboutAndreiContent.name}
            </h2>
            <p className="mt-2 text-lg font-semibold text-indigo-900">{aboutAndreiContent.role}</p>
            <p className="mt-1 text-sm text-slate-600">{aboutAndreiContent.location}</p>
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {aboutAndreiContent.story}
            </p>

            <ul className="mt-8 space-y-3">
              {aboutAndreiContent.credentials.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-800 sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/#contacto" variant="primary" className="min-h-12 px-8 py-3 text-base">
                {aboutAndreiContent.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={siteConfig.linkedin}
                variant="secondary"
                external
                className="min-h-12 px-8 py-3 text-base"
              >
                {aboutAndreiContent.linkedinCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
