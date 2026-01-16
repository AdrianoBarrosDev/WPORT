import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plano Essencial",
    price: "R$ 299,90",
    description: "Um site simples e direto para começar sua presença online com design profissional, perfeito para portfólios básicos e sites pessoais.",
    features: [
      "Design responsivo e moderno",
      "Landing Page",
      "Apresentação visual refinada com animações leves",
    ],
    popular: false,
    link: `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20B%C3%A1sico%20da%20WPORT.`,
  },
  {
    name: "Plano Profissional",
    price: "R$ 499,90",
    description: "Para quem precisa de um site mais completo, com mais páginas, animações suaves, suporte prioritário e funcionalidades avançadas.",
    features: [
      "Página inicial + 2 internas",
      "Melhor organização de conteúdo",
      "Design mais elaborado com identidade visual refinada",
    ],
    popular: true,
    link: `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20Profissional%20da%20WPORT.`,
  },
  {
    name: "Plano Premium",
    price: "R$ 799,90",
    description: "Solução completa para profissionais que precisam de um site robusto, com painel de controle, blog integrado e suporte dedicado.",
    features: [
      "Layout personalizado, até 5 páginas",
      "Melhora da visibilidade no Google",
      "Pode incluir efeitos visuais mais avançados",
    ],
    popular: false,
    link: `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20Premium%20da%20WPORT.`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Pricing() {
  return (
    <section id="planos" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Planos</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass-card p-8 relative card-hover ${
                plan.popular ? "border-primary/50 glow-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="price-badge">Mais Popular</div>
              )}
              
              <div className="relative h-24 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20" />
                <div className="absolute inset-0 flex items-start justify-start p-5">
                  <span className="font-display text-lg font-bold text-foreground">{plan.name}</span>
                </div>
                <div className="absolute top-4 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {plan.price}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 min-h-[80px]">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                onClick={() => window.open(plan.link)}
              >
                Contratar
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
