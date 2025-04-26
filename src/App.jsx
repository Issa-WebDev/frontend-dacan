import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Services from "./pages/Services";
import APropos from "./pages/APropos";
import Devis from "./pages/Devis";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./i18n"; // pour init i18n
import Footer from "./components/Footer";
import ScrollToTop from "../ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTopBtn />
    </Router>
  );
}

export default App;
