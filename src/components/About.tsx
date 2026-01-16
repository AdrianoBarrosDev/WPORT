import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Sparkles, Users } from "lucide-react";

const stats = [
  { number: "50+", label: "Projetos Entregues", icon: Rocket },
  { number: "100%", label: "Clientes Satisfeitos", icon: Users },
  { number: "3+", label: "Anos de Experiência", icon: Code2 },
];

const values = [
  {
    title: "Inovação",
    description: "Sempre buscando as últimas tendências e tecnologias do mercado.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Qualidade",
    description: "Cada pixel é pensado para entregar a melhor experiência.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Compromisso",
    description: "Seu projeto é nossa prioridade do início ao fim.",
    gradient: "from-orange-500 to-yellow-500",
  },
];

export function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary/10 via-transparent to-primary/10 rounded-full blur-3xl"
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
            <span className="text-sm font-medium text-primary">Conheça nossa história</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sobre a{" "}
            <span className="relative">
              <span className="gradient-text">WPORT</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformando visões em experiências digitais extraordinárias
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Interactive 3D-like card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />
              
              <div className="relative glass-card p-8 md:p-10 rounded-2xl overflow-hidden">
                {/* Animated corner accents */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl"
                />
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-secondary/50 rounded-br-2xl"
                />

                <div className="space-y-6">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-display text-2xl md:text-3xl font-bold"
                  >
                    <span className="gradient-text">Democratizando</span> o acesso à presença digital de qualidade
                  </motion.h3>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {[
                      "Na WPORT, nosso compromisso é criar websites profissionais e portfólios impactantes a preços justos.",
                      "Somos uma equipe apaixonada por design e desenvolvimento web, dedicada a transformar a identidade de cada cliente em experiências digitais marcantes.",
                      "Acreditamos que todos merecem ter sua história contada de forma profissional na web.",
                    ].map((text, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{text}</span>
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Animated stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-center gap-6 p-6 glass-card rounded-xl">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0"
                  >
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  
                  <div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="block font-display text-4xl font-bold gradient-text"
                    >
                      {stat.number}
                    </motion.span>
                    <span className="text-muted-foreground">{stat.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Nossos <span className="gradient-text">Valores</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative glass-card p-8 rounded-2xl h-full text-center overflow-hidden">
                {/* Top gradient line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} origin-left`}
                />
                
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} mb-6`}
                >
                  <Sparkles className="w-7 h-7 text-white" />
                </motion.div>
                
                <h4 className="font-display text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-2xl" />
          
        </motion.div>
      </div>
    </section>
  );
}
