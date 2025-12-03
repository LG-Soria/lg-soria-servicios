// src/app/privacidad/page.tsx
import { Container } from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | lg-soria",
  description: "Política de privacidad de la landing de servicios de lg-soria.",
};

export default function PrivacidadPage() {
  return (
    <main className="py-12">
      <Container className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Política de privacidad
          </h1>
          <p className="text-sm text-slate-400">
            Última actualización: {new Date().getFullYear()}
          </p>
        </header>

        <section className="space-y-4 text-sm text-slate-300">
          <p>
            Esta página es un placeholder de la política de privacidad para la
            landing de servicios de lg-soria. El contenido definitivo se
            completará antes de publicar la web.
          </p>
          <p>
            De forma general, el sitio puede recopilar datos de contacto que el
            usuario brinde voluntariamente a través de formularios o mensajes.
            Dichos datos se utilizarán únicamente para responder consultas o
            coordinar servicios.
          </p>
          <p>
            Si tenés dudas o querés solicitar la eliminación de tus datos,
            podés escribir a nuestro canal de contacto principal.
          </p>
        </section>
      </Container>
    </main>
  );
}
