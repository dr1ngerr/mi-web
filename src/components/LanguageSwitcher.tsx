"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localeOptions } from "@/lib/i18n/config";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

function FlagEs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="24" height="16" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
    </svg>
  );
}

function FlagEn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12 0 V16 M0 8 H24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.5" />
    </svg>
  );
}

function FlagRo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="8" height="16" fill="#002B7F" />
      <rect x="8" width="8" height="16" fill="#FCD116" />
      <rect x="16" width="8" height="16" fill="#CE1126" />
    </svg>
  );
}

const flags: Record<Locale, (props: { className?: string }) => ReactNode> = {
  es: FlagEs,
  en: FlagEn,
  ro: FlagRo,
};

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = localeOptions.find((o) => o.code === locale) ?? localeOptions[0];
  const CurrentFlag = flags[current.code];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative inline-flex", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t.nav.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border-2 border-slate-300 bg-white px-2.5 text-slate-800 transition-colors hover:bg-slate-50"
      >
        <CurrentFlag className="h-4 w-6 rounded-[2px] shadow-sm" />
        <ChevronDown
          className={cn("h-4 w-4 text-slate-500 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={t.nav.language}
          className="absolute right-0 top-[calc(100%+0.35rem)] z-50 min-w-[10.5rem] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
        >
          {localeOptions.map((option) => {
            const Flag = flags[option.code];
            const active = locale === option.code;

            return (
              <li key={option.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(option.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
                    active
                      ? "bg-sky-50 font-semibold text-sky-900"
                      : "text-slate-700 hover:bg-slate-50",
                  )}
                >
                  <Flag className="h-4 w-6 shrink-0 rounded-[2px] shadow-sm" />
                  <span>{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
