import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutFooter = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden text-white py-20 px-4 text-center">
      <img
        src="/aboutfooter.webp"
        className="absolute w-full h-full -z-10 inset-0 object-cover"
        alt=""
      />
      {/* Overlay */}
      <div className="absolute  -z-5 inset-0 bg-[#1a316b]/70"></div>

      <div className="max-w-4xl z-10 mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white ">
          {t("aboutFooter.title")}
        </h2>
        <p className="mb-8 text-md">{t("aboutFooter.text")}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link
            to="/contact"
            className="bg-[#FFA500] hover:opacity-90 text-white py-2 px-6 rounded-md transition"
          >
            {t("aboutFooter.contact")}
          </Link>
          <Link
            to="/services"
            className="bg-white text-gray-700 hover:opacity-90 py-2 px-6 rounded-md transition"
          >
            {t("aboutFooter.discover")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutFooter;
