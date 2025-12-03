import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { Analytics } from "@/components/layout/Analytics";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | LG-Soria",
  },
  description:
    "Servicios de desarrollo web, integraciones y soluciones a medida para negocios que quieren mejorar su presencia online.",
  openGraph: {
    title: siteConfig.name,
    description:
      "Landing de servicios de desarrollo web, integraciones y soluciones a medida de lg-soria.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
  alternates: {
    canonical: "/",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />

          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloatingButton
              type="floating"
              label="Escribime por WhatsApp"
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
