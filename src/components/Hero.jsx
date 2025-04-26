import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.webp"; 

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[100vh]">
      {/* Image de fond */}
      <img
        src={heroImg}
        alt="DACAN Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Overlay avec gradient et blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2753c3] via-[#3B4256]/70 to-[#FFA500]/50 backdrop-blur-[4px]"></div>

      {/* Contenu centré */}
      <div className="relative z-10 h-full flex items-center px-4">
        <div className="w-7xl mx-auto text-white">
          <h1 className="text-3xl md:text-7xl max-w-4xl  font-bold mb-6 leading-tight">
            {t("hero_title")}
          </h1>
          <p className="text-base max-w-2xl  md:text-lg mb-8">
            {t("hero_desc")}
          </p>
          <Link
            to="/services"
            className="inline-block bg-white text-gray-700 px-6 py-2 rounded-md font-semibold shadow  transition"
          >
            {t("hero_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
