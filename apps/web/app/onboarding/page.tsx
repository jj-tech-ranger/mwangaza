"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import OnboardingSlide from "@/components/shared/OnboardingSlide";

const onboardingSlides = [
  {
    title: "Welcome to Mwangaza",
    description: "Light the path to a better life with personalized learning",
    illustration: "Welcome",
    number: 1,
  },
  {
    title: "Learn at Your Pace",
    description: "Master new skills with flexible, bite-sized lessons",
    illustration: "Learning",
    number: 2,
  },
  {
    title: "Track Your Progress",
    description: "Celebrate milestones and watch yourself grow",
    illustration: "Progress",
    number: 3,
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.push("/auth");
    }
  };

  const handleSkip = () => {
    router.push("/auth");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <OnboardingSlide
        slide={onboardingSlides[currentSlide]}
        slideNumber={currentSlide + 1}
        totalSlides={onboardingSlides.length}
        onNext={handleNext}
        onSkip={handleSkip}
      />
    </div>
  );
}
