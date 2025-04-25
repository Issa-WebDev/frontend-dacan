import { useTranslation } from "react-i18next";
import { Briefcase, Lightbulb, Handshake, ShieldCheck } from "lucide-react";

const AboutValue = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Briefcase className="h-10 w-10 text-[#FFA500] mx-auto mb-4" />,
      title: t("aboutValue.cards.expertise.title"),
      text: t("aboutValue.cards.expertise.text"),
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#FFA500] mx-auto mb-4" />,
      title: t("aboutValue.cards.innovation.title"),
      text: t("aboutValue.cards.innovation.text"),
    },
    {
      icon: <Handshake className="h-10 w-10 text-[#FFA500] mx-auto mb-4" />,
      title: t("aboutValue.cards.proximity.title"),
      text: t("aboutValue.cards.proximity.text"),
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#FFA500] mx-auto mb-4" />,
      title: t("aboutValue.cards.reliability.title"),
      text: t("aboutValue.cards.reliability.text"),
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a316b] mb-4">
          {t("aboutValue.title")}
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          {t("aboutValue.text")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-gray-700 py-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValue;
