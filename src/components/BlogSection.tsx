"use client";
import React, { useState } from "react";
import { ArrowRightIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const blogPosts = [
    {
      id: 1,
      image: "/assets/blog1.png",
      title: "Vocational education empowers young minds",
      description:
        "We believe in offering quality life-defining and designing by learning practical skills, these youth gain the tools to build independent, sustainable futures...",
      readMore: "Read More",
    },
    {
      id: 2,
      image: "/assets/blog2.png",
      title: "Empowering youth through knowledge and skills",
      description:
        "Equipping young people with the tools they need to succeed in an ever-changing world. Join us in this journey of empowerment...",
      readMore: "Read More",
    },
    {
      id: 3,
      image: "/assets/blog3.png",
      title: "Inspiring the Next Generation with Education and Expertise",
      description:
        "Providing young people with the tools they need to succeed in an ever-changing world. Join us in this journey of empowerment...",
      readMore: "Read More",
    },
    {
      id: 4,
      image: "/assets/blog4.png",
      title: "Inspiring tomorrow's leaders",
      description:
        "We nurture young minds, fostering children, next generation is equipped to face challenges...",
      readMore: "Read More",
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 w-full max-w-[1320px] mx-auto overflow-hidden">
      <div className="mb-8 md:mb-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span className="w-6 md:w-8 h-[2px] bg-orange-400"></span>
          <span>Our Blogs</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left side - Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Inspiring <span className="text-green-600">Stories</span>,<br />
              creating lasting <span className="text-green-600">Impact</span>
            </h2>
          </div>

          {/* Right side - Description */}
          <div>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
              When you give, you&apos;re not just offering aid—you&apos;re
              offering opportunity. You&apos;re giving hope to youth who&apos;ve
              been waiting for a chance. Together, we&apos;re turning challenges
              into possibilities.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="w-full scrollbar-hidden">
        {/* Mobile: Single card carousel */}
        <div className="md:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          {/* Single Card Display */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer max-w-[352px] mx-auto">
                    {/* Blog Image */}
                    <div className="relative h-[174px] w-full overflow-hidden bg-gray-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Blog Content */}
                    <div className="p-4 space-y-3">
                      <h3
                        className="font-semibold text-gray-950 text-xl leading-tight group-hover:text-green-600 transition-colors duration-300"
                        style={{ fontFamily: "Sora" }}
                      >
                        {post.title}
                      </h3>

                      <p
                        className="text-gray-800 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300"
                        style={{ fontFamily: "Manrope" }}
                      >
                        {post.description}
                      </p>

                      <div className="flex justify-end">
                        <button className="text-green-600 text-xs font-medium group-hover:text-green-700 group-hover:font-semibold transition-all duration-300 flex items-center gap-1">
                          {post.readMore}
                          <span className="transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                            <ArrowRightIcon size={12} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Horizontal scroll */}
        <div className="hidden md:block">
          <div
            className="h-[400px] lg:h-[496px] w-full overflow-x-scroll scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-6 lg:gap-[52px] p-4 w-max">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-[352px] h-[409px] flex-shrink-0 px-4"
                >
                  <div className="relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer">
                    {/* Blog Image */}
                    <div className="relative h-[174px] w-[352px] overflow-hidden bg-gray-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Blog Content */}
                    <div className="p-4 space-y-3">
                      <h3
                        className="font-semibold text-gray-950 text-xl leading-tight group-hover:text-green-600 transition-colors duration-300"
                        style={{ fontFamily: "Sora" }}
                      >
                        {post.title}
                      </h3>

                      <p
                        className="text-gray-800 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300"
                        style={{ fontFamily: "Manrope" }}
                      >
                        {post.description}
                      </p>

                      <div className="flex justify-end">
                        <button className="text-green-600 text-xs font-medium group-hover:text-green-700 group-hover:font-semibold transition-all duration-300 flex items-center gap-1">
                          {post.readMore}
                          <span className="transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                            <ArrowRightIcon size={12} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
