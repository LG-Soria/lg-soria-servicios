// src/config/site.ts
const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "lg-soria | Desarrollo web";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lg-soria.com.ar";

export const siteConfig = {
  name: siteName,
  url: siteUrl,
  contact: {
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "",
    whatsappDisplay: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_DISPLAY ?? "",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    instagram: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM ?? "",
    linkedin: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN ?? "",
    github: process.env.NEXT_PUBLIC_CONTACT_GITHUB ?? "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
