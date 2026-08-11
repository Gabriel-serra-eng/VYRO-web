export const CONSENT_STORAGE_KEY = "vyro:cookie-consent";
export const CONSENT_EVENT = "vyro:consent-change";

export type ConsentValue = "granted" | "denied";

export function readStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return stored === "granted" || stored === "denied" ? stored : null;
}

export function storeConsent(value: ConsentValue): void {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }));
}
