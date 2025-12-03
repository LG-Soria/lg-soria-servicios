import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeaderAlign = "left" | "center";

type SectionHeaderProps = {
  /** Texto pequeño arriba del título (ej: "Servicios", "Proceso") */
  eyebrow?: ReactNode;
  /** Título principal de la sección */
  title: ReactNode;
  /** Subtítulo o descripción corta de apoyo */
  subtitle?: ReactNode;
  /** Alineación del bloque de texto */
  align?: SectionHeaderAlign;
  /** Tag de heading para el título principal (a nivel semántico) */
  as?: "h1" | "h2" | "h3" | "h4";
  /** Clases extra para el contenedor del header */
  className?: string;
  /** Clases extra para el eyebrow */
  eyebrowClassName?: string;
  /** Clases extra para el título */
  titleClassName?: string;
  /** Clases extra para el subtítulo */
  subtitleClassName?: string;
};

export function SectionHeader(props: SectionHeaderProps) {
  const {
    eyebrow,
    title,
    subtitle,
    align = "left",
    as: HeadingTag = "h2",
    className,
    eyebrowClassName,
    titleClassName,
    subtitleClassName,
  } = props;

  const alignClasses =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        alignClasses,
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "text-xs font-medium uppercase tracking-[0.16em] text-brand/80",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </div>
      )}

      <HeadingTag
        className={cn(
          "text-2xl sm:text-3xl font-semibold text-foreground",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>

      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base text-muted-foreground max-w-2xl",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
