import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg"; 

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh]">
      {/* Image de fond */}
      <img
        src={heroImg}
        alt="DACAN Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay avec gradient et blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/80 via-[#3B4256]/70 to-[#FFA500]/60 backdrop-blur-[8px]"></div>

      {/* Contenu centré */}
      <div className="relative z-10 h-full flex items-center px-4">
        <div className="w-7xl mx-auto text-white">
          <h1 className="text-3xl md:text-7xl max-w-4xl  font-bold mb-6 leading-tight">
            {t("hero_title") ||
              "Votre partenaire pour la logistique, l'équipement industriel et les services"}
          </h1>
          <p className="text-base max-w-2xl  md:text-lg mb-8">
            {t("hero_desc") ||
              "Bienvenue chez DACAN, une entreprise ivoirienne engagée à fournir des solutions fiables en matière de transport, logistique, location de machines et fourniture d'équipements spécialisés."}
          </p>
          <Link
            to="/services"
            className="inline-block bg-white text-gray-700 px-6 py-3 rounded-md font-semibold shadow  transition"
          >
            {t("hero_btn") || "Découvrir nos services"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
