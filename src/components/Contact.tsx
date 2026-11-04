"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_PREFILL_EVENT, type ContactPrefill } from "@/lib/contactPrefill";
import type { NeedKey } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

type Status = "idle" | "loading" | "success" | "error";

const needKeys: NeedKey[] = ["web", "automatizacion", "software", "unsure"];

const emptyForm = { need: "" as NeedKey | "", site: "", name: "", email: "", message: "", website: "" };

const inputClasses =
  "mt-2 min-h-12 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-mute focus:border-wine focus:bg-card focus:outline-none focus:ring-2 focus:ring-wine/20";

const labelClasses = "block text-sm font-semibold text-ink";

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const lastPrefill = useRef("");

  // Precios u otras secciones pueden dejar elegida la necesidad y un mensaje inicial.
  useEffect(() => {
    function onPrefill(event: Event) {
      const { need, message } = (event as CustomEvent<ContactPrefill>).detail;
      setForm((current) => ({
        ...current,
        need,
        // Solo pisamos el mensaje si está vacío o si lo escribimos nosotros antes
        message:
          !current.message.trim() || current.message === lastPrefill.current
            ? message
            : current.message,
      }));
      lastPrefill.current = message;
      setStatus("idle");
    }

    window.addEventListener(CONTACT_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(CONTACT_PREFILL_EVENT, onPrefill);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          need: form.need ? t.contact.needs[form.need] : "",
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      trackEvent("generate_lead");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-ink py-20 pb-28 text-paper sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-blush uppercase">
            <span aria-hidden className="h-px w-6 bg-blush" />
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/75">{t.contact.subtitle}</p>

          <h3 className="mt-10 text-xs font-bold tracking-[0.18em] text-paper/50 uppercase">
            {t.contact.auditTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            {t.contact.auditItems.map((item) => (
              <li key={item} className="flex gap-3 text-base text-paper/90">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wine">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-paper/15 pt-8">
            <p className="text-sm text-paper/60">{t.contact.preferChat}</p>
            <a
              href={getWhatsAppUrl(t.whatsappMessage)}
              onClick={() => trackEvent("whatsapp_click")}
              className="mt-3 inline-flex min-h-12 items-center gap-2 rounded-full border border-paper/25 px-5 py-3 text-base font-semibold text-paper transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              {t.contact.whatsapp}
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-card p-6 text-ink sm:p-9">
          <form onSubmit={handleSubmit} className="space-y-6">
            <fieldset>
              <legend className={labelClasses}>{t.contact.needLabel}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {needKeys.map((key) => {
                  const active = form.need === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setForm({ ...form, need: active ? "" : key })}
                      className={cn(
                        "min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                        active
                          ? "border-wine bg-wine text-white"
                          : "border-line bg-paper text-ink hover:border-ink/40",
                      )}
                    >
                      {t.contact.needs[key]}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClasses}>
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
                <label htmlFor="email" className={labelClasses}>
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
            </div>

            <div>
              <label htmlFor="site" className={labelClasses}>
                {t.contact.site}{" "}
                <span className="font-normal text-ink-mute">({t.contact.optional})</span>
              </label>
              <input
                id="site"
                type="text"
                inputMode="url"
                autoComplete="url"
                maxLength={200}
                value={form.site}
                onChange={(e) => setForm({ ...form, site: e.target.value })}
                className={inputClasses}
                placeholder={t.contact.sitePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
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
              className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-wine px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-wine-dark disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? t.contact.sending : t.contact.submit}
              {status !== "loading" && (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </button>

            <p className="text-xs leading-relaxed text-ink-mute">
              {t.contact.privacy}{" "}
              <Link href="/privacidad" className="font-medium text-wine underline underline-offset-2">
                {t.contact.privacyLink}
              </Link>
              .
            </p>

            {status === "success" && (
              <p
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900"
              >
                {t.contact.success}
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900"
              >
                {t.contact.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
