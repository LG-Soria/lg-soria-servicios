"use client";

import { useState, type ReactNode } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FAQItem } from "@/components/ui/FAQItem";
import { motion, type Variants } from "framer-motion";


// const LOGOS = [
//     {
//         name: "AquaMaria Dispensers",
//         src: "/images/logos/aquamaria.png",
//         alt: "Logo de AquaMaria Dispensers",
//     },
//     {
//         name: "LocasPuntadas",
//         src: "/images/logos/locaspuntadas.png",
//         alt: "Logo de LocasPuntadas",
//     },
//     {
//         name: "Servicios Profesionales",
//         src: "/images/logos/servicios-profesionales.png",
//         alt: "Logo genérico para servicios profesionales",
//     },
// ];

type FAQ = {
    id: string;
    question: string;
    answer: ReactNode;
};

const FAQS: FAQ[] = [
    {
        id: "packs",
        question: "¿Qué incluye exactamente cada pack?",
        answer: (
            <>
                <p>
                    Cada pack tiene un alcance definido en cantidad de secciones y nivel
                    de complejidad:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>
                        El <strong>Pack 1</strong> se enfoca en una landing con secciones
                        básicas de presentación y contacto.
                    </li>
                    <li>
                        El <strong>Pack 2</strong> suma más páginas/secciones para contar
                        mejor tu historia, servicios y casos.
                    </li>
                    <li>
                        El <strong>Pack 3</strong> agrega integraciones como pagos,
                        formularios avanzados o agenda.
                    </li>
                    <li>
                        El <strong>Pack 4</strong> se orienta a sistemas internos o paneles
                        a medida.
                    </li>
                </ul>
                <p className="mt-2">
                    En la propuesta vas a ver detallado qué se incluye y qué podría quedar
                    como extra.
                </p>
            </>
        ),
    },
    {
        id: "mensual",
        question: "¿Tengo que pagar algo todos los meses?",
        answer: (
            <>
                <p>
                    Por un lado está el <strong>desarrollo de la web</strong>, que se paga
                    por proyecto.
                </p>
                <p className="mt-2">
                    Por otro lado, están los costos de <strong>dominio y hosting</strong>,
                    que suelen ser anuales o mensuales y se pagan al proveedor elegido.
                </p>
                <p className="mt-2">
                    El <strong>mantenimiento mensual</strong> es opcional: podemos acordar
                    un plan si deseás acompañamiento constante o actualizaciones
                    frecuentes.
                </p>
            </>
        ),
    },
    {
        id: "dominio-hosting",
        question: "¿Quién se encarga del dominio y el hosting?",
        answer: (
            <>
                <p>
                    Si ya tenés dominio y hosting, los revisamos y, si son adecuados,
                    trabajamos con ellos.
                </p>
                <p className="mt-2">
                    Si no tenés, puedo ayudarte a elegir y configurar las opciones
                    necesarias para que tu web funcione correctamente.
                </p>
            </>
        ),
    },
    {
        id: "tiempos",
        question: "¿Cuánto tardamos en tener la web online?",
        answer: (
            <>
                <p>Los tiempos estimados son:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    <li>
                        <strong>Pack 1:</strong> normalmente entre 10 y 15 días.
                    </li>
                    <li>
                        <strong>Pack 2:</strong> entre 3 y 4 semanas.
                    </li>
                    <li>
                        <strong>Pack 3:</strong> entre 4 y 6 semanas, según integraciones.
                    </li>
                    <li>
                        <strong>Pack 4:</strong> se define según el alcance del sistema.
                    </li>
                </ul>
                <p className="mt-2">
                    Los tiempos dependen también de la rapidez con la que podamos revisar
                    contenidos y aprobaciones.
                </p>
            </>
        ),
    },
    {
        id: "cambios",
        question: "¿Voy a poder hacer cambios después?",
        answer: (
            <>
                <p>
                    Sí. Antes de lanzar, te explico qué partes podés actualizar fácilmente
                    (por ejemplo, textos o imágenes) y qué cambios requieren soporte
                    técnico.
                </p>
                <p className="mt-2">
                    Además, durante los primeros 30 días hacemos ajustes finos incluidos.
                </p>
            </>
        ),
    },
    {
        id: "tecnologia",
        question: "No entiendo nada de tecnología, ¿me vas a ayudar con eso?",
        answer: (
            <>
                <p>
                    Claro. No hace falta que sepas de dominios, hosting o código. Mi
                    trabajo es acompañarte, explicarte las decisiones importantes y
                    resolver la parte técnica para que vos puedas enfocarte en el negocio.
                </p>
            </>
        ),
    },
    {
        id: "redes",
        question: "Ya tengo redes, ¿para qué quiero una web?",
        answer: (
            <>
                <p>
                    Las redes son muy útiles, pero no controlás sus reglas. La web es tu
                    casa propia en internet: un lugar donde toda la información está
                    ordenada, donde podés dirigir el tráfico desde redes, anuncios o
                    recomendaciones, y donde la gente puede entender rápido qué hacés y
                    cómo contratarte.
                </p>
            </>
        ),
    },
];

// Variants
const sectionContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.15,
            delayChildren: 0.05,
        },
    },
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const faqGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const leftColumnVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const rightColumnVariants: Variants = {
    hidden: { opacity: 0, x: 16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const faqItemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const footerTextVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut", delay: 0.05 },
    },
};

export function SocialFaqSection() {
    const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

    const middleIndex = Math.ceil(FAQS.length / 2);
    const leftFaqs = FAQS.slice(0, middleIndex);
    const rightFaqs = FAQS.slice(middleIndex);

    const renderItem = (item: FAQ) => (
        <motion.div key={item.id} variants={faqItemVariants}>
            <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() =>
                    setOpenId((current) => (current === item.id ? null : item.id))
                }
            />
        </motion.div>
    );

    return (
        <SectionWrapper
            id="social-faq"
            background="alternate"
            useContainer
            innerClassName="space-y-16 md:space-y-20"
        >
            <motion.div
                className="space-y-10 md:space-y-12"
                variants={sectionContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* Header */}
                <motion.div variants={headerVariants}>
                    <SectionHeader
                        eyebrow="Preguntas frecuentes"
                        title="Preguntas frecuentes antes de decidir"
                        subtitle="Es normal tener dudas antes de invertir en una web. Aquí se responden algunas de las más comunes:"
                        align="center"
                    />
                </motion.div>

                {/* Grid de FAQs */}
                <motion.div
                    className="grid gap-0 md:gap-6 md:grid-cols-2"
                    variants={faqGridVariants}
                >
                    <motion.div variants={leftColumnVariants}>
                        {leftFaqs.map(renderItem)}
                    </motion.div>

                    <motion.div variants={rightColumnVariants}>
                        {rightFaqs.map(renderItem)}
                    </motion.div>
                </motion.div>

                {/* Texto final */}
                <motion.div
                    className="mt-4 text-center text-sm text-muted-foreground sm:text-base"
                    variants={footerTextVariants}
                >
                    <p>
                        Si tienes alguna otra pregunta, puedes escribirme directo por
                        WhatsApp y se puede ver en detalle.
                    </p>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}

{/* Parte 1: Social Proof */ }
{/* <div className="space-y-10 md:space-y-12">
                <SectionHeader
                    eyebrow="Proyectos y experiencias"
                    title="Proyectos reales y experiencias de clientes"
                    subtitle="Nada habla mejor de un servicio que los proyectos realizados y las experiencias de quienes ya confiaron."
                    align="center"
                />

                <LogoCloud items={LOGOS} size="md" grayscaleOnIdle />

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

                <div className="mx-auto max-w-3xl space-y-4 text-sm text-foreground sm:text-base">
                    <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Testimonios
                        </p>
                        <blockquote className="mt-3 space-y-2 text-foreground">
                            <p className="italic">
                                “Trabajar con Lucas fue simple y claro. Nos ayudó a ordenar qué
                                queríamos mostrar y en poco tiempo teníamos la web lista para
                                compartir.”
                            </p>
                            <p className="text-sm text-muted-foreground">
                                — [Nombre], [Rubro]
                            </p>
                        </blockquote>
                        <p className="mt-3 text-xs text-muted-foreground">
                            (Más casos y testimonios se pueden sumar a medida que estén
                            disponibles.)
                        </p>
                    </div>
                </div>
            </div> */}
