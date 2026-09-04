"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: "/#servicios" },
    { label: t.nav.projects, href: "/proyectos" },
    { label: t.nav.about, href: "/#sobre-mi" },
    { label: t.nav.contact, href: "/#contacto" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="min-w-0 sm:min-w-[11rem]"
          onClick={() => setOpen(false)}
        >
          <span className="block truncate text-base font-bold tracking-tight text-slate-950 sm:text-lg">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs font-medium text-slate-600 sm:block">
            {t.positioning}
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <Button href="/contacto" variant="primary">
              {t.nav.cta}
            </Button>
          </div>
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="mb-3 flex items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:hidden">
            <span className="text-sm font-semibold text-slate-700">{t.nav.language}</span>
            <LanguageSwitcher />
          </div>
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-12 items-center text-base font-medium text-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <Button
                href="/contacto"
                variant="primary"
                className="min-h-12 w-full text-base"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
