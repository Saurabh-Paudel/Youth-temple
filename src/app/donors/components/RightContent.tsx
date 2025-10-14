import Image from "next/image";
import { Heart } from "lucide-react";
import { DonationSheet } from "./DonationSheet";

export default function RightContent() {
  const currentAmount = 25800.50;
  const targetAmount = 50000;
  const progressPercentage = (currentAmount / targetAmount) * 100;
  const donorCount = 1200;

  return (
    <div className="relative w-full max-w-[540px] mx-auto px-2 sm:px-4 lg:px-0">
      {/* Background Image */}
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/assets/aboutbanner.jpg"
          alt="Children smiling"
          fill
          className="object-cover w-full h-full"
         
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        
        {/* White fade from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/60 via-white/20 to-transparent z-[2]"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Donate Now Button */}
          <div className="mb-2 sm:mb-3 lg:mb-4">
            <DonationSheet>
              <button 
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/40 backdrop-blur-sm text-white px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-xl border border-white/30 hover:bg-white/50 transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "Manrope" }}
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                <span className="whitespace-nowrap">Donate Now</span>
              </button>
            </DonationSheet>
          </div>

          {/* Amount Raised */}
          <div className="mb-1.5 sm:mb-2 lg:mb-3">
            <div 
              className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold drop-shadow-2xl"
              style={{ 
                fontFamily: "Sora",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
              }}
            >
              ${currentAmount.toLocaleString()}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-2 sm:mb-3">
            <div className="bg-white/40 backdrop-blur-sm rounded-full h-1.5 sm:h-2 md:h-3 overflow-hidden w-full shadow-lg border border-white/20">
              <div 
                className="bg-white h-full rounded-full transition-all duration-300 shadow-sm"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div 
              className="flex justify-between items-center mt-1.5 sm:mt-2 text-white text-xs sm:text-sm font-medium"
              style={{ 
                fontFamily: "Manrope",
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
              }}
            >
              <span>{donorCount.toLocaleString()} Donated</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
