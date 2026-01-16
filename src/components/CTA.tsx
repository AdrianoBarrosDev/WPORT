import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
              <path d="M12 8L24 40L28 28L40 24L12 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M24 40L20 28L8 24" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Seu talento merece <span className="gradient-text">ser visto</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Transforme seu trabalho em um portfólio profissional que impressiona e converte. Faça como centenas de clientes satisfeitos que já deram esse passo.
          </p>

          <a href="#contato">
            <Button variant="cta" size="xl">
              Solicitar Orçamento Agora
            </Button>
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}
