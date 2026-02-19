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
            <svg width="40" height="24" viewBox="0 0 48 48" fill="none" className="text-primary">
              <path d="M4 12L14 38L24 12L34 38L44 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M45 1.5 A12.5 12.5 0 1 1 32.5 14" stroke="currentColor" strokeWidth="2.5" fill="none" transform="rotate(-56 45 14)"/>
            </svg>
            <span className="font-display text-lg font-bold gradient-text-purple">WPORT</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 WPORT. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
