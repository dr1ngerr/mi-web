"use client";

import { localeOptions } from "@/lib/i18n/config";
import { useLanguage } from "./LanguageProvider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">{t.nav.language}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as typeof locale)}
        className="min-h-10 rounded-lg border-2 border-slate-300 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:border-sky-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
        aria-label={t.nav.language}
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
