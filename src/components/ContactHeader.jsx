import React from "react";
import { useTranslation } from "react-i18next";

const ContactHeader = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden text-white py-20 px-4">
      <img
        src="/contact.webp"
        className="absolute w-full h-full -z-10 inset-0 object-cover"
        alt="contact"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute -z-5 inset-0 bg-[#1a316b]/70"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {t("contactHeader.title")}
        </h1>
        <p className="text-md max-w-2xl">{t("contactHeader.text")}</p>
      </div>
    </section>
  );
};

export default ContactHeader;
