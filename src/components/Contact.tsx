"use client";

import { FormEvent, useEffect, useState } from "react";
import { contactContent, getWhatsAppUrl } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
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
        setErrorMessage(data.error ?? "No se pudo enviar el mensaje.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Inténtalo de nuevo.");
    }
  }

  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="contacto" className="border-t-2 border-slate-300 bg-slate-100 py-14 pb-28 sm:py-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {contactContent.title}
          </h2>
          <p className="mt-2 text-base text-slate-700">{contactContent.subtitle}</p>
          {contactContent.closing ? (
            <p className="mt-2 text-lg font-semibold text-sky-900">{contactContent.closing}</p>
          ) : null}
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          {mounted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  {contactContent.formLabels.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 min-h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-500 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/25"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                  {contactContent.formLabels.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 min-h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-500 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/25"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                  {contactContent.formLabels.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full resize-none rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-500 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/25"
                  placeholder={contactContent.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="min-h-12 w-full rounded-lg bg-indigo-700 px-5 py-3.5 text-base font-semibold text-white hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Enviando..." : contactContent.formLabels.submit}
              </button>

              {status === "success" && (
                <p className="rounded-lg border-2 border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                  Mensaje enviado. Te responderé lo antes posible.
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
              {[contactContent.formLabels.name, contactContent.formLabels.email, contactContent.formLabels.message].map(
                (label) => (
                  <div key={label}>
                    <div className="mb-1.5 h-4 w-20 rounded bg-slate-200" />
                    <div className="h-11 w-full rounded-lg bg-slate-100" />
                  </div>
                ),
              )}
              <div className="h-11 w-full rounded-lg bg-indigo-200" />
            </div>
          )}

          <div className="mt-8">
            <p className="mb-3 text-center text-sm text-slate-600">¿Prefieres escribir por chat?</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-5 py-3.5 text-base font-semibold text-slate-950 hover:border-emerald-400 hover:bg-emerald-50"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {contactContent.whatsappButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
