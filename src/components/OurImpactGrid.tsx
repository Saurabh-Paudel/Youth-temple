"use client";
import React from "react";
import Image from "next/image";

const OurIpactGrid = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-9 gap-2 p-4 w-full max-w-[1320px] h-[983px] mx-auto">
      <div className="col-start-1 row-start-3 row-span-5 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img1.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-2 row-start-2 row-span-2 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img2.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-2 row-start-4 row-span-3 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img5.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-2 row-start-7 row-span-2 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img8.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-3 row-start-1 row-span-3 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img3.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-3 row-start-4 col-span-2 row-span-3 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img6.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-3 row-start-7 row-span-3 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img9.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-4 row-start-7 row-span-2 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img10.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* div12 — slightly extra width */}
      <div className="col-start-4 row-start-2 row-span-2 bg-gray-300 flex items-center justify-center rounded-md w-[120%] relative overflow-hidden">
        <Image
          src="/assets/img4.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-5 row-start-4 row-span-2 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img7.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="col-start-5 row-start-6 row-span-2 bg-gray-300 flex items-center justify-center rounded-md relative overflow-hidden">
        <Image
          src="/assets/img11.jpg"
          alt="Our Impact Grid"
          fill
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default OurIpactGrid;
