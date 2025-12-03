import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionBackground = "default" | "alternate" | "gradient";

type SectionWrapperProps = {
  children: ReactNode;
  /** ID para anclajes tipo #proceso, #packs, etc. */
  id?: string;
  /** Variante de fondo: plano, alternado o degradado/brand */
  background?: SectionBackground;
  /** Tag HTML a usar, por defecto <section> */
  as?: "section" | "div";
  /** Permite desactivar el Container si hiciera falta algo full-width raro */
  useContainer?: boolean;
  /** Clases extra para el contenedor externo */
  className?: string;
  /** Clases extra para el contenido interno (el que envuelve a children) */
  innerClassName?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background", // fondo plano principal (blanco/oscuro)
  alternate: "bg-secondary/50", // fondo alternado levemente más oscuro/claro
  gradient:
    "bg-gradient-to-b from-brand/10 via-background to-background", // toque de brand arriba
};

export function SectionWrapper(props: SectionWrapperProps) {
  const {
    children,
    id,
    background = "default",
    as: Component = "section",
    useContainer = true,
    className,
    innerClassName,
    ...rest
  } = props;

  const outerClasses = cn(
    "py-16 sm:py-24", // padding vertical consistente entre secciones
    backgroundClasses[background],
    className
  );

  const content = useContainer ? (
    <Container className={innerClassName}>{children}</Container>
  ) : (
    <div
      className={cn(
        "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8",
        innerClassName
      )}
    >
      {children}
    </div>
  );

  return (
    <Component id={id} className={outerClasses} {...rest}>
      {content}
    </Component>
  );
}
