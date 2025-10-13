import React from "react";

const CTA = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full max-w-[1320px] px-8">
        <div
          className="rounded-3xl overflow-hidden shadow-lg relative min-h-[400px]"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] relative z-20">
            {/* Left Side - Image area (empty since bg image covers this) */}
            <div className="relative h-[300px] lg:h-auto">
              {/* Empty - image is now background */}
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="text-white relative z-10">
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 leading-tight"
                  style={{ fontFamily: "Sora" }}
                >
                  Shape a Brighter Tomorrow for Every Youths.
                </h2>

                <p
                  className="text-green-100 mb-8 text-base lg:text-lg leading-relaxed"
                  style={{ fontFamily: "Manrope" }}
                >
                  Give to the deserving, and see how hope transforms lives.
                </p>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
