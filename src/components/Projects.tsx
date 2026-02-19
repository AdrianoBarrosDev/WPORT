import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Site Corretora Marina",
    description: "Site profissional da Corretora Marina, desenvolvido para atrair clientes e fortalecer a presença digital. Com design moderno e navegação intuitiva, transmite confiança, informações importantes e profissionalismo no mercado de planos de saúde.",
    tags: ["Site Comercial"],
    image: "/PortfolioMarina.png",
    link: "https://marinabarros.netlify.app/",
  },
  {
    title: "Site WPORT",
    description: "Um site moderno e responsivo, criado para apresentar nossos serviços de forma clara e acessível. Desenvolvido para ser o cartão de visitas digital da empresa, com design profissional que funciona perfeitamente em qualquer dispositivo.",
    tags: ["Site Comercial"],
    image: "/og-image.png",
    link: "https://wportbr.netlify.app/",
  },
  {
    title: "Portfólio Virtual",
    description: "Este portfólio reflete as habilidades e o estilo em design que orientam todo o nosso trabalho. Leve, funcional e responsivo, inclui modelos 3D inovadores e uma seção de contato eficiente, tudo pensado para destacar projetos e facilitar o contato com empresas.",
    tags: ["Portfólio"],
    image: "/PortfolioA.png",
    link: "https://adrianobarrosdev.com/",
  },
  {
    title: "Portfolio Virtual",
    description: "Este portfólio reflete as habilidades e o estilo em design que orientam todo o nosso trabalho. Leve, funcional e responsivo, inclui modelos 3D inovadores e uma seção de contato eficiente, tudo pensado para destacar projetos e facilitar o contato com empresas.",
    tags: ["Portfólio"],
    image: "/PortfolioB.png",
    link: "https://brunopuzzuoli.netlify.app/",
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

export function Projects() {
  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns portfólios que desenvolvemos para clientes satisfeitos. Esses projetos refletem nossa dedicação por design e funcionalidade.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden" onClick={() => window.open(project.link)} style={{cursor: "pointer"}}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(project.link)}>
                  <ExternalLink className="w-4 h-4 mr-2"/>
                  Conhecer mais
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
