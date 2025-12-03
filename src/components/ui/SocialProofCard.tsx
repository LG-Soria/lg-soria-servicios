import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "@/components/ui/Card";

type SocialProofCardProps = {
  /** Rubro o tipo de cliente (ej: "Estudio jurídico", "Negocio local") */
  industry: string;
  /** Nombre de la persona o negocio */
  clientName: string;
  /** Rol o contexto (ej: "Dueño", "Fundadora", "Emprendimiento de indumentaria") */
  clientRole?: string;
  /** Situación antes de trabajar juntos */
  initialSituation: string;
  /** Qué se hizo / tipo de solución */
  whatWeDid: string;
  /** Resultado cualitativo o cuantitativo */
  result: string;
  /** Cita breve tipo testimonio directamente en primera persona (opcional) */
  quote?: string;
  /** Marca este caso como destacado */
  highlighted?: boolean;
  /** Clases extra para la card */
  className?: string;
  /** Slot opcional para algún elemento extra (ej: tag, logo pequeño) */
  extraTopRight?: ReactNode;
};

export function SocialProofCard(props: SocialProofCardProps) {
  const {
    industry,
    clientName,
    clientRole,
    initialSituation,
    whatWeDid,
    result,
    quote,
    highlighted = false,
    className,
    extraTopRight,
  } = props;

  return (
    <Card
      variant={highlighted ? "elevated" : "subtle"}
      padding="md"
      className={cn(
        "flex h-full flex-col border-border/70",
        highlighted && "border-brand/60 shadow-lg shadow-brand/25",
        className
      )}
    >
      <CardHeader className="mb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {industry}
            </p>
            <CardTitle className="text-base sm:text-lg">
              {clientName}
            </CardTitle>
            {clientRole && (
              <p className="text-xs text-muted-foreground">
                {clientRole}
              </p>
            )}
          </div>

          {extraTopRight && (
            <div className="shrink-0">
              {extraTopRight}
            </div>
          )}
        </div>
      </CardHeader>

      <CardBody className="space-y-4 text-sm text-muted-foreground">
        {quote && (
          <p className="text-sm italic text-foreground">
            “{quote}”
          </p>
        )}

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Antes
          </p>
          <p>{initialSituation}</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Qué se hizo
          </p>
          <p>{whatWeDid}</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Resultado
          </p>
          <p>{result}</p>
        </div>
      </CardBody>
    </Card>
  );
}
