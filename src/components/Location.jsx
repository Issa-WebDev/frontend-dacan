import React from "react";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden text-center text-white py-20 px-4">
      <img
        src="/map.webp"
        className="absolute w-full h-full -z-10 inset-0 object-cover"
        alt="Location"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute -z-5 inset-0 bg-[#1a316b]/80"></div>
      <h1 className="md:text-3xl font-bold text-2xl text-white pb-4">
        {t("location.title")}
      </h1>
      <p className="text-md mb-8">{t("location.text")}</p>
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {/* Remplacez par l'embed Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d31777.482397081967!2d-3.9749053!3d5.3887062!3m2!1i1024!2i768!4f13.1!2m1!1sCocody%20Angr%C3%A9%20Djorogobit%C3%A9%20en%20face%20de%20la%20base%20CIE%20Lot%201191%20Ilot%20120%203%20Abidjan!5e0!3m2!1sfr!2sci!4v1745658724952!5m2!1sfr!2sci"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
