"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { getConsent, saveConsent, subscribeConsent, type Consent } from "@/lib/consent";
import { useLanguage } from "./LanguageProvider";

const GTM_ID = "GTM-TRJJDHW5";

export function CookieConsent() {
  const { t } = useLanguage();
  const consent = useSyncExternalStore<Consent | "server">(
    subscribeConsent,
    getConsent,
    () => "server",
  );

  return (
    <>
      {consent === "accepted" && (
        <Script id="google-tag-manager" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      )}

      {consent === "unset" && (
        <div
          role="region"
          aria-label={t.footer.cookies}
          className="fixed inset-x-3 bottom-20 z-[60] rounded-2xl border border-line bg-card p-5 shadow-xl md:right-4 md:bottom-4 md:left-auto md:max-w-md"
        >
          <p className="text-sm leading-relaxed text-ink">
            {t.cookies.text}{" "}
            <Link href="/cookies" className="font-medium text-wine underline underline-offset-2">
              {t.cookies.more}
            </Link>
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="min-h-11 rounded-full border border-line bg-card px-4 text-sm font-semibold text-ink hover:bg-paper-deep"
            >
              {t.cookies.reject}
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="min-h-11 rounded-full border border-line bg-card px-4 text-sm font-semibold text-ink hover:bg-paper-deep"
            >
              {t.cookies.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
