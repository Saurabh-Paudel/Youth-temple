import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

export default function LeftContent() {
  return (
    <div className="w-full lg:w-[432px] flex flex-col gap-4 sm:gap-5 lg:gap-6">
      <h1 
        className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium text-[#1F2937] leading-tight"
        style={{ fontFamily: "Sora" }}
      >
        Your <span className="text-[#0B763C]">Step</span> Toward Empowering{" "}
        <span className="text-[#0B763C]">Youth</span>
      </h1>
      <p 
        className="text-[#1F2937] text-sm sm:text-base font-normal leading-relaxed"
        style={{ fontFamily: "Manrope" }}
      >
        Every message, idea, or contribution brings us closer to giving
        deserving youth in Nepal the chance to learn and thrive. Get in
        touch—we&apos;re here to listen and partner with you.
      </p>
      <div className="bg-[#EEFFF4] border border-[#34F489] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5">
        {/* Email */}
        <div className="flex items-start gap-3 sm:gap-4">
          <MdOutlineEmail size={20} className="text-[#0B763C] mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p 
              className="text-[#1F2937] text-sm sm:text-base font-medium mb-1"
              style={{ fontFamily: "Manrope" }}
            >
              Email
            </p>
            <p 
              className="text-[#1F2937] text-xs sm:text-sm font-normal break-all"
              style={{ fontFamily: "Manrope" }}
            >
              hello@youthtempleofhope.org
            </p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-start gap-3 sm:gap-4">
          <FiPhone size={20} className="text-[#0B763C] mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p 
              className="text-[#1F2937] text-sm sm:text-base font-medium mb-1"
              style={{ fontFamily: "Manrope" }}
            >
              Contact us
            </p>
            <p 
              className="text-[#1F2937] text-xs sm:text-sm font-normal"
              style={{ fontFamily: "Manrope" }}
            >
              +1(234) 567-8901
            </p>
          </div>
        </div>
        {/* Address */}
        <div className="flex items-start gap-3 sm:gap-4">
          <MdOutlineLocationOn size={20} className="text-[#0B763C] mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p 
              className="text-[#1F2937] text-sm sm:text-base font-medium mb-1"
              style={{ fontFamily: "Manrope" }}
            >
              Our Address
            </p>
            <p 
              className="text-[#1F2937] text-xs sm:text-sm font-normal leading-relaxed"
              style={{ fontFamily: "Manrope" }}
            >
              Asha ko Mandir <br/> 123 Hope Street <br/> New York, NY 10001, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
