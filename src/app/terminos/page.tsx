import { Container } from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones | lg-soria",
  description:
    "Términos y condiciones del sitio de servicios de desarrollo web de lg-soria.",
};

export default function TerminosPage() {
  return (
    <main className="py-12">
      <Container className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">
            Términos y condiciones
          </h1>
          <p className="text-sm text-slate-400">
            Última actualización: {new Date().getFullYear()}
          </p>
        </header>

        <section className="space-y-4 text-sm text-slate-300">
          <p>
            Esta página es un placeholder de los términos y condiciones para la
            landing de servicios de lg-soria. El contenido definitivo se
            completará antes de publicar la web.
          </p>
          <p>
            El uso de este sitio implica la aceptación de los términos que se
            detallarán aquí, incluyendo condiciones de uso, limitaciones de
            responsabilidad y alcances de los servicios ofrecidos.
          </p>
          <p>
            Ante cualquier duda sobre estos términos, podrás contactarnos a
            través de los canales habituales.
          </p>
        </section>
      </Container>
    </main>
  );
}
