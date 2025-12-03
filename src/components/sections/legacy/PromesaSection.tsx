// src/components/sections/PromesaSection.tsx
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
import { FiTarget } from "react-icons/fi";

export function PromesaSection() {
  return (
    <SectionWrapper
      id="promesa"
      background="default"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="De página suelta a herramienta de negocio"
        title="De una “página más” a una web que trabaja para tu negocio"
        subtitle="El problema no es solo no tener web. El problema es depender de canales que no controlas (algoritmos, cambios de plataforma, caídas de redes) y no tener un lugar propio donde tu marca sea el centro."
        align="center"
      />

      {/* Bloque: herramienta de negocio */}
      <div className="mx-auto max-w-3xl space-y-4 text-sm text-slate-100 sm:text-base">
        <p>
          No se trata de hacer “otra página más”, sino de construir una{" "}
          <span className="font-semibold">herramienta de negocio</span>:
        </p>

        <div className="space-y-2">
          <IconTextItem
            as="div"
            variant="inline"
            icon={<FiTarget />}
            iconClassName="h-4 w-4 text-brand"
            text="que muestre qué haces y por qué elegirte,"
            align="left"
          />
          <IconTextItem
            as="div"
            variant="inline"
            icon={<FiTarget />}
            iconClassName="h-4 w-4 text-brand"
            text="que ordene la información clave,"
            align="left"
          />
          <IconTextItem
            as="div"
            variant="inline"
            icon={<FiTarget />}
            iconClassName="h-4 w-4 text-brand"
            text="y que guíe al visitante a dar el siguiente paso: escribirte, pedir un presupuesto o agendar una llamada."
            align="left"
          />
        </div>
      </div>

      {/* Bloque: promesa central + CTA suave */}
      <Card variant="elevated" className="mx-auto max-w-3xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
            Promesa central
          </CardTitle>
        </CardHeader>
        <CardBody className="space-y-4">
          <p className="text-sm text-slate-100 sm:text-base">
            Podemos empezar con algo simple, como una{" "}
            <span className="font-semibold">
              landing de presencia (Pack 1)
            </span>{" "}
            y, a medida que tu negocio crezca, sumar{" "}
            <span className="font-semibold">
              integraciones, pagos y paneles
            </span>{" "}
            sin tener que rehacer todo desde cero.
          </p>

          <p className="text-sm text-slate-300 italic sm:text-base">
            Si quieres que tu web haga algo más que “estar ahí”, empecemos a
            diseñarla con esa intención.
          </p>
        </CardBody>
      </Card>
    </SectionWrapper>
  );
}
