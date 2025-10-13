import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const CTASection = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center py-6">
      <div
        className="w-[1320px] h-[372px] rounded-3xl flex flex-col items-center justify-center space-y-6 relative text-white"
        style={{
          backgroundImage: "url('/assets/CTA-section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          className="text-[42px]  font-bold mb-4"
          style={{ fontFamily: "Sora" }}
        >
          Shape a Brighter Tomorrow for Every Youths.
        </h2>
        <p
          className="text-xl font-normal w-[650px] text-center"
          style={{ fontFamily: "Manrope" }}
        >
          Every step of support helps us transform lives—through learning,
          dignity, and opportunity.
        </p>
        <Button
          className="relative overflow-hidden bg-[#FF7700] hover:bg-[#FF7700]/80 text-white px-4 py-3 rounded-[30px] font-medium text-base group transition-all duration-300 cursor-pointer"
          style={{ fontFamily: "Manrope" }}
        >
          Join us Today
          <Heart className="w-4 h-4 ml-2" fill="white" />
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
