import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Input, Textarea } from "@/components/ui/FormControls";
import { ButtonCTA } from "@/components/ui/ButtonCTA";

export function ContactSectionDemo() {
  // Ejemplo simple sin lógica de estado real todavía
  const hasError = false;

  return (
    <SectionWrapper id="contacto" background="default">
      <SectionHeader
        eyebrow="Contacto"
        title="Contame sobre tu proyecto"
        subtitle="Dejame tus datos y una idea general de lo que necesitás, y seguimos la conversación por WhatsApp o email."
        align="center"
      />

      <div className="mt-10 max-w-xl mx-auto space-y-4">
        <Input
          label="Nombre"
          name="nombre"
          placeholder="Tu nombre"
          autoComplete="name"
          error={hasError ? "Este campo es obligatorio" : undefined}
        />

        <Input
          label="Email o teléfono"
          name="contacto"
          placeholder="Ej: nombre@correo.com o +54..."
          helperText="Usado solo para responder esta consulta."
        />

        <Textarea
          label="Contame un poco sobre tu proyecto"
          name="mensaje"
          placeholder="Ej: quiero una landing para mi estudio, ya tengo logo y colores..."
          error={hasError ? "Este campo es obligatorio" : undefined}
        />

        <div className="pt-2">
          <ButtonCTA type="submit" fullWidth>
            Enviar consulta
          </ButtonCTA>
        </div>
      </div>
    </SectionWrapper>
  );
}
