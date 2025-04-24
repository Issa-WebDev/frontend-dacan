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
import bg from "../assets/services-bg.jpg"; // ton image de fond

const services = [
  {
    icon: <FaTruckMoving className="text-[#FFA500] text-2xl" />,
    title: "Transport & Logistics",
    desc: "Customized transport and logistics solutions supporting you in all your logistics needs with a smooth, secure and punctual transport of your goods.",
  },
  {
    icon: <FaCogs className="text-[#FFA500] text-2xl" />,
    title: "Vehicle Spare Parts",
    desc: "Reliable parts for your vehicles, delivered on time. We provide a wide choice of original or compatible spare parts for maintenance and repair.",
  },
  {
    icon: <FaTools className="text-[#FFA500] text-2xl" />,
    title: "Vehicle & Machinery Rental",
    desc: "Rent according to your needs, gain efficiency. We offer the flexibility you need through our commercial vehicle and specialized machinery rental service.",
  },
  {
    icon: <FaShieldAlt className="text-[#FFA500] text-2xl" />,
    title: "Fire & Protection Equipment",
    desc: "Secure your teams and premises with certified personal protective equipment (PPE) and fire safety systems that meet regulatory requirements.",
  },
  {
    icon: <FaBurn className="text-[#FFA500] text-2xl" />,
    title: "Industrial & Medical Welding",
    desc: "Technology for your operations. We provide professionals with high-performance welding equipment adapted to their standards and business requirements.",
  },
  {
    icon: <FaBuilding className="text-[#FFA500] text-2xl" />,
    title: "Commercial & Real Estate Services",
    desc: "A global support for all your projects with cross-cutting services in relation to logistics support, commercial representation and real estate operations.",
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-white/90 to-transparent backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("services_title") || "Our Services"}
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-sm md:text-base text-white/90">
          {t("services_desc") ||
            "At DACAN, we offer a diversified range that meets the technical and logistical needs of modern companies. Each department has its own specialized expertise."}
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-md rounded-xl p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-700">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
              <Link
                to="/services"
                className="text-[#FFA500] text-sm font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/services"
            className="bg-[#FFA500] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#e69500] transition"
          >
            {t("view_all_services") || "View All Services"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
