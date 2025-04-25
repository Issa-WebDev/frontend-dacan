import { useTranslation } from "react-i18next";
import { FaClock, FaCheckCircle, FaDollarSign, FaTools } from "react-icons/fa";

const cards = [
  { icon: <FaClock className="text-[#1a316b] text-5xl mb-3" />, key: "time" },
  {
    icon: <FaCheckCircle className="text-[#FFA500]  text-5xl mb-3" />,
    key: "quality",
  },
  {
    icon: <FaDollarSign className="text-[#1a316b] text-5xl mb-3" />,
    key: "cost",
  },
  {
    icon: <FaTools className="text-[#FFA500]  text-5xl mb-3" />,
    key: "support",
  },
];

const Avantage = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center py-16 bg-white">
      <div className="mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl text-[#1a316b] font-bold mb-4">
          {t("advantage.title")}
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          {t("advantage.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ icon, key }) => (
            <div
              key={key}
              className="p-6 bg-gray-100 flex flex-col justify-center items-center rounded-lg shadow text-center"
            >
              {icon}
              <h3 className="text-lg font-semibold mb-2">
                {t(`advantage.cards.${key}.title`)}
              </h3>
              <p className="text-sm text-gray-600">
                {t(`advantage.cards.${key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avantage;
