'use client'
import { useState, useEffect } from "react";

const images = [
  {
    src: "https://image.makewebeasy.net/makeweb/m_1920x0/l2crMjMfx/DefaultData%2Fslide004.png?v=202405291424",
    alt: "iPhone 16 Series",
  },
  {
    src: "https://www.ktf.co.th/images/slider/web-slide.jpg",
    alt: "iPad Series",
  },
  {
    src: "https://agrimomo.com/assets/imgs/banner/preview.jpeg",
    alt: "Galaxy S25 Series",
  },
];

export default function MainSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  // Fade animation
  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300); // 300ms for fade-out
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const handleDot = (idx) => {
    if (idx === current) return;
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-[5rem] rounded-lg overflow-hidden shadow">
      {/* Slide Image with Fade Animation */}
      <img
        src={images[current].src}
        alt={images[current].alt}
        className={`w-full h-[450px] sm:h-[400px] object-cover object-center transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        draggable={false}
      />

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white rounded-full p-2 hover:bg-green-600 transition z-10"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white rounded-full p-2 hover:bg-green-600 transition z-10"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDot(idx)}
            className={`w-3 h-3 rounded-full transition ${current === idx ? "bg-green-500" : "bg-gray-300"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
