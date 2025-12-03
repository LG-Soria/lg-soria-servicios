import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FAQItem } from "@/components/ui/FAQItem";

export function FAQSectionDemo() {
  return (
    <SectionWrapper id="faq" background="alternate">
      <SectionHeader
        eyebrow="Preguntas frecuentes"
        title="Dudas típicas antes de arrancar"
        subtitle="Si todavía te queda alguna pregunta después de leer esto, la podemos ver directo por WhatsApp."
        align="center"
      />

     <div className="mt-8 max-w-2xl mx-auto border-t border-b border-slate-800/60 divide-y divide-slate-800/60">
        <FAQItem
          question="¿Cuánto tarda en estar lista una landing?"
          answer="Depende del pack y de qué tan claro tengas el contenido. En un escenario estándar, una landing simple suele estar lista entre 10 y 15 días corridos desde que definimos el alcance y recibo el material base."
          defaultOpen
        />

        <FAQItem
          question="¿Necesito tener el texto y las imágenes listos?"
          answer="No hace falta tener todo perfecto. Podemos partir de lo que tengas (bocetos, textos crudos, ideas) y lo ordenamos juntos. Si ya tenés branding definido, lo usamos como base; si no, adaptamos una línea visual simple y clara."
        />

        <FAQItem
          question="¿Cómo se realizan los pagos?"
          answer="Generalmente trabajamos con un anticipo para reservar el lugar en agenda y el resto contra entrega. Podemos usar Mercado Pago u otros medios según lo que te resulte más cómodo."
        />
      </div>
    </SectionWrapper>
  );
}
