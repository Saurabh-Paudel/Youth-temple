"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ImQuotesLeft } from "react-icons/im"

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aakash Shrestha",
    location: "Kathmandu",
    image: "/assets/Test.jpg",
    quote:
      "I lost my parents during the earthquake and lived with distant relatives who couldn't send me to school. Asha Ko Mandir gave me a scholarship. Now I'm about to graduate, and I want to study computer science. I finally feel like I belong.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    image: "/assets/Test.jpg",
    quote:
      "The support I received changed my life completely. I was able to pursue my dreams and now I help others do the same. Forever grateful for this opportunity.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Mumbai",
    image: "/assets/Test.jpg",
    quote:
      "Education opened doors I never knew existed. Thanks to the scholarship program, I completed my engineering degree and now work at a leading tech company.",
  },
  {
    id: 4,
    name: "Anita Patel",
    location: "Bangalore",
    image: "/assets/Test.jpg",
    quote:
      "Coming from a small village, I never imagined I would become a doctor. The mentorship and financial support made it all possible.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Jaipur",
    image: "/assets/Test.jpg",
    quote:
      "This program gave me hope when I had none. Today, I run my own business and employ 20 people from my community.",
  },
  {
    id: 6,
    name: "Meera Reddy",
    location: "Hyderabad",
    image: "/assets/Test.jpg",
    quote:
      "The scholarship was just the beginning. The life skills and confidence I gained have been invaluable in my journey as an entrepreneur.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Get the indices for the three visible cards
  const getPreviousIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
  }

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
  }

  return (
    <div className="w-full mx-auto mt-10">

      <div className="relative px-4 md:px-8">
        {/* Carousel Container */}
        <div className="relative h-[350px] flex items-center justify-center">
          {/* Previous Card (Left - Blurred) */}
          <div className="absolute -left-56 z-0 transform scale-75 opacity-30 blur-[2px]">
            <div className="w-[749px] h-[349px] bg-white rounded-2xl  overflow-hidden">
              <div className="flex h-full">
                <div className="relative w-[277px] h-full flex-shrink-0">
                  <Image
                    src={testimonials[getPreviousIndex()].image || "/placeholder.svg"}
                    alt={testimonials[getPreviousIndex()].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <ImQuotesLeft className="w-6 h-6 text-green-600 mb-3 opacity-70 absolute right-8" />
                    <p className="text-[20px] text-gray-700 leading-relaxed line-clamp-4 ml-5 mt-8">
                      {testimonials[getPreviousIndex()].quote}
                    </p>
                  </div>
                  <div className="mt-4 ml-5">
                    <p className="font-bold text-gray-900">{testimonials[getPreviousIndex()].name}</p>
                    <p className="text-xs text-gray-600">{testimonials[getPreviousIndex()].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Card (Center - Active) */}
          <div className="relative z-10 transform scale-100">
            <div className="w-[749px] h-[379px] bg-[#FAFAFA] rounded-2xl overflow-hidden">
              <div className="flex justify-center items-center gap-5 h-full">
                <div className="relative w-[277px] h-[302px] flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover p-2 ml-4 rounded-xl"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <div>
                    <ImQuotesLeft className="w-[37px] h-[27px] text-green-600 mb-4 text-end absolute right-8" />
                    <p className="text-[20px] text-gray-800 leading-relaxed w-[368px] ml-5 mt-8">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className="font-bold text-lg text-gray-900">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Card (Right - Blurred) */}
          <div className="absolute -right-56 z-0 transform scale-75 opacity-30 blur-[2px]">
            <div className="w-[749px] h-[379px] bg-[#FAFAFA] rounded-2xl shadow-lg overflow-hidden">
              <div className="flex h-full">
                <div className="relative w-[277px] h-full flex-shrink-0">
                  <Image
                    src={testimonials[getNextIndex()].image || "/placeholder.svg"}
                    alt={testimonials[getNextIndex()].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <ImQuotesLeft className="w-6 h-6 text-green-600 mb-3 opacity-70 absolute right-8" />
                    <p className="text-[20px] text-gray-700 leading-relaxed line-clamp-4 ml-5 mt-8">
                      {testimonials[getNextIndex()].quote}
                    </p>
                  </div>
                  <div className="mt-4 ml-5">
                    <p className="font-bold text-gray-900">{testimonials[getNextIndex()].name}</p>
                    <p className="text-xs text-gray-600">{testimonials[getNextIndex()].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Bottom Center */}
        <div className="flex items-center justify-center gap-8 mt-16">
          {/* Previous Button */}
          <button
       
      
            onClick={goToPrevious}
            className="text-green-600 hover:scale-110 transition-all duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-green-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            
            onClick={goToNext}
            className=" text-green-600 hover:scale-110 transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>
  )
}
