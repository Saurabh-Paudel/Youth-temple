"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    image: "/assets/testimage.jpg",
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
    image: "/assets/testimage.jpg",
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
    image: "/assets/testimage.jpg",
    quote:
      "The scholarship was just the beginning. The life skills and confidence I gained have been invaluable in my journey as an entrepreneur.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setSlideDirection('right') // Sliding right means previous
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [isTransitioning])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setSlideDirection('left') // Sliding left means next
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [isTransitioning])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    // Determine slide direction based on index difference
    setSlideDirection(index > currentIndex ? 'left' : 'right')
    setCurrentIndex(index)
  }, [isTransitioning, currentIndex])

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setSlideDirection(null)
      }, 600) // Match this with CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTransitioning) return
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          event.preventDefault()
          goToNext()
          break
        case 'Home':
          event.preventDefault()
          goToSlide(0)
          break
        case 'End':
          event.preventDefault()
          goToSlide(testimonials.length - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isTransitioning, goToNext, goToPrevious, goToSlide])

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
        <div className="relative min-h-[350px] md:min-h-[400px] lg:min-h-[450px] flex items-center justify-center overflow-hidden">
          
          {/* Desktop View - Three Card Layout with Slide Animation */}
          <div className="hidden lg:flex items-center justify-center w-full">
            {/* Previous Card (Left - Blurred) */}
            <div className={`absolute left-0 xl:-left-32 z-0 transform scale-75 opacity-30 blur-[2px] transition-all duration-600 ease-out ${
              isTransitioning 
                ? slideDirection === 'left' 
                  ? 'translate-x-8 scale-90 opacity-10' 
                  : 'translate-x-2 scale-80 opacity-40'
                : ''
            }`}>
              <div className="w-[600px] xl:w-[749px] h-[320px] xl:h-[349px] bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex h-full">
                  <div className="relative w-[200px] xl:w-[277px] h-full flex-shrink-0">
                    <Image
                      src={testimonials[getPreviousIndex()].image || "/placeholder.svg"}
                      alt={testimonials[getPreviousIndex()].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4 xl:p-6 flex flex-col justify-between">
                    <div>
                      <ImQuotesLeft className="w-5 xl:w-6 h-5 xl:h-6 text-green-600 mb-3 opacity-70 absolute right-6 xl:right-8" />
                      <p className="text-sm xl:text-[20px] text-gray-700 leading-relaxed line-clamp-4 ml-3 xl:ml-5 mt-6 xl:mt-8">
                        {testimonials[getPreviousIndex()].quote}
                      </p>
                    </div>
                    <div className="mt-4 ml-3 xl:ml-5">
                      <p className="font-bold text-sm xl:text-base text-gray-900">{testimonials[getPreviousIndex()].name}</p>
                      <p className="text-xs text-gray-600">{testimonials[getPreviousIndex()].location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Card (Center - Active) with Enhanced Slide Animation */}
            <div className={`relative z-10 transform transition-all duration-600 ease-out ${
              isTransitioning 
                ? slideDirection === 'left' 
                  ? 'translate-x-6 scale-105 rotate-1' 
                  : '-translate-x-6 scale-105 -rotate-1'
                : 'translate-x-0 scale-100 rotate-0'
            }`}>
              <div className={`w-[600px] xl:w-[749px] h-[350px] xl:h-[379px] bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-xl transition-all duration-600 ${
                isTransitioning ? 'shadow-2xl' : ''
              }`}>
                <div className="flex justify-center items-center gap-3 xl:gap-5 h-full">
                  <div className="relative w-[200px] xl:w-[277px] h-[280px] xl:h-[302px] flex-shrink-0">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover p-2 ml-2 xl:ml-4 rounded-xl"
                    />
                  </div>
                  <div className="flex-1 p-3 xl:p-4 flex flex-col">
                    <div>
                      <ImQuotesLeft className="w-[30px] xl:w-[37px] h-[22px] xl:h-[27px] text-green-600 mb-4 text-end absolute right-6 xl:right-8" />
                      <p className="text-base xl:text-[20px] text-gray-800 leading-relaxed w-[280px] xl:w-[368px] ml-3 xl:ml-5 mt-6 xl:mt-8">
                        {testimonials[currentIndex].quote}
                      </p>
                    </div>
                    <div className="ml-3 xl:ml-5 mt-4">
                      <p className="font-bold text-base xl:text-lg text-gray-900">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Card (Right - Blurred) */}
            <div className={`absolute right-0 xl:-right-32 z-0 transform scale-75 opacity-30 blur-[2px] transition-all duration-600 ease-out ${
              isTransitioning 
                ? slideDirection === 'right' 
                  ? '-translate-x-8 scale-90 opacity-10' 
                  : '-translate-x-2 scale-80 opacity-40'
                : ''
            }`}>
              <div className="w-[600px] xl:w-[749px] h-[320px] xl:h-[379px] bg-[#FAFAFA] rounded-2xl shadow-lg overflow-hidden">
                <div className="flex h-full">
                  <div className="relative w-[200px] xl:w-[277px] h-full flex-shrink-0">
                    <Image
                      src={testimonials[getNextIndex()].image || "/placeholder.svg"}
                      alt={testimonials[getNextIndex()].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4 xl:p-6 flex flex-col justify-between">
                    <div>
                      <ImQuotesLeft className="w-5 xl:w-6 h-5 xl:h-6 text-green-600 mb-3 opacity-70 absolute right-6 xl:right-8" />
                      <p className="text-sm xl:text-[20px] text-gray-700 leading-relaxed line-clamp-4 ml-3 xl:ml-5 mt-6 xl:mt-8">
                        {testimonials[getNextIndex()].quote}
                      </p>
                    </div>
                    <div className="mt-4 ml-3 xl:ml-5">
                      <p className="font-bold text-sm xl:text-base text-gray-900">{testimonials[getNextIndex()].name}</p>
                      <p className="text-xs text-gray-600">{testimonials[getNextIndex()].location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet View - Single Card Layout with Slide Animation */}
          <div className="lg:hidden w-full max-w-md mx-auto">
            <div className={`transform transition-all duration-600 ease-out ${
              isTransitioning 
                ? slideDirection === 'left' 
                  ? 'translate-x-4 scale-105 rotate-1' 
                  : '-translate-x-4 scale-105 -rotate-1'
                : 'translate-x-0 scale-100 rotate-0'
            }`}>
              <div className={`w-full bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-xl transition-all duration-600 ${
                isTransitioning ? 'shadow-2xl' : ''
              }`}>
                {/* Mobile Layout - Vertical Stack */}
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-[200px] h-[200px] sm:h-[280px] flex-shrink-0">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <ImQuotesLeft className="w-6 h-6 text-green-600 mb-3 float-right" />
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed clear-both">
                        {testimonials[currentIndex].quote}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="font-bold text-base text-gray-900">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Bottom Center */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-16">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className={`text-green-600 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="sm:w-[30px] sm:h-[30px]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-1.5 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                  index === currentIndex 
                    ? "bg-green-600 w-6 sm:w-8 h-2.5" 
                    : "bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5"
                } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className={`text-green-600 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="sm:w-[30px] sm:h-[30px]" />
          </button>
        </div>
      </div>
    </div>
  )
}
