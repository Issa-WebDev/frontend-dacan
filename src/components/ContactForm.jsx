import React from "react";
import { useTranslation } from "react-i18next";
import { FaClock, FaUsers, FaFacebookF } from "react-icons/fa";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 px-4 py-16">
      <section className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-8 max-w-7xl mx-auto">
        {/* Colonne gauche */}
        <div>
          <h1 className="text-2xl md:text-3xl text-[#1a316b] font-bold mb-4">
            {t("contactForm.getInTouch")}
          </h1>
          <p className="mb-6 text-gray-600">{t("contactForm.description")}</p>

          <div className="grid gap-6">
            {/* Carte 1 */}
            <div className="flex items-start gap-4 rounded-md bg-white p-4">
              <FaClock className="text-xl mt-1 text-[#1a316b]" />
              <div>
                <h3 className="text-[#1a316b] font-semibold">
                  {t("contactForm.quickResponseTitle")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("contactForm.quickResponseText")}
                </p>
              </div>
            </div>

            {/* Carte 2 */}
            <div className="flex items-start gap-4 rounded-md bg-white p-4">
              <FaUsers className="text-xl mt-1 text-[#1a316b]" />
              <div>
                <h3 className="text-[#1a316b] font-semibold">
                  {t("contactForm.expertTeamTitle")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("contactForm.expertTeamText")}
                </p>
              </div>
            </div>

            {/* Suivez-nous */}
            <div className="bg-white rounded-md p-4">
              <h3 className="font-semibold mb-2">
                {t("contactForm.followUs")}
              </h3>
              <a
                href="https://www.facebook.com/dacanci"
                target="_blink"
                className="flex items-center gap-2 text-blue-700"
              >
                <FaFacebookF />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div>
          <form className="grid gap-4 bg-white p-6 rounded-lg shadow">
            <div>
              <label className="block text-sm">
                {t("contactForm.fullName")}
              </label>
              <input
                type="text"
                required
                placeholder={t("contactForm.fullNamePlaceholder")}
                className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-sm">
                  {t("contactForm.email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t("contactForm.emailPlaceholder")}
                  className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                />
              </div>
              <div>
                <label className="block text-sm">
                  {t("contactForm.phone")}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t("contactForm.phonePlaceholder")}
                  className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm">
                {t("contactForm.subject")}
              </label>
              <input
                type="text"
                required
                placeholder={t("contactForm.subjectPlaceholder")}
                className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
              />
            </div>
            <div>
              <label className="block text-sm">
                {t("contactForm.message")}
              </label>
              <textarea
                placeholder={t("contactForm.messagePlaceholder")}
                className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                rows={4}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#1a316b] text-white cursor-pointer px-4 py-2 rounded hover:bg-[#FFA500] transition"
              >
                {t("contactForm.sendMessage")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
