"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowRight, Users, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DonationSheet } from "@/app/donors/components/DonationSheet";
import Support from "./Support";

export interface DonationStats {
  amount: string;
  percentage: number;
  donors: number;
  goal: string;
}

interface HeroCard {
  title: string;
  description: string;
  imageUrl: string;
  badgeText: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedAmount, setAnimatedAmount] = useState(0);

  // Sample data - in real app, this would come from props or API
  const donationStats: DonationStats = {
    amount: "$23,800.50",
    percentage: 68,
    donors: 1200,
    goal: "$35,000",
  };

  const heroCard: HeroCard = {
    title: "Join Hands in Caring, Build a Better Tomorrow!",
    description:
      "Every act of kindness can change a life. Join the caring movement and help build a brighter future for all.",
    imageUrl: "/assets/hero-card.jpg",
    badgeText: "Education Fund",
    badgeVariant: "secondary",
  };

  // Animation effects
  useEffect(() => {
    setIsVisible(true);
    // Animate donation amount
    const targetAmount = 23800.5;
    const duration = 2000;
    const steps = 60;
    const increment = targetAmount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetAmount) {
        current = targetAmount;
        clearInterval(timer);
      }
      setAnimatedAmount(current);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20"
      aria-label="Hero section"
    >
      <div
        className={`flex flex-col items-center gap-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Hero Content */}
        <header className="flex flex-col items-center w-full max-w-4xl text-center space-y-6">
          <h1 className="font-sora text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-600 leading-tight">
            A small act of kindness{" "}
            <span className="block mt-2">
              can change a lifetime of learning.
            </span>
          </h1>
          <p className="font-manrope text-lg md:text-xl font-medium text-gray-700 max-w-3xl leading-relaxed">
            Every child deserves the chance to learn and grow. Your small act of
            kindness can open doors to education, ignite curiosity, and change a
            lifetime. Join us in creating brighter futures, one child at a time.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <DonationSheet>
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 md:px-8 py-2 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[180px] cursor-pointer"
                aria-label="Make a donation to support education"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF7700] to-[#FF8C42] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Donate Now
                  <Heart className="w-5 h-5" aria-hidden="true" />
                </span>
              </Button>
            </DonationSheet>

            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-green-600 bg-white hover:bg-green-50 rounded-full py-2 md:py-4 px-4 md:px-8 text-gray-700 hover:text-green-700 font-semibold text-sm md:text-lg transition-all duration-300 min-w-[180px] group cursor-pointer"
              onClick={() => handleSmoothScroll("our-impact")}
              aria-label="View our impact and achievements"
            >
              <span className="flex items-center justify-center gap-2">
                See Our Impact
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </span>
            </Button>
          </div>
        </header>
        {/* Hero Banner with Cards */}
        <div className="relative w-full space-y-8">
          {/* Desktop Layout - Cards over image */}
          <div className="hidden xl:block">
            <div
              className="relative w-full h-[656px] rounded-3xl overflow-hidden shadow-2xl"
              role="img"
              aria-label="Children learning in classroom - Hero banner"
            >
              <Image
                src="/assets/Hero-Banner.png"
                alt="Children engaged in learning activities"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 90vw, 80vw"
              />

              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Cards Container - Desktop */}
              <div className="absolute inset-0 flex flex-row items-end justify-between p-6 gap-6">
                {/* Left Card - Impact Story */}
                <article className="w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-sora font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors duration-300">
                      {heroCard.title}
                    </h3>
                    <p className="text-sm font-manrope text-gray-700 leading-relaxed">
                      {heroCard.description}
                    </p>
                  </div>

                  <div className="relative mt-6 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={heroCard.imageUrl}
                      alt="Education program in action"
                      width={288}
                      height={170}
                      className="object-cover w-full h-[170px] group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge
                      variant={heroCard.badgeVariant}
                      className="absolute top-3 left-3 bg-green-100 text-green-700 border-green-200 font-semibold shadow-sm"
                    >
                      {heroCard.badgeText}
                    </Badge>
                  </div>
                </article>

                {/* Right Card - Donation Stats */}
                <article className="w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <div className="space-y-6">
                    {/* Animated Amount Display */}
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 font-sora">
                        $
                        {animatedAmount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Raised so far
                      </p>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="space-y-3">
                      <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: `${donationStats.percentage}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-sm font-manrope">
                        <div className="flex items-center gap-2">
                          <Users
                            className="w-4 h-4 text-green-600"
                            aria-hidden="true"
                          />
                          <span className="font-semibold text-gray-900">
                            {donationStats.donors.toLocaleString()}
                          </span>
                          <span className="text-gray-600">Donors</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target
                            className="w-4 h-4 text-green-600"
                            aria-hidden="true"
                          />
                          <span className="font-semibold text-green-700">
                            {donationStats.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Goal Information */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-700 text-center mb-4">
                        <span className="font-semibold">Goal:</span>{" "}
                        {donationStats.goal} • Help Rebuild Hope for Children&apos;s
                        Education
                      </p>

                      {/* Donate Button */}
                      <Button
                        asChild
                        className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 w-full group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        <Link
                          href="/donate"
                          aria-label="Donate to education fund"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[#FF7700] to-[#FF8C42] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full"></span>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Donate Now
                            <Heart
                              className="w-4 h-4 fill-current"
                              aria-hidden="true"
                            />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout - Separate sections */}
          <div className="xl:hidden space-y-8">
            {/* Hero Image */}
            <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/Hero-Banner.png"
                alt="Children engaged in learning activities"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Cards Below Image - Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {/* Left Card - Impact Story */}
              <article className="w-full bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 min-h-[400px]">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-sora font-bold text-gray-900 leading-tight">
                    {heroCard.title}
                  </h3>
                  <p className="text-sm font-manrope text-gray-700 leading-relaxed">
                    {heroCard.description}
                  </p>
                </div>

                <div className="relative mt-6 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={heroCard.imageUrl}
                    alt="Education program in action"
                    width={288}
                    height={170}
                    className="object-cover w-full h-[170px]"
                  />
                  <Badge
                    variant={heroCard.badgeVariant}
                    className="absolute top-3 left-3 bg-green-100 text-green-700 border-green-200 font-semibold shadow-sm"
                  >
                    {heroCard.badgeText}
                  </Badge>
                </div>
              </article>

              {/* Right Card - Donation Stats */}
              <article className="w-full bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Animated Amount Display */}
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 font-sora">
                      $
                      {animatedAmount.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Raised so far</p>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="space-y-3">
                    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${donationStats.percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm font-manrope">
                      <div className="flex items-center gap-2">
                        <Users
                          className="w-4 h-4 text-green-600"
                          aria-hidden="true"
                        />
                        <span className="font-semibold text-gray-900">
                          {donationStats.donors.toLocaleString()}
                        </span>
                        <span className="text-gray-600">Donors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target
                          className="w-4 h-4 text-green-600"
                          aria-hidden="true"
                        />
                        <span className="font-semibold text-green-700">
                          {donationStats.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Goal Information */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700 text-center mb-4">
                      <span className="font-semibold">Goal:</span>{" "}
                      {donationStats.goal} • Help Rebuild Hope for Children&apos;s
                      Education
                    </p>

                    {/* Donate Button */}
                    <Button
                      asChild
                      className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 w-full group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <Link
                        href="/donate"
                        aria-label="Donate to education fund"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#FF7700] to-[#FF8C42] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full"></span>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Donate Now
                          <Heart
                            className="w-4 h-4 fill-current"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
       
       
      </div>
        {/* Supporters Avatar Group */}
        <Support donationStats={donationStats} />
                       
    </section>
  );
};

export default HeroSection;
