import type { NeedKey } from "./i18n/dictionaries";

/** Evento con el que otras secciones rellenan el formulario de contacto antes de llevar a él. */
export const CONTACT_PREFILL_EVENT = "contact:prefill";

export type ContactPrefill = { need: NeedKey; message: string };

export function prefillContact(detail: ContactPrefill) {
  window.dispatchEvent(new CustomEvent<ContactPrefill>(CONTACT_PREFILL_EVENT, { detail }));

  // Las páginas con precios (inicio, contacto, sobre mí) incluyen siempre el formulario
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
}
