// src/components/sections/DolorSection.tsx
"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "@/components/ui/Card";
import { IconTextItem } from "@/components/ui/IconTextItem";
import { FiAlertCircle, FiSlash } from "react-icons/fi";

export function DolorSection() {
  return (
    <SectionWrapper
      id="dolor"
      background="alternate"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Problemas frecuentes"
        title="Tu negocio existe, pero casi no se ve online"
        subtitle="La mayoría de los negocios con los que trabajo llegan con la misma sensación: trabajan bien, sus clientes están contentos… pero cuando alguien los busca en internet, no aparece casi nada claro."
        align="center"
      />

      <Card variant="elevated" className="space-y-6">
        <CardHeader className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
              Escenarios típicos
            </CardTitle>
            <CardBody className="space-y-2 p-0">
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiAlertCircle />}
                iconClassName="h-4 w-4 text-amber-400"
                text="Solo te encuentran por redes y, si no te siguen, es difícil que lleguen a ti."
                align="left"
              />
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiAlertCircle />}
                iconClassName="h-4 w-4 text-amber-400"
                text="Las consultas entran desordenadas por WhatsApp, Instagram, llamadas… sin ningún filtro."
                align="left"
              />
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiAlertCircle />}
                iconClassName="h-4 w-4 text-amber-400"
                text="Tienes que explicar una y otra vez lo mismo: qué haces, cuánto cuesta, cómo trabajas."
                align="left"
              />
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiAlertCircle />}
                iconClassName="h-4 w-4 text-amber-400"
                text="Si alguien busca “tu rubro + tu ciudad” en Google, casi no apareces o aparece contenido viejo."
                align="left"
              />
            </CardBody>
          </div>

          <div className="space-y-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
              Dolores concretos
            </CardTitle>
            <CardBody className="space-y-2 p-0">
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiSlash />}
                iconClassName="h-4 w-4 text-rose-400"
                text="“No me encuentran si no les paso directamente el link.”"
                align="left"
              />
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiSlash />}
                iconClassName="h-4 w-4 text-rose-400"
                text="“Mi web está vieja, desactualizada y hasta me da vergüenza mostrarla.”"
                align="left"
              />
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiSlash />}
                iconClassName="h-4 w-4 text-rose-400"
                text="“Todo va por WhatsApp sin orden y pierdo tiempo respondiendo lo mismo.”"
                align="left"
              />
            </CardBody>
          </div>
        </CardHeader>
      </Card>
    </SectionWrapper>
  );
}
