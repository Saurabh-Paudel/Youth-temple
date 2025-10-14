import React from "react";
import Image from "next/image";
import { Database, HandHeart } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="flex items-center justify-center px-4 lg:px-6" aria-label="About us section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl py-12 lg:py-20">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          {/* Header */}
          <header className="flex flex-col gap-4 lg:gap-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-orange-500" aria-hidden="true"></span>
              <span className="text-sm md:text-base font-medium text-gray-800 font-manrope tracking-wider">
                ABOUT US
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold text-gray-800 leading-tight font-sora">
              Knowledge is power and every Youth deserves it.
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal font-manrope max-w-2xl">
              We believe education is the most powerful way to end poverty.{" "}
              <span className="block mt-2">
                By supporting children&apos;s learning, you&apos;re not just giving them a pencil—you&apos;re giving them a future.
              </span>
            </p>
          </header>

          {/* Key Features */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* First Feature */}
            <article className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200 group-hover:bg-orange-200 transition-colors duration-300">
                <HandHeart className="w-6 h-6 md:w-7 md:h-7 text-orange-600" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-manrope leading-tight">
                  We use donation to help people
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-manrope">
                  We use donations to support people in need and improve their lives through sustainable programs.
                </p>
              </div>
            </article>

            {/* Second Feature */}
            <article className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200 group-hover:bg-orange-200 transition-colors duration-300">
                <Database className="w-6 h-6 md:w-7 md:h-7 text-orange-600" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-manrope leading-tight">
                  We create lasting impact
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-manrope">
                  Our programs are designed to create sustainable change in communities for generations to come.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative order-first lg:order-last">
          {/* Mobile Layout - Single Column */}
          <div className="lg:hidden space-y-4">
            <div className="relative w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/aboutUs-banner-girl.png"
                alt="Youth engaged in educational activities"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full h-[220px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/aboutUs-banner-boy.jpg"
                alt="Community support and learning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Desktop Layout - Overlapping Images */}
          <div className="hidden lg:block relative max-w-2xl mx-auto">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/aboutUs-banner-girl.png"
                alt="Youth engaged in educational activities"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
            </div>

            {/* Overlapping Image */}
            <div className="absolute -bottom-8 -left-16 w-72 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="/assets/aboutUs-banner-boy.jpg"
                alt="Community support and learning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 30vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
