import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaTruck,
  FaWrench,
  FaTools,
  FaFireExtinguisher,
  FaClinicMedical,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTruck className="text-[#1a316b] text-2xl" />,
    titleKey: "transport_title",
    textKey: "transport_text",
    servicesTitle: "services_title",
    services: ["transport_1", "transport_2", "transport_3", "transport_4"],
    benefitsTitle: "benefits_title",
    benefits: ["benefit_1", "benefit_2", "benefit_3", "benefit_4"],
    linkText: "transport_link",
  },
  {
    icon: <FaWrench className="text-[#1a316b] text-2xl" />,
    titleKey: "spare_title",
    textKey: "spare_text",
    servicesTitle: "services_title",
    services: ["spare_1", "spare_2", "spare_3"],
    benefitsTitle: "benefits_title",
    benefits: [
      "spare_benefit_1",
      "spare_benefit_2",
      "spare_benefit_3",
      "spare_benefit_4",
    ],
    linkText: "spare_link",
  },
  {
    icon: <FaTools className="text-[#1a316b] text-2xl" />,
    titleKey: "rental_title",
    textKey: "rental_text",
    servicesTitle: "services_title",
    services: ["rental_1", "rental_2", "rental_3"],
    benefitsTitle: "benefits_title",
    benefits: [
      "rental_benefit_1",
      "rental_benefit_2",
      "rental_benefit_3",
      "rental_benefit_4",
    ],
    linkText: "rental_link",
  },
  {
    icon: <FaFireExtinguisher className="text-[#1a316b] text-2xl" />,
    titleKey: "protection_title",
    textKey: "protection_text",
    servicesTitle: "services_title",
    services: ["protection_1", "protection_2", "protection_3"],
    benefitsTitle: "benefits_title",
    benefits: [
      "protection_benefit_1",
      "protection_benefit_2",
      "protection_benefit_3",
    ],
    linkText: "protection_link",
  },
  {
    icon: <FaClinicMedical className="text-[#1a316b] text-2xl" />,
    titleKey: "welding_title",
    textKey: "welding_text",
    servicesTitle: "services_title",
    services: ["welding_1", "welding_2", "welding_3"],
    benefitsTitle: "benefits_title",
    benefits: [
      "welding_benefit_1",
      "welding_benefit_2",
      "welding_benefit_3",
      "welding_benefit_4",
    ],
    linkText: "welding_link",
  },
  {
    icon: <FaBuilding className="text-[#1a316b] text-2xl" />,
    titleKey: "realestate_title",
    textKey: "realestate_text",
    servicesTitle: "services_title",
    services: ["realestate_1", "realestate_2", "realestate_3"],
    benefitsTitle: "benefits_title",
    benefits: [
      "realestate_benefit_1",
      "realestate_benefit_2",
      "realestate_benefit_3",
      "realestate_benefit_4",
    ],
    linkText: "realestate_link",
  },
];

const ServicesCategories = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl text-[#1a316b] font-bold mb-4">
          {t("services_title_main")}
        </h2>
        <p className="text-gray-700  md:max-w-3xl">{t("services_text_main")}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {services.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h3 className="text-xl text-[#1a316b] font-semibold">
                {t(item.titleKey)}
              </h3>
            </div>
            <p className="text-gray-700 mb-6">{t(item.textKey)}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg text-[#1a316b] font-medium mb-2">
                  {t(item.servicesTitle)}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {item.services.map((s, i) => (
                    <li key={i}>{t(s)}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg text-[#1a316b] font-medium mb-2">
                  {t(item.benefitsTitle)}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {item.benefits.map((b, i) => (
                    <li key={i}>{t(b)}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/devis"
                className="inline-block bg-[#FFA500] text-sm md:text-[17px] hover:bg-[#1a316b] text-white px-6 py-2 rounded-md transition"
              >
                {t(item.linkText)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCategories;
