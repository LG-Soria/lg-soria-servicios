import Image from "next/image";
import { cn } from "@/lib/cn";

export type LogoCloudItem = {
  /** Nombre interno del cliente/marca */
  name: string;
  /** Ruta o URL de la imagen del logo */
  src: string;
  /** Texto alternativo accesible (si no se pasa, se usa name) */
  alt?: string;
  /** Link opcional para el logo (sitio del cliente, caso, etc.) */
  href?: string;
};

type LogoCloudProps = {
  items: LogoCloudItem[];
  /** Tamaño base de los logos (alto máximo) */
  size?: "sm" | "md" | "lg";
  /** Mostrar en gris y colorear en hover */
  grayscaleOnIdle?: boolean;
  /** Clases extra para el wrapper de la grilla */
  className?: string;
  /** Clases extra para cada logo item */
  itemClassName?: string;
};

const sizeClasses: Record<NonNullable<LogoCloudProps["size"]>, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

export function LogoCloud({
  items,
  size = "md",
  grayscaleOnIdle = true,
  className,
  itemClassName,
}: LogoCloudProps) {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        "items-center justify-items-center",
        className
      )}
    >
      {items.map((logo) => {
        const content = (
          <div
            className={cn(
              "flex items-center justify-center",
              "w-full max-w-40",
              sizeClasses[size],
              "opacity-80",
              grayscaleOnIdle &&
                "grayscale contrast-125 hover:grayscale-0 hover:opacity-100",
              "transition-all duration-150",
              itemClassName
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt ?? logo.name}
              width={160}
              height={48}
              className={cn(
                "h-full w-auto object-contain"
              )}
            />
          </div>
        );

        if (logo.href) {
          return (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={logo.name}
            className="flex items-center justify-center"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
