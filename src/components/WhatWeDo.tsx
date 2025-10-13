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
    <div className="flex items-center justify-center py-16">
      <div
        className="w-full max-w-[1320px] h-[894px] rounded-3xl px-8 md:px-16 py-12 flex flex-col justify-end"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url('/assets/what-we-do.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mb-6">
          <div className="flex items-center gap-2.5">
            <span className="h-[2px] w-6 bg-white"></span>
            <span
              className="text-base font-normal text-white"
              style={{ fontFamily: "Manrope" }}
            >
              What We Do
            </span>
          </div>
          <h2
            className="text-white text-3xl md:text-4xl lg:text-[42px] font-medium mb-4"
            style={{ fontFamily: "Sora" }}
          >
            Discover the Areas Where We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white hover:bg-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-green-600 group-hover:text-green group-hover:bg-white text-xl mb-4 border border-green-600"
              >
                {service.icon}
              </div>
              <h3 className="text-green-600 group-hover:text-white text-lg font-semibold mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
