import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { trustContent } from "@/lib/content";

function logoExists(logo?: string) {
  if (!logo) return false;
  return existsSync(path.join(process.cwd(), "public", logo.replace(/^\//, "")));
}

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

        <div className="mt-14">
          <h3 className="text-center text-lg font-bold text-slate-950">{trustContent.clientsTitle}</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
            {trustContent.clientsNote}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {trustContent.clients.map((client) => {
              const hasLogo = logoExists(client.logo);

              return (
                <Link
                  key={client.name}
                  href={client.href}
                  className="group flex flex-col rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 transition-all hover:border-indigo-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-14 items-center">
                    {hasLogo && client.logo ? (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={140}
                        height={40}
                        className="h-10 w-auto max-w-[140px] object-contain"
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-800">{client.name}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{client.project}</p>
                  <p className="mt-2 text-sm font-semibold text-emerald-800">{client.result}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-800">
                    Ver caso <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
