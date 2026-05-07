"use client";

export function SplashScreen() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
      {/* Sun/Lantern Icon */}
      <div className="mb-8 animate-fade-in-up">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Outer circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="#D4A017"
            opacity="0.1"
          />
          {/* Main sun/lantern body */}
          <circle cx="60" cy="60" r="40" fill="#D4A017" />
          
          {/* Inner glow */}
          <circle
            cx="60"
            cy="60"
            r="35"
            fill="#FDF3D0"
            opacity="0.6"
          />
          
          {/* Lantern segments - vertical lines */}
          <line
            x1="60"
            y1="25"
            x2="60"
            y2="95"
            stroke="#D4A017"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="25"
            y1="60"
            x2="95"
            y2="60"
            stroke="#D4A017"
            strokeWidth="2"
            opacity="0.5"
          />
          
          {/* Diagonal segments */}
          <line
            x1="37"
            y1="37"
            x2="83"
            y2="83"
            stroke="#D4A017"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="83"
            y1="37"
            x2="37"
            y2="83"
            stroke="#D4A017"
            strokeWidth="2"
            opacity="0.5"
          />
          
          {/* Center highlight */}
          <circle
            cx="60"
            cy="60"
            r="15"
            fill="#FFFFFF"
            opacity="0.4"
          />
          
          {/* Rays - top */}
          <line
            x1="60"
            y1="5"
            x2="60"
            y2="15"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Rays - right */}
          <line
            x1="105"
            y1="60"
            x2="115"
            y2="60"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Rays - bottom */}
          <line
            x1="60"
            y1="105"
            x2="60"
            y2="115"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Rays - left */}
          <line
            x1="5"
            y1="60"
            x2="15"
            y2="60"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Diagonal rays */}
          <line
            x1="82"
            y1="12"
            x2="90"
            y2="20"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="108"
            y1="38"
            x2="100"
            y2="30"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="108"
            y1="82"
            x2="100"
            y2="90"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="82"
            y1="108"
            x2="90"
            y2="100"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="38"
            y1="108"
            x2="30"
            y2="100"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="82"
            x2="20"
            y2="90"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="38"
            x2="20"
            y2="30"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="38"
            y1="12"
            x2="30"
            y2="20"
            stroke="#D4A017"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* App Name */}
      <h1
        className="mb-4 animate-fade-in-up text-center font-heading text-4xl font-bold tracking-widest text-text"
        style={{ animationDelay: "100ms" }}
      >
        MWANGAZA
      </h1>

      {/* Tagline */}
      <p
        className="mb-12 w-full max-w-xs animate-fade-in-up text-center text-sm italic text-gold-dark"
        style={{ animationDelay: "200ms" }}
      >
        Lighting the path to a better life, one skill at a time.
      </p>

      {/* Loading Dots */}
      <div className="flex gap-2">
        <div
          className="h-2 w-2 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="h-2 w-2 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "300ms" }}
        />
        <div
          className="h-2 w-2 rounded-full bg-gold animate-pulse-dot"
          style={{ animationDelay: "600ms" }}
        />
      </div>
    </div>
  );
}
