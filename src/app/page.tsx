import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "@/components/WhatWeDo";
import OurImpact from "./components/OurImpact";
import BlogSection from "@/components/BlogSection";
import CTA from "./components/CallToAction";
const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <OurImpact />
      <BlogSection />
      <CTA />
    </div>
  );
};

export default page;
