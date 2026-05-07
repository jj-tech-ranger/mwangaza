"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle sign up logic here
    console.log("[v0] Sign up attempted with:", { email, password });
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleGoogleAuth = () => {
    console.log("[v0] Google auth initiated");
  };

  const handlePhoneAuth = () => {
    console.log("[v0] Phone auth initiated");
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-background px-6 pt-12">
      {/* Logo Section */}
      <div className="mb-12 flex flex-col items-center pt-12">
        <div className="mb-4">
          <svg
            width="56"
            height="56"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="40" fill="#D4A017" />
            <circle cx="60" cy="60" r="35" fill="#FDF3D0" opacity="0.6" />
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
          </svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-text">Mwangaza</h1>
      </div>

      {/* Heading Section */}
      <div className="mb-8 flex w-full max-w-[320px] flex-col items-center">
        <h2 className="mb-2 text-center font-heading text-[24px] font-bold text-text">
          Create your account
        </h2>
        <p className="text-center font-body text-[14px] text-[#6B6B6B]">
          Join thousands of learners across Africa
        </p>
      </div>

      {/* Auth Options */}
      <div className="w-full max-w-[320px] space-y-3">
        {/* Google Button */}
        <button
          onClick={handleGoogleAuth}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gold bg-white px-4 py-[13px] font-body text-[15px] font-medium text-text transition-all hover:bg-gold-light"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        {/* Phone Button */}
        <button
          onClick={handlePhoneAuth}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gold bg-white px-4 py-[13px] font-body text-[15px] font-medium text-text transition-all hover:bg-gold-light"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
              fill="#1A1A2E"
            />
          </svg>
          Continue with Phone
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 flex w-full max-w-[320px] items-center gap-3">
        <div className="flex-1 border-t border-[#E5E7EB]" />
        <span className="font-body text-[13px] text-[#9CA3AF]">or</span>
        <div className="flex-1 border-t border-[#E5E7EB]" />
      </div>

      {/* Form */}
      <form onSubmit={handleSignUp} className="w-full max-w-[320px] space-y-3">
        {/* Email Input */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-[13px] font-body text-[15px] text-text placeholder:text-[#9CA3AF] transition-all focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold focus:ring-opacity-50"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-[13px] pr-12 font-body text-[15px] text-text placeholder:text-[#9CA3AF] transition-all focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold focus:ring-opacity-50"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] transition-colors hover:text-text"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff width="18" height="18" />
            ) : (
              <Eye width="18" height="18" />
            )}
          </button>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full bg-gold px-6 py-[13px] font-heading text-[15px] font-bold text-white transition-all hover:bg-gold-dark disabled:opacity-50"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      {/* Sign In Link */}
      <div className="mt-8 flex items-center gap-1 text-center font-body text-[14px]">
        <span className="text-[#6B6B6B]">Already have an account?</span>
        <a href="/signin" className="font-bold text-gold transition-colors hover:text-gold-dark">
          Sign in
        </a>
      </div>
    </div>
  );
}
