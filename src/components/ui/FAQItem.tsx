// src/components/ui/FAQItem.tsx
"use client";

import { useState, useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { FiChevronDown } from "react-icons/fi";

type FAQItemProps = {
  /** Pregunta a mostrar en el encabezado */
  question: ReactNode;
  /** Respuesta (puede ser texto, listas, etc.) */
  answer: ReactNode;
  /** Permite que el item arranque abierto (solo en modo no controlado) */
  defaultOpen?: boolean;
  /** Clases extra para el wrapper del item completo */
  className?: string;
  /** Modo controlado: estado abierto/cerrado */
  isOpen?: boolean;
  /** Modo controlado: callback al hacer click */
  onToggle?: () => void;
};

export function FAQItem(props: FAQItemProps) {
  const {
    question,
    answer,
    defaultOpen = false,
    className,
    isOpen,
    onToggle,
  } = props;

  // estado interno solo si no viene controlado desde afuera
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isOpen ?? internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div
      className={cn(
        "border-b border-border last:border-b-0",
        className
      )}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={handleToggle}
        className={cn(
          "flex w-full items-center justify-between gap-4 py-4 text-left hover:cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "transition-colors duration-150"
        )}
      >
        <span className="text-sm sm:text-base min-h-12 font-medium text-foreground">
          {question}
        </span>

        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card",
            "transition-colors duration-150",
            open && "border-brand bg-brand/15 text-brand"
          )}
        >
          <FiChevronDown
            viewBox="0 -2 24 24"
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              open && "rotate-180 text-brand"
            )}
          />
        </span>
      </button>

      {/* Panel con transición suave usando grid */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden text-sm text-muted-foreground pb-4 pr-1 px-2 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
