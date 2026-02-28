export type TrackEventName =
  | "affiliate_click"
  | "email_submit"
  | "cta_click"
  | "redirect_go"
  | "thank_you_visit";

type TrackPayload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export function track(event: TrackEventName, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;

  const debug = process.env.NEXT_PUBLIC_TRACKING_DEBUG === "true";
  if (debug) console.log("[track]", event, payload);

  // GA4
  window.gtag?.("event", event, payload);

  // Meta Pixel
  // We keep a generic event name so you can map it in Events Manager.
  window.fbq?.("trackCustom", event, payload);

  // dataLayer (Google Ads / GTM)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
