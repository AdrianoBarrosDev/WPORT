import { motion } from "framer-motion";
import { ArrowUpRight, Check, HeadphonesIcon, Palette, Shield, Smartphone, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Seu site pronto em poucos dias, sem enrolação",
    color: "from-yellow-500 to-orange-500",
    stats: "99%",
    statsLabel: "no prazo",
  },
  {
    icon: Palette,
    title: "Design Exclusivo",
    description: "Layouts únicos que refletem sua identidade",
    color: "from-purple-500 to-pink-500",
    stats: "∞",
    statsLabel: "possibilidades",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Perfeito em qualquer dispositivo ou tela",
    color: "from-blue-500 to-cyan-500",
    stats: "100%",
    statsLabel: "adaptável",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Acompanhamento completo do início ao fim",
    color: "from-green-500 to-emerald-500",
    stats: "24/7",
    statsLabel: "disponível",
  },
  {
    icon: Shield,
    title: "Melhor Custo",
    description: "Qualidade premium por um preço justo",
    color: "from-rose-500 to-red-500",
    stats: "50%",
    statsLabel: "economia",
  },
];

const benefits = [
  "Designs profissionais e personalizáveis",
  "Perfeito em celular, tablet ou desktop",
  "Qualidade profissional por um preço acessível",
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl transition-opacity duration-500`}
      />
      
      <div className="relative glass-card p-6 rounded-2xl h-full overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-300">
        {/* Animated background pattern */}
        <motion.div
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} origin-left`}
        />

        <div className="relative z-10">
          {/* Icon with animated ring */}
          <div className="relative mb-5 inline-block">
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
            >
              <feature.icon className="w-7 h-7 text-white" />
            </motion.div>
            
            {/* Pulse ring */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.5] : 1,
                opacity: isHovered ? [0.5, 0] : 0,
              }}
              transition={{ duration: 1, repeat: Infinity }}
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color}`}
            />
          </div>

          {/* Content */}
          <h3 className="font-display text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
            {feature.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {feature.description}
          </p>

          {/* Stats badge */}
          <div className="flex items-center justify-between">
            
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              className="flex items-center gap-1 text-muted-foreground"
            >
              <span className="text-xl font-bold gradient-text">{feature.stats}</span>
              <span className="text-xs">{feature.statsLabel}</span>
            </motion.div>
          </div>
        </div>

        {/* Corner decoration */}
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.2 : 1 }}
          className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-white/5 to-transparent"
        />
      </div>
    </motion.div>
  );
}

export function WhyChoose() {
  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
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
            <span className="text-sm font-medium text-primary">Diferenciais exclusivos</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="relative inline-block">
              <span className="gradient-text">WPORT</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 100 10"
                fill="none"
              >
                <motion.path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="100" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
            ?
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos qualidade, velocidade e preço justo para entregar a melhor experiência
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom benefits bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-xl" />
          
          <div className="relative glass-card p-8 rounded-2xl">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <span className="font-display text-lg font-semibold gradient-text">
                Incluso em todos os planos:
              </span>
              
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#planos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
          >
            Ver planos e preços
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
