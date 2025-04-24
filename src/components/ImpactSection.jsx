import { useTranslation } from "react-i18next";

const ImpactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#1a316b]">
          {t("impact_title")}
        </h2>
        <p className="text-gray-600 mb-12">{t("impact_text")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white text-gray-700 shadow-md py-6 px-6">
            <p className="text-4xl font-bold text-[#FFA500] mb-2">100+</p>
            <p className="text-sm ">{t("impact_clients")}</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white text-gray-700 shadow-md py-6 px-6">
            <p className="text-4xl font-bold text-[#FFA500]  mb-2">50+</p>
            <p className="text-sm">{t("impact_vehicles")}</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white text-gray-700 shadow-md py-6 px-6">
            <p className="text-4xl text-[#FFA500] font-bold mb-2">6</p>
            <p className="text-sm">{t("impact_services")}</p>
          </div>

          {/* Card 4 */}
          <div className="shadow-md bg-white text-gray-700 rounded-2xl py-6 px-6">
            <p className="text-4xl text-[#FFA500] font-bold mb-2">24/7</p>
            <p className="text-sm">{t("impact_support")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
