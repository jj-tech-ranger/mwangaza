"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Star, Flame } from "lucide-react";

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Trophy cup */}
      <path
        d="M20 16H60V32C60 44.7025 49.7025 55 37 55H43C30.2975 55 20 44.7025 20 32V16Z"
        fill="#D4A017"
      />
      {/* Left handle */}
      <path
        d="M20 20H14C14 28 18 32 20 32V20Z"
        fill="#A67C00"
      />
      {/* Right handle */}
      <path
        d="M60 20H66C66 28 62 32 60 32V20Z"
        fill="#A67C00"
      />
      {/* Shine */}
      <ellipse
        cx="32"
        cy="30"
        rx="4"
        ry="8"
        fill="#FDF3D0"
        opacity="0.6"
      />
      {/* Base stem */}
      <rect x="35" y="55" width="10" height="8" fill="#A67C00" />
      {/* Base */}
      <rect x="28" y="63" width="24" height="6" rx="2" fill="#D4A017" />
    </svg>
  );
}

function ConfettiParticle({
  delay,
  left,
  size,
  duration,
}: {
  delay: number;
  left: number;
  size: number;
  duration: number;
}) {
  return (
    <div
      className="absolute top-0 rounded-full bg-[#D4A017] opacity-80"
      style={{
        left: `${left}%`,
        width: size,
        height: size,
        animation: `confetti-fall ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function AnimatedStar({
  filled,
  delay,
}: {
  filled: boolean;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="transition-transform duration-200"
      style={{
        transform: visible ? "scale(1)" : "scale(0)",
      }}
    >
      <Star
        className={`h-9 w-9 ${
          filled
            ? "fill-[#D4A017] text-[#D4A017]"
            : "fill-transparent text-[#9CA3AF] stroke-2"
        }`}
      />
    </div>
  );
}

function useCountUp(target: number, duration: number = 1000, startDelay: number = 500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [target, duration, startDelay]);

  return count;
}

export default function ResultsPage() {
  const xpEarned = useCountUp(15, 800, 600);
  
  // Confetti particles configuration
  const confettiParticles = [
    { delay: 0, left: 5, size: 6, duration: 3.5 },
    { delay: 0.3, left: 15, size: 8, duration: 4 },
    { delay: 0.1, left: 25, size: 5, duration: 3.2 },
    { delay: 0.5, left: 35, size: 7, duration: 3.8 },
    { delay: 0.2, left: 45, size: 6, duration: 4.2 },
    { delay: 0.4, left: 55, size: 9, duration: 3.6 },
    { delay: 0.15, left: 65, size: 5, duration: 4.1 },
    { delay: 0.35, left: 75, size: 8, duration: 3.4 },
    { delay: 0.25, left: 85, size: 6, duration: 3.9 },
    { delay: 0.45, left: 92, size: 7, duration: 3.7 },
    { delay: 0.6, left: 10, size: 5, duration: 4.3 },
    { delay: 0.7, left: 50, size: 6, duration: 3.3 },
  ];

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[#F8F4E8]">
      {/* Confetti overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confettiParticles.map((particle, index) => (
          <ConfettiParticle key={index} {...particle} />
        ))}
      </div>

      {/* Main content */}
      <main className="flex flex-1 flex-col px-6">
        {/* Top celebration section */}
        <div className="flex flex-col items-center pt-[60px]">
          {/* Animated trophy */}
          <div className="animate-trophy-pulse mb-4">
            <TrophyIcon className="h-20 w-20" />
          </div>

          {/* Headline */}
          <h1 className="mb-2 text-center font-heading text-[26px] font-bold text-[#1A1A2E]">
            Great job, Amina!
          </h1>

          {/* Subheading */}
          <p className="text-center font-body text-[15px] text-[#6B6B6B]">
            You scored 4 out of 5
          </p>
        </div>

        {/* Stars row */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <AnimatedStar filled={true} delay={300} />
          <AnimatedStar filled={true} delay={450} />
          <AnimatedStar filled={false} delay={600} />
        </div>

        {/* XP Card */}
        <div className="mt-6 rounded-2xl bg-[#FFFFFF] p-5 text-center shadow-sm">
          <span className="mb-1 inline-block font-body text-[10px] font-medium uppercase tracking-[0.1em] text-[#A67C00]">
            XP EARNED
          </span>
          <p className="font-heading text-[40px] font-bold leading-tight text-[#D4A017]">
            +{xpEarned} XP
          </p>
          <p className="mt-1 font-body text-xs text-[#6B6B6B]">
            10 base + 5 bonus for scoring 80%+
          </p>
        </div>

        {/* Streak/bonus card */}
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#FDF3D0] px-4 py-3">
          <Flame className="h-5 w-5 flex-shrink-0 text-[#D4A017]" />
          <p className="font-body text-[13px] text-[#A67C00]">
            Keep going! You&apos;ve done 3 lessons today.
          </p>
        </div>
      </main>

      {/* Bottom CTAs */}
      <div className="sticky bottom-0 flex flex-col gap-3 bg-[#F8F4E8] px-4 pb-6 pt-4">
        <button className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#D4A017] font-heading text-base font-bold text-[#FFFFFF] transition-all active:scale-[0.98]">
          Continue
          <ArrowRight className="h-5 w-5" />
        </button>
        <button className="flex h-[52px] w-full items-center justify-center rounded-full border-2 border-[#D4A017] bg-[#FFFFFF] font-heading text-base font-bold text-[#D4A017] transition-all active:scale-[0.98]">
          Review Answers
        </button>
      </div>

      {/* Inline styles for custom animations */}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-trophy-pulse {
          animation: trophy-pulse 2s ease-in-out infinite;
        }

        @keyframes trophy-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
