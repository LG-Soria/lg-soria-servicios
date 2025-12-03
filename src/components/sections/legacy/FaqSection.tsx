// src/components/sections/FaqSection.tsx
"use client";

import { useState, type ReactNode } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FAQItem } from "@/components/ui/FAQItem";

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
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
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
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
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

export function FaqSection() {
  // id de la pregunta abierta (o null si ninguna)
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const middleIndex = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, middleIndex);
  const rightFaqs = FAQS.slice(middleIndex);

  const renderItem = (item: FAQ) => (
    <FAQItem
      key={item.id}
      question={item.question}
      answer={item.answer}
      isOpen={openId === item.id}
      onToggle={() =>
        setOpenId((current) => (current === item.id ? null : item.id))
      }
    />
  );

  return (
    <SectionWrapper
      id="faq"
      background="default"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <SectionHeader
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes antes de decidir"
        subtitle="Es normal tener dudas antes de invertir en una web. Aquí respondo algunas de las más comunes:"
        align="center"
      />

      <div className="grid gap-0 md:gap-6 md:grid-cols-2">
        <div>{leftFaqs.map(renderItem)}</div>
        <div>{rightFaqs.map(renderItem)}</div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-300 sm:text-base">
        <p>
          Si tienes alguna otra pregunta, puedes escribirme directo por WhatsApp
          y la vemos en detalle.
        </p>
      </div>
    </SectionWrapper>
  );
}
