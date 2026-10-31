"use client";

import { resetConsent } from "@/lib/consent";
import { useLanguage } from "./LanguageProvider";

export function CookieSettingsButton({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={resetConsent}
      className={className ?? "font-medium text-sky-900 underline underline-offset-2"}
    >
      {t.footer.cookieSettings}
    </button>
  );
}
