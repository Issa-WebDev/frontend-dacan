import React from "react";
import { useTranslation } from "react-i18next";

export default function VisionMission() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-4 text-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-[#1a316b] rounded-md p-10">
          <h2 className="md:text-3xl text-white text-2xl font-bold mb-4">
            {t("visionMission.visionTitle")}
          </h2>
          <p className="text-md text-white">{t("visionMission.visionText")}</p>
        </div>
        <div className="bg-[#FFA500] rounded-md p-10">
          <h2 className="md:text-3xl text-white text-2xl font-bold mb-4">
            {t("visionMission.missionTitle")}
          </h2>
          <p className="text-md text-white">{t("visionMission.missionText")}</p>
        </div>
      </div>
    </section>
  );
}
