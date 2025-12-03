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
import { FiAlertCircle, FiSlash, FiTarget } from "react-icons/fi";
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ProblemSolutionSection() {
  return (
    <SectionWrapper
      id="problema-solucion"
      background="alternate"
      useContainer
      innerClassName="space-y-16 md:space-y-20"
    >
      {/* Parte 1: El Problema */}
      <motion.div
        className="space-y-10 md:space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader
            eyebrow="Problemas frecuentes"
            title="Tu negocio existe, pero casi no se ve online"
            subtitle="La mayoría de los negocios con los que trabajo llegan con la misma sensación: trabajan bien, sus clientes están contentos… pero cuando alguien los busca en internet, no aparece casi nada claro."
            align="center"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card variant="elevated" className="space-y-6">
            <CardHeader className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <CardTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Escenarios típicos
                </CardTitle>
                <CardBody className="space-y-3 p-0">
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
                        icon={<FiAlertCircle />}
                        iconClassName="h-5 w-5 text-amber-500 shrink-0"
                        text="Solo te encuentran por redes y, si no te siguen, es difícil que lleguen a ti."
                        align="left"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <IconTextItem
                        as="div"
                        variant="inline"
                        icon={<FiAlertCircle />}
                        iconClassName="h-5 w-5 text-amber-500 shrink-0"
                        text="Las consultas entran desordenadas por WhatsApp, Instagram, llamadas… sin ningún filtro."
                        align="left"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <IconTextItem
                        as="div"
                        variant="inline"
                        icon={<FiAlertCircle />}
                        iconClassName="h-5 w-5 text-amber-500 shrink-0"
                        text="Tienes que explicar una y otra vez lo mismo: qué haces, cuánto cuesta, cómo trabajas."
                        align="left"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <IconTextItem
                        as="div"
                        variant="inline"
                        icon={<FiAlertCircle />}
                        iconClassName="h-5 w-5 text-amber-500 shrink-0"
                        text="Si alguien busca “tu rubro + tu ciudad” en Google, casi no apareces o aparece contenido viejo."
                        align="left"
                      />
                    </motion.div>
                  </motion.div>
                </CardBody>
              </div>

              <div className="space-y-4">
                <CardTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Dolores concretos
                </CardTitle>
                <CardBody className="space-y-3 p-0">
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
                        icon={<FiSlash />}
                        iconClassName="h-5 w-5 text-rose-500 shrink-0"
                        text="“No me encuentran si no les paso directamente el link.”"
                        align="left"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <IconTextItem
                        as="div"
                        variant="inline"
                        icon={<FiSlash />}
                        iconClassName="h-5 w-5 text-rose-500 shrink-0"
                        text="“Mi web está vieja, desactualizada y hasta me da vergüenza mostrarla.”"
                        align="left"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <IconTextItem
                        as="div"
                        variant="inline"
                        icon={<FiSlash />}
                        iconClassName="h-5 w-5 text-rose-500 shrink-0"
                        text="“Todo va por WhatsApp sin orden y pierdo tiempo respondiendo lo mismo.”"
                        align="left"
                      />
                    </motion.div>
                  </motion.div>
                </CardBody>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </motion.div>

      {/* Parte 2: La Solución / Promesa */}
      <motion.div
        className="space-y-10 md:space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader
            eyebrow="Tu web como herramienta"
            title="De una “página más” a una web que trabaja para tu negocio"
            subtitle="El problema no es solo no tener web. El problema es depender de canales que no controlas y no tener un lugar propio donde tu marca sea el centro."
            align="center"
          />
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4 text-sm text-foreground sm:text-base">
            <p>
              No se trata de hacer “otra página más”, sino de construir una{" "}
              <span className="font-semibold text-brand">herramienta de negocio</span>:
            </p>

            <div className="space-y-3 pl-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.15 }}
              >
                <motion.div variants={itemVariants}>
                  <IconTextItem
                    as="div"
                    variant="inline"
                    icon={<FiTarget />}
                    iconClassName="h-5 w-5 text-brand shrink-0"
                    text="que muestre qué haces y por qué elegirte,"
                    align="left"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <IconTextItem
                    as="div"
                    variant="inline"
                    icon={<FiTarget />}
                    iconClassName="h-5 w-5 text-brand shrink-0"
                    text="que ordene la información clave,"
                    align="left"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <IconTextItem
                    as="div"
                    variant="inline"
                    icon={<FiTarget />}
                    iconClassName="h-5 w-5 text-brand shrink-0"
                    text="y que guíe al visitante a dar el siguiente paso: escribirte, pedir un presupuesto o agendar una llamada."
                    align="left"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={scaleVariants}>
            <Card variant="subtle" className="border border-brand/20 bg-brand/5">
              <CardHeader className="space-y-2">
                <CardTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Promesa central
                </CardTitle>
              </CardHeader>
              <CardBody className="space-y-4">
                <p className="text-sm text-foreground sm:text-base">
                  Podemos empezar con algo simple, como una{" "}
                  <span className="font-semibold text-foreground">
                    landing de presencia (Pack 1)
                  </span>{" "}
                  y, a medida que tu negocio crezca, sumar{" "}
                  <span className="font-semibold text-foreground">
                    integraciones, pagos y paneles
                  </span>{" "}
                  sin tener que rehacer todo desde cero.
                </p>

                <p className="text-sm text-muted-foreground italic sm:text-base">
                  Si quieres que tu web haga algo más que “estar ahí”, empecemos a
                  diseñarla con esa intención.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
