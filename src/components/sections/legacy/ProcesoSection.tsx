// src/components/sections/ProcesoSection.tsx
"use client";

import { ReactNode } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TimelineStep } from "@/components/ui/TimelineStep";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { Timeline } from "@/components/ui/Timeline";

type StepItem = {
  step: number;
  title: string;
  description: ReactNode;
  highlighted?: boolean;
};

const STEPS: StepItem[] = [
  {
    step: 1,
    title: "Primer contacto por WhatsApp",
    description: (
      <>
        <p>
          Me escribes, me cuentas brevemente de tu negocio y qué tienes en mente.
        </p>
        <p>
          Si hace falta, agendamos una breve llamada.
        </p>
      </>
    ),
  },
  {
    step: 2,
    title: "Charla inicial / mini brief",
    description: (
      <>
        <p>
          Hacemos algunas preguntas clave o completamos un formulario corto para
          entender: qué ofreces, a quién, qué esperas de la web y qué pack podría
          encajar mejor.
        </p>
      </>
    ),
  },
  {
    step: 3,
    title: "Propuesta + elección de pack",
    description: (
      <>
        <p>
          Te presento una propuesta clara con alcance, tiempos y rango de inversión.
        </p>
        <p>
          Definimos juntos el pack y cerramos el punto de partida.
        </p>
      </>
    ),
    highlighted: true,
  },
  {
    step: 4,
    title: "Diseño de la interfaz",
    description: (
      <>
        <p>
          Armamos la estructura de secciones y el diseño principal.
        </p>
        <p>
          Incluye rondas de revisión para ajustar textos, secciones y detalles
          visuales.
        </p>
      </>
    ),
  },
  {
    step: 5,
    title: "Desarrollo e integraciones",
    description: (
      <>
        <p>
          Implemento el diseño en código, conecto formularios, WhatsApp y, si aplica,
          integraciones como pagos o agenda.
        </p>
      </>
    ),
  },
  {
    step: 6,
    title: "Lanzamiento",
    description: (
      <>
        <p>Publicamos la web en el dominio acordado.</p>
        <p>
          Te explico cómo usarla y qué cosas puedes actualizar o enviar a tu público.
        </p>
      </>
    ),
  },
  {
    step: 7,
    title: "Soporte 30 días post-lanzamiento",
    description: (
      <>
        <p>
          Durante el primer mes, estoy disponible para ajustes finos y resolver dudas
          básicas de uso.
        </p>
      </>
    ),
  },
];

export function ProcesoSection() {
  const { getWhatsappLink } = useWhatsappLink();

  const whatsappProcessHref = getWhatsappLink({
    type: "generic",
    customMessage:
      "Hola Lucas, quiero entender mejor cómo sería el proceso para mi web.",
  });

  return (
    <SectionWrapper
      id="proceso"
      background="default"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Proceso de trabajo"
        title="Cómo vamos a trabajar juntos"
        subtitle="Un proceso claro, paso a paso, para que sepas qué viene en cada etapa."
        align="center"
      />

      {/* Timeline */}
      <Timeline className="mt-4 ">
        {STEPS.map((stepItem) => (
          <TimelineStep
            key={stepItem.step}
            step={stepItem.step}
            title={stepItem.title}
            description={stepItem.description}
            highlighted={stepItem.highlighted}
          />
        ))}
      </Timeline>

      {/* Nota sobre hosting y dominio */}
      <div className="mx-auto max-w-3xl space-y-2 text-sm text-slate-100 sm:text-base">
        <p>Si no tienes dominio o hosting, puedo ayudarte a gestionarlos.</p>
        <span>
          Si ya cuentas con infraestructura propia, la evaluamos y vemos cómo
          integrarnos.
        </span>
      </div>

      {/* CTA final de proceso */}
      <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
        <ButtonCTA href={whatsappProcessHref} variant="primary" size="lg">
          Quiero entender cómo sería mi proceso
        </ButtonCTA>
      </div>
    </SectionWrapper>
  );
}
