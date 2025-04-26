import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/contactsection.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl xl:mx-auto mx-4 px-4 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-5 md:p-14 items-center">
          {/* Bloc texte */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#1a316b]">
              {t("contact_title")}
            </h2>
            <p className="mb-8">{t("contact_text")}</p>

            <div className="flex flex-col gap-4 text-center md:flex-row space-4">
              <Link
                to="/devis"
                className="bg-[#1a316b] text-sm md:text-md hover:bg-[#FFA500] text-white py-2 px-6 rounded-md font-medium transition"
              >
                {t("contact_quote")}
              </Link>
              <Link
                to="/contact"
                className="bg-[#FFA500] text-sm md:text-md hover:bg-[#1a316b] text-white py-2 px-6 rounded-md font-medium transition"
              >
                {t("contact_us")}
              </Link>
            </div>
          </div>

          {/* Bloc témoignage / image */}
          <div className="h-70 overflow-hidden rounded-sm">
            <img
              src="/devis.webp"
              loading="lazy"
              className="w-full h-full object-cover"
              alt="devis et contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
