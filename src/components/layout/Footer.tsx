// src/components/layout/Footer.tsx
import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    email,
    instagram,
    linkedin,
    github,
    whatsapp,
    whatsappDisplay,
    location,
  } = siteConfig.contact as {
    email?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    whatsapp?: string;          // para wa.me (sin +, sin espacios)
    whatsappDisplay?: string;   // cómo se muestra en texto
    location?: string;
  };

  const whatsappHref = whatsapp ? `https://wa.me/${whatsapp}` : undefined;
  const whatsappLabel =
    whatsappDisplay ?? "+54 11 3255-1333";

  const locationText =
    location ?? "Argentina · trabajo con clientes de Argentina y Latinoamérica";

  return (
    <footer className="border-t border-border bg-card">
      <Container className="flex flex-col gap-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-start sm:justify-between sm:text-sm">
        {/* Identidad y descripción */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Lucas Soria – Desarrollo de soluciones web
          </p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Desarrollo de sitios web e integraciones para negocios de servicios.
          </p>
          <p className="text-xs text-muted-foreground/80">
            {locationText}
          </p>
        </div>

        {/* Contacto, redes, legales + copyright */}
        <div className="flex flex-col items-start gap-3 sm:items-end sm:text-sm">
          {/* Contacto directo */}
          <div className="flex flex-wrap items-center gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="underline-offset-4 hover:text-brand hover:underline"
              >
                {email}
              </a>
            )}

            {whatsappHref && (
              <>
                {email && (
                  <span className="hidden text-muted-foreground/50 sm:inline">•</span>
                )}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-brand hover:underline"
                >
                  WhatsApp {whatsappLabel}
                </a>
              </>
            )}
          </div>

          {/* Redes sociales */}
          <div className="flex flex-wrap items-center gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-brand hover:underline"
              >
                LinkedIn
              </a>
            )}

            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-brand hover:underline"
              >
                Instagram
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-brand hover:underline"
              >
                GitHub
              </a>
            )}
          </div>

          {/* Legales */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/privacidad"
              className="underline-offset-4 hover:text-brand hover:underline"
            >
              Política de privacidad
            </Link>

            <span className="hidden text-muted-foreground/50 sm:inline">•</span>

            <Link
              href="/terminos"
              className="underline-offset-4 hover:text-brand hover:underline"
            >
              Términos y condiciones
            </Link>
          </div>

          {/* Copyright + tagline */}
          <p className="mt-1 text-[11px] text-muted-foreground/80 sm:text-xs">
            © {currentYear} Lucas Soria.{" "}
            <span className="text-foreground/80">Dejá tu huella en internet.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
