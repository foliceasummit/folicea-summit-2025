'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

        const slides = [
        {
          image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/IMG-20250826-WA0038.jpg?updatedAt=1756227156116",
          alt: "FOLICEA Summit Image 1"
        },
        {
          image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/IMG-20250826-WA0044.jpg?updatedAt=1756227161744",
          alt: "FOLICEA Summit Image 2"
        },
        {
          image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/uganda.avif?updatedAt=1756227168644",
          alt: "Uganda"
        },
        {
          image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/slide.webp?updatedAt=1756227164525",
          alt: "FOLICEA Summit Slide"
        },
        {
          image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/WhatsApp%20Image%202025-09-08%20at%2017.23.03_c0cd9a72.jpg?updatedAt=1757346349261",
          alt: "FOLICEA Summit Slide"
        }
      ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Preload the current image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = slides[currentSlide].image;
  }, [currentSlide]);

  return (
    <div className="relative min-h-screen overflow-hidden mt-16">
      {/* Single Background Image Container */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: imageLoaded ? `url(${slides[currentSlide].image})` : 'linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-liberian-blue/30 to-liberian-red/30"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-blue-500/80 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-blue-500/80 text-white p-2 sm:p-3 rounded-full transition-all duration-200 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-w-[16px] min-h-[16px] hover:bg-blue-400 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
