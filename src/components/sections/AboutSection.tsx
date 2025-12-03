"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
} from "@/components/ui/Card";
import { IconTextItem } from "@/components/ui/IconTextItem";
import { FiUserCheck, FiArrowRight } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
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

const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export function AboutSection() {
    return (
        <SectionWrapper
            id="sobre-mi"
            background="default"
            useContainer
            innerClassName="space-y-10 md:space-y-12"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <SectionHeader
                        eyebrow="Quién está detrás"
                        title="Quién te acompaña en el proceso"
                        subtitle="Soy Lucas Soria, desarrollador web especializado en soluciones a medida para negocios de servicios."
                        align="center"
                    />
                </motion.div>
            </motion.div>

            {/* Layout foto + texto */}
            <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-start">
                {/* Columna foto */}
                <motion.div
                    className="flex justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scaleVariants}
                >
                    <div className="relative h-[600px] w-64 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                        <Image
                            src="/images/FPerfil2.png"
                            alt="Foto de Lucas Soria"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Columna texto */}
                <motion.div
                    className="space-y-8 text-sm text-foreground sm:text-base"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <div className="space-y-4">
                        <motion.p variants={itemVariants}>
                            Trabajo con microempresas, pymes y profesionales que necesitan algo
                            más que una tarjeta de presentación online. Los acompaño en todo el
                            proceso: desde aterrizar la idea hasta ver la web publicada y lista
                            para recibir consultas.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            No necesitas saber de tecnología, hosting o integraciones: mi trabajo
                            es traducir tus necesidades de negocio a una solución web clara,
                            usable y lista para crecer.
                        </motion.p>
                    </div>

                    {/* Bloque: Cómo trabajo */}
                    <motion.div variants={itemVariants}>
                        <Card variant="subtle" className="border border-border/70">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                    Cómo trabajo
                                </CardTitle>
                            </CardHeader>
                            <CardBody className="space-y-3">
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
                                            icon={<FiUserCheck />}
                                            iconClassName="h-5 w-5 text-brand shrink-0"
                                            text="Explico cada paso en lenguaje simple, sin tecnicismos innecesarios."
                                            align="left"
                                        />
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <IconTextItem
                                            as="div"
                                            variant="inline"
                                            icon={<FiUserCheck />}
                                            iconClassName="h-5 w-5 text-brand shrink-0"
                                            text="Te acompaño desde cero: contenido, estructura y priorización de secciones."
                                            align="left"
                                        />
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <IconTextItem
                                            as="div"
                                            variant="inline"
                                            icon={<FiUserCheck />}
                                            iconClassName="h-5 w-5 text-brand shrink-0"
                                            text="Priorizo que la web sea útil para tu negocio, no solo bonita para una captura de pantalla."
                                            align="left"
                                        />
                                    </motion.div>
                                </motion.div>
                            </CardBody>
                        </Card>
                    </motion.div>

                    {/* Resumen del proceso (Mini timeline) */}
                    <motion.div className="space-y-3" variants={itemVariants}>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Resumen del proceso
                        </p>
                        <motion.div
                            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 text-sm text-muted-foreground"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.15 }}
                        >
                            <motion.div className="flex items-center gap-2" variants={itemVariants}>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">1</span>
                                <span>Charla inicial</span>
                            </motion.div>
                            <FiArrowRight className="hidden sm:block text-muted-foreground" />
                            <motion.div className="flex items-center gap-2" variants={itemVariants}>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">2</span>
                                <span>Propuesta</span>
                            </motion.div>
                            <FiArrowRight className="hidden sm:block text-muted-foreground" />
                            <motion.div className="flex items-center gap-2" variants={itemVariants}>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">3</span>
                                <span>Desarrollo</span>
                            </motion.div>
                            <FiArrowRight className="hidden sm:block text-muted-foreground" />
                            <motion.div className="flex items-center gap-2" variants={itemVariants}>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">4</span>
                                <span>Lanzamiento</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
