"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
} from "@/components/ui/Card";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { useWhatsappLink, type WhatsappCTAType } from "@/hooks/useWhatsappLink";
import { trackEvent } from "@/lib/analytics";

type PackCardProps = {
  /** Nombre visible del pack (ej: "Landing page simple") */
  name: string;
  /** Etiqueta pequeña arriba del título (ej: "Pack 1") */
  label?: string;
  /** Texto para "para quién es" */
  forWho: string;
  /** Lista de puntos de "Qué incluye" */
  includes: readonly string[];
  /** Lista opcional de beneficios concretos */
  benefits?: readonly string[];
  /** Plazo estimado (ej: "10 a 15 días") */
  timeframe?: string;
  /** Rango de inversión (ej: "$150.000 a $250.000") */
  investmentRange?: string;
  /** Marca este pack como destacado / recomendado */
  recommended?: boolean;
  /** Tipo de CTA para el helper de WhatsApp (pack_1, pack_2, etc.) */
  whatsappType?: WhatsappCTAType;
  /** Mensaje custom para WhatsApp (si se quiere sobreescribir el texto base) */
  customWhatsappMessage?: string;
  /** Texto del botón de CTA */
  ctaLabel?: string;
  /** Permite sobrescribir el href del botón si no se quiere usar WhatsApp */
  hrefOverride?: string;
  /** Contenido adicional opcional (ej: nota de aclaración) */
  extraNote?: ReactNode;
  /** Clases extra para la card */
  className?: string;
};

export function PackCard(props: PackCardProps) {
  const {
    name,
    label,
    forWho,
    includes,
    benefits,
    timeframe,
    investmentRange,
    recommended = false,
    whatsappType = "generic",
    customWhatsappMessage,
    ctaLabel = "Quiero este pack",
    hrefOverride,
    extraNote,
    className,
  } = props;

  const { getWhatsappLink } = useWhatsappLink();

  const href =
    hrefOverride ??
    getWhatsappLink({
      type: whatsappType,
      customMessage: customWhatsappMessage,
    });

  return (
    <Card
      variant={recommended ? "elevated" : "outline"}
      padding="lg"
      className={cn(
        "flex h-full flex-col",
        recommended && "border-brand/70 shadow-lg shadow-brand/30",
        className
      )}
    >
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            {label && <CardSubtitle>{label}</CardSubtitle>}
            <CardTitle>{name}</CardTitle>
          </div>

          {recommended && (
            <span className="inline-flex items-center rounded-full border border-brand/50 bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
              Recomendado
            </span>
          )}
        </div>

        {(investmentRange || timeframe) && (
          <div className="mt-2 text-sm">
            {investmentRange && (
              <p className="font-medium text-foreground">{investmentRange}</p>
            )}
            {timeframe && (
              <p className="text-xs text-muted-foreground">
                Plazo estimado: {timeframe}
              </p>
            )}
          </div>
        )}
      </CardHeader>

      <CardBody className="flex-1 space-y-5">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Para quién es
          </p>
          <p className="text-sm text-foreground">{forWho}</p>
        </div>

        {includes.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Qué incluye
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {includes.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {benefits && benefits.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Beneficios concretos
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {benefits.map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        )}

        {extraNote && <div className="text-xs text-muted-foreground">{extraNote}</div>}
      </CardBody>

      <CardFooter className="mt-6 flex flex-col items-stretch gap-3">
        <ButtonCTA
          href={href}
          fullWidth
          size="md"
          onClick={() =>
            trackEvent("cta_whatsapp_click", {
              location: "packs",
              pack: whatsappType,
              label,
            })
          }
        >
          {ctaLabel}
        </ButtonCTA>

        {timeframe && !investmentRange && (
          <p className="text-xs text-muted-foreground text-center">
            Plazo estimado: {timeframe}
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
