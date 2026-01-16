import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "Em quanto tempo o site fica pronto?",
    answer: "O prazo varia de acordo com o plano escolhido. Em média, entre 3 a 7 dias úteis para planos essenciais e até 15 dias para planos premium.",
  },
  {
    question: "Posso solicitar alterações depois?",
    answer: "Sim! Todos os planos incluem rodadas de revisão. Após a entrega, oferecemos suporte para ajustes menores.",
  },
  {
    question: "Preciso saber programar?",
    answer: "Não! Cuidamos de tudo para você. Após a entrega, você receberá instruções simples para atualizar conteúdos básicos.",
  },
  {
    question: "A hospedagem está inclusa?",
    answer: "Sim, oferecemos hospedagem gratuita no primeiro ano. Após isso, há uma taxa mensal acessível para manutenção.",
  },
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Reference for the form element to be used in the component
  const formRef = useRef();

  // State to manage the loading status (e.g., while the form is being submitted)
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    setLoading(true); // Set loading to true while the form is being processed

    let hasErrors = false; // Flag to track if there are any validation errors

    // Validate the form fields and show an alert if there are any errors
    if(formData.name.trim() === "") {
        alert("O campo nome não pode estar vazio!"); // Show an alert if the name is empty
        hasErrors = true;
    } else if(formData.phone.trim() === "") {
        alert("O telefone deve ser válido!"); // Show an alert if the phone is empty
        hasErrors = true;
    } else if(formData.message.trim() === "") {
        alert("Escreva o assunto na mensagem!"); // Show an alert if the message is empty
        hasErrors = true;
    } else if(formData.email.trim() === "") {
      alert("Escreva o email na mensagem!"); 
      hasErrors = true;
    }

    // If there are validation errors, stop and hide loading spinner
    if(hasErrors) {
        setLoading(false);
        return; // Exit the function to prevent further action
    }

    // If no errors, send the form data via email using emailjs service
    emailjs.send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        {
            from_name: formData.name, // The sender's name
            from_phone: formData.phone, // The sender's phone
            message: formData.message, // The message content
        },
        import.meta.env.VITE_KEY
    )
    .then(() => {
        setLoading(false); // Hide loading spinner after successful email sending
        alert("Obrigado. Entrarei em contato com você o mais rápido possível."); // Show success message

        // Reset the form to empty values
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
    }, (error) => {
        setLoading(false); // Hide loading spinner if an error occurs
        console.log(error); // Log the error to the console
        alert("Algo deu errado."); // Show error message
    });
}

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground mb-2">Entre em Contato</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Contato</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/50 border-border/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/50 border-border/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted/50 border-border/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  placeholder="Descreva seu projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/50 border-border/50 min-h-[120px]"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Enviar
              </Button>

              <a
                href="https://wa.me/5513991642845"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Ou fale via WhatsApp
              </a>
            </form>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-primary">
                <path d="M12 8L24 40L28 28L40 24L12 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M24 40L20 28L8 24" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className="font-display text-2xl font-bold gradient-text-purple">WPORT</span>
            </div>

            <h3 className="font-display text-xl font-bold mb-6">FAQ</h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card overflow-hidden">
                  <button
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-primary font-bold">0{index + 1}.</span>
                      <span className="font-medium text-sm">{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4"
                    >
                      <p className="text-sm text-muted-foreground pl-8">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
