import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { LuScanEye } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full lg:w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="flex flex-col space-y-3 md:space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-[1px] w-4 border border-orange-500"></div>
            <span className="text-sm md:text-base">Testimonials</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-60">
            <p className="text-xl md:text-2xl lg:text-[42px] font-semibold leading-[132%] text-[#030712] w-full md:w-[625px]">
              Inspiring Stories of Growth and Possibility
            </p>
            <p className="text-[#444444] text-sm lg:text-base w-full lg:w-[567px] text-justify">
              Every testimony here reflects the lives we&apos;ve touched together—children who now dream, families who found hope, and volunteers who gave from the heart.
            </p>
          </div>
        </div>
        {/* Testimonial Carousel */}
        <div>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
