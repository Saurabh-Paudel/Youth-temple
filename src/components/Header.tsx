"use client";

import {
  Heart,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DonationSheet } from "@/app/donors/components/DonationSheet";

interface NavItem {
  href: string;
  label: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Navigation items with proper typing
  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/donors", label: "Donors" },
    { href: "/contact", label: "Contact us" },
  ];

  // Social media links with proper accessibility
  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://facebook.com", label: "Follow us on Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Follow us on Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "Subscribe to our YouTube channel" },
    { icon: Instagram, href: "https://instagram.com", label: "Follow us on Instagram" },
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="flex flex-col w-full lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50">
      {/* ===== Topbar ===== */}
      <div className="bg-[#0B763C] text-white text-sm hidden lg:block border-b border-green-800/20">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">
          {/* Left side slogan */}
          <div className="flex items-center gap-2" role="banner" aria-label="Organization mission">
            <span className="font-medium">Helping today</span>
            <Heart className="w-4 h-4 fill-[#FB932C] text-[#FB932C] animate-pulse" aria-hidden="true" />
            <span className="font-medium">Helping tomorrow</span>
          </div>

          {/* Center contact */}
          <div className="flex items-center gap-6 text-sm" role="contentinfo">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FB932C]" aria-hidden="true" />
              <a
                href="mailto:ashakomandir@gmail.com"
                className="hover:text-[#FB932C] transition-colors duration-200 focus:outline-none focus:text-[#FB932C]"
                aria-label="Send email to ashakomandir@gmail.com"
              >
                ashakomandir@gmail.com
              </a>
            </div>
            <div className="w-px h-4 bg-white/30" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FB932C]" aria-hidden="true" />
              <a 
                href="tel:+97731200000000" 
                className="hover:text-[#FB932C] transition-colors duration-200 focus:outline-none focus:text-[#FB932C]"
                aria-label="Call us at 0312 0000 0000 000"
              >
                (0312) 0000 0000 000
              </a>
            </div>
          </div>

          {/* Right side social icons */}
          <div className="flex items-center gap-4" role="complementary" aria-label="Social media links">
            <span className="text-sm font-medium">Follow Us</span>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#FB932C] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#FB932C] focus:ring-offset-2 focus:ring-offset-[#0B763C]"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-[#FB932C] group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`bg-white lg:relative lg:top-0 sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? "shadow-lg border-b border-gray-100" : "border-b border-gray-50"
        }`}
        onKeyDown={handleKeyDown}
      >
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-lg"
            aria-label="Youth Temple - Go to homepage"
          >
            <div className="hidden lg:block">
              <Image
                src="/assets/logo.png"
                alt="Youth Temple Logo"
                width={140}
                height={102.3}
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            {/* Mobile Logo */}
            <div className="lg:hidden">
              <Image
                src="/assets/logo.png"
                alt="Youth Temple Logo"
                width={80}
                height={60}
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-base font-medium transition-all duration-300 group rounded-md ${
                  isActiveLink(item.href)
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
                aria-current={isActiveLink(item.href) ? "page" : undefined}
              >
                {item.label}
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 bg-[#FB932C] transition-all duration-300 ${
                    isActiveLink(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <DonationSheet>
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Make a donation to support our cause"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF7700] to-[#FF8C42] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full cursor-pointer"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Donate Now
                  <Heart className="w-4 h-4" aria-hidden="true" />
                </span>
              </Button>
            </DonationSheet>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 text-gray-800 hover:text-green-700 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              id="mobile-menu"
              className="absolute top-full left-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-xl z-50 animate-in slide-in-from-top-2 duration-300"
            >
              <div className="px-6 py-6 space-y-6">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-1" role="navigation" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ${
                        isActiveLink(item.href)
                          ? "text-green-700 bg-green-50 border-l-4 border-green-600"
                          : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActiveLink(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Donate Button */}
                <div className="pt-4 border-t border-gray-100">
                  <DonationSheet>
                    <Button
                      className="w-full relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#FF7700] to-[#FF8C42] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full"></span>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Donate Now
                        <Heart className="w-5 h-5 fill-current" aria-hidden="true" />
                      </span>
                    </Button>
                  </DonationSheet>
                </div>

                {/* Mobile Social Links */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600 mb-3">Follow Us</p>
                  <div className="flex gap-4 justify-center">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#FB932C] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#FB932C] focus:ring-offset-2"
                          aria-label={social.label}
                        >
                          <IconComponent className="w-5 h-5 text-[#FB932C] group-hover:text-white transition-colors duration-300" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
