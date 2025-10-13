import React from "react";
import Image from "next/image";
import { Database, HandHeart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-[1320px] py-30 ">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-orange-500"></span>
              <span
                className="text-base font-normal text-gray-800"
                style={{ fontFamily: "Manrope" }}
              >
                ABOUT US
              </span>
            </div>
            <h2
              className="text-[42px] font-semibold text-gray-800 leading-[42px]"
              style={{ fontFamily: "Sora" }}
            >
              Knowledge is power and every Youth deserves it.
            </h2>
            <p
              className="text-gray-800 text-lg leading-relaxed font-normal"
              style={{ fontFamily: "Manrope" }}
            >
              We believe education is the most powerful way to end poverty.
              <br /> By supporting children&apos;s learning, you&apos;re not
              just giving them a pencil—you&apos;re giving them a future.
            </p>
          </div>

          {/* Statistics */}
          <div className="flex flex-col gap-6">
            {/* First Stat */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
                <HandHeart className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className="text-xl font-semibold text-gray-800"
                  style={{ fontFamily: "Manrope" }}
                >
                  We use donation to help people
                </h3>
                <p
                  className="text-gray-800 text-base leading-4"
                  style={{ fontFamily: "Manrope" }}
                >
                  We use donations to support people in need and improve their
                  lives.
                </p>
              </div>
            </div>

            {/* Second Stat */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className="text-xl font-semibold text-gray-800"
                  style={{ fontFamily: "Manrope" }}
                >
                  We create lasting impact
                </h3>
                <p
                  className="text-gray-800 text-base leading-4"
                  style={{ fontFamily: "Manrope" }}
                >
                  Our programs are designed to create sustainable change in
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image */}
            <div className="relative w-[642px] h-[546px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/aboutUs-banner-girl.png"
                alt="Youth education"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Images */}
            <div className="absolute -bottom-[8%] -left-[19%] w-[297px] h-[236px] rounded-2xl overflow-hidden border-5 border-white">
              <Image
                src="/assets/aboutUs-banner-boy.jpg"
                alt="Community support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
