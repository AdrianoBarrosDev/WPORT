import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#projetos", label: "Portfólio" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-surface border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-primary">
              <path d="M12 8L24 40L28 28L40 24L12 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M24 40L20 28L8 24" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="font-display text-2xl font-bold gradient-text-purple">WPORT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contato">
              <Button variant="default" size="default">
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-surface border-t border-primary/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="default" size="lg" className="mt-2">
                  Solicitar Orçamento
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
