import { BookOpenText, Globe } from "lucide-react";
import { FaBookAtlas, FaChild, FaHandsHoldingChild } from "react-icons/fa6";
import { HiTv } from "react-icons/hi2";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: "Child Protection",
      description:
        "You can help them overcome challenges they'd otherwise face for a lifetime",
      icon: <FaHandsHoldingChild />,
      textColor: "text-green-600",
    },
    {
      id: 2,
      title: "Child Survival",
      description:
        "We can help children get the health care, education, life skills, job-readiness training",
      icon: <FaChild />,
      bgColor: "bg-gray-50",
      textColor: "text-green-600",
    },
    {
      id: 3,
      title: "Education",
      description:
        "Your support helps them contributing to their own families and communities",
      icon: <BookOpenText />,
      bgColor: "bg-gray-50",
      textColor: "text-green-600",
    },
    {
      id: 4,
      title: "Social Policy",
      description:
        "Children in poverty are more likely to be exposed to the stress of violence, gangs",
      icon: <FaBookAtlas />,
      bgColor: "bg-gray-50",
      textColor: "text-green-600",
    },
    {
      id: 5,
      title: "Innovation for children",
      description:
        "We provide key programs specifically designed to address toughest issues",
      icon: <HiTv />,
      bgColor: "bg-gray-50",
      textColor: "text-green-600",
    },
    {
      id: 6,
      title: "Supply and Logistics",
      description:
        "You help them see beyond the daily struggles of life in poverty",
      icon: <Globe />,
      bgColor: "bg-gray-50",
      textColor: "text-green-600",
    },
  ];
  return (
    <section className="flex items-center justify-center py-12 lg:py-16 px-4 lg:px-6" aria-label="What we do section">
      <div
        className="w-full max-w-7xl min-h-[600px] lg:min-h-[800px] rounded-3xl px-6 md:px-12 lg:px-16 py-12 lg:py-16 flex flex-col justify-end relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%), url('/assets/what-we-do.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="mb-8 lg:mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-[2px] w-6 bg-white" aria-hidden="true"></span>
            <span className="text-sm md:text-base font-medium text-white font-manrope tracking-wider">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-semibold leading-tight font-sora max-w-3xl">
            Discover the Areas Where We Work
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white/95 backdrop-blur-sm hover:bg-green-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-50 text-green-600 group-hover:text-green-600 group-hover:bg-white text-xl md:text-2xl mb-4 border border-green-200 group-hover:border-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-green-600 group-hover:text-white text-lg md:text-xl font-semibold mb-3 leading-tight font-manrope">
                {service.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white text-sm md:text-base leading-relaxed font-manrope">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
