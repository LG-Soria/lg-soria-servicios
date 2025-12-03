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
    console.log('Attempting to scroll to:', sectionId);
    const element = document.getElementById(sectionId);

    if (element) {
      console.log('Element found:', element);

      // Close menu first to prevent animation interference
      setMobileMenuOpen(false);

      // Use setTimeout to ensure menu close animation doesn't interfere
      setTimeout(() => {
        // Get the header height to offset the scroll
        const headerOffset = 64; // 4rem = 64px (h-16 class)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        console.log('Scrolling to position:', offsetPosition);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 150);
    } else {
      console.error(`Section with id "${sectionId}" not found`);
      setMobileMenuOpen(false);
    }
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
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl">
            <img
              src="/logo3.jpg"
              alt="LG-Soria Logo"
              className="h-full w-full object-cover scale-125"
            />
          </div>
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
            className="sm:hidden border-b border-border bg-background"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ pointerEvents: 'auto' }}
          >
            <Container className="py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors py-2 text-left w-full"
                    onClick={() => scrollToSection(link.id)}
                    type="button"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
