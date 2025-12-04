"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PackCard } from "@/components/ui/PackCard";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { IconTextItem } from "@/components/ui/IconTextItem";
import { FiGlobe, FiMessageCircle, FiClock, FiLayers, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const leftItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

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
        timeframe: "Entre 15 y 25 días corridos, según la velocidad de respuestas.",
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


export function PricingBenefitsSection() {
    const { getWhatsappLink } = useWhatsappLink();
    const whatsappAdviceHref = getWhatsappLink({
        type: "generic",
        customMessage:
            "Hola Lucas, no tengo claro qué pack es mejor para mí. ¿Podemos revisar mi caso y ver por dónde conviene empezar?",
    });

    return (
        <SectionWrapper
            id="packs-beneficios"
            background="alternate"
            useContainer
            innerClassName="max-w-7xl! space-y-16 md:space-y-20 "
        >
            {/* Parte 1: Packs */}
            <motion.div
                className="space-y-10 md:space-y-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants}>
                    <SectionHeader
                        eyebrow="Packs principales"
                        title="Elige cómo empezar: packs pensados para distintas etapas"
                        subtitle="No todos los negocios necesitan lo mismo. Por eso, trabajo con packs escalables: puedes empezar con una landing simple y, cuando lo necesites, avanzar hacia una web más completa."
                        align="center"
                    />
                </motion.div>

                <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {PACKS.map((pack) => (
                        <motion.div key={pack.id} variants={itemVariants}>
                            <PackCard
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
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4 text-sm text-foreground sm:text-base md:text-center">
                    <p className="text-muted-foreground">
                        Si no tienes claro qué pack encaja mejor con tu situación, no pasa nada. Escríbeme por WhatsApp, revisamos juntos tu caso y definimos el mejor punto de partida.
                    </p>
                    <ButtonCTA target="_blank" href={whatsappAdviceHref} variant="secondary" size="lg">
                        No sé qué pack elegir, quiero asesoramiento
                    </ButtonCTA>
                </motion.div>
            </motion.div>

            {/* Parte 2: Beneficios Clave */}
            <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={itemVariants} className="text-center">
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        Lo que ganas al tener una web pensada para tu negocio
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
                        Más allá del diseño y la tecnología, el objetivo es que tu web te ayude a trabajar mejor y atraer mejores clientes.
                    </p>
                </motion.div>

                <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <motion.div variants={leftItemVariants}>
                        <IconTextItem
                            icon={<FiGlobe />}
                            title="Presencia profesional"
                            text={
                                <>Apareces en Google y en búsquedas directas, no solo en redes. Das una imagen sólida y confiable.</>
                            }
                            align="left"
                        />
                    </motion.div>
                    <motion.div variants={leftItemVariants}>
                        <IconTextItem
                            icon={<FiMessageCircle />}
                            title="Más consultas claras"
                            text={
                                <>Las personas entienden qué haces antes de escribirte y llegan con dudas más concretas.</>
                            }
                            align="left"
                        />
                    </motion.div>
                    <motion.div variants={leftItemVariants}>
                        <IconTextItem
                            icon={<FiClock />}
                            title="Menos tiempo respondiendo"
                            text={
                                <>Preguntas frecuentes, procesos y formas de trabajo explicadas una sola vez, para todos.</>
                            }
                            align="left"
                        />
                    </motion.div>
                    <motion.div variants={leftItemVariants}>
                        <IconTextItem
                            icon={<FiLayers />}
                            title="Base para crecer"
                            text={
                                <>Pagos online, agenda, formularios avanzados… tu web se puede ir ampliando según lo que necesites.</>
                            }
                            align="left"
                        />
                    </motion.div>
                    <motion.div variants={leftItemVariants}>
                        <IconTextItem
                            icon={<FiSmartphone />}
                            title="Diseño adaptable"
                            text={
                                <>Se ve bien en computadoras, tablets y celulares, que es donde la mayoría de las personas te va a visitar.</>
                            }
                            align="left"
                        />
                    </motion.div>
                    <motion.div variants={leftItemVariants}>
                        <IconTextItem
                            icon={<FiTrendingUp />}
                            title="Escalable en el tiempo"
                            text={
                                <>Empezamos simple y, a medida que tu negocio crezca, se suman nuevas secciones o funcionalidades.</>
                            }
                            align="left"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
