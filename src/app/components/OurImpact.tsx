import React from "react";
import OurImpactGrid from "@/components/OurImpactGrid";

const OurImpact = () => {
  return (
    <section 
      id="our-impact" 
      className="flex items-center justify-center py-12 lg:py-16 bg-gray-50"
      aria-label="Our impact and achievements"
    >
      <div className="w-full max-w-7xl px-4 lg:px-8">
        <div className="space-y-8 lg:space-y-12">
          {/* Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
            {/* Section Label & Heading */}
            <div className="flex-1 space-y-4 lg:space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-orange-400" aria-hidden="true"></span>
                <span className="text-sm md:text-base font-medium text-gray-800 font-manrope tracking-wider">
                  OUR IMPACT
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold leading-tight font-sora text-gray-800">
                Capturing the <span className="text-green-800">Smiles</span>,{" "}
                <span className="text-green-800">Struggles</span>, and{" "}
                <span className="text-green-800">Successes</span> That Shape Our Mission
              </h2>
            </div>

            {/* Description */}
            <div className="flex-1 lg:max-w-lg">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal font-manrope">
                Every picture tells a story of resilience, compassion, and transformation. 
                Through these moments, see how your support brings smiles and brighter futures.
              </p>
            </div>
          </div>

          {/* Impact Grid */}
          <div className="flex justify-center">
            <OurImpactGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
