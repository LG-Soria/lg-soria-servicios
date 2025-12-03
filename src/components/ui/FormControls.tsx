"use client";

import {
  useId,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

/* ---------- FieldError ---------- */

type FieldErrorProps = {
  id?: string;
  children?: ReactNode;
  className?: string;
};

export function FieldError({ id, children, className }: FieldErrorProps) {
  if (!children) return null;

  return (
    <p
      id={id}
      className={cn(
        "mt-1 text-xs text-destructive",
        className
      )}
    >
      {children}
    </p>
  );
}

/* ---------- Base types ---------- */

type BaseFieldProps = {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  hideLabel?: boolean;
  wrapperClassName?: string;
  inputClassName?: string;
};

/* ---------- Input ---------- */

type InputProps = BaseFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export function Input(props: InputProps) {
  const {
    id,
    label,
    helperText,
    error,
    hideLabel = false,
    wrapperClassName,
    inputClassName,
    disabled,
    ...rest
  } = props;

  const autoId = useId();
  const fieldId = id ?? autoId;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helper`;

  const describedByIds =
    [error ? errorId : null, helperText ? helperId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
      {label && (
        <label
          htmlFor={fieldId}
          className={cn(
            "text-xs font-medium text-foreground",
            hideLabel && "sr-only"
          )}
        >
          {label}
        </label>
      )}

      <input
        id={fieldId}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={describedByIds}
        className={cn(
          // base
          "w-full rounded-lg border px-3 py-2 text-sm",
          "transition-colors duration-150",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:cursor-not-allowed disabled:opacity-60",

          // tema
          "bg-card text-foreground border-input",
          "placeholder:text-muted-foreground",

          // error
          error
            ? "border-destructive focus-visible:outline-destructive placeholder:text-destructive"
            : undefined,

          inputClassName
        )}
        {...rest}
      />

      {helperText && !error && (
        <p
          id={helperId}
          className="mt-0.5 text-xs text-muted-foreground"
        >
          {helperText}
        </p>
      )}

      {error && <FieldError id={errorId}>{error}</FieldError>}
    </div>
  );
}

/* ---------- Textarea ---------- */

type TextareaProps = BaseFieldProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

export function Textarea(props: TextareaProps) {
  const {
    id,
    label,
    helperText,
    error,
    hideLabel = false,
    wrapperClassName,
    inputClassName,
    disabled,
    rows = 4,
    ...rest
  } = props;

  const autoId = useId();
  const fieldId = id ?? autoId;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helper`;

  const describedByIds =
    [error ? errorId : null, helperText ? helperId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
      {label && (
        <label
          htmlFor={fieldId}
          className={cn(
            "text-xs font-medium text-foreground",
            hideLabel && "sr-only"
          )}
        >
          {label}
        </label>
      )}

      <textarea
        id={fieldId}
        rows={rows}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={describedByIds}
        className={cn(
          // base
          "w-full rounded-lg border px-3 py-2 text-sm",
          "transition-colors duration-150",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:cursor-not-allowed disabled:opacity-60",
          "resize-y min-h-[120px]",

          // tema
          "bg-card text-foreground border-input",
          "placeholder:text-muted-foreground",

          // error
          error
            ? "border-destructive focus-visible:outline-destructive placeholder:text-destructive"
            : undefined,

          inputClassName
        )}
        {...rest}
      />

      {helperText && !error && (
        <p
          id={helperId}
          className="mt-0.5 text-xs text-muted-foreground"
        >
          {helperText}
        </p>
      )}

      {error && <FieldError id={errorId}>{error}</FieldError>}
    </div>
  );
}
