"use client";

import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  free: string | boolean;
  premium: string | boolean;
}

const features: Feature[] = [
  { name: "All courses & lessons", free: true, premium: true },
  { name: "Daily lesson limit", free: "5/day", premium: "Unlimited" },
  { name: "Ad-free experience", free: false, premium: true },
  { name: "Offline access", free: "Limited", premium: "Full" },
  { name: "Priority new courses", free: false, premium: true },
];

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 48L12 24L22 32L32 16L42 32L52 24L56 48H8Z"
        fill="#D4A017"
        stroke="#A67C00"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="8"
        y="48"
        width="48"
        height="8"
        rx="2"
        fill="#D4A017"
        stroke="#A67C00"
        strokeWidth="2"
      />
      <circle cx="12" cy="24" r="4" fill="#FDF3D0" stroke="#D4A017" strokeWidth="2" />
      <circle cx="32" cy="16" r="4" fill="#FDF3D0" stroke="#D4A017" strokeWidth="2" />
      <circle cx="52" cy="24" r="4" fill="#FDF3D0" stroke="#D4A017" strokeWidth="2" />
    </svg>
  );
}

function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-[#D4A017]" />
    ) : (
      <X className="h-5 w-5 text-[#9CA3AF]" />
    );
  }
  return (
    <span className="font-body text-xs text-[#1A1A2E]">{value}</span>
  );
}

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");

  return (
    <div className="flex min-h-dvh flex-col bg-[#F8F4E8]">
      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto pb-36">
        {/* Hero section */}
        <section className="flex flex-col items-center px-4 pt-10">
          {/* Crown icon with glow */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-[#D4A017]/20 blur-xl" />
            <CrownIcon className="relative h-16 w-16" />
          </div>

          <h1 className="mb-3 text-center font-heading text-2xl font-bold text-[#1A1A2E]">
            Unlock your full potential
          </h1>
          <p className="max-w-[280px] text-center font-body text-sm text-[#1A1A2E]/60">
            You&apos;ve reached today&apos;s lesson limit. Go Premium for unlimited learning.
          </p>
        </section>

        {/* Feature comparison card */}
        <section className="mx-4 mt-6">
          <div className="rounded-2xl bg-[#FFFFFF] p-5 shadow-sm">
            {/* Header row */}
            <div className="mb-4 grid grid-cols-[1fr_60px_60px] items-center gap-2">
              <span className="font-body text-xs font-medium text-[#1A1A2E]/40">
                Features
              </span>
              <span className="text-center font-body text-xs font-medium text-[#1A1A2E]/40">
                Free
              </span>
              <span className="text-center font-body text-xs font-medium text-[#D4A017]">
                Premium
              </span>
            </div>

            {/* Feature rows */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_60px_60px] items-center gap-2"
                >
                  <span className="font-body text-sm text-[#1A1A2E]">
                    {feature.name}
                  </span>
                  <div className="flex justify-center">
                    <FeatureValue value={feature.free} />
                  </div>
                  <div className="flex justify-center">
                    <FeatureValue value={feature.premium} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="mx-4 mt-4 space-y-3">
          {/* Monthly card */}
          <button
            onClick={() => setSelectedPlan("monthly")}
            className={cn(
              "w-full rounded-2xl bg-[#FFFFFF] p-4 text-left transition-all",
              selectedPlan === "monthly"
                ? "border-2 border-[#D4A017] shadow-md"
                : "border-[1.5px] border-[#E5E7EB]"
            )}
          >
            <p className="font-heading text-xl font-bold text-[#1A1A2E]">
              KES 299/month
            </p>
            <p className="mt-1 font-body text-xs text-[#1A1A2E]/60">
              Billed monthly
            </p>
          </button>

          {/* Annual card - Recommended */}
          <button
            onClick={() => setSelectedPlan("annual")}
            className={cn(
              "relative w-full rounded-2xl bg-[#FFFFFF] p-4 text-left transition-all",
              selectedPlan === "annual"
                ? "border-2 border-[#D4A017] shadow-md"
                : "border-2 border-[#D4A017]"
            )}
          >
            {/* Best value badge */}
            <span className="absolute right-3 top-3 rounded-full bg-[#D4A017] px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-[#FFFFFF]">
              Best Value
            </span>

            <p className="font-heading text-xl font-bold text-[#D4A017]">
              KES 2,499/year
            </p>
            <p className="mt-1 font-body text-xs text-[#22C55E]">
              Save 30% · KES 208/month
            </p>
          </button>
        </section>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#F8F4E8] px-4 pb-6 pt-4">
        <button className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#D4A017] font-heading text-base font-bold text-[#FFFFFF] transition-all active:scale-[0.98]">
          Unlock Premium
          <ArrowRight className="h-5 w-5" />
        </button>
        <button className="mt-3 w-full text-center font-body text-[13px] text-[#1A1A2E]/60 transition-colors hover:text-[#1A1A2E]">
          Maybe later
        </button>
      </div>
    </div>
  );
}
