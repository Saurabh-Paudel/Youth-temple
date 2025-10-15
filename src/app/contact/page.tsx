import CTASection from "@/components/CTASection";
import ContactForm from "./components/ContactForm";
import LeftContent from "./components/LeftContent";
import Image from "next/image";

export default function ContactPage(){
  return(
    <main className="flex flex-col gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 lg:py-16">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2">
          <span 
            className="text-sm sm:text-base font-normal text-[#1F2937]"
            style={{ fontFamily: "Manrope" }}
          >
            Contact Page
          </span>
          <div className="w-6 h-[2px] bg-[#F97316]" />
        </div>
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-medium text-[#030712] text-center leading-tight max-w-4xl"
          style={{ fontFamily: "Sora" }}
        >
          Get the Support You Deserve Today
        </h1>
        <p 
          className="text-sm sm:text-base lg:text-[20px] w-full max-w-[732px] text-center text-[#1F2937] font-normal leading-relaxed px-4"
          style={{ fontFamily: "Manrope" }}
        >
          Whether it&apos;s a question, concern, or a step toward making a difference, you deserve clear guidance and genuine support.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="relative px-4 sm:px-6 lg:px-8 -z-10">
        <div className="border border-[#01B853] mx-auto w-full max-w-[1200px] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col lg:flex-row gap-6 sm:gap-8 relative z-50 bg-white/95 backdrop-blur-sm shadow-lg">
          {/* Left Content */}
          <div className="w-full lg:w-auto">
            <LeftContent />
          </div>
          {/* Right Content - Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative hidden lg:block">
        <Image
          src="/assets/form-bg.png"
          alt="form-bg"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute sm:-bottom-25 lg:-bottom-25 left-0 w-full h-auto object-cover z-10" 
        />
      </div>

      {/* CTA Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 relative z-20">
        <CTASection />
      </div>
    </main>
  )
}