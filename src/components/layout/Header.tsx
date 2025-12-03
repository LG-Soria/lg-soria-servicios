"use client";
import { useState } from "react";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "hero", label: "Inicio" },
    { id: "fit", label: "Para quién es" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "packs-beneficios", label: "Servicios" },
    { id: "social-faq", label: "FAQ" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-8 w-8 rounded-xl bg-linear-to-br from-brand to-brand-dark" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide uppercase text-foreground">
              lg-soria
            </span>
            <span className="text-xs text-muted-foreground">
              Desarrollo web &amp; integraciones
            </span>
          </div>
        </motion.div>

        <nav className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Navigation */}
          <motion.div
            className="hidden sm:flex sm:items-center sm:gap-6 text-sm text-muted-foreground"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-brand transition-colors"
                variants={itemVariants}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          <div className="flex items-center gap-3">

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden p-2 text-muted-foreground hover:text-brand transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          <ThemeToggle />
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="sm:hidden border-b border-border bg-background overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Container className="py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
