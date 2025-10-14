"use client";
import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const CTASection = () => {
  const router=useRouter();
  return (
    <div className="w-full h-auto flex items-center justify-center mb-2 px-4 sm:px-6 lg:px-8">
      <div
        className="w-full max-w-[1320px] min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:h-[372px] rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center space-y-4 sm:space-y-5 lg:space-y-6 relative text-white p-6 sm:p-8 lg:p-12"
        style={{
          backgroundImage: "url('/assets/CTA-section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl sm:rounded-3xl lg:hidden"></div>
        
        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[42px] font-bold mb-2 sm:mb-3 lg:mb-4 text-center px-2 sm:px-4 lg:px-0 relative z-10 leading-tight"
          style={{ fontFamily: "Sora" }}
        >
          Shape a Brighter Tomorrow for Every Youths.
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl font-normal w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] text-center px-2 sm:px-4 lg:px-0 relative z-10 leading-relaxed"
          style={{ fontFamily: "Manrope" }}
        >
          Every step of support helps us transform lives—through learning,
          dignity, and opportunity.
        </p>
        <Button
          className="relative overflow-hidden bg-[#FF7700] hover:bg-[#FF7700]/80 text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] font-medium text-sm sm:text-base group transition-all duration-300 cursor-pointer z-10 mt-2 sm:mt-3 lg:mt-0"
          style={{ fontFamily: "Manrope" }}
          onClick={()=>router.push("/contact")}
        >
          <span className="flex items-center">
            Join us Today
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="white" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
