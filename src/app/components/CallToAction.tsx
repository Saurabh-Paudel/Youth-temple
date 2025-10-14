import React from "react";
import { DonationSheet } from "@/app/donors/components/DonationSheet";

const CTA = () => {
  return (
    <section className="flex items-center justify-center py-12 md:py-16 px-4 lg:px-6">
      <div className="w-full max-w-[1320px]">
        <div
          className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg relative min-h-[300px] md:min-h-[400px]"
          style={{
            backgroundImage: "url('/assets/cta.jpg')",
            backgroundSize: "50% 100%",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(12, 108, 56, 0.7) 30%, rgba(12, 108, 56, 0.95) 45%, rgba(12, 108, 56, 1) 50%)",
            }}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] md:min-h-[400px] relative z-20">
            {/* Left Side - Image area (empty since bg image covers this) */}
            <div className="relative h-[250px] md:h-[300px] lg:h-auto">
              {/* Empty - image is now background */}
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
              <div className="text-white relative z-10">
                <h2
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-4 md:mb-6 leading-tight"
                  style={{ fontFamily: "Sora" }}
                >
                  Shape a Brighter Tomorrow for Every Youths.
                </h2>

                <p
                  className="text-green-100 mb-6 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed"
                  style={{ fontFamily: "Manrope" }}
                >
                  Give to the deserving, and see how hope transforms lives.
                </p>

                <DonationSheet>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 text-sm md:text-base group">
                    <span style={{ fontFamily: "Manrope" }}>Donate Now</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </DonationSheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
