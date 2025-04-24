import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Globe2, Facebook, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "fr");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <div className="rounded-xl bg-white">
              <img src={logo} alt="Logo DACAN" className="h-10 w-10" />
            </div>
            <span className="text-xl font-semibold">DACAN</span>
          </div>
          <p className="text-sm text-gray-300">
            {t("footer_description") ||
              "Your partner for logistics, industrial equipment and services."}
          </p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-[#FFA500]">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#FFA500]">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("services")}</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Transport & Logistics</li>
            <li>Vehicle Spare Parts</li>
            <li>Vehicle & Machinery Rental</li>
            <li>Protection Equipment</li>
          </ul>
        </div>

        {/* Entreprise */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">
            {t("entreprise") || "Entreprise"}
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/a-propos">{t("a_propos")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link to="/devis">{t("devis")}</Link>
            </li>
            <li>
              <Link to="/legal">
                {t("mentions_legales") || "Mentions légales"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-sm text-gray-300">
          <h3 className="text-lg font-semibold mb-3">{t("contact")}</h3>
          <p>Cocody Angré Djrogobité, Abidjan</p>
          <p>+225 07 0123 4567</p>
          <p>contact@dacan-ci.com</p>
        </div>
      </div>

      {/* Copyright */}

      <div className="mt-20 text-center text-xs text-gray-400">
        <hr className="mb-10" />
		© 2025 DACAN.{" "}
        {t("all_rights_reserved") || "Tous droits réservés."}
      </div>
    </footer>
  );
};

export default Footer;
