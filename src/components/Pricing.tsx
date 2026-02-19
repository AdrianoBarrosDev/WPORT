import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Sparkles, Star, Zap } from "lucide-react";

const plans = [
  {
    badge: "Básico",
    name: "Plano Essencial",
    oldPrice: "R$ 399,90",
    price: "R$ 299,90",
    headerGradient: "from-blue-600 via-blue-500 to-cyan-500",
    glowColor: "hsl(var(--neon-blue) / 0.35)",
    accentColor: "text-blue-400",
    bulletColor: "bg-blue-400",
    bulletColorHover: "hover:bg-blue-400",
    borderColor: "border-blue-500/50",
    borderHover: "hover:border-blue-500/50",
    description: "Comece com o essencial para apresentar sua marca ou portfólio. Um site de página única, elegante e funcional, ideal para dar os primeiros passos no digital.",
    features: [
      "Design exclusivo e responsivo",
      "Estrutura simples e direta",
      "Apresentação visual com animações leves",
    ],
    idealFor: "Perfeito para:",
    idealDescription: "quem precisa de uma presença online rápida e elegante.",
    popular: false,
    icon: Rocket,
    link: `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20B%C3%A1sico%20da%20WPORT.`,
  },
  {
    badge: "PRO",
    name: "Plano Profissional",
    oldPrice: "R$ 699,90",
    price: "R$ 499,90",
    headerGradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    glowColor: "hsl(var(--neon-purple) / 0.4)",
    accentColor: "text-violet-400",
    bulletColor: "bg-violet-400",
    bulletColorHover: "hover:bg-violet-400",
    borderColor: "border-violet-500/50",
    borderHover: "hover:border-violet-500/50",
    description: "Destaque-se com um site completo e bem estruturado. Com múltiplas páginas, você poderá contar sua história e criar uma conexão mais forte com seu público.",
    features: [
      "Página inicial + 2 internas",
      "Melhor organização de conteúdo",
      "Design elaborado com identidade visual refinada",
    ],
    idealFor: "Ideal para:",
    idealDescription: "quem quer apresentar seus projetos com mais estrutura e estilo.",
    popular: true,
    icon: Sparkles,
    link: `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20Profissional%20da%20WPORT.`,
  },
  {
    badge: "Premium",
    name: "Plano Premium",
    oldPrice: "R$ 999,90",
    price: "R$ 799,90",
    headerGradient: "from-amber-500 via-yellow-500 to-orange-400",
    glowColor: "rgba(251, 191, 36, 0.35)",
    accentColor: "text-amber-400",
    bulletColor: "bg-amber-400",
    bulletColorHover: "hover:bg-amber-400",
    borderColor: "border-amber-500/50",
    borderHover: "hover:border-amber-500/50",
    description: "Um site completo, estratégico e sofisticado, feito para destacar sua marca com estilo e autoridade. Cada detalhe é pensado para impressionar seus visitantes.",
    features: [
      "Layout personalizado, com até 5 páginas",
      "Efeitos visuais avançados e animações",
      "SEO otimizado: melhora visibilidade no Google",
    ],
    idealFor: "Feito para:",
    idealDescription: "quem busca impacto, conteúdo completo e destaque profissional.",
    popular: false,
    icon: Zap,
    link: `${import.meta.env.VITE_API_URL}?text=Ol%C3%A1%2C%20desejo%20saber%20mais%20sobre%20o%20Plano%20Premium%20da%20WPORT.`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Pricing() {
  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" 
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Preços Especiais</span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Escolha seu <span className="gradient-text">Plano</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforme sua presença digital com um site que representa você
          </p>
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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-0.5 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"
                style={{ background: plan.glowColor }}
              />
              
              {/* Card */}
              <div className={`relative rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 ${plan.borderHover} transition-all duration-500 h-full flex flex-col overflow-visible`}>
                
                {/* Colorful Header with rounded bottom */}
                <div className={`relative bg-gradient-to-br ${plan.headerGradient} px-6 pt-6 pb-10 rounded-t-2xl rounded-b-[2rem] z-10 overflow-hidden`}>
                  {/* Radial light overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_10%,white_0%,transparent_50%)]" />
                  
                  {/* Decorative glow orb */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/15 rounded-full blur-3xl" />

                  {/* Orbiting dots */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-3 right-3 w-24 h-24"
                    style={{ transformOrigin: "center center" }}
                  >
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
                    <div className="absolute bottom-0 right-0 w-1 h-1 rounded-full bg-white/20" />
                    <div className="absolute top-1/2 left-0 w-1 h-1 rounded-full bg-white/25" />
                  </motion.div>

                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Diagonal accent line */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                    className="absolute bottom-6 left-0 w-2/3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />

                  {/* Badge + Icon row */}
                  <div className="relative flex items-center justify-between mb-4">
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white border border-white/30"
                    >
                      {plan.badge}
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/25"
                    >
                      <plan.icon className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Plan name */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white font-display">{plan.name}</h3>
                    {plan.popular && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.5 }}
                        className="flex items-center gap-1 mt-1.5"
                      >
                        <Star className="w-3.5 h-3.5 fill-white/80 text-white/80" />
                        <span className="text-xs font-medium text-white/80">Mais escolhido</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Price block */}
                  <div className="relative mt-4 flex items-end gap-2">
                    <motion.span 
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                      className="text-3xl font-bold text-white font-display leading-none"
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-sm text-white/50 line-through mb-0.5">
                      {plan.oldPrice}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-sm group/item"
                      >
                        <span className={`w-2 h-2 rounded-full ${plan.bulletColor} mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform`} />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Ideal for section */}
                  <div className="pt-4 border-t border-border/30 mb-6">
                    <p className="text-sm">
                      <span className={`${plan.accentColor} font-semibold`}>{plan.idealFor}</span>{" "}
                      <span className="text-muted-foreground">{plan.idealDescription}</span>
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className={`w-full h-12 text-base font-semibold transition-all duration-300 ${plan.borderColor} ${plan.borderHover} ${plan.bulletColorHover}`}
                      onClick={() => window.open(plan.link)}
                    >
                      Contratar
                    </Button>
                  </motion.div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
