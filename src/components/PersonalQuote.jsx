import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
// import { GrCheckboxSelected } from "react-icons/gr";

const PersonalQuote = () => {
  const { t } = useTranslation();

  const [selectedService, setSelectedService] = useState("");

  const handleSelect = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <section className="bg-gray-100 px-4">
      {/* element 1 */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[40%_1fr] gap-8">
        <div>
          <h2 className="md:text-3xl text-2xl font-bold text-[#1a316b] mb-4">
            {t("personalQuote.title")}
          </h2>
          <p className="text-gray-700 mb-8">{t("personalQuote.text")}</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-4 shadow-sm rounded-md bg-white">
              <h3 className="font-semibold text-[#1a316b] text-lg mb-1">
                {t("personalQuote.fastTitle")}
              </h3>
              <p className="text-sm text-gray-500">
                {t("personalQuote.fastText")}
              </p>
            </div>
            <div className="p-4 shadow-sm rounded-md bg-white">
              <h3 className="font-semibold text-lg text-[#1a316b] mb-1">
                {t("personalQuote.noObligationTitle")}
              </h3>
              <p className="text-sm text-gray-500">
                {t("personalQuote.noObligationText")}
              </p>
            </div>
            <div className="p-4 shadow-sm rounded-md bg-white">
              <h3 className="font-semibold text-[#1a316b] text-lg mb-1">
                {t("personalQuote.transparentTitle")}
              </h3>
              <p className="text-sm text-gray-500">
                {t("personalQuote.transparentText")}
              </p>
            </div>
          </div>
        </div>
        {/* element 2 */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm">
                {t("personalQuote.fullName")}
              </label>
              <input
                className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                placeholder={t("personalQuote.yourName")}
              />
            </div>
            <div>
              <label className="block text-sm">
                {t("personalQuote.companyName")}
              </label>
              <input
                className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                placeholder={t("personalQuote.yourCompany")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm">
                {t("personalQuote.email")}
              </label>
              <input
                className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                placeholder={t("personalQuote.emailPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-sm">
                {t("personalQuote.phone")}
              </label>
              <input
                className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                placeholder={t("personalQuote.phonePlaceholder")}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm">
              {t("personalQuote.serviceType")}
            </label>
            {/* <select className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]">
              <option>{t("personalQuote.selectService")}</option>
            </select> */}
            <select
              value={selectedService}
              onChange={handleSelect}
              className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
            >
              <option value="">{t("personalQuote.selectService")}</option>
              <option value="transport">
                {t("personalQuote.serviceOptions.transport")}
                {selectedService === "transport" &&
                  ` (${t("personalQuote.serviceOptions.selected")})`}
              </option>
              <option value="spareParts">
                {t("personalQuote.serviceOptions.spareParts")}
                {selectedService === "spareParts" &&
                  ` (${t("personalQuote.serviceOptions.selected")})`}
              </option>
              <option value="rental">
                {t("personalQuote.serviceOptions.rental")}
                {selectedService === "rental" &&
                  ` (${t("personalQuote.serviceOptions.selected")})`}
              </option>
              <option value="fireProtection">
                {t("personalQuote.serviceOptions.fireProtection")}
                {selectedService === "fireProtection" &&
                  ` (${t("personalQuote.serviceOptions.selected")})`}
              </option>
              <option value="welding">
                {t("personalQuote.serviceOptions.welding")}
                {selectedService === "welding" &&
                  ` (${t("personalQuote.serviceOptions.selected")})`}
              </option>
              <option value="realEstate">
                {t("personalQuote.serviceOptions.realEstate")}
                {selectedService === "realEstate" &&
                  ` (${t("personalQuote.serviceOptions.selected")})`}
              </option>
              <option value="others">
                {t("personalQuote.serviceOptions.others")}
                {selectedService === "others" &&
                  ` (${t("personalQuote.serviceOptions.selected")})`}
              </option>
            </select>
          </div>
          <div>
            <label className="block text-sm">
              {t("personalQuote.description")}
            </label>
            <textarea
              className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded-md mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
              rows="4"
              placeholder={t("personalQuote.descriptionPlaceholder")}
            />
          </div>
          <button className="bg-[#1a316b] text-white cursor-pointer px-4 py-2 rounded hover:bg-[#FFA500] transition">
            {t("personalQuote.getQuote")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PersonalQuote;
