import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaClock, FaUsers, FaFacebookF } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify"; // Import du toast
import "react-toastify/dist/ReactToastify.css"; // Import du CSS

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Nouveau : état de chargement

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (response.status === 200) {
        toast.success(t("contactForm.successToast"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      toast.error(t("contactForm.errorToast"));
    } finally {
      setLoading(false);
    }
  };

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
                target="_blank"
                rel="noopener noreferrer"
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
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 bg-white p-6 rounded-lg shadow"
          >
            <div>
              <label className="block text-sm">
                {t("contactForm.fullName")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                name="subject"
                value={formData.subject}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("contactForm.messagePlaceholder")}
                className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                rows={4}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#1a316b] flex justify-center items-center gap-2 text-white cursor-pointer px-4 py-2 rounded hover:bg-[#FFA500] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    {t("contactForm.sending")}
                  </>
                ) : (
                  t("contactForm.sendMessage")
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
