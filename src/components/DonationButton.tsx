"use client";
import React from "react";
import { DonationSheet } from "@/app/donors/components/DonationSheet";

const DonationButton = () => {
  const DonateIcon = () => (
    <div className="relative w-full h-full">
      {/* Background SVG that rotates */}
      <svg
        fill="none"
        viewBox="0 0 122 116"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-rotate-12 group-hover:brightness-75"
      >
        <path
          d="m61.136 1.5321c8.2526 0.93063 15.356 5.4775 23.082 8.5293 8.2649 3.2648 18.431 3.4783 24.278 10.179 5.843 6.6958 4.769 16.792 6.812 25.447 2.056 8.7155 7.453 17.29 5.324 25.988-2.128 8.6964-10.701 13.949-16.719 20.569-5.6928 6.2634-10.442 13.577-17.918 17.536-7.5737 4.011-16.31 5.669-24.859 5.115-8.3419-0.54-15.655-4.986-23.358-8.237-8.0355-3.391-17.173-5.08-23.186-11.406-6.1218-6.4412-8.4513-15.486-10.579-24.121-2.1503-8.726-4.4221-17.929-1.9094-26.557 2.4846-8.5318 10.094-14.232 15.776-21.058 5.5763-6.7004 9.7631-15.013 17.529-18.96 7.798-3.9634 17.038-4.0051 25.728-3.0252z"
          clipRule="evenodd"
          fill="#FFE6D5"
          fillRule="evenodd"
          stroke="#FECCAA"
        />
      </svg>

      {/* Content that stays in place */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Heart Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 mb-1 transition-colors duration-300"
          fill="none"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill="#FECCAA"
            stroke="#FECCAA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:fill-[#C2570C] group-hover:stroke-[#C2570C] transition-colors duration-300"
          />
        </svg>

        {/* Donate Now Text */}
        <span className="text-[8px] font-medium text-[#C2570C] leading-tight text-center">
          Donate
          <br />
          Now
        </span>
      </div>
    </div>
  );
  return (
    <DonationSheet>
      <button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-all duration-300 cursor-pointer hover:rotate-6 group"
      >
        <DonateIcon />
      </button>
    </DonationSheet>
  );
};

export default DonationButton;
