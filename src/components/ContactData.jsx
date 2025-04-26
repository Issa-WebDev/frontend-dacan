import React from "react";
import { useTranslation } from "react-i18next";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const ContactData = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: <FiPhone size={32} className="text-[#FFA500] mx-auto mb-2" />,
      title: t("contactData.phone"),
      text: "+225 07 4940 2913",
      alt: (
        <a
          href="tel:+2250701234567"
          className="text-sm text-[#FFA500] hover:text-[#1a316b] underline mt-1 inline-block"
        >
          {t("contactData.callUs")}
        </a>
      ),
    },
    {
      icon: <FiMail size={32} className="text-[#FFA500] mx-auto mb-2" />,
      title: t("contactData.email"),
      text: "contact@dacan-ci.com",
      alt: (
        <a
          href="mailto:contact@dacan-ci.com"
          className="text-sm text-[#FFA500] hover:text-[#1a316b] underline mt-1 inline-block"
        >
          {t("contactData.emailUs")}
        </a>
      ),
    },
    {
      icon: <FiMapPin size={32} className="text-[#FFA500] mx-auto mb-2" />,
      title: t("contactData.address"),
      text: "Cocody Angré Djrogobité, Abidjan, Côte d'Ivoire",
      alt: (
        <a
          href="https://www.google.com/maps?q=Cocody+Angr%C3%A9+Djrogobit%C3%A9,+Abidjan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#FFA500] hover:text-[#1a316b] underline mt-1 inline-block"
        >
          {t("contactData.viewMap")}
        </a>
      ),
    },
    {
      icon: <FiClock size={32} className="text-[#FFA500] mx-auto mb-2" />,
      title: t("contactData.hours"),
      text: t("contactData.hoursText"),
      alt: "",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            {item.icon}
            <h3 className="text-lg py-4 font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{item.text}</p>
            {item.alt && (
              <div className="mt-2">{item.alt}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactData;
