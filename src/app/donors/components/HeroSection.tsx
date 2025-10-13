import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="max-w-[1380px] mx-auto flex flex-col items-center justify-center gap-16 py-16">
        <div className="flex flex-col items-center w-full max-w-[911px] text-center">
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-base font-normal text-gray-800"
              style={{ fontFamily: "Manrope" }}
            >
              Donate Now
            </span>
            <span className="h-[2px] w-6 bg-orange-500"></span>
          </div>
          <h2 className="font-sora text-[54px] font-medium text-gray-950">
            Become a Difference Maker
          </h2>
          <p className="font-manrope text-base font-normal text-gray-800 mb-8 ">
            Explore impactful stories, insights, and updates that bring you
            closer to the lives we&apos;re transforming together.
          </p>
          <div className="w-full flex items-center justify-center">
            <Button
              className="relative overflow-hidden bg-green-600 text-white px-4 py-3 rounded-[30px] w-[403px] font-medium text-base group transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "Manrope" }}
            >
              <span className="absolute inset-0 bg-[#FF7700] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center">
                Donate Now
                <Heart className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-[740px] bg-[#EDFDE4] flex items-center justify-center">
        <div className="max-w-[1320px] h-[500px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Section */}
            <div className="relative">
              <div className="relative w-[537px] h-[500px] rounded-2xl rounded-tr-[120px] rounded-bl-[120px] overflow-hidden">
                <Image
                  src="/assets/aboutbanner.jpg"
                  alt="Child benefiting from donations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-orange-500"></span>
                  <span
                    className="text-base font-normal text-gray-800"
                    style={{ fontFamily: "Manrope" }}
                  >
                    WHERE MONEY GOES
                  </span>
                </div>
                <h2
                  className="text-[32px] font-medium text-gray-800 leading-[32px]"
                  style={{ fontFamily: "Sora" }}
                >
                  How Your Donation Makes a Difference
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p
                  className="text-gray-800 text-base font-normal leading-relaxed"
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
                  className="text-gray-800 text-base font-normal leading-relaxed"
                  style={{ fontFamily: "Manrope" }}
                >
                  Every contribution — big or small — creates lasting impact.
                  While the majority of funds go straight into student programs
                  and educational resources, a small portion helps us maintain
                  the infrastructure that makes it all possible. From training
                  local educators to managing secure online classrooms, your
                  generosity fuels a system of support designed to uplift entire
                  communities. Your gift doesn’t just fund education — it builds
                  futures.
                </p>
              </div>

              {/* Statistics */}
              <div className="w-[725px] h-[84px] flex items-center justify-between border border-orange-600 p-4 rounded-3xl">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange-600 mb-1">
                    200+
                  </div>
                  <div
                    className="text-sm text-gray-950 font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Active Donors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange-600 mb-1">
                    500+
                  </div>
                  <div
                    className="text-sm text-gray-950 font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Students Supported
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange-600 mb-1">
                    100+
                  </div>
                  <div
                    className="text-sm text-gray-950 font-medium"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Volunteers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-orange-600 mb-1">
                    50+
                  </div>
                  <div
                    className="text-sm text-gray-950 font-medium"
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
