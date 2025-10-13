"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-white px-4 pt-12 pb-6 border overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute -bottom-70 left-0 right-0 w-full h-[600px] opacity-90">
        <Image
          src="/assets/form-bg.png"
          alt="Footer Background"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0">
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <Phone className="text-green-600 w-4 h-4" />
              <p className="text-sm text-gray-800">+9876549876575</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-2">
              <Mail className="text-green-600 w-4 h-4" />
              <p className="text-sm text-gray-800">xyz@gmail.com</p>
            </div>
            {/* Location */}
            <div className="flex items-center space-x-2">
              <MapPin className="text-green-600 w-4 h-4" />
              <p className="text-sm text-gray-800">Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-6 md:mt-0">
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition"
            >
              <Twitter size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition"
            >
              <Linkedin size={16} />
            </Link>
          </div>
        </div>

        {/* Logo & Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <Image
            src="/assets/logo.png"
            alt="Youth Temple of Hope"
            width={140}
            height={100}
            className="mb-6 md:mb-0"
          />

          <div className="flex flex-wrap space-x-8">
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-green-600"
            >
              Mission & Vision
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-green-600"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-green-600"
            >
              Donars
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-green-600"
            >
              Blogs
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-700 hover:text-green-600"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-10">
          Asha Ko Mandir (Youth Temple of Hope) is a U.S.-registered 501(c)(3)
          nonprofit organization founded by Bharat and Elsie Mainali with a
          mission to uplift poor but talented youth in Nepal. Recognizing that
          over 40% of Nepal&apos;s population is young—and many lack access to
          opportunities despite being educated—Asha Ko Mandir provides free,
          high-quality educational programs and skills training through both
          virtual and in-person platforms. The organization partners with local
          nonprofits and businesses to identify deserving students, offer
          scholarships, and create pathways to employment and community
          leadership. Through every lesson, workshop, and mentorship, Asha Ko
          Mandir aims to transform potential into progress, helping youth become
          confident, capable contributors to their communities and the world.
          With every donation and act of support, hope becomes action—and action
          becomes lasting change.
        </p>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">
            2025© Copyright. Asha Komandir. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-green-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-green-600 transition"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
