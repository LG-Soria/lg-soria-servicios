import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "outline" | "elevated" | "subtle";
type CardPadding = "none" | "sm" | "md" | "lg";

type BaseCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  clickable?: boolean;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export type CardProps<T extends ElementType = "div"> = BaseCardProps<T>;

const variantClasses: Record<CardVariant, string> = {
  outline: "border border-border bg-card/50",
  elevated:
    "border border-border bg-card shadow-lg shadow-black/5 dark:shadow-black/40",
  subtle: "border border-transparent bg-secondary/50",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card<T extends ElementType = "div">(props: CardProps<T>) {
  const {
    as,
    children,
    variant = "outline",
    padding = "md",
    clickable = false,
    className,
    ...rest
  } = props;

  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn(
        "relative rounded-2xl transition-shadow duration-150",
        variantClasses[variant],
        paddingClasses[padding],
        clickable &&
        "cursor-pointer hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/50 hover:border-primary/20",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* Subcomponentes estructurales */

type CardSectionProps = {
  children: ReactNode;
  className?: string;
};

export function CardHeader({ children, className }: CardSectionProps) {
  return (
    <div
      className={cn(
        "mb-4 flex flex-col gap-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardSectionProps) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-foreground",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardSubtitle({ children, className }: CardSectionProps) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function CardBody({ children, className }: CardSectionProps) {
  return (
    <div
      className={cn(
        "text-sm sm:text-base text-muted-foreground space-y-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: CardSectionProps) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-wrap items-center gap-3",
        className
      )}
    >
      {children}
    </div>
  );
}
