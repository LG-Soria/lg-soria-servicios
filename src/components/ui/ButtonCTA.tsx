"use client";

import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  className?: string;
};

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    href?: undefined;
    type?: "button" | "submit" | "reset";
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonCTAProps = ButtonProps | LinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand-dark",
  secondary:
    "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 focus-visible:outline-ring",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:bg-secondary/50 focus-visible:outline-ring",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-xs px-3.5 py-2 whitespace-nowrap",
  lg: "text-sm px-5 py-2.5",
};

function getCommonClasses(options: {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  const { variant, size, fullWidth, className } = options;

  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-colors duration-150",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );
}

export function ButtonCTA(props: ButtonCTAProps) {
  // Rama: Link
  if ("href" in props && props.href) {
    const {
      children,
      variant = "primary",
      size = "md",
      iconLeft,
      iconRight,
      fullWidth,
      className,
      href,
      ...linkRest
    } = props;

    const classes = getCommonClasses({ variant, size, fullWidth, className });

    return (
      <Link href={href} className={classes} {...linkRest}>
        {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        <span className="inline-flex">{children}</span>
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </Link>
    );
  }

  // Rama: button
  const {
    children,
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    fullWidth,
    className,
    type,
    ...buttonRest
  } = props as ButtonProps;

  const classes = getCommonClasses({ variant, size, fullWidth, className });

  return (
    <button
      type={type ?? "button"}
      className={classes}
      {...buttonRest}
    >
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span className="inline-flex">{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </button>
  );
}
