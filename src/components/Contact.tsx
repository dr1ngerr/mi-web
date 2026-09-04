"use client";

import { FormEvent, useEffect, useState } from "react";
import { siteConfig } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Error");
    }
  }

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (
    <section id="contacto" className="border-t-2 border-slate-300 bg-slate-100 py-14 pb-28 sm:py-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-base text-slate-700">{t.contact.subtitle}</p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          {mounted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 min-h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/25"
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 min-h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/25"
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
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full resize-none rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/25"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="min-h-12 w-full rounded-lg bg-indigo-700 px-5 py-3.5 text-base font-semibold text-white hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? t.contact.sending : t.contact.submit}
              </button>

              {status === "success" && (
                <p className="rounded-lg border-2 border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                  {t.contact.success}
                </p>
              )}

              {status === "error" && (
                <p className="rounded-lg border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                  {errorMessage}
                </p>
              )}
            </form>
          ) : (
            <div className="space-y-5" aria-hidden>
              {[t.contact.name, t.contact.email, t.contact.message].map((label) => (
                <div key={label}>
                  <div className="mb-1.5 h-4 w-20 rounded bg-slate-200" />
                  <div className="h-11 w-full rounded-lg bg-slate-100" />
                </div>
              ))}
              <div className="h-11 w-full rounded-lg bg-indigo-200" />
            </div>
          )}

          <div className="mt-8">
            <p className="mb-3 text-center text-sm text-slate-600">{t.contact.preferChat}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
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
