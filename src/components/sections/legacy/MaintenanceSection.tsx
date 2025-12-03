// src/components/sections/MaintenanceSection.tsx
"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function MaintenanceSection() {
  return (
    <SectionWrapper
      id="mantenimiento"
      background="alternate"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Mantenimiento y acompañamiento"
        title="Después de lanzar, no te dejo solo"
        subtitle="Una web no es algo que se hace una vez y se olvida. Los negocios cambian, aparecen nuevos servicios y a veces hay que ajustar detalles técnicos. Por eso, además del proyecto inicial, ofrezco acompañamiento."
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {/* Incluido en todos los proyectos */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Incluido en todos los proyectos
          </p>
          <ul className="space-y-2 text-sm text-slate-200 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
              <span>
                <strong>30 días de soporte post-lanzamiento</strong> para
                ajustes finos y dudas básicas.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
              <span>
                Revisión de que formularios, enlaces y botones clave funcionen
                correctamente.
              </span>
            </li>
          </ul>
        </div>

        {/* Opciones de mantenimiento mensual */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Opciones de mantenimiento mensual
          </p>
          <p className="text-sm text-slate-300 sm:text-base">
            Se definen según el caso y el nivel de movimiento que tenga tu web:
          </p>
          <ul className="mt-2 space-y-2 text-sm text-slate-200 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>
                Actualizaciones de contenido (textos, imágenes, secciones
                puntuales).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>Pequeños ajustes visuales o técnicos.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>
                Consultas y mejoras evolutivas a lo largo del tiempo.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Enfoque / tranquilidad */}
      <div className="mx-auto max-w-3xl text-sm text-slate-300 sm:text-base">
        <p>
          La idea es que tengas tranquilidad: saber que tu web no va a quedar
          “abandonada” y que hay alguien que conoce el proyecto y puede
          ayudarte a mejorarla con el tiempo.
        </p>
      </div>
    </SectionWrapper>
  );
}
