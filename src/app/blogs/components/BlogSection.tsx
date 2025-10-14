import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogSection(){
  return (
    <div className="w-full max-w-[648px]">
      <div className="flex flex-col gap-4 px-2 md:px-0">
        <Image
          src="/assets/blog1.png"
          alt="Blog 1"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-w-[648px] h-[250px] sm:h-[293px] rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 
            className="text-[#030712] text-lg sm:text-xl md:text-[24px] font-medium leading-tight"
            style={{ fontFamily: "Sora" }}
          >
            Together We Rise: Youth Shaping a Brighter Future
          </h3>
          <p 
            className="text-xs sm:text-sm flex items-center gap-1"
            style={{ fontFamily: "Manrope" }}
          >
            <span><CiClock2 color="#6B7280" /></span>
            <span className="text-[#374151]">Mar 15, 2025</span>
          </p>
        </div>
        <p 
          className="text-sm sm:text-base text-[#1F2937] font-normal leading-relaxed"
          style={{ fontFamily: "Manrope" }}
        >
          At Asha Ko Mandir, we believe that real change happens when young people support one another. These three inspiring youths embody more than just personal achievements; they represent the power of unity, teamwork, and shared aspirations. Every child deserves the chance to dream big with practical training in areas like tailoring and design. By acquiring these essential skills, these youths are equipped to create independent and sustainable futures.
        </p>
        <div className="flex justify-end">
          <Link 
            href={`/blogs/1`} 
            className="text-[#0B763C] text-sm mb-2 font-medium flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer mr-1"
            style={{ fontFamily: "Manrope" }}
          >
            Read More <span><FaArrowRightLong /></span>
          </Link>
        </div>
      </div>
    </div>
  )
}