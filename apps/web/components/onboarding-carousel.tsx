"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  icon: React.ReactNode;
  headline: string;
  body: string;
}

const slides: Slide[] = [
  {
    id: 1,
    icon: (
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lightbulb */}
        <circle cx="100" cy="80" r="45" fill="#D4A017" opacity="0.1" />
        <path
          d="M100 40C82.33 40 68 54.33 68 72C68 85 75 96 85 102V120C85 128.84 91.16 135 100 135C108.84 135 115 128.84 115 120V102C125 96 132 85 132 72C132 54.33 117.67 40 100 40Z"
          fill="#D4A017"
          stroke="#D4A017"
          strokeWidth="2"
        />
        <path
          d="M85 140H115M90 155H110"
          stroke="#D4A017"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Light rays */}
        <circle cx="100" cy="35" r="3" fill="#D4A017" opacity="0.6" />
        <circle cx="135" cy="50" r="3" fill="#D4A017" opacity="0.6" />
        <circle cx="150" cy="80" r="3" fill="#D4A017" opacity="0.6" />
        <circle cx="65" cy="50" r="3" fill="#D4A017" opacity="0.6" />
        <circle cx="50" cy="80" r="3" fill="#D4A017" opacity="0.6" />
      </svg>
    ),
    headline: "Learn at your own pace",
    body: "Short lessons you can finish in 5 minutes. Anytime. Anywhere.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Trophy */}
        <circle cx="100" cy="100" r="70" fill="#D4A017" opacity="0.1" />
        <rect
          x="75"
          y="50"
          width="50"
          height="40"
          rx="4"
          fill="#D4A017"
          opacity="0.2"
        />
        <path
          d="M75 55C75 50 80 45 85 45H115C120 45 125 50 125 55V60C125 60 120 65 100 65C80 65 75 60 75 60V55Z"
          fill="#D4A017"
        />
        <path
          d="M85 65V85C85 90 90 95 100 95C110 95 115 90 115 85V65"
          stroke="#D4A017"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M75 85C75 95 85 105 100 105C115 105 125 95 125 85"
          stroke="#D4A017"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="70"
          y="105"
          width="60"
          height="8"
          fill="#D4A017"
          rx="2"
        />
        {/* Star on trophy */}
        <path
          d="M100 60L103 68H111L105 73L108 81L100 76L92 81L95 73L89 68H97L100 60Z"
          fill="#FDF3D0"
        />
      </svg>
    ),
    headline: "Earn as you learn",
    body: "Collect XP, level up, and earn real certificates for every course you complete.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Person silhouette with star */}
        <circle cx="100" cy="100" r="70" fill="#D4A017" opacity="0.1" />
        <circle cx="100" cy="60" r="20" fill="#D4A017" />
        <path
          d="M75 85C75 75 85 70 100 70C115 70 125 75 125 85V120C125 135 115 145 100 145C85 145 75 135 75 120V85Z"
          fill="#D4A017"
        />
        {/* Star above person */}
        <path
          d="M100 30L104 40H115L106 46L110 56L100 50L90 56L94 46L85 40H96L100 30Z"
          fill="#FDF3D0"
        />
      </svg>
    ),
    headline: "Built for you",
    body: "Mwangaza was made for working adults across Africa — practical skills that change your life.",
  },
];

export function OnboardingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 350);
    }
  };

  const handleGetStarted = () => {
    // Navigate to main app or next screen
    console.log("Get Started clicked");
  };

  useEffect(() => {
    setIsTransitioning(false);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  if (!slide) {
    return null;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between bg-background overflow-hidden">
      {/* Slides Container */}
      <div className="flex-1 flex w-full items-center justify-center">
        <div
          key={slide.id}
          className={`flex h-full w-full flex-col items-center justify-center px-6 ${
            isTransitioning ? "animate-slide-out-left" : "animate-slide-in-right"
          }`}
        >
          {/* Illustration */}
          <div className="mb-12 flex items-center justify-center">
            {slide.icon}
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-center font-heading text-[26px] font-bold leading-tight text-text">
            {slide.headline}
          </h1>

          {/* Body */}
          <p
            className="max-w-[280px] text-center font-body text-[15px] leading-[1.6] text-[#6B6B6B]"
          >
            {slide.body}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex w-full flex-col items-center gap-8 pb-8">
        {/* Dot Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-gold"
                  : "w-2 bg-gold opacity-30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Button */}
        {currentSlide < slides.length - 1 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 text-gold transition-opacity hover:opacity-80"
            aria-label="Next slide"
          >
            Next
            <ChevronRight size={20} />
          </button>
        ) : (
          <button
            onClick={handleGetStarted}
            className="w-full max-w-[280px] rounded-full bg-gold px-6 py-[13px] font-heading font-bold text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}
