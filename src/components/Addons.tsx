import { motion } from "framer-motion";
import { Box, Flag, MessageSquare, Globe } from "lucide-react";

const addons = [
  {
    icon: Box,
    title: "Modelos 3D",
    price: "R$ 150",
  },
  {
    icon: Flag,
    title: "Versão Inglês",
    price: "R$ 200",
  },
  {
    icon: MessageSquare,
    title: "Seção Contato",
    price: "R$ 150",
  },
  {
    icon: Globe,
    title: "Domínio (URL)",
    price: "R$ 200",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function Addons() {
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
            Adicionais <span className="gradient-text">(Opcional)</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 text-center card-hover group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110">
                <addon.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{addon.title}</h3>
              <p className="text-primary font-bold">{addon.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
