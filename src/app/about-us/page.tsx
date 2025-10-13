import React from "react";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import MissionVision from "./components/MissionVision";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonial from "./components/Testimonial";
import CTASection from "@/components/CTASection";
const page = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <MissionVision />
      <WhatWeDo />
      <Testimonial />
      <CTASection />
    </>
  );
};

export default page;
