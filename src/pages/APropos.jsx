import React from "react";
import AboutHero from "../components/AboutHero";
import AboutFooter from "../components/AboutFooter";
import AboutFuture from "../components/AboutFuture";
import AboutValue from "../components/AboutValue";
import WhoAreYou from "../components/WhoAreYou";
import VisionMission from "../components/VisionMission";

const APropos = () => {
  return (
    <main className="pt-20">
      <AboutHero />
      <WhoAreYou />
      <AboutValue />
      <VisionMission />
      <AboutFuture />
      <AboutFooter />
    </main>
  );
};

export default APropos;
