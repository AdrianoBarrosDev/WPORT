import 'aos/dist/aos.css';
import { Adicionais } from './components/Adicionais';
import { Banner } from './components/Banner';
import Diferenciais from './components/Diferenciais';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Funcionamento } from './components/Funcionamento';
import Hero from './components/Hero';
import { Planos } from './components/Planos';
import Projetos from './components/Projetos';
import { Sobre } from './components/Sobre';

function App() {

  return (
    <>
      <Hero />
      <Diferenciais />
      <Projetos />
      <Planos />
      <Adicionais />
      <Funcionamento />
      <Sobre />
      <Banner />
      <FAQ />
      <Footer />
    </>
  );

}

export default App
