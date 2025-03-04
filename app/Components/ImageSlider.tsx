'use client';

import I14_100 from '../assets/ProductsImages/60/gg2_60.jpg'
import I15_100 from '../assets/ProductsImages/70/WhatsApp Image 2025-02-21 at 06.59.47_2c4ffa15.jpg'
import I16_100 from '../assets/ProductsImages/200/WhatsApp Image 2025-02-21 at 07.25.05_7815a890.jpg'
import I17_100 from '../assets/ProductsImages/200/WhatsApp Image 2025-02-21 at 07.12.35_70579b9d.jpg'
import I18_100 from '../assets/ProductsImages/90/IMG-20250221-WA0083.jpg'
import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'


interface Slide {
  id: number;
  image: StaticImageData;
  alt: string;
  caption?: string;
}

const AutoImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoSlideInterval = 3000

  const slides: Slide[] = [
    {
            id: 1,
            image: I14_100,
            alt: 'Mountain Landscape',
          },
          {
            id: 2,
            image: I15_100,
            alt: 'Tropical Beach',
          },
          {
            id: 3,
            image: I16_100,
            alt: 'City Skyline',
          },
          {
            id: 4,
            image: I17_100,
            alt: 'City Skyline',
          },
          {
            id: 5,
            image: I18_100,
            alt: 'City Skyline',
          },
  ]

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-950 border-2 rounded-[30px] mx-2 my-2 shadow-3xl">
      <div className="absolute inset-0 flex rounded-[28px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] 
              ${index === currentSlide ? 'translate-x-0' : 
               index > currentSlide ? 'translate-x-full' : '-translate-x-full'}`}
          >
            <div className="relative w-full h-full">
              <Image 
                src={slide.image} 
                alt={slide.alt}
                className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500"
                priority={index === currentSlide}
              />
              <div className="absolute bottom-12 right-12 text-white text-right space-y-3">
                <p className="text-xl font-thin opacity-90 translate-x-[50px] animate-text-reveal pr-6 text-yellow-600">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-12 left-12 right-12 h-[2px] bg-white/10 rounded-full">
        <div 
          className="h-full bg-white/80 transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-12 right-12 text-white flex items-center gap-2 
        bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
        <span className="text-lg font-medium opacity-80">0{currentSlide + 1}</span>
        <span className="opacity-30">/</span>
        <span className="text-lg opacity-30">0{slides.length}</span>
      </div>
    </div>
  )
}

export default AutoImageSlider