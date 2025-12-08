'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// No CMS dependency

interface Slide {
  image: any; // Sanity image or string URL
  alt: string;
}

interface HeroSliderProps {
  slides?: Slide[];
}

const HeroSlider = ({ slides = [] }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Default slides if none are provided from Sanity
  const defaultSlides: Slide[] = [
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-30%20at%2015.51.31_edba8383.jpg?updatedAt=1764956619037",
      alt: "Summit Photo 1"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-29%20at%2021.20.37_43c5d75b.jpg?updatedAt=1764956616492",
      alt: "Summit Photo 2"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2023.50.05_e8cce84f.jpg?updatedAt=1764956616255",
      alt: "Summit Photo 3"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2023.39.06_bfe002a3.jpg?updatedAt=1764956616201",
      alt: "Summit Photo 4"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2023.50.06_796f35a6.jpg?updatedAt=1764956616054",
      alt: "Summit Photo 5"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-30%20at%2013.54.28_10c04f76.jpg?updatedAt=1764956615558",
      alt: "Summit Photo 6"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-30%20at%2015.51.09_399dfb0b.jpg?updatedAt=1764956615458",
      alt: "Summit Photo 7"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2019.51.29_a5d3f75b.jpg?updatedAt=1764956614999",
      alt: "Summit Photo 8"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2019.51.22_8798db90.jpg?updatedAt=1764956614788",
      alt: "Summit Photo 9"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2019.51.29_34034c80.jpg?updatedAt=1764956614762",
      alt: "Summit Photo 10"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2019.51.34_5be3f351.jpg?updatedAt=1764956614700",
      alt: "Summit Photo 11"
    },
    {
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/WhatsApp%20Image%202025-11-28%20at%2019.51.24_6751bf2c.jpg?updatedAt=1764956614104",
      alt: "Summit Photo 12"
    }
  ];

  const slidesToUse = slides.length > 0 ? slides : defaultSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesToUse.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slidesToUse.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesToUse.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesToUse.length) % slidesToUse.length);

  // Preload the current image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);

    const s = slidesToUse[currentSlide];
    const imageUrl = typeof s.image === 'string' ? s.image : '';
    img.src = imageUrl;
  }, [currentSlide, slidesToUse]);

  const bgImageUrl = () => {
    const s = slidesToUse[currentSlide];
    return typeof s.image === 'string' ? s.image : '';
  };

  return (
    <div className="relative min-h-screen overflow-hidden mt-16">
      <div
        className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: imageLoaded ? `url(${bgImageUrl()})` : 'linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-liberian-blue/20 to-liberian-red/20" />
      </div>

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

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slidesToUse.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-w-[16px] min-h-[16px] hover:bg-blue-400 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
