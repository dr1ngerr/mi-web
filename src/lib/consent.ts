const STORAGE_KEY = "cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

export type Consent = "accepted" | "rejected" | "unset";

export function getConsent(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : "unset";
  } catch {
    return "unset";
  }
}

function notify() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function saveConsent(value: "accepted" | "rejected") {
  const revoked = getConsent() === "accepted" && value === "rejected";
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Sin almacenamiento el aviso volverá a salir en la próxima visita.
  }
  // GTM no se puede descargar de una página ya abierta.
  if (revoked) window.location.reload();
  else notify();
}

export function resetConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nada que borrar.
  }
  notify();
}

export function subscribeConsent(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}
