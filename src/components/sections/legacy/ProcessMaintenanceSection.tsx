"use client";

import { ReactNode } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TimelineStep } from "@/components/ui/TimelineStep";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { Timeline } from "@/components/ui/Timeline";

type StepItem = {
    step: number;
    title: string;
    description: ReactNode;
    highlighted?: boolean;
};

const STEPS: StepItem[] = [
    {
        step: 1,
        title: "Primer contacto por WhatsApp",
        description: (
            <>
                <p>
                    Me escribes, me cuentas brevemente de tu negocio y qué tienes en mente.
                </p>
                <p>
                    Si hace falta, agendamos una breve llamada.
                </p>
            </>
        ),
    },
    {
        step: 2,
        title: "Charla inicial / mini brief",
        description: (
            <>
                <p>
                    Hacemos algunas preguntas clave o completamos un formulario corto para
                    entender: qué ofreces, a quién, qué esperas de la web y qué pack podría
                    encajar mejor.
                </p>
            </>
        ),
    },
    {
        step: 3,
        title: "Propuesta + elección de pack",
        description: (
            <>
                <p>
                    Te presento una propuesta clara con alcance, tiempos y rango de inversión.
                </p>
                <p>
                    Definimos juntos el pack y cerramos el punto de partida.
                </p>
            </>
        ),
        highlighted: true,
    },
    {
        step: 4,
        title: "Diseño de la interfaz",
        description: (
            <>
                <p>
                    Armamos la estructura de secciones y el diseño principal.
                </p>
                <p>
                    Incluye rondas de revisión para ajustar textos, secciones y detalles
                    visuales.
                </p>
            </>
        ),
    },
    {
        step: 5,
        title: "Desarrollo e integraciones",
        description: (
            <>
                <p>
                    Implemento el diseño en código, conecto formularios, WhatsApp y, si aplica,
                    integraciones como pagos o agenda.
                </p>
            </>
        ),
    },
    {
        step: 6,
        title: "Lanzamiento",
        description: (
            <>
                <p>Publicamos la web en el dominio acordado.</p>
                <p>
                    Te explico cómo usarla y qué cosas puedes actualizar o enviar a tu público.
                </p>
            </>
        ),
    },
    {
        step: 7,
        title: "Soporte 30 días post-lanzamiento",
        description: (
            <>
                <p>
                    Durante el primer mes, estoy disponible para ajustes finos y resolver dudas
                    básicas de uso.
                </p>
            </>
        ),
    },
];

export function ProcessMaintenanceSection() {
    const { getWhatsappLink } = useWhatsappLink();

    const whatsappProcessHref = getWhatsappLink({
        type: "generic",
        customMessage:
            "Hola Lucas, quiero entender mejor cómo sería el proceso para mi web.",
    });

    return (
        <SectionWrapper
            id="proceso-mantenimiento"
            background="default"
            useContainer
            innerClassName="space-y-16 md:space-y-20"
        >
            {/* Parte 1: Proceso */}
            <div className="space-y-10 md:space-y-12">
                <SectionHeader
                    eyebrow="Proceso de trabajo"
                    title="Cómo vamos a trabajar juntos"
                    subtitle="Un proceso claro, paso a paso, para que sepas qué viene en cada etapa."
                    align="center"
                />

                <Timeline className="mt-4">
                    {STEPS.map((stepItem) => (
                        <TimelineStep
                            key={stepItem.step}
                            step={stepItem.step}
                            title={stepItem.title}
                            description={stepItem.description}
                            highlighted={stepItem.highlighted}
                        />
                    ))}
                </Timeline>

                <div className="mx-auto max-w-3xl space-y-2 text-sm text-foreground sm:text-base text-center">
                    <p>Si no tienes dominio o hosting, puedo ayudarte a gestionarlos.</p>
                    <span>
                        Si ya cuentas con infraestructura propia, la evaluamos y vemos cómo
                        integrarnos.
                    </span>
                </div>

                <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center">
                    <ButtonCTA target="_blank" href={whatsappProcessHref} variant="primary" size="lg">
                        Quiero entender cómo sería mi proceso
                    </ButtonCTA>
                </div>
            </div>

            {/* Parte 2: Mantenimiento */}
            <div className="space-y-10 md:space-y-12 pt-8 border-t border-border/50">
                <SectionHeader
                    eyebrow="Mantenimiento y acompañamiento"
                    title="Después de lanzar, no te dejo solo"
                    subtitle="Una web no es algo que se hace una vez y se olvida. Los negocios cambian, aparecen nuevos servicios y a veces hay que ajustar detalles técnicos."
                    align="center"
                />

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Incluido en todos los proyectos */}
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Incluido en todos los proyectos
                        </p>
                        <ul className="space-y-2 text-sm text-foreground sm:text-base">
                            <li className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
                                <span>
                                    <strong>30 días de soporte post-lanzamiento</strong> para
                                    ajustes finos y dudas básicas.
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
                                <span>
                                    Revisión de que formularios, enlaces y botones clave funcionen
                                    correctamente.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Opciones de mantenimiento mensual */}
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Opciones de mantenimiento mensual
                        </p>
                        <p className="text-sm text-muted-foreground sm:text-base">
                            Se definen según el caso y el nivel de movimiento que tenga tu web:
                        </p>
                        <ul className="mt-2 space-y-2 text-sm text-foreground sm:text-base">
                            <li className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-foreground/50" />
                                <span>
                                    Actualizaciones de contenido (textos, imágenes, secciones
                                    puntuales).
                                </span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-foreground/50" />
                                <span>Pequeños ajustes visuales o técnicos.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-foreground/50" />
                                <span>
                                    Consultas y mejoras evolutivas a lo largo del tiempo.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mx-auto max-w-3xl text-sm text-muted-foreground sm:text-base text-center">
                    <p>
                        La idea es que tengas tranquilidad: saber que tu web no va a quedar
                        “abandonada” y que hay alguien que conoce el proyecto y puede
                        ayudarte a mejorarla con el tiempo.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
