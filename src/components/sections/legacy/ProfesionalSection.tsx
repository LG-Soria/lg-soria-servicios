// src/components/sections/LucasSection.tsx
"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "@/components/ui/Card";
import { IconTextItem } from "@/components/ui/IconTextItem";
import { FiUserCheck } from "react-icons/fi";

export function ProfesionalSection() {
  return (
    <SectionWrapper
      id="lucas"
      background="alternate"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Quién está detrás"
        title="Quién te acompaña en el proceso"
        subtitle="Soy Lucas Soria, desarrollador web especializado en soluciones a medida para negocios de servicios."
        align="center"
      />

      {/* Layout foto + texto */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-start">
        {/* Columna foto */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/60 shadow-xl">
            <Image
              src="/images/FPerfil.jpeg"
              alt="Foto de Lucas Soria"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Columna texto */}
        <div className="space-y-6 text-sm text-slate-100 sm:text-base">
          <div className="space-y-3">
            <p>
              Trabajo con microempresas, pymes y profesionales que necesitan algo
              más que una tarjeta de presentación online. Los acompaño en todo el
              proceso: desde aterrizar la idea hasta ver la web publicada y lista
              para recibir consultas.
            </p>
            <p>
              No necesitas saber de tecnología, hosting o integraciones: mi trabajo
              es traducir tus necesidades de negocio a una solución web clara,
              usable y lista para crecer.
            </p>
          </div>

          {/* Bloque: Cómo trabajo */}
          <Card variant="subtle" className="border border-slate-800/70">
            <CardHeader className="pb-3">
              <CardTitle className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                Cómo trabajo
              </CardTitle>
            </CardHeader>
            <CardBody className="space-y-2">
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiUserCheck />}
                iconClassName="h-4 w-4 text-brand"
                text="Explico cada paso en lenguaje simple, sin tecnicismos innecesarios."
                align="left"
              />
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiUserCheck />}
                iconClassName="h-4 w-4 text-brand"
                text="Te acompaño desde cero: contenido, estructura y priorización de secciones."
                align="left"
              />
              <IconTextItem
                as="div"
                variant="inline"
                icon={<FiUserCheck />}
                iconClassName="h-4 w-4 text-brand"
                text="Priorizo que la web sea útil para tu negocio, no solo bonita para una captura de pantalla."
                align="left"
              />
            </CardBody>
          </Card>

          {/* Refuerzo de confianza */}
          <p className="text-sm text-slate-300 sm:text-base">
            He desarrollado webs y soluciones online para diferentes rubros, como
            distribución de agua, emprendimientos textiles y negocios de servicios.
            Cada proyecto se adapta al contexto del cliente y al nivel de
            complejidad que realmente necesita hoy.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
