import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Fazer Pedido",
    description: "Entre em contato pelo nosso formulário ou WhatsApp. Descreva seu projeto, preferências de design e funcionalidades que deseja. Quanto mais detalhes, melhor entenderemos suas necessidades.",
  },
  {
    number: "2",
    title: "Aprovar Design",
    description: "Após receber suas informações, criamos um design personalizado. Você recebe uma prévia para aprovar antes de prosseguirmos. Fazemos ajustes até você estar satisfeito.",
  },
  {
    number: "3",
    title: "Revisão",
    description: "Com o design aprovado, iniciamos o desenvolvimento. Durante esta fase, você pode solicitar pequenas alterações e acompanhar o progresso em tempo real.",
  },
  {
    number: "4",
    title: "Entrega Final",
    description: "Seu site é entregue pronto e funcionando. Você recebe todos os acessos, instruções de uso e suporte para dúvidas. Hora de lançar ao mundo!",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HowItWorks() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Como <span className="gradient-text">funciona</span>?
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="glass-card p-6 relative z-10 card-hover h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-6xl font-bold gradient-text opacity-50">
                    {step.number}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-primary glow-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
