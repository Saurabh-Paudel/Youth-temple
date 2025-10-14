import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { DonationSheet } from "./DonationSheet";

const HeroSection = () => {
  return (
    <>
      <div className="w-full lg:w-[1380px] mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center w-full max-w-[911px] text-center">
          <div className="flex flex-col items-center gap-2 mb-4 sm:mb-6">
            <span
              className="text-sm sm:text-base font-normal text-gray-800"
              style={{ fontFamily: "Manrope" }}
            >
              Donate Now
            </span>
            <span className="h-[2px] w-6 bg-orange-500"></span>
          </div>
          <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-medium text-gray-950 mb-4 sm:mb-6 leading-tight">
            Become a Difference Maker
          </h2>
          <p className="font-manrope text-sm sm:text-base font-normal text-gray-800 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Explore impactful stories, insights, and updates that bring you
            closer to the lives we&apos;re transforming together.
          </p>
          <div className="w-full flex items-center justify-center">
            <DonationSheet>
              <Button
                className="relative overflow-hidden bg-green-600 text-white px-6 sm:px-8 lg:px-4 py-3 rounded-[30px] w-full max-w-[280px] sm:max-w-[320px] lg:w-[403px] font-medium text-sm sm:text-base group transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "Manrope" }}
              >
                <span className="absolute inset-0 bg-[#FF7700] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 flex items-center justify-center">
                  Donate Now
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                </span>
              </Button>
            </DonationSheet>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[500px] sm:min-h-[600px] lg:h-[740px] bg-[#EDFDE4] flex items-center justify-center py-8 sm:py-12 lg:py-0">
        <div className="max-w-[1320px] w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Image Section */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:w-[537px] h-[300px] sm:h-[350px] lg:h-[500px] rounded-2xl rounded-tr-[60px] sm:rounded-tr-[80px] lg:rounded-tr-[120px] rounded-bl-[60px] sm:rounded-bl-[80px] lg:rounded-bl-[120px] overflow-hidden">
                <Image
                  src="/assets/aboutbanner.jpg"
                  alt="Child benefiting from donations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2">
              {/* Header */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-orange-500"></span>
                  <span
                    className="text-sm sm:text-base font-normal text-gray-800"
                    style={{ fontFamily: "Manrope" }}
                  >
                    WHERE MONEY GOES
                  </span>
                </div>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-gray-800 leading-tight"
                  style={{ fontFamily: "Sora" }}
                >
                  How Your Donation Makes a Difference
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4">
                <p
                  className="text-gray-800 text-sm sm:text-base font-normal leading-relaxed"
                  style={{ fontFamily: "Manrope" }}
                >
                  Your donation directly supports students in Nepal who are
                  eager to learn but lack access to the tools and opportunities
                  they need. With your help, we provide free digital education,
                  laptops, internet access, mentorship, and essential learning
                  materials. These resources open doors for students to explore
                  their potential, build confidence, and gain skills that
                  prepare them for future careers in a rapidly changing world.
                </p>
                <p
                  className="text-gray-800 text-sm sm:text-base font-normal leading-relaxed"
                  style={{ fontFamily: "Manrope" }}
                >
                  Every contribution — big or small — creates lasting impact.
                  While the majority of funds go straight into student programs
                  and educational resources, a small portion helps us maintain
                  the infrastructure that makes it all possible. From training
                  local educators to managing secure online classrooms, your
                  generosity fuels a system of support designed to uplift entire
                  communities. Your gift doesn&apos;t just fund education — it builds
                  futures.
                </p>
              </div>

              {/* Statistics */}
              <div className="w-full max-w-[725px] min-h-[84px] flex flex-col sm:flex-row items-center justify-between border border-orange-600 p-4 sm:p-6 lg:p-4 rounded-2xl sm:rounded-3xl gap-4 sm:gap-2">
                <div className="text-center flex-1">
                  <div className="text-xl sm:text-2xl font-semibold text-orange-600 mb-1">
                    200+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-950 font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Active Donors
                  </div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-xl sm:text-2xl font-semibold text-orange-600 mb-1">
                    500+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-950 font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Students Supported
                  </div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-xl sm:text-2xl font-semibold text-orange-600 mb-1">
                    100+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-950 font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Volunteers
                  </div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-xl sm:text-2xl font-semibold text-orange-600 mb-1">
                    50+
                  </div>
                  <div
                    className="text-xs sm:text-sm text-gray-950 font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Communities Reached
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
