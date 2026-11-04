"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.services, href: "/#servicios" },
    { label: t.nav.work, href: "/#caso" },
    { label: t.nav.pricing, href: "/#precios" },
    { label: t.nav.about, href: "/#sobre-mi" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-paper transition-colors group-hover:bg-wine"
          >
            AB
          </span>
          <span className="truncate text-base font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-wine"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <div className="hidden md:block">
            <Button href="/#contacto" variant="primary" className="min-h-10 py-2.5">
              {t.nav.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink hover:bg-paper-deep lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper px-4 pt-2 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  className="flex min-h-14 items-center font-display text-2xl text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between gap-3 sm:hidden">
            <span className="text-sm font-semibold text-ink-soft">{t.nav.language}</span>
            <LanguageSwitcher />
          </div>
          <Button
            href="/#contacto"
            variant="primary"
            className="mt-5 min-h-12 w-full text-base"
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
          </Button>
        </div>
      )}
    </header>
  );
}
