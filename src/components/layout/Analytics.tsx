"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  if (!GA_MEASUREMENT_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[Analytics] NEXT_PUBLIC_GA_MEASUREMENT_ID no está configurado."
      );
    }
    return null;
  }

  return (
    <>
      {/* Carga del script de gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Inicialización de GA4 */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Se desactiva el page_view automático para tener control
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
}
