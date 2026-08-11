"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, readStoredConsent, type ConsentValue } from "@/lib/consent";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function Analytics() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    setConsent(readStoredConsent());

    function handleConsentChange(event: Event) {
      const custom = event as CustomEvent<ConsentValue>;
      setConsent(custom.detail);
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  if (consent !== "granted") return null;

  return (
    <>
      {GTM_ID ? (
        <Script id="gtm-loader" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      ) : null}
      {META_PIXEL_ID ? (
        <Script id="meta-pixel-loader" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  );
}

export function trackEvent(eventName: "lead_form_submitted" | "whatsapp_clicked"): void {
  if (typeof window === "undefined") return;
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (dataLayer) {
    dataLayer.push({ event: eventName });
  }
}
