import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TimelineStep } from "@/components/ui/TimelineStep";

export function ProcesoSectionDemo() {
  return (
    <SectionWrapper id="proceso" background="alternate">
      <SectionHeader
        eyebrow="Proceso de trabajo"
        title="Cómo trabajamos tu proyecto de principio a fin"
        subtitle="Un flujo claro para que sepas en qué etapa está tu web en cada momento."
        align="left"
      />

      <div className="mt-8">
        <TimelineStep
          step={1}
          title="Entendemos tu negocio y tus objetivos"
          description="Primero hablamos sobre tu contexto, qué necesitás que haga la web por vos y qué recursos ya tenés (branding, textos, referencias)."
          isFirst
        />

        <TimelineStep
          step={2}
          title="Definimos estructura y contenido"
          description="Armamos el mapa de secciones, los mensajes clave y las llamadas a la acción para que la landing esté orientada a convertir."
          highlighted
        />

        <TimelineStep
          step={3}
          title="Diseño y desarrollo de la web"
          description="Mientras voy armando la interfaz y la implementación, te comparto avances para feedback y ajustes."
        />

        <TimelineStep
          step={4}
          title="Ajustes finales y publicación"
          description="Probamos en distintos dispositivos, afinamos detalles y, cuando está todo aprobado, publicamos la web en tu dominio."
          isLast
        />
      </div>
    </SectionWrapper>
  );
}
