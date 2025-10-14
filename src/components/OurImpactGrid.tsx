"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const OurImpactGrid = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  // All images data
  const allImages = [
    { src: "/assets/img1.jpg", alt: "Our Impact - Community engagement" },
    { src: "/assets/img2.jpg", alt: "Our Impact - Educational support" },
    { src: "/assets/img3.jpg", alt: "Our Impact - Youth development" },
    { src: "/assets/img4.jpg", alt: "Our Impact - Learning activities" },
    { src: "/assets/img5.jpg", alt: "Our Impact - Community programs" },
    { src: "/assets/img6.jpg", alt: "Our Impact - Success stories" },
    { src: "/assets/img7.jpg", alt: "Our Impact - Student progress" },
    { src: "/assets/img8.jpg", alt: "Our Impact - Learning outcomes" },
    { src: "/assets/img9.jpg", alt: "Our Impact - Community transformation" },
    { src: "/assets/img10.jpg", alt: "Our Impact - Educational achievements" },
    { src: "/assets/img11.jpg", alt: "Our Impact - Future leaders" },
  ];

  // Show first 6 images initially on mobile
  const visibleImages = showAllImages ? allImages : allImages.slice(0, 6);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Mobile Layout - Expandable Grid */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 p-4 transition-all duration-500 ease-in-out">
          {visibleImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group ${
                index >= 6 && showAllImages ? 'animate-in fade-in slide-in-from-bottom-4 duration-500' : ''
              }`}
              style={{
                animationDelay: index >= 6 ? `${(index - 6) * 100}ms` : '0ms'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        {allImages.length > 6 && (
          <div className="flex flex-col items-center mt-8 px-4 space-y-3">
            {/* Image Counter */}
            <div className="text-sm text-gray-600 font-manrope">
              Showing {visibleImages.length} of {allImages.length} images
            </div>
            
            {/* Toggle Button */}
            <button
              onClick={() => setShowAllImages(!showAllImages)}
              className="inline-flex items-center gap-3 text-green-600 font-normal rounded-full hover:shadow-xl transition-all duration-300 group text-xs md:text-base"
              aria-label={showAllImages ? "View less images" : "View more images"}
            >
              <span className="font-manrope text-base">
                {showAllImages ? "View Less" : `View More`}
              </span>
              {/* {!showAllImages && (
                <span className="bg-white/20 text-white text-sm px-2 py-1 rounded-full font-medium">
                  +{allImages.length - 6}
                </span>
              )} */}
              {showAllImages ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Desktop Layout - Complex Grid */}
      <div className="hidden lg:grid grid-cols-5 grid-rows-9 gap-3 p-4 w-full h-[600px] xl:h-[800px] 2xl:h-[983px] mx-auto">
        <div className="col-start-1 row-start-3 row-span-5 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img1.jpg"
            alt="Our Impact - Community engagement"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="20vw"
          />
        </div>

        <div className="col-start-2 row-start-2 row-span-2 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img2.jpg"
            alt="Our Impact - Educational support"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="15vw"
          />
        </div>

        <div className="col-start-2 row-start-4 row-span-3 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img5.jpg"
            alt="Our Impact - Community programs"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="15vw"
          />
        </div>

        <div className="col-start-2 row-start-7 row-span-2 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img8.jpg"
            alt="Our Impact - Learning outcomes"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="15vw"
          />
        </div>

        <div className="col-start-3 row-start-1 row-span-3 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img3.jpg"
            alt="Our Impact - Youth development"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="20vw"
          />
        </div>

        <div className="col-start-3 row-start-4 col-span-2 row-span-3 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img6.jpg"
            alt="Our Impact - Success stories"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="30vw"
          />
        </div>

        <div className="col-start-3 row-start-7 row-span-3 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img9.jpg"
            alt="Our Impact - Community transformation"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="20vw"
          />
        </div>

        <div className="col-start-4 row-start-7 row-span-2 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img10.jpg"
            alt="Our Impact - Educational achievements"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="15vw"
          />
        </div>

        <div className="col-start-4 row-start-2 row-span-2 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img4.jpg"
            alt="Our Impact - Learning activities"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="15vw"
          />
        </div>

        <div className="col-start-5 row-start-4 row-span-2 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img7.jpg"
            alt="Our Impact - Student progress"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="15vw"
          />
        </div>

        <div className="col-start-5 row-start-6 row-span-2 rounded-lg relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <Image
            src="/assets/img11.jpg"
            alt="Our Impact - Future leaders"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="15vw"
          />
        </div>
      </div>
    </div>
  );
};

export default OurImpactGrid;
