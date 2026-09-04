export type Locale = "es" | "en" | "ro";

export const DEFAULT_LOCALE: Locale = "es";

export const localeOptions: { code: Locale; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "ro", label: "Română" },
];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en" || value === "ro";
}
