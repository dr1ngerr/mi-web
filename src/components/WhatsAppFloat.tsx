import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-700 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-900/25 md:hidden"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      WhatsApp
    </a>
  );
}
