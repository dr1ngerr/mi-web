"use client";

import { siteConfig } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

export function WhatsAppFloat() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/25 md:hidden"
      aria-label={t.whatsappFloat}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {t.whatsappFloat}
    </a>
  );
}
