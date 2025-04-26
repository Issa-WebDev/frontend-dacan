import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaTruckMoving,
  FaCogs,
  FaTools,
  FaShieldAlt,
  FaBurn,
  FaBuilding,
} from "react-icons/fa";
import bg from "../assets/services-bg.webp"; // ton image de fond

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaTruckMoving className="text-[#1a316b] text-2xl" />,
      title: t("transport_title"),
      desc: t("transport_desc"),
    },
    {
      icon: <FaCogs className="text-[#1a316b] text-2xl" />,
      title: t("spare_parts_title"),
      desc: t("spare_parts_desc"),
    },
    {
      icon: <FaTools className="text-[#1a316b] text-2xl" />,
      title: t("rental_title"),
      desc: t("rental_desc"),
    },
    {
      icon: <FaShieldAlt className="text-[#1a316b] text-2xl" />,
      title: t("fire_protection_title"),
      desc: t("fire_protection_desc"),
    },
    {
      icon: <FaBurn className="text-[#1a316b] text-2xl" />,
      title: t("welding_title"),
      desc: t("welding_desc"),
    },
    {
      icon: <FaBuilding className="text-[#1a316b] text-2xl" />,
      title: t("real_estate_title"),
      desc: t("real_estate_desc"),
    },
  ];

  return (
    <section className="relative w-full py-20 mt-8">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-[#1a316b]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("services_title")}
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-sm md:text-base text-gray-700">
          {t("services_desc")}
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm backdrop-blur-md rounded-xl p-10 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-lg font-semibold text-[#1a316b]">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
              <Link
                to="/services"
                className="text-[#FFA500] text-sm font-medium hover:underline"
              >
                {t("learn")}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/services"
            className="bg-[#FFA500] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#1a316b] transition"
          >
            {t("view_all_services")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
