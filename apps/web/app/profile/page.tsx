"use client";

import { Download, Share2, Settings } from "lucide-react";

interface Badge {
  id: number;
  emoji: string;
  name: string;
  earned: boolean;
}

// Mock data removed - will be fetched from backend
// TODO: fetch from GET /api/user/badges
const badges: Badge[] = [];

interface Stat {
  value: string;
  label: string;
}

// Mock stats removed - will be fetched from backend
// TODO: fetch from GET /api/user/stats
const stats: Stat[] = [];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-[#D4A017] bg-[#D4A017]">
      <span className="font-heading text-2xl font-bold text-[#FFFFFF]">
        {initials}
      </span>
    </div>
  );
}

function BadgeCard({ badge }: { badge: Badge }) {
  return (
    <div
      className={`relative flex h-[90px] w-[80px] flex-shrink-0 flex-col items-center justify-center rounded-xl bg-[#FFFFFF] ${
        badge.earned
          ? "border-2 border-[#D4A017]"
          : "border border-[#E5E7EB] opacity-40"
      }`}
    >
      <span className="text-[32px]">{badge.emoji}</span>
      <span className="mt-1 text-center font-body text-[10px] text-[#1A1A2E]/60">
        {badge.name}
      </span>
      {!badge.earned && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#1A1A2E]/10">
          <span className="text-xl">🔒</span>
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const currentXP = 250;
  const targetXP = 500;
  const progressPercent = (currentXP / targetXP) * 100;

  return (
    <div className="min-h-dvh bg-[#F8F4E8] pb-8">
      {/* Profile Header Card */}
      <div className="mx-4 mt-4 rounded-2xl bg-[#FFFFFF] p-5 shadow-sm">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <Avatar initials="AM" />

          {/* Name */}
          <h1 className="mt-3 font-heading text-lg font-bold text-[#1A1A2E]">
            Amina Wanjiku
          </h1>

          {/* Level Badge */}
          <div className="mt-2 rounded-full bg-[#FDF3D0] px-3 py-1">
            <span className="font-body text-[13px] font-medium text-[#A67C00]">
              ⭐ Msomi — Scholar
            </span>
          </div>

          {/* XP Progress */}
          <div className="mt-4 w-full">
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
              <div
                className="h-full rounded-full bg-[#D4A017] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-1 text-right font-body text-[11px] text-[#1A1A2E]/60">
              {currentXP} / {targetXP} XP to Hodari
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row Card */}
      <div className="mx-4 mt-3 rounded-2xl bg-[#FFFFFF] p-4 shadow-sm">
        <div className="flex">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-1 flex-col items-center ${
                index < stats.length - 1 ? "border-r border-[#E5E7EB]" : ""
              }`}
            >
              <span className="font-heading text-xl font-bold text-[#D4A017]">
                {stat.value}
              </span>
              <span className="mt-1 font-body text-[11px] text-[#1A1A2E]/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Section */}
      <div className="mx-4 mt-4">
        <h2 className="mb-3 font-heading text-base font-bold text-[#1A1A2E]">
          Badges
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mx-4 mt-4">
        <h2 className="mb-3 font-heading text-base font-bold text-[#1A1A2E]">
          Certificates
        </h2>
        <div className="rounded-2xl bg-[#FFFFFF] p-4 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Certificate Icon */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FDF3D0]">
              <span className="text-xl">📜</span>
            </div>

            {/* Certificate Info */}
            <div className="flex-1">
              <p className="font-heading text-sm font-bold text-[#1A1A2E]">
                Basic Math
              </p>
              <p className="font-body text-xs text-[#1A1A2E]/60">
                Issued May 2026
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#FDF3D0]"
                aria-label="Download certificate"
              >
                <Download className="h-5 w-5 text-[#D4A017]" />
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#FDF3D0]"
                aria-label="Share certificate"
              >
                <Share2 className="h-5 w-5 text-[#D4A017]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Link */}
      <div className="mt-6 flex justify-center">
        <button className="flex items-center gap-2 font-body text-sm font-medium text-[#D4A017] transition-colors hover:text-[#A67C00]">
          <Settings className="h-4 w-4" />
          Account Settings
        </button>
      </div>
    </div>
  );
}
