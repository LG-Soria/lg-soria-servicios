// src/components/sections/FitSection.tsx
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
import { FiCheck, FiX } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function FitSection() {
  return (
    <SectionWrapper
      id="fit"
      background="default"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={cardVariants}>
          <SectionHeader
            title="¿Es este servicio para tu negocio?"
            subtitle="Antes de hablar de packs o precios, es importante saber si este tipo de proyecto encaja con lo que necesitas hoy. No se trata solo de tener una web, sino de usarla como herramienta para atraer clientes y ordenar tu comunicación."
            align="center"
          />
        </motion.div>

        {/* Bloque de columnas: para quién es / no es */}
        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {/* Columna: Esto es para ti si… */}
          <motion.div variants={cardVariants} className="h-full">
            <Card variant="elevated" className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Esto es para ti si…
                </CardTitle>
              </CardHeader>
              <CardBody className="space-y-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiCheck />}
                      iconClassName="h-4 w-4 text-emerald-500"
                      text="No tienes web o la que tienes quedó vieja y no te representa."
                      align="left"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiCheck />}
                      iconClassName="h-4 w-4 text-emerald-500"
                      text="Dependes casi al 100% de redes sociales y WhatsApp."
                      align="left"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiCheck />}
                      iconClassName="h-4 w-4 text-emerald-500"
                      text="Tu negocio está creciendo y quieres una presencia online más profesional."
                      align="left"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiCheck />}
                      iconClassName="h-4 w-4 text-emerald-500"
                      text="Quieres recibir consultas más claras, con la información ordenada."
                      align="left"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiCheck />}
                      iconClassName="h-4 w-4 text-emerald-500"
                      text="Valorás el trato directo pero quieres apoyarte en herramientas digitales."
                      align="left"
                    />
                  </motion.div>
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Columna: No es para ti si… */}
          <motion.div variants={cardVariants} className="h-full">
            <Card variant="subtle" className="h-full border border-border/70">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  No es para ti si…
                </CardTitle>
              </CardHeader>
              <CardBody className="space-y-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiX />}
                      iconClassName="h-4 w-4 text-rose-500"
                      text='Buscas "algo rápido y ultra barato" solo para salir del paso.'
                      align="left"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiX />}
                      iconClassName="h-4 w-4 text-rose-500"
                      text="No estás dispuesto a dedicar un mínimo de tiempo para revisar contenido."
                      align="left"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiX />}
                      iconClassName="h-4 w-4 text-rose-500"
                      text="No te interesa mostrar con claridad qué haces, precios estimados o tus servicios."
                      align="left"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <IconTextItem
                      as="div"
                      variant="inline"
                      icon={<FiX />}
                      iconClassName="h-4 w-4 text-rose-500"
                      text="No ves la web como una inversión en tu negocio, sino solo como un gasto más."
                      align="left"
                    />
                  </motion.div>
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Rango de inversión + CTA suave */}
        <motion.div
          variants={cardVariants}
          className="space-y-3 text-sm text-foreground sm:text-base md:text-center"
        >
          <p>
            Los proyectos se mueven, en general, en un rango aproximado entre{" "}
            <span className="font-semibold">
              $150.000 y $500.000 ARS
            </span>
            , según el pack y el alcance. Siempre lo definimos por propuesta clara
            antes de empezar.
          </p>
          <p className="text-muted-foreground italic">
            ¿Te ves reflejado en la parte del “para ti”? Entonces tiene sentido
            que sigamos.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
