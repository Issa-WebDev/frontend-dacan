import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "fr");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const links = [
    { path: "/", label: t("accueil") },
    { path: "/services", label: t("services") },
    { path: "/a-propos", label: t("a_propos") },
    { path: "/devis", label: t("devis") },
    { path: "/contact", label: t("contact") },
  ];

  useEffect(() => {
    setLang(i18n.language);
    setIsOpen(false); // Ferme le menu mobile au changement de route
  }, [location]);

  return (
    <header className="shadow-md w-full bg-white">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-[#1A1F2C] text-xl font-semibold">DACAN</span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-[#1A1F2C] hover:text-[#FFA500] transition-colors ${
                location.pathname === path ? "text-[#FFA500]" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Lang switch */}
          <div className="flex items-center px-2 py-1 cursor-pointer space-x-1 text-[#3B4256]">
            <Globe size={18} />
            <select
              value={lang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent outline-none text-sm cursor-pointer"
            >
              <option value="fr" className="cursor-pointer">
                FR
              </option>
              <option value="en" className="cursor-pointer">
                EN
              </option>
            </select>
          </div>
        </div>

        {/* Toggle button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block text-[#3B4256] font-medium ${
                location.pathname === path ? "text-[#FFA500]" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="flex items-center border px-2 py-1 rounded-md space-x-1 text-[#3B4256] w-fit">
            <Globe size={18} />
            <select
              value={lang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent outline-none text-sm"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
