import OurIpactGrid from "@/components/OurImpactGrid";
import React from "react";

const OurImpactSection = () => {
  return (
    <div className="max-w-[1380px] mx-auto flex flex-col items-center justify-center gap-16 py-16">
      <div className="flex flex-col items-center w-full text-center">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-base font-normal text-gray-800"
            style={{ fontFamily: "Manrope" }}
          >
            Our Impact
          </span>
          <span className="h-[2px] w-6 bg-orange-500"></span>
        </div>
        <h2 className="font-sora text-[54px] font-mesemibdium text-gray-950">
          A Glimpse Into Our Journey of Change
        </h2>
        <p className="font-manrope text-base font-normal text-gray-800 mb-8 w-[705px]">
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
