// src/components/sections/FinalCtaSection.tsx
"use client";

import { useState, FormEvent } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ButtonCTA } from "@/components/ui/ButtonCTA";
import { Input, Textarea, FieldError } from "@/components/ui/FormControls";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { trackEvent } from "@/lib/analytics";
import { motion, type Variants } from "framer-motion";

type ContactFormValues = {
  name: string;
  business: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>> & {
  global?: string;
};

const MIN_PHONE_DIGITS = 8;
const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 1000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.toLowerCase());
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= MIN_PHONE_DIGITS;
}

function validateName(name: string): string | undefined {
  if (!name) {
    return "Por favor, indicá tu nombre.";
  }
  return undefined;
}

function validateEmail(email: string): string | undefined {
  if (!email) {
    return undefined;
  }

  if (!isValidEmail(email)) {
    return "El email no parece válido. Revisalo.";
  }

  return undefined;
}

function validatePhone(phone: string): string | undefined {
  if (!phone) {
    return undefined;
  }

  if (!isValidPhone(phone)) {
    return "El teléfono no parece válido. Incluí código de área y revisá los números.";
  }

  return undefined;
}

function validateMessage(message: string): string | undefined {
  if (!message) {
    return "Contame brevemente qué necesitás o qué tenés en mente.";
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    return "Contame un poco más de contexto (mínimo 20 caracteres).";
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return "El mensaje es muy largo. Probá resumirlo un poco (máximo 1000 caracteres).";
  }

  return undefined;
}

function validateField(
  field: keyof ContactFormValues,
  values: ContactFormValues
): ContactFormErrors {
  let fieldError: string | undefined;

  switch (field) {
    case "name":
      fieldError = validateName(values.name.trim());
      break;
    case "email":
      fieldError = validateEmail(values.email.trim());
      break;
    case "phone":
      fieldError = validatePhone(values.phone.trim());
      break;
    case "message":
      fieldError = validateMessage(values.message.trim());
      break;
    default:
      fieldError = undefined;
      break;
  }

  const nextErrors: ContactFormErrors = {};

  if (
    field === "name" ||
    field === "email" ||
    field === "phone" ||
    field === "message"
  ) {
    if (fieldError) {
      nextErrors[field] = fieldError;
    }
  }

  return nextErrors;
}

// Animaciones
const sectionContainerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.16,
      delayChildren: 0.05,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const formCardVariants: Variants = {
  hidden: { opacity: 0, x: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function FinalCtaSection() {
  const { getWhatsappLink } = useWhatsappLink();
  const whatsappHref = getWhatsappLink();

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined, global: undefined }));
    setIsSent(false);
  };

  const handleBlur = (field: keyof ContactFormValues) => {
    if (
      field !== "name" &&
      field !== "email" &&
      field !== "phone" &&
      field !== "message"
    ) {
      return;
    }

    setErrors((prev) => {
      const nextErrors: ContactFormErrors = { ...prev };
      const fieldErrors = validateField(field, values);
      const fieldError = fieldErrors[field];

      if (fieldError) {
        nextErrors[field] = fieldError;
      } else {
        delete nextErrors[field];
      }

      return nextErrors;
    });
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    const name = values.name.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();
    const message = values.message.trim();

    const nameError = validateName(name);
    if (nameError) {
      newErrors.name = nameError;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      newErrors.email = emailError;
    }

    const phoneError = validatePhone(phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    const messageError = validateMessage(message);
    if (messageError) {
      newErrors.message = messageError;
    }

    if (!email && !phone) {
      newErrors.email = "Indicá al menos un email o un teléfono.";
      newErrors.phone = "Indicá al menos un email o un teléfono.";
    }

    if (Object.keys(newErrors).length > 0) {
      newErrors.global = "Revisá los campos marcados en rojo.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (values.honeypot.trim()) {
      return;
    }

    if (!validate()) return;
    const hasEmail = !!values.email.trim();
    const hasPhone = !!values.phone.trim();
    try {
      setIsSubmitting(true);
      setErrors((prev) => ({ ...prev, global: undefined }));
      setIsSent(false);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          business: values.business.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
        }),
      });

      const data: { ok?: boolean; error?: string; message?: string } =
        await response.json().catch(() => ({}));

      if (!response.ok || !data?.ok) {
        const message =
          data?.error ||
          data?.message ||
          "Hubo un problema al enviar el formulario.";
        throw new Error(message);
      }

      trackEvent("contact_form_submitted", {
        source: "final_cta_section",
        has_email: hasEmail,
        has_phone: hasPhone,
      });

      setIsSent(true);
      setValues({
        name: "",
        business: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      console.error("[FinalCtaSection] Error al enviar formulario:", error);

      const message =
        error instanceof Error && error.message
          ? error.message
          : "Hubo un problema al enviar el formulario. Probá de nuevo en unos minutos o contactame por WhatsApp.";

      setErrors((prev) => ({
        ...prev,
        global: message,
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="contacto"
      background="gradient"
      useContainer
      innerClassName="space-y-10 md:space-y-12"
    >
      <motion.div
        className="space-y-10 md:space-y-12"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={headerVariants}>
          <SectionHeader
            title="¿Listo para dejar tu huella en internet?"
            subtitle="Si llegaste hasta aquí, seguramente ya tenés claro que tu negocio se merece una presencia online a la altura. No hace falta que tengas todo definido: se puede empezar con una charla corta para entender dónde estás hoy y qué tipo de web tiene más sentido."
            align="center"
          />
        </motion.div>

        {/* Recordatorio de para quién es + CTA WhatsApp */}
        <motion.div
          className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          variants={gridVariants}
        >
          <motion.div className="space-y-5" variants={leftColumnVariants}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                ¿Para quién es?
              </p>
              <ul className="mt-2 space-y-2 text-sm text-foreground sm:text-base">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
                  <span>
                    Negocios de servicios, profesionales y pymes en crecimiento.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
                  <span>
                    Personas que quieren usar la web como herramienta, no como un
                    simple folleto.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" />
                  <span>
                    Emprendimientos que valoran el trato cercano y el
                    acompañamiento en el proceso.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <ButtonCTA
                href={whatsappHref}
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "final_cta_section",
                    type: "whatsapp",
                  })
                }
                variant="primary"
                size="lg"
              >
                Hablemos por WhatsApp sobre tu web
              </ButtonCTA>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            className="rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/5 dark:shadow-black/40"
            variants={formCardVariants}
          >
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Honeypot oculto para bots */}
              <input
                type="text"
                name="honeypot"
                value={values.honeypot}
                onChange={(e) => handleChange("honeypot", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <Input
                label="Nombre"
                name="name"
                value={values.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                placeholder="Cómo te llamás"
                error={errors.name}
              />

              <Input
                label="Negocio / Empresa (opcional)"
                name="business"
                value={values.business}
                onChange={(e) => handleChange("business", e.target.value)}
                placeholder="Nombre del negocio o marca"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="tu@correo.com"
                  helperText="Si dejás email, revisá que esté bien escrito."
                  error={errors.email}
                />
                <Input
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  placeholder="+54..."
                  helperText="Podés incluir código de área y país."
                  error={errors.phone}
                />
              </div>

              <Textarea
                label="Mensaje"
                name="message"
                value={values.message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                placeholder="Contame brevemente qué necesitás o qué tenés en mente."
                rows={4}
                helperText="Mínimo 20 caracteres para entender mejor tu caso."
                error={errors.message}
              />

              {errors.global && <FieldError>{errors.global}</FieldError>}

              {isSent && !errors.global && (
                <p className="text-sm text-emerald-500">
                  Gracias por tu mensaje. La respuesta se envía dentro de las
                  próximas 24/48 horas hábiles.
                </p>
              )}

              <div className="pt-2">
                <ButtonCTA
                  type="submit"
                  variant="secondary"
                  size="md"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </ButtonCTA>
                <p className="mt-2 text-xs text-muted-foreground">
                  La respuesta se envía dentro de 24/48 horas hábiles.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
