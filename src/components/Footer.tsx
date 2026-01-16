import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" className="text-primary">
              <path d="M12 8L24 40L28 28L40 24L12 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M24 40L20 28L8 24" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="font-display text-lg font-bold gradient-text-purple">WPORT</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 WPORT. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
