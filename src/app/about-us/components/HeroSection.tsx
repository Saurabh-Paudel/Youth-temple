import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[830px] relative"
      style={{
        backgroundImage: "url('/assets/about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute bottom-0 w-full h-[265.5px]"
        style={{
          backgroundImage: "url('/assets/about-layer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col items-center w-full max-w-[911px] text-center text-white">
            <div className="flex flex-col items-center gap-2">
              <span
                className="text-base font-normal "
                style={{ fontFamily: "Manrope" }}
              >
                About Us
              </span>
              <span className="h-[2px] w-6 bg-orange-500"></span>
            </div>
            <h2 className="font-sora text-[42px] font-bold">
              Transforming Potential into Possibility
            </h2>
            <p className="font-manrope text-base font-thin mb-8 ">
              Join us in giving Nepalese youth the education, skills, and
              opportunities they need to thrive and create lasting impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
