// src/lib/analytics.ts

export type AnalyticsEventName =
  | "cta_whatsapp_click"
  | "contact_form_submitted";

type AnalyticsEventParams = Record<string, unknown>;

export function trackEvent(
  name: AnalyticsEventName,
  params?: AnalyticsEventParams
) {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag as
    | ((...args: unknown[]) => void)
    | undefined;

  if (!gtag) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[analytics] gtag no está disponible en window.");
    }
    return;
  }

  gtag("event", name, params ?? {});
}
