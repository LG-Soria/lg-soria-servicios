// src/components/sections/PacksSection.tsx
"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PackCard } from "@/components/ui/PackCard";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";

const PACKS = [
  {
    id: "pack-1",
    label: "Pack 1",
    name: "Landing Presencia Simple",
    recommended: true,
    forWho:
      "Pensado para negocios y profesionales que todavía no tienen web, emprendimientos que hoy usan solo redes sociales pero quieren un lugar propio, y quienes necesitan una página simple pero bien hecha para enviar cuando alguien pregunta “¿tenés web?”.",
    includes: [
      "Sección principal (hero) con mensaje claro y botón a WhatsApp.",
      "Breve presentación de tus servicios o productos.",
      "Sección “Quién soy / Quiénes somos”.",
      "Preguntas frecuentes básicas.",
      "Información de contacto y mapa (si aplica).",
    ],
    benefits: [
      "Presencia profesional y ordenada, sin sobrecomplicar.",
      "Un enlace único para compartir por redes, WhatsApp o email.",
      "Punto de partida listo para escalar más adelante.",
    ],
    timeframe: "Entre 10 y 15 días corridos, según la velocidad de respuestas y contenidos.",
    investmentRange: undefined,
    whatsappType: "pack_1" as const,
    customWhatsappMessage:
      "Hola Lucas, me interesó el Pack 1 de landing simple. ¿Podemos hablar para ver si encaja con mi negocio?",
    ctaLabel: "Quiero empezar con una landing",
    extraNote: null,
  },
  {
    id: "pack-2",
    label: "Pack 2",
    name: "Web Profesional (3 a 5 secciones)",
    recommended: false,
    forWho:
      "Ideal para negocios que ya tienen algo de recorrido y más historias que contar, profesionales que necesitan explicar mejor sus servicios y procesos, y emprendedores que quieren que su web sea el lugar donde se entienda bien qué hacen y cómo trabajan.",
    includes: [
      "Inicio con propuesta clara y llamadas a la acción.",
      "Sección de servicios/productos con más detalle.",
      "Sección “Sobre mí / Sobre nosotros” más desarrollada.",
      "Testimonios o casos destacados.",
      "Página de contacto con formulario y datos completos.",
      "FAQs más trabajadas.",
    ],
    benefits: [
      "Mayor profundidad para explicar tu propuesta de valor.",
      "Aumenta la confianza de quien recién te conoce.",
      "Mejores consultas: más informadas y alineadas con lo que ofreces.",
    ],
    timeframe: "Entre 3 y 4 semanas, según complejidad y material disponible.",
    investmentRange: undefined,
    whatsappType: "pack_2" as const,
    customWhatsappMessage: undefined,
    ctaLabel: "Quiero una web profesional",
    extraNote: null,
  },
  // {
  //   id: "pack-3",
  //   label: "Pack 3",
  //   name: "Web con Integraciones",
  //   recommended: false,
  //   forWho:
  //     "Para negocios que necesitan formularios avanzados, emprendimientos que quieren cobrar online con plataformas como Mercado Pago, y servicios que requieren agenda de turnos o reservas integradas.",
  //   includes: [
  //     "Formularios que recojan datos clave y lleguen a tu email o herramienta de gestión.",
  //     "Integración con Mercado Pago para pagos online.",
  //     "Integración con agenda (por ejemplo, Calendly o similar) para reservar reuniones o turnos.",
  //   ],
  //   benefits: [
  //     "Menos trabajo manual: parte del proceso se automatiza.",
  //     "Información más ordenada desde el primer contacto.",
  //     "Mejor experiencia para el cliente que quiere pagar o agendar sin tanta vuelta.",
  //   ],
  //   timeframe: "Entre 4 y 6 semanas, según el tipo y cantidad de integraciones.",
  //   investmentRange: undefined,
  //   whatsappType: "pack_3" as const,
  //   customWhatsappMessage: undefined,
  //   ctaLabel: "Quiero una web con integraciones",
  //   extraNote: null,
  // },
  {
    id: "pack-3",
    label: "Pack 3",
    name: "Sistema / Panel de Gestión a Medida",
    recommended: false,
    forWho:
      "Pensado para negocios que ya tienen una web y necesitan ir un paso más allá, empresas que requieren paneles, reportes o vistas internas para ordenar datos, y proyectos que quieren centralizar en un solo lugar información de ventas, consultas o estados.",
    includes: [
      "Paneles para visualizar datos clave de tu negocio.",
      "Listados de clientes, pedidos, consultas o tickets.",
      "Reportes simples para tomar decisiones con información a la vista.",
    ],
    benefits: [
      "Solución adaptada a tus procesos reales, no a un molde genérico.",
      "Centralización de datos en un solo lugar.",
      "Base para seguir construyendo funcionalidades internas a medida.",
    ],
    timeframe:
      "El plazo se define según el alcance y la complejidad del sistema.",
    investmentRange: undefined,
    whatsappType: "pack_3" as const,
    customWhatsappMessage: undefined,
    ctaLabel: "Quiero evaluar un sistema a medida",
    extraNote: (
      <>
        Este tipo de proyecto se{" "}
        <span className="font-semibold">cotiza a medida</span>, en base a un
        breve relevamiento de procesos y necesidades.
      </>
    ),
  },
] as const;

export function PacksSection() {
  const { getWhatsappLink } = useWhatsappLink();

  const whatsappAdviceHref = getWhatsappLink({
    type: "generic",
    customMessage:
      "Hola Lucas, no tengo claro qué pack es mejor para mí. ¿Podemos revisar mi caso y ver por dónde conviene empezar?",
  });

  return (
    <SectionWrapper
      id="packs"
      background="default"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Packs principales"
        title="Elige cómo empezar: packs pensados para distintas etapas"
        subtitle="No todos los negocios necesitan lo mismo. Por eso, trabajo con packs escalables: puedes empezar con una landing simple y, cuando lo necesites, avanzar hacia una web más completa, integraciones o incluso un sistema a medida."
        align="center"
      />

      {/* Grid de packs */}
      <div className="grid gap-6 lg:grid-cols-2">
        {PACKS.map((pack) => (
          <PackCard
            key={pack.id}
            name={pack.name}
            label={pack.label}
            forWho={pack.forWho}
            includes={pack.includes}
            benefits={pack.benefits}
            timeframe={pack.timeframe}
            investmentRange={pack.investmentRange}
            recommended={pack.recommended}
            whatsappType={pack.whatsappType}
            customWhatsappMessage={pack.customWhatsappMessage}
            ctaLabel={pack.ctaLabel}
            extraNote={pack.extraNote}
          />
        ))}
      </div>

      {/* CTA general de sección */}
      <div className="space-y-4 text-sm text-slate-100 sm:text-base md:text-center">
        <p className="text-slate-300">
          Si no tienes claro qué pack encaja mejor con tu situación, no pasa
          nada. Escríbeme por WhatsApp, revisamos juntos tu caso y definimos el
          mejor punto de partida.
        </p>

        <ButtonCTA
          target="_blank"
          href={whatsappAdviceHref}
          variant="secondary"
          size="lg"
        >
          No sé qué pack elegir, quiero asesoramiento
        </ButtonCTA>
      </div>
    </SectionWrapper>
  );
}
