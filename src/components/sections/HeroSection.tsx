// src/components/sections/HeroSection.tsx
"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { Card, CardBody } from "@/components/ui/Card";
import { IconTextItem } from "@/components/ui/IconTextItem";
import {
  FiMonitor,
  FiMessageCircle,
  FiBriefcase,
} from "react-icons/fi";
import { trackEvent } from "@/lib/analytics";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function HeroSection() {
  const { getWhatsappLink } = useWhatsappLink();
  const whatsappHeroHref = getWhatsappLink({ type: "hero" });

  return (
    <SectionWrapper
      id="hero"
      background="gradient"
      useContainer
      innerClassName="py-16 md:py-24"
    >
      <motion.div
        className="grid gap-10 lg:auto-rows-auto lg:grid-cols-2 lg:gap-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Fila 1: texto principal (span 2 columnas) */}
        <motion.div
          className="lg:col-span-2 max-w-3xl mx-auto text-center place-content-center flex flex-col items-center justify-center space-y-4"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-brand/80"
          >
            Sitios web y soluciones online para negocios y profesionales
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-foreground"
          >
            Dejá tu huella en internet con una web que trabaje para tu negocio
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Desarrollo sitios web y soluciones online para que tus clientes te
            encuentren fácil, entiendan qué hacés y te contacten por el canal
            que más usan: WhatsApp.
          </motion.p>
        </motion.div>

        {/* Fila 2: columna izquierda → card de beneficios */}
        <motion.div variants={cardVariants}>
          <Card variant="subtle" padding="lg" className="space-y-3 h-full">
            <CardBody className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Lo que ganás con tu web
              </p>

              <ul className="space-y-4">
                <IconTextItem
                  as="li"
                  align="left"
                  variant="inline"
                  className="items-center!"
                  icon={<FiMonitor className="h-5 w-5" />}
                  iconClassName="mt-0 h-10 w-10 rounded-full bg-brand/12 text-brand"
                  title="Presencia profesional"
                  text="Una web clara, ordenada y alineada a tu marca."
                />

                <IconTextItem
                  as="li"
                  align="left"
                  variant="inline"
                  className="items-center!"
                  icon={<FiMessageCircle className="h-5 w-5 " />}
                  iconClassName="mt-0! h-10 w-11.5 rounded-full bg-emerald-500/12 text-emerald-400"
                  title="Más y mejores consultas"
                  text="WhatsApp, formularios y datos clave en un solo lugar."
                />

                <IconTextItem
                  as="li"
                  align="left"
                  variant="inline"
                  className="items-center!"
                  icon={<FiBriefcase className="h-5 w-5" />}
                  iconClassName="mt-0! h-10 w-11 rounded-full bg-sky-500/12 text-sky-400"
                  title="Pensada para negocios reales"
                  text="Microempresas, pymes y profesionales de servicios."
                />
              </ul>
            </CardBody>
          </Card>
        </motion.div>

        {/* Fila 2: columna derecha → imagen */}
        <motion.div variants={imageVariants} className="flex items-stretch justify-center">
          <div className="relative h-56 w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-xl sm:h-64 lg:h-72">
            <Image
              src="/images/imagen_1.png"
              alt="Ejemplo de sitio web moderno para tu negocio"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>

        {/* Fila 3: CTAs + frase de apoyo (span 2 columnas) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonCTA
              href={whatsappHeroHref}
              variant="primary"
              size="lg"
              target="_blank"
              className="text-sm font-semibold sm:text-base text-white"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "hero",
                  type: "whatsapp",
                })
              }
            >
              Hablemos por WhatsApp
            </ButtonCTA>

            <ButtonCTA
              href="#packs"
              variant="secondary"
              size="md"
              className="text-sm font-medium text-foreground/90"
            >
              Ver packs y opciones
            </ButtonCTA>
          </div>

          <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
            No hace falta tener todo definido. Contame en qué está hoy tu
            negocio y vemos juntos qué tipo de web tiene más sentido para vos,
            sin compromiso.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
