import React from "react";
import { useTranslation } from "react-i18next";

const Question = () => {
  const { t } = useTranslation();

  const questions = [
    {
      title: t("faq.questions.q1.title"),
      text: t("faq.questions.q1.text"),
    },
    {
      title: t("faq.questions.q2.title"),
      text: t("faq.questions.q2.text"),
    },
    {
      title: t("faq.questions.q3.title"),
      text: t("faq.questions.q3.text"),
    },
    {
      title: t("faq.questions.q4.title"),
      text: t("faq.questions.q4.text"),
    },
  ];

  return (
    <section className="py-16 px-4 text-center bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-3xl text-2xl font-bold text-[#1a316b] mb-4">
          {t("faq.title")}
        </h2>
        <p className="text-gray-600 mb-10">{t("faq.description")}</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {questions.map((q, idx) => (
            <div key={idx} className="p-8 bg-gray-100 rounded-md">
              <h3 className="font-semibold text-md mb-2 text-[#1a316b]">
                {q.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px]">{q.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
