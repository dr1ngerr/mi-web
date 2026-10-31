"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "mt-1.5 min-h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/25";

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      trackEvent("generate_lead");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  }

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (
    <section id="contacto" className="border-t-2 border-slate-300 bg-slate-100 py-14 pb-28 sm:py-20 sm:pb-28">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-700 sm:text-lg">{t.contact.subtitle}</p>

          <h3 className="mt-8 text-sm font-bold tracking-wider text-sky-900 uppercase">
            {t.contact.nextTitle}
          </h3>
          <ol className="mt-3 space-y-3">
            {t.contact.nextSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-base text-slate-800">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-700 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                {t.contact.name}
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                {t.contact.email}
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                maxLength={200}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                maxLength={5000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClasses} resize-none`}
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {/* Trampa para bots: oculta a personas y lectores de pantalla */}
            <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="min-h-12 w-full rounded-lg bg-indigo-700 px-5 py-3.5 text-base font-semibold text-white hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? t.contact.sending : t.contact.submit}
            </button>

            <p className="text-xs leading-relaxed text-slate-600">
              {t.contact.privacy}{" "}
              <Link href="/privacidad" className="font-medium text-sky-900 underline underline-offset-2">
                {t.contact.privacyLink}
              </Link>
              .
            </p>

            {status === "success" && (
              <p role="status" className="rounded-lg border-2 border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                {t.contact.success}
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                {t.contact.error}
              </p>
            )}
          </form>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="mb-3 text-center text-sm text-slate-600">{t.contact.preferChat}</p>
            <a
              href={whatsappUrl}
              onClick={() => trackEvent("whatsapp_click")}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-5 py-3.5 text-base font-semibold text-slate-950 hover:border-emerald-400 hover:bg-emerald-50"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {t.contact.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
