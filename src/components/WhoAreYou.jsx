import { useTranslation } from "react-i18next";

const WhoAreYou = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="overflow-hidden rounded-md">
          <img
            src="/whoareyou.webp"
            className="w-full h-full object-cover"
            alt="qui somme nous"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a316b] mb-4">
            {t("who.title")}
          </h2>
          <p className="text-gray-700 mb-6 md:text-[16px] text-sm">{t("who.p1")}</p>
          <p className="text-gray-700 mb-6 md:text-[16px] text-sm">{t("who.p2")}</p>
          <p className="text-gray-700 md:text-[16px] text-sm">{t("who.p3")}</p>
        </div>
      </div>
    </section>
  );
};

export default WhoAreYou;
