import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesFooter = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden text-white py-20 px-4 text-center">
      <img
        src="/custom.avif"
        className="absolute w-full h-full -z-10 inset-0 object-cover"
        alt=""
      />
      {/* Overlay */}
      <div className="absolute  -z-5 inset-0 bg-[#1a316b]/70"></div>

      <div className="max-w-4xl z-10 mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white ">
          {t("servicesFooter.title")}
        </h2>
        <p className="text-white text-md">{t("servicesFooter.text")}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link
            to="/contact"
            className="bg-[#FFA500] text-white cursor-pointer px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            {t("servicesFooter.contact")}
          </Link>
          <Link
            to="/devis"
            className="bg-white text-gray-700 cursor-pointer px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            {t("servicesFooter.quote")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesFooter;
