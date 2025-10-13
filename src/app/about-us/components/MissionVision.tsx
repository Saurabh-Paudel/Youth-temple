import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TbTargetArrow } from "react-icons/tb";
import { LuScanEye } from "react-icons/lu";

const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col space-y-3 md:space-y-4">
          <div className="inline-flex items-center space-x-2">
            <div className="h-[1px] w-4 border border-orange-500"></div>
            <span className="font-medium text-sm md:text-base">
              Mission and Vision
            </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-[32px] font-bold leading-[132%] text-[#252A34]">
            Let Us Come Together <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            To Make a Difference
          </p>
          <p className="text-[#444444] text-sm md:text-lg flex-wrap">
            A world where every child, regardless of background, can dream
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            freely, learn fully, and live with dignity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 my-2">
            <div className="bg-green-50 rounded-lg p-4 md:p-6 relative">
              <div className="flex items-center justify-end">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TbTargetArrow className="w-5 md:w-6 h-5 md:h-6 text-green-500" />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-green-700 mb-2 md:mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                To provide every underprivileged child with access to education,
                nourishment, and a safe, supportive environment to grow and
                succeed.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 md:p-6 relative">
              <div className="flex items-center justify-end">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <LuScanEye className="w-5 md:w-6 h-5 md:h-6 text-green-500" />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-green-700 mb-2 md:mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                A world where every child has the opportunity to learn, thrive,
                and reach their full potential.
              </p>
            </div>
          </div>
        </div>
        <div className="relative  mt-8 lg:mt-0 ">
          <div className="w-[450px] h-[440px] overflow-hidden rounded-2xl mx-auto">
            <Image
              src="/assets/mission-vision.jpg"
              alt=""
              width={450}
              height={440}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block absolute bottom-[170px] right-2 z-30">
            <Image src="/assets/arrow.png" alt="" width={80} height={200} />
          </div>
          {/* Overlapping content where arrow points */}
          <div className="absolute -bottom-8 -right-5 z-20 w-80 bg-green-50 rounded-2xl p-4 lg:p-6 shadow-lg">
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-xs lg:text-sm text-gray-800 font-medium">
                  Together, we&apos;re building a brighter future for every
                  child.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-xs lg:text-sm text-gray-800">
                  Protecting Children From A Broken World.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-xs lg:text-sm text-gray-800">
                  We Have Already Stepped Out And Start Changing The World
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-xs lg:text-sm text-gray-800">
                  Fulfilling Every Child&apos;s Basic Needs
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
