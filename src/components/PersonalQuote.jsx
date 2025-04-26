import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PersonalQuote = () => {
  const { t } = useTranslation();

  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSelect = (e) => {
    setSelectedService(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://dacan-devis-backend.onrender.com/api/quote`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, selectedService }),
        }
      );

      if (res.ok) {
        toast.success(t("personalQuote.successMessage"));
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          description: "",
        });
      } else {
        toast.error(t("personalQuote.errorMessage"));
      }
    } catch (error) {
      toast.error(t("personalQuote.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-[40%_1fr] gap-8">
        <div>
          <h2 className="md:text-3xl text-2xl font-bold text-[#1a316b] mb-4">
            {t("personalQuote.title")}
          </h2>
          <p className="text-gray-700 mb-8">{t("personalQuote.text")}</p>
          <div className="grid grid-cols-1 gap-2">
            {["fast", "noObligation", "transparent"].map((key) => (
              <div key={key} className="p-4 shadow-sm rounded-md bg-white">
                <h3 className="font-semibold text-[#1a316b] text-lg mb-1">
                  {t(`personalQuote.${key}Title`)}
                </h3>
                <p className="text-sm text-gray-500">
                  {t(`personalQuote.${key}Text`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block text-sm">
                  {t("personalQuote.fullName")}
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border mt-1 border-gray-200 text-sm text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                  placeholder={t("personalQuote.yourName")}
                />
              </div>
              <div>
                <label className="block text-sm">
                  {t("personalQuote.companyName")}
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
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
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                  placeholder={t("personalQuote.emailPlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm">
                  {t("personalQuote.phone")}
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                  placeholder={t("personalQuote.phonePlaceholder")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm">
                {t("personalQuote.serviceType")}
              </label>
              <select
                value={selectedService}
                onChange={handleSelect}
                className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
              >
                <option value="">{t("personalQuote.selectService")}</option>
                {[
                  t("transport"),
                  t("spareParts"),
                  t("rental"),
                  t("fireProtection"),
                  t("welding"),
                  t("realEstate"),
                  t("others"),
                ].map((service) => (
                  <option
                    key={service}
                    value={t(`personalQuote.serviceOptions.${service}`)}
                  >
                    {t(`personalQuote.serviceOptions.${service}`)}
                    {selectedService === service &&
                      ` (${t("personalQuote.serviceOptions.selected")})`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm">
                {t("personalQuote.description")}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 text-sm text-gray-500 rounded-md mt-1 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#1a316b]"
                rows="4"
                placeholder={t("personalQuote.descriptionPlaceholder")}
              />
            </div>
            <button
              type="submit"
              className="bg-[#1a316b] text-white cursor-pointer px-4 py-2 rounded hover:bg-[#FFA500] transition flex items-center justify-center gap-2"
              disabled={loading}
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
                t("personalQuote.getQuote")
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PersonalQuote;
