"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-[1380px] mx-auto flex flex-col items-center justify-center gap-15 py-16">
      <div className="flex flex-col items-center w-full max-w-[911px] text-center">
        <h2 className="font-sora text-[54px] font-semibold text-green-600">
          A small act of kindness <br /> can change a lifetime of learning.
        </h2>
        <p className="font-manrope text-base font-medium text-gray-800 mb-8 ">
          Every child deserves the chance to learn and grow. Your small act of
          kindness can open doors to education, ignite curiosity, and change a
          lifetime. Join us in creating brighter futures, one child at a time.
        </p>
        <div className="flex gap-4 items-center">
          <Button
            className="relative overflow-hidden bg-green-600 text-white px-4 py-3 rounded-[30px] font-medium text-base group transition-all duration-300 cursor-pointer"
            style={{ fontFamily: "Manrope" }}
          >
            <span className="absolute inset-0 bg-[#FF7700] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center">
              Donate Now
              <Heart className="w-4 h-4 ml-2" />
            </span>
          </Button>
          <Button
            variant="ghost"
            className="border border-gray-200 bg-gray-50 rounded-[30px] py-3 px-4 text-gray-800 hover:text-gray-900 font-medium cursor-pointer"
            style={{ fontFamily: "Manrope" }}
            onClick={() => {
              document.getElementById("our-impact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            See Our Impacts
          </Button>
        </div>
      </div>
      <div
        className="relative w-full h-[656px] rounded-3xl flex items-end justify-between p-6"
        style={{
          backgroundImage: "url('/assets/Hero-Banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Card */}
        <div className="w-[320px] h-[380px] p-4 rounded-3xl bg-white flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-sora font-semibold text-gray-950">
              Join Hands in Caring, Build a Better Tomorrow!
            </div>
            <div className="text-sm font-manrope font-medium text-gray-800">
              Every act of kindness can change a life. Join the caring movement
              and help build a brighter future for all.
            </div>
          </div>
          <div
            className="relative w-[288px] h-[170px] rounded-2xl"
            style={{
              backgroundImage: "url('/assets/hero-card.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Badge className="text-green-600 bg-green-100 border border-green-200 absolute left-2 top-2 rounded-full px-2 py-1 ">
              Education Fund
            </Badge>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-[320px] h-[231px] p-4 rounded-3xl bg-white flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            {/* Amount */}
            <div className="text-[32px] font-semibold text-gray-[#030712] text-center">
              $23,800,50
            </div>

            {/* Progress Bar */}
            <div className="flex flex-col gap-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-400 h-2 rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>
              <div
                className="flex justify-between items-center "
                style={{ fontFamily: "Manrope" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#1F2937] text-sm">1,200</span>
                  <span className="text-[#374151] text-xs">Donated</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm">68%</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300" />

            {/* Description */}
            <p className="text-gray-800 text-xs font-normal">
              Help Rebuild Hope for Children for education
            </p>
          </div>

          {/* Donate Button */}
          <Button className="relative overflow-hidden bg-green-600 text-white px-6 py-3 rounded-full font-medium text-base group transition-all duration-300 w-full">
            <span className="absolute inset-0 bg-[#FF7700] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center justify-center">
              Donate Now
              <Heart className="w-4 h-4 ml-2" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
