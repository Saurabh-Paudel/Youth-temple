"use client";

import {
  Heart,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col w-full ">
      {/* ===== Topbar ===== */}
      <div className="bg-[#0B763C] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 md:mx-[300px] flex flex-col md:flex-row justify-between items-center h-11">
          {/* Left side slogan */}
          <div className="flex items-center gap-1">
            <span>Helping today</span>
            <Heart className="w-4 h-4 fill-[#FB932C] text-[#FB932C]" />
            <span>Helping tomorrow</span>
          </div>

          {/* Center contact */}
          <div className="flex items-center gap-3 text-xs md:text-sm mt-1 md:mt-0">
            <span>
              Email:{" "}
              <a
                href="mailto:ashakomandir@gmail.com"
                className="hover:underline"
              >
                ashakomandir@gmail.com
              </a>
            </span>
            <span className="hidden md:inline">|</span>
            <span>Phone: (0312)0000 0000 000</span>
          </div>

          {/* Right side social icons */}
          <div className="flex items-center gap-3 mt-1 md:mt-0">
            <span className="hidden sm:inline">Follow Us on</span>
            <div className="flex gap-2">
              <Facebook className="w-4 h-4 text-[#FB932C] fill-[#FB932C] cursor-pointer hover:scale-110 transition" />
              <Twitter className="w-4 h-4 text-[#FB932C] fill-[#FB932C] cursor-pointer hover:scale-110 transition" />
              <Youtube className="w-4 h-4 text-[#FB932C] fill-[#FB932C] cursor-pointer hover:scale-110 transition" />
              <Instagram className="w-4 h-4 text-[#FB932C] fill-[#FB932C] cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="bg-white relative">
        <div className=" w-full max-w-[1320px] mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Youth Temple Logo"
              width={140}
              height={102.3}
              className="object-contain"
            />
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
            <Link
              href="/"
              className="relative hover:text-green-700 transition-colors duration-300 group "
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FB932C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about-us"
              className="relative hover:text-green-700 transition-colors duration-300 group"
            >
              About us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FB932C] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/"
              className="relative hover:text-green-700 transition-colors duration-300 group"
            >
              Blogs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FB932C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/donors"
              className="relative hover:text-green-700 transition-colors duration-300 group"
            >
              Donors
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FB932C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="relative hover:text-green-700 transition-colors duration-300 group"
            >
              Contact us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FB932C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:block">
            <Button
              className="relative overflow-hidden bg-green-600 text-white px-4 py-3 rounded-[30px] font-medium text-base group transition-all duration-300"
              style={{ fontFamily: "Manrope" }}
            >
              <span className="absolute inset-0 bg-[#FF7700] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center">
                Donate Now
                <Heart className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-800 hover:text-green-700 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-lg z-50">
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/"
                    className="text-gray-800 hover:text-green-700 transition-colors duration-300 py-2 border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-gray-800 hover:text-green-700 transition-colors duration-300 py-2 border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    href="/donors"
                    className="text-gray-800 hover:text-green-700 transition-colors duration-300 py-2 border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Donors
                  </Link>
                  <Link
                    href="/blogs"
                    className="text-gray-800 hover:text-green-700 transition-colors duration-300 py-2 border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-800 hover:text-green-700 transition-colors duration-300 py-2 border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact us
                  </Link>
                </nav>

                {/* Mobile Donate Button */}
                <div className="pt-4">
                  <Button
                    className="relative overflow-hidden bg-green-600 text-white px-4 py-3 rounded-[30px] font-medium text-base group transition-all duration-300"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
