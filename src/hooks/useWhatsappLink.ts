"use client";

import { useCallback } from "react";
import { siteConfig } from "@/config/site";

export type WhatsappCTAType =
  | "generic"
  | "hero"
  | "pack_1"
  | "pack_2"
  | "pack_3"
  | "pack_4"
  | "floating";

type GetWhatsappLinkOptions = {
  type?: WhatsappCTAType;
  customMessage?: string;
};

function buildBaseMessage(type: WhatsappCTAType): string {
  switch (type) {
    case "hero":
      return "Hola Lucas, vi tu landing de servicios web y quiero hablar sobre un proyecto.";
    case "pack_1":
      return "Hola Lucas, me interesa el Pack 1 (Landing page simple). ¿Podemos ver detalles?";
    case "pack_2":
      return "Hola Lucas, me interesa el Pack 2 (Web de varias secciones).";
    case "pack_3":
      return "Hola Lucas, me interesa el Pack 3 (Web con integraciones).";
    case "pack_4":
      return "Hola Lucas, quiero consultar por un proyecto a medida / sistema web personalizado.";
    case "floating":
      return "Hola Lucas, quiero hacerte una consulta rápida sobre desarrollo web.";
    case "generic":
    default:
      return "Hola Lucas, quiero consultar por tus servicios de desarrollo web.";
  }
}

function normalizePhone(phone: string): string {
  // Se eliminan caracteres no numéricos por si el número tiene espacios o símbolos
  return phone.replace(/[^\d]/g, "");
}

export function useWhatsappLink() {
  const phone = siteConfig.contact.whatsapp;

  const getWhatsappLink = useCallback(
    (options: GetWhatsappLinkOptions = {}) => {
      const { type = "generic", customMessage } = options;

      if (!phone) {
        if (process.env.NODE_ENV === "development") {
          // Importante: avisar en consola si falta configurar el número
          console.warn(
            "[useWhatsappLink] Número de WhatsApp no configurado en siteConfig.contact.whatsapp"
          );
        }
        return "#whatsapp-not-configured";
      }

      const message = customMessage ?? buildBaseMessage(type);
      const encodedMessage = encodeURIComponent(message);
      const cleanPhone = normalizePhone(phone);

      return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    },
    [phone]
  );

  return { getWhatsappLink };
}
