// src/components/sections/BenefitsSection.tsx
"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { IconTextItem } from "@/components/ui/IconTextItem";
import {
  FiGlobe,
  FiMessageCircle,
  FiClock,
  FiLayers,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";

export function BenefitsSection() {
  return (
    <SectionWrapper
      id="beneficios"
      background="alternate"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Beneficios clave"
        title="Lo que ganas al tener una web pensada para tu negocio"
        subtitle="Más allá del diseño y la tecnología, el objetivo es que tu web te ayude a trabajar mejor, atraer mejores clientes y mostrar una imagen alineada con la realidad de tu negocio."
        align="center"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <IconTextItem
          icon={<FiGlobe />}
          title="Presencia profesional"
          text={
            <>
              Apareces en Google y en búsquedas directas, no solo en redes. Das
              una imagen sólida y confiable.
            </>
          }
          align="left"
        />

        <IconTextItem
          icon={<FiMessageCircle />}
          title="Más consultas claras y ordenadas"
          text={
            <>
              Las personas entienden qué haces antes de escribirte y llegan con
              dudas más concretas.
            </>
          }
          align="left"
        />

        <IconTextItem
          icon={<FiClock />}
          title="Menos tiempo respondiendo lo mismo"
          text={
            <>
              Preguntas frecuentes, procesos y formas de trabajo explicadas una
              sola vez, para todos.
            </>
          }
          align="left"
        />

        <IconTextItem
          icon={<FiLayers />}
          title="Base para crecer con integraciones"
          text={
            <>
              Pagos online, agenda, formularios avanzados, paneles… tu web se
              puede ir ampliando según lo que necesites.
            </>
          }
          align="left"
        />

        <IconTextItem
          icon={<FiSmartphone />}
          title="Diseño adaptable (responsive)"
          text={
            <>
              Se ve bien en computadoras, tablets y celulares, que es donde la
              mayoría de las personas te va a visitar.
            </>
          }
          align="left"
        />

        <IconTextItem
          icon={<FiTrendingUp />}
          title="Escalable en el tiempo"
          text={
            <>
              Empezamos simple y, a medida que tu negocio crece, se suman nuevas
              secciones o funcionalidades.
            </>
          }
          align="left"
        />
      </div>
    </SectionWrapper>
  );
}
