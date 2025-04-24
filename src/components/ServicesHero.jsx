import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden text-white py-20 px-4">
      <img
        src="/contactsection.jpg"
        className="absolute w-full h-full -z-10 inset-0 object-cover"
        alt=""
      />
      {/* Overlay */}
      <div className="absolute -z-5 inset-0 bg-[#1a316b]/70"></div>

      <div className="max-w-7xl mx-auto flex px-4 flex-col items-start justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {t("servicesHero.title")}
        </h1>
        <p className="text-md max-w-2xl">{t("servicesHero.text")}</p>
        <Link
          to="/devis"
          className="bg-[#FFA500] text-white px-6 py-2 rounded-md transition"
        >
          {t("servicesHero.button")}
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;
