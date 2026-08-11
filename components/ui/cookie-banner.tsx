"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { readStoredConsent, storeConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readStoredConsent() === null);
  }, []);

  if (!visible) return null;

  function handleChoice(choice: "granted" | "denied") {
    storeConsent(choice);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      className="glass fixed inset-x-4 bottom-4 z-50 flex flex-col gap-4 rounded-2xl p-5 sm:inset-x-auto sm:right-6 sm:max-w-md"
    >
      <p className="text-sm text-neutral-200">
        Usamos cookies para medir performance e personalizar sua experiencia. Voce pode aceitar ou
        recusar o rastreio de marketing (GTM/Meta Pixel) a qualquer momento.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" className="px-5 py-2.5 text-sm" onClick={() => handleChoice("granted")}>
          Aceitar cookies
        </Button>
        <Button variant="secondary" className="px-5 py-2.5 text-sm" onClick={() => handleChoice("denied")}>
          Recusar
        </Button>
      </div>
    </div>
  );
}
