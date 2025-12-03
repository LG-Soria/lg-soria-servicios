import type { ReactElement, ReactNode } from "react";
import React from "react";
import { cn } from "@/lib/cn";

type TimelineProps = {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
  spacingClassName?: string;
  /** Clase para la máscara que tapa la línea debajo del último círculo */
  endMaskClassName?: string;
};

export function Timeline({
  children,
  className,
  lineClassName,
  spacingClassName = "space-y-8 sm:space-y-10",
  endMaskClassName = "bg-slate-950",
}: TimelineProps) {
  const items = React.Children.toArray(children).filter(Boolean) as ReactElement[];

  return (
    <div className={cn("relative", className)}>
      {/* Línea vertical continua detrás de todos los pasos */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-[18px] top-0 bottom-0 w-px bg-slate-700",
          lineClassName
        )}
      />

      {/* Lista de steps con espaciado controlado */}
      <div className={cn(spacingClassName)}>
        {items.map((child, index) => {
          const isLast = index === items.length - 1;
          const key = child.key ?? index;

          if (!isLast) {
            return <div key={key}>{child}</div>;
          }

          // Último item: se enmascara la línea desde el centro del círculo hacia abajo
          return (
            <div key={key} className="relative">
              {child}

              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute left-[18px] top-[18px] bottom-0 w-px",
                  endMaskClassName
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
