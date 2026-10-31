declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Envía un evento a Tag Manager. Sin consentimiento, GTM no se carga y nadie lo lee. */
export function trackEvent(event: "generate_lead" | "whatsapp_click") {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event });
}
