import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaWpforms,
  FaClipboardCheck,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const HowItWork = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FaWpforms className="text-4xl text-[#1a316b] mb-4 mx-auto" />,
      title: t("howItWorks.steps.step1.title"),
      text: t("howItWorks.steps.step1.text"),
    },
    {
      icon: (
        <FaClipboardCheck className="text-4xl text-[#1a316b] mb-4 mx-auto" />
      ),
      title: t("howItWorks.steps.step2.title"),
      text: t("howItWorks.steps.step2.text"),
    },
    {
      icon: (
        <FaFileInvoiceDollar className="text-4xl text-[#1a316b] mb-4 mx-auto" />
      ),
      title: t("howItWorks.steps.step3.title"),
      text: t("howItWorks.steps.step3.text"),
    },
  ];

  return (
    <section className="py-16 px-4 text-center bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a316b] mb-4">
          {t("howItWorks.title")}
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          {t("howItWorks.description")}
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 px-6 py-8 rounded-lg  text-center"
            >
              {step.icon}
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm pt-4">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
