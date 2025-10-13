import { HandHeart, Heart } from "lucide-react";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
          {/* Large image spanning top */}
          <div className="col-span-2 rounded-lg overflow-hidden">
            <img
              src="/assets/about1.jpg"
              alt="Children in field"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom left image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/aboutUs-banner-boy.jpg"
              alt="Child studying"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom right image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/about2.jpg"
              alt="Child portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          {/* Section heading */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-600 font-manrope text-sm font-medium">
              Who We Are
            </span>
            <span className="h-[2px] w-6 bg-orange-500"></span>
          </div>

          {/* Main title */}
          <h2 className="font-sora text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Asha ko Mandir <span className="text-green-600">Our Journey</span>
          </h2>

          {/* Description */}
          <p className="font-manrope text-gray-700 text-base text-justify leading-relaxed">
            Asha ko Mandir is a non-profit organization started by Bharat &
            Elsie Mainali, dedicated to supporting poor but talented youth in
            Nepal. Registered in the USA as a 501(c)(3) charity, we strive to
            make a positive impact through our charitable efforts. With a
            commitment to community development, we work tirelessly to address
            poverty and promote sustainable growth in Nepal. Learn more about
            our initiatives and how you can get involved to support our cause.
          </p>

          {/* Highlighted points */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <HandHeart className="w-6 h-6 text-orange-600" />
              </div>
              <span className="font-manrope text-gray-800 font-medium">
                Your support uplift Nepal's talented youth.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <span className="font-manrope text-gray-800 font-medium">
                Need your simple help for save children.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
