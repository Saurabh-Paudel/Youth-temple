import OurIpactGrid from "@/components/OurImpactGrid";
import React from "react";

const OurImpactSection = () => {
  return (
    <div className="max-w-[1380px] mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center w-full text-center">
        <div className="flex flex-col items-center gap-2 mb-4 sm:mb-6">
          <span
            className="text-sm sm:text-base font-normal text-gray-800"
            style={{ fontFamily: "Manrope" }}
          >
            Our Impact
          </span>
          <span className="h-[2px] w-6 bg-orange-500"></span>
        </div>
        <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-medium text-gray-950 mb-4 sm:mb-6 leading-tight">
          A Glimpse Into Our Journey of Change
        </h2>
        <p className="font-manrope text-sm sm:text-base font-normal text-gray-800 mb-6 sm:mb-8 w-full max-w-[705px] leading-relaxed">
          Every picture tells a story of resilience, compassion, and
          transformation. See how your support brings smiles and brighter
          futures.
        </p>
      </div>
      <OurIpactGrid />
    </div>
  );
};

export default OurImpactSection;
