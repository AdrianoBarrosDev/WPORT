import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Space Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-space-mid to-background" />
        <div className="absolute inset-0 stars-bg opacity-60" />
      </div>

      {/* Neon curved line effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(260, 70%, 60%)" stopOpacity="0" />
              <stop offset="30%" stopColor="hsl(260, 70%, 60%)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(220, 80%, 60%)" stopOpacity="1" />
              <stop offset="70%" stopColor="hsl(260, 70%, 60%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(260, 70%, 60%)" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M-100,600 Q400,400 960,500 T2020,300"
            stroke="url(#neonGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <svg width="60" height="40" viewBox="0 0 48 48" fill="none" className="text-primary">
                <path d="M4 12L14 38L24 12L34 38L44 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 1.5 A12.5 12.5 0 1 1 32.5 14" stroke="currentColor" strokeWidth="2.5" fill="none" transform="rotate(-56 45 14)"/>
              </svg>
              <span className="font-display text-3xl font-bold gradient-text-purple">WPORT</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-foreground">Seu portfólio, sua vitrine</span>
              <br />
              <span className="text-foreground">para o </span>
              <span className="gradient-text">mundo.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4">
              Websites e portfólios personalizados que refletem quem você é
            </p>

            <p className="text-sm text-muted-foreground/70 mb-8 max-w-md">
              Na era digital, sua identidade online é seu cartão de visita. Ter um portfólio ou site profissional não é mais luxo, é necessidade.
            </p>

            <a href="#planos">
              <Button  variant="hero" size="lg">
                Veja os Preços
              </Button>
            </a>
            
          </motion.div>

          {/* Right Content - Rocket Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl absolute inset-0" />
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl p-12 border border-primary/20 glass-card">
                <Rocket className="w-32 h-32 text-primary" strokeWidth={1.5} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
