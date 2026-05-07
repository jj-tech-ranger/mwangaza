'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A1A2E] to-[#F8F4E8] px-6">
      {/* Animated darkness/light transition SVG */}
      <div className="relative mb-8 flex h-40 w-40 items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full drop-shadow-2xl"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        >
          {/* Dark side (left) */}
          <defs>
            <linearGradient id="darkLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1A1A2E" />
              <stop offset="50%" stopColor="#4A4A6A" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
          </defs>
          
          {/* Circle representing the duality */}
          <circle cx="100" cy="100" r="90" fill="url(#darkLight)" />
          
          {/* Dark side - 404 number in dark */}
          <text
            x="70"
            y="120"
            fontSize="48"
            fontWeight="bold"
            fill="#1A1A2E"
            fontFamily="Plus Jakarta Sans"
            textAnchor="middle"
          >
            404
          </text>
          
          {/* Light side - small sun/light symbol */}
          <circle cx="130" cy="80" r="12" fill="#FDF3D0" />
          <circle cx="130" cy="80" r="8" fill="#D4A017" />
        </svg>
      </div>

      {/* Content */}
      <div className="text-center">
        <h1 className="mb-2 font-heading text-4xl font-bold text-[#1A1A2E]">
          Lost in Darkness
        </h1>
        <p className="mb-6 max-w-xs text-center font-body text-lg text-[#4A4A6A]">
          You&apos;ve wandered into the shadows. But don&apos;t worry—Mwangaza will light your way back!
        </p>

        {/* Light vs Darkness tagline */}
        <div className="mb-8 flex flex-col items-center gap-2 text-sm text-[#666666]">
          <p className="italic">Where there is darkness, we bring light.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => router.push('/')}
            className="w-full bg-[#D4A017] text-[#1A1A2E] hover:bg-[#A67C00]"
          >
            Go Home
          </Button>
          <Button
            onClick={() => router.push('/dashboard')}
            variant="outline"
            className="w-full border-[#D4A017] text-[#D4A017] hover:bg-[#FDF3D0]"
          >
            Explore Courses
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-[#FDF3D0] opacity-20 blur-2xl" />
      <div className="absolute right-0 top-1/4 h-40 w-40 rounded-full bg-[#1A1A2E] opacity-10 blur-3xl" />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
