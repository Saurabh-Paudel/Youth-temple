import React from "react";
import OurImpactGrid from "@/components/OurImpactGrid";

const OurImpact = () => {
  return (
    <div id="our-impact" className="flex items-center justify-center py-16 bg-gray-50">
      <div className="w-full max-w-[1320px] px-8">
        <div className="gap-12 items-center">
          <div className="flex items-center gap-50">
            {/* Section Label */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-orange-400"></span>
                <span
                  className="text-base font-normal text-gray-800"
                  style={{ fontFamily: "Manrope" }}
                >
                  Our Impact
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="text-4xl md:text-[42px] lg:text-[42px] font-medium leading-tight"
                style={{ fontFamily: "Sora" }}
              >
                Capturing the <span className="text-green-800">Smiles</span>,{" "}
                <span className="text-green-800">Struggles</span>, and{" "}
                <span className="text-green-800">Successes</span> That Shape Our
                Mission
              </h2>
            </div>

            {/* Description */}
            <div
              className="text-gray-800 text-base font-normal"
              style={{ fontFamily: "Manrope" }}
            >
              Every picture tells a story of resilience, compassion, and
              transformation. Through these moments, see how your support brings
              smiles and brighter futures.
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end my-12">
          <OurImpactGrid />
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
