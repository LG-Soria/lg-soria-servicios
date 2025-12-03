"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/cn";
import { useWhatsappLink, type WhatsappCTAType } from "@/hooks/useWhatsappLink";
import { trackEvent } from "@/lib/analytics";

type WhatsAppFloatingButtonProps = {
  type?: WhatsappCTAType;
  customMessage?: string;
  label?: string;
  showLabelOnMobile?: boolean;
  position?: "bottom-right" | "bottom-left";
  /** clases para el wrapper fijo */
  className?: string;
  /** clases para el botón flotante en sí */
  buttonClassName?: string;
};

export function WhatsAppFloatingButton(props: WhatsAppFloatingButtonProps) {
  const {
    type = "generic",
    customMessage,
    label = "Escribime por WhatsApp",
    showLabelOnMobile = false,
    position = "bottom-right",
    className,
    buttonClassName,
  } = props;

  const { getWhatsappLink } = useWhatsappLink();
  const href = getWhatsappLink({ type, customMessage });

  const positionClasses =
    position === "bottom-right" ? "right-4 sm:right-5" : "left-4 sm:left-5";

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-4 sm:bottom-5 z-40",
        positionClasses,
        className
      )}
    >
      <Link
        href={href}
        target="_blank"
        aria-label={label}
        className={cn(
          "pointer-events-auto flex items-center justify-center rounded-full",
          "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/60",
          "hover:bg-[#1ebe5a]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]",
          "h-14 w-14 sm:h-11 sm:w-auto",
          "px-0 sm:px-4",
          "gap-0 sm:gap-2",
          "text-sm font-medium",
          buttonClassName
        )}
        onClick={() =>
          trackEvent("cta_whatsapp_click", {
            location: "floating_button",
            type,
            has_custom_message: !!customMessage,
          })
        }
      >
        <FaWhatsapp className="h-6 w-6" />

        <span className={cn(showLabelOnMobile ? "inline" : "hidden sm:inline")}>
          {label}
        </span>
      </Link>
    </div>
  );
}
