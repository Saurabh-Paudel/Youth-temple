import React from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import MissionVision from "./components/MissionVision";
import WhatWeDo from "@/components/WhatWeDo";
const page = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <MissionVision />
      <WhatWeDo />
    </>
  );
};

export default page;
