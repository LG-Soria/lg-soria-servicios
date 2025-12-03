import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TimelineStepProps = {
  step: number;
  title: ReactNode;
  description?: ReactNode;
  highlighted?: boolean;
  className?: string;
};

export function TimelineStep({
  step,
  title,
  description,
  highlighted = false,
  className,
}: TimelineStepProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      {/* Columna izquierda: solo el círculo */}
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
        <div
          className={cn(
            "relative z-20 flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold",
            highlighted
              ? "border-brand bg-brand text-white shadow-md shadow-brand/30"
              : "border-border bg-card text-foreground"
          )}
        >
          {step}
        </div>
      </div>

      {/* Contenido del paso */}
      <div className="flex-1 space-y-1 min-h-[88px] sm:min-h-24">
        <h3 className="text-base sm:text-lg font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
