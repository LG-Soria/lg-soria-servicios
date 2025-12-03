import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { LogoCloud, type LogoCloudItem } from "@/components/ui/LogoCloud";

const logos: LogoCloudItem[] = [
  { name: "EstudioContable", src: "/logo1.png" },
  { name: "TiendaMarea", src: "/logo1.png" },
  { name: "EstudioJuridico", src: "/logo1.png" },
  { name: "PsicologaMaria", src: "/logo1.png" },
  { name: "PsicologaMaria1", src: "/logo1.png" },
];

export function LogoCloudSectionDemo() {
  return (
    <SectionWrapper id="clientes" background="default">
      <SectionHeader
        eyebrow="Confían en mi trabajo"
        title="Algunos rubros con los que ya trabajé"
        subtitle="Estudios profesionales, negocios locales y emprendimientos que necesitaban ordenar su presencia online."
        align="center"
      />

      <div className="mt-8">
        <LogoCloud items={logos} size="lg" />
      </div>
    </SectionWrapper>
  );
}
