import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type IconTextAlign = "left" | "center";
type IconTextVariant = "default" | "inline";

type IconTextItemProps<T extends ElementType = "div"> = {
  /** Componente/elemento que se usa como wrapper (div, li, article, etc.) */
  as?: T;
  /** Ícono (ReactNode), por ejemplo un ícono de react-icons */
  icon?: ReactNode;
  /** Título corto del bloque (beneficio, dolor, feature) */
  title?: ReactNode;
  /** Texto descriptivo debajo del título o texto principal si no hay título */
  text?: ReactNode;
  /** Alineación del contenido */
  align?: IconTextAlign;
  /** Variante visual: "default" (icono en pill) o "inline" (bullet) */
  variant?: IconTextVariant;
  /** Clases extra para el wrapper */
  className?: string;
  /** Clases extra para el contenedor del ícono */
  iconClassName?: string;
  /** Clases extra para el título */
  titleClassName?: string;
  /** Clases extra para el texto */
  textClassName?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function IconTextItem<T extends ElementType = "div">(
  props: IconTextItemProps<T>
) {
  const {
    as,
    icon,
    title,
    text,
    align = "left",
    variant = "default",
    className,
    iconClassName,
    titleClassName,
    textClassName,
    ...rest
  } = props;

  const Component = (as ?? "div") as ElementType;

  const alignClasses =
    align === "center" ? "text-center" : "text-left";

  const layoutClasses =
    variant === "inline"
      ? "flex-row items-start"
      : align === "center"
        ? "flex-col items-center"
        : "flex-col items-start";

  const iconBaseClasses =
    variant === "inline"
      ? "mt-1 inline-flex items-center justify-center"
      : "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand";

  return (
    <Component
      className={cn(
        "flex gap-3",
        layoutClasses,
        alignClasses,
        className
      )}
      {...rest}
    >
      {icon && (
        <div
          className={cn(
            iconBaseClasses,
            iconClassName
          )}
        >
          {icon}
        </div>
      )}

      <div className="space-y-1">
        {title && (
          <h3
            className={cn(
              "text-base sm:text-lg font-semibold text-foreground",
              titleClassName
            )}
          >
            {title}
          </h3>
        )}

        {text && (
          <p
            className={cn(
              "text-sm sm:text-base text-muted-foreground",
              textClassName
            )}
          >
            {text}
          </p>
        )}
      </div>
    </Component>
  );
}
