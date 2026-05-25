import Header from './sections/Header';
import Hero from './sections/Hero';
import Servicos from './sections/Servicos';
import PorQueNosEscolher from './sections/PorQueNosEscolher';
import ZonaAtendimento from './sections/ZonaAtendimento';
import Depoimentos from './sections/Depoimentos';
import CTABanner from './sections/CTABanner';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <PorQueNosEscolher />
        <ZonaAtendimento />
        <Depoimentos />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
