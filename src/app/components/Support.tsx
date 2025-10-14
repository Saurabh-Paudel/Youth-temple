import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DonationStats } from "./HeroSection";
import Link from "next/link";

export default function Support({donationStats}: {donationStats: DonationStats}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
      {/* Left Side Avatar group */}
      <div className="flex items-center gap-2">
        <div className="flex items-center space-x-4">
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            <Avatar className="w-8 h-8 border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                alt="Supporter 1"
              />
              <AvatarFallback className="bg-green-100 text-green-700 font-semibold">
                S1
              </AvatarFallback>
            </Avatar>

            <Avatar className="w-8 h-8 border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Supporter 4"
              />
              <AvatarFallback className="bg-orange-100 text-orange-700 font-semibold">
                S4
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300">
              <AvatarImage
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
                alt="Supporter 5"
              />
              <AvatarFallback className="bg-pink-100 text-pink-700 font-semibold">
                S5
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Supporting Text */}
        <div className="">
          <p
            className="text-sm text-gray-500 font-medium"
            style={{ fontFamily: "Manrope", fontWeight: "500" }}
          >
            <span className="font-semibold">
              {donationStats.donors.toLocaleString()}
            </span>{" "}
            young minds supported so far
          </p>
        </div>
      </div>
      <div>
        <Link href="/about-us">
        <Button
          variant="outline"
          className="rounded-full inline-flex items-center gap-2 text-gray-500 text-xs md:text-base cursor-pointer border border-[#E5E7EB]"
        >
          Know More About Us <MdArrowOutward />
        </Button>
        </Link>
      </div>
    </div>
  );
}
