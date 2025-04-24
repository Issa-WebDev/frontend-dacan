import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

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
          <p className="text-sm text-gray-300">{t("footer_description")}</p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-[#FFA500]">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{t("services")}</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>{t("transport_title")}</li>
            <li>{t("spare_parts_title")}</li>
            <li>{t("rental_title")}</li>
            <li>{t("fire_protection_title")}</li>
          </ul>
        </div>

        {/* Entreprise */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">{t("entreprise")}</h3>
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
              <Link>{t("mentions_legales")}</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-sm text-gray-300">
          <h3 className="text-lg font-semibold mb-3 text-white">{t("contact")}</h3>
          <p>{t("address")}</p>
          <p>{t("phone")}</p>
          <p>{t("email")}</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 text-center text-xs text-gray-400">
        <hr className="mb-10" />© 2025 DACAN. {t("all_rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
