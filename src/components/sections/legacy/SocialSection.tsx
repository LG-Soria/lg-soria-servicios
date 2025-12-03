// src/components/sections/SocialSection.tsx
"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { LogoCloud } from "@/components/ui/LogoCloud";
import { SocialProofCard } from "@/components/ui/SocialProofCard";

const LOGOS = [
  {
    name: "AquaMaria Dispensers",
    src: "/images/logos/aquamaria.png",
    alt: "Logo de AquaMaria Dispensers",
  },
  {
    name: "LocasPuntadas",
    src: "/images/logos/locaspuntadas.png",
    alt: "Logo de LocasPuntadas",
  },
  {
    name: "Servicios Profesionales",
    src: "/images/logos/servicios-profesionales.png",
    alt: "Logo genérico para servicios profesionales",
  },
];

export function SocialSection() {
  return (
    <SectionWrapper
      id="social"
      background="alternate"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Proyectos y experiencias"
        title="Proyectos reales y experiencias de clientes"
        subtitle="Nada habla mejor de un servicio que los proyectos realizados y las experiencias de quienes ya confiaron. Estos son algunos ejemplos de trabajos y rubros con los que he colaborado."
        align="center"
      />

      {/* LogoCloud con algunos rubros/clientes */}
      <LogoCloud items={LOGOS} size="md" grayscaleOnIdle />

      {/* Mini casos */}
      <div className="grid gap-6 md:grid-cols-2">
        <SocialProofCard
          industry="Servicio de agua y dispensers"
          clientName="AquaMaria Dispensers"
          clientRole="Distribución de agua y dispensers"
          initialSituation="Necesitaban un lugar claro donde mostrar sus servicios, zonas de cobertura y formas de contacto."
          whatWeDid="Diseñamos y desarrollamos una web simple, enfocada en explicar sus servicios, áreas de trabajo y canales de contacto."
          result="Hoy cuentan con una web clara que pueden compartir con empresas y clientes finales, con contacto directo por WhatsApp."
          highlighted
        />

        <SocialProofCard
          industry="Emprendimiento textil"
          clientName="LocasPuntadas"
          clientRole="Emprendimiento de indumentaria y accesorios"
          initialSituation="Querían una presencia online más prolija que solo Instagram, donde mostrar productos, procesos y formas de compra."
          whatWeDid="Armamos una web que ordena su catálogo inicial, presenta su propuesta y explica cómo comprarles."
          result="Tienen un lugar propio donde concentrar la información para nuevos clientes y complementar su presencia en redes."
        />
      </div>

      {/* Espacio para testimonios (actual o futuro) */}
      <div className="mx-auto max-w-3xl space-y-4 text-sm text-slate-100 sm:text-base">
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Testimonios
          </p>
          <blockquote className="mt-3 space-y-2 text-slate-100">
            <p className="italic">
              “Trabajar con Lucas fue simple y claro. Nos ayudó a ordenar qué
              queríamos mostrar y en poco tiempo teníamos la web lista para
              compartir.”
            </p>
            <p className="text-sm text-slate-400">
              — [Nombre], [Rubro]
            </p>
          </blockquote>
          <p className="mt-3 text-xs text-slate-500">
            (Más casos y testimonios se pueden sumar a medida que estén
            disponibles.)
          </p>
        </div>

        <p className="text-slate-300">
          ¿Te gustaría que tu negocio también tenga una presencia online clara y
          compartible?
        </p>
      </div>
    </SectionWrapper>
  );
}
