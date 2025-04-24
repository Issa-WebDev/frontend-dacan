import React from "react";
import ServicesCategories from "../components/ServicesCategories";
import Avantage from "../components/Avantage";
import ServicesHero from "../components/ServicesHero";
import ServicesFooter from "../components/ServicesFooter";

const Services = () => {
  return (
    <main className="pt-20">
      <ServicesHero />
      <Avantage />
      <ServicesCategories />
      <ServicesFooter />
    </main>
  );
};

export default Services;
