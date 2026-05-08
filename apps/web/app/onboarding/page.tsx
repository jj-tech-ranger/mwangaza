"use client";

import { useState } from "react";
import OnboardingSlide from "@/components/shared/OnboardingSlide";

const onboardingSlides = [
  {
    headline: "Welcome to Mwangaza",
    bodyText: "Light the path to a better life with personalized learning",
    illustration: <div className="text-6xl">📚</div>,
  },
  {
    headline: "Learn at Your Pace",
    bodyText: "Master new skills with flexible, bite-sized lessons",
    illustration: <div className="text-6xl">🎯</div>,
  },
  {
    headline: "Track Your Progress",
    bodyText: "Celebrate milestones and watch yourself grow",
    illustration: <div className="text-6xl">📈</div>,
  },
];

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const currentSlideData = onboardingSlides[currentSlide];

  if (!currentSlideData) {
    return <div className="flex items-center justify-center min-h-screen bg-background">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <OnboardingSlide
        headline={currentSlideData.headline}
        bodyText={currentSlideData.bodyText}
        illustration={currentSlideData.illustration}
        slideNumber={(currentSlide + 1) as 1 | 2 | 3}
        onNext={handleNext}
      />
    </div>
  );
}
