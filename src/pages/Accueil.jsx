import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import ImpactSection from "../components/ImpactSection";
import ServicesSection from "../components/ServicesSection";

const Accueil = () => {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ImpactSection />
      <ContactSection />
    </main>
  );
};

export default Accueil;
