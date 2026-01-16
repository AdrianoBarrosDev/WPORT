import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Projects } from "@/components/Projects";
import { Pricing } from "@/components/Pricing";
import { Addons } from "@/components/Addons";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Projects />
        <Pricing />
        <Addons />
        <HowItWorks />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
