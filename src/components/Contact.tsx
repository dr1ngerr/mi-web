"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { contactContent, siteConfig } from "@/lib/content";

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

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola, me gustaría hablar sobre un proyecto web para mi negocio.",
  )}`;

  return (
    <section id="contacto" className="border-t border-slate-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {contactContent.title}
          </h2>
          <p className="mt-4 text-lg text-slate-700">{contactContent.subtitle}</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
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
                  className="mt-1.5 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-slate-950 transition-colors placeholder:text-slate-500 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/25"
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
                  className="mt-1.5 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-slate-950 transition-colors placeholder:text-slate-500 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/25"
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
                  className="mt-1.5 w-full resize-none rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-slate-950 transition-colors placeholder:text-slate-500 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/25"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-indigo-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-70"
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              {contactContent.whatsappButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
