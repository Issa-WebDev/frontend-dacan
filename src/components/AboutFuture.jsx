import { useTranslation } from "react-i18next";

const AboutFuture = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-3xl text-2xl text-center font-bold text-[#0e2b73] mb-4">
          {t("aboutFuture.title")}
        </h2>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          {t("aboutFuture.text")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#0e2b73]">
              {t("aboutFuture.cards.service.title")}
            </h3>
            <p className="text-gray-600">
              {t("aboutFuture.cards.service.text")}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#0e2b73]">
              {t("aboutFuture.cards.reach.title")}
            </h3>
            <p className="text-gray-600">{t("aboutFuture.cards.reach.text")}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#0e2b73]">
              {t("aboutFuture.cards.tech.title")}
            </h3>
            <p className="text-gray-600">{t("aboutFuture.cards.tech.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFuture;
