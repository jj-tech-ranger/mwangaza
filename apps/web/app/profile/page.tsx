"use client";

import { useEffect, useState } from "react";
import { Download, Share2, Settings } from "lucide-react";
import { BottomNavBar } from "@/components/bottom-nav-bar";

interface Badge {
  id: number;
  emoji: string;
  name: string;
  earned: boolean;
}

interface Certificate {
  id: number;
  name: string;
  issuedDate: string;
}

interface UserProfile {
  id: string;
  name: string;
  firstName?: string;
  imageUrl?: string;
  currentXP: number;
  targetXP: number;
  level: string;
  badges: Badge[];
  certificates: Certificate[];
  stats: Array<{
    value: string;
    label: string;
  }>;
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-gold bg-gold">
      <span className="font-heading text-2xl font-bold text-white">
        {initials}
      </span>
    </div>
  );
}

function BadgeCard({ badge }: { badge: Badge }) {
  return (
    <div
      className={`relative flex h-[90px] w-[80px] flex-shrink-0 flex-col items-center justify-center rounded-xl bg-white ${
        badge.earned
          ? "border-2 border-gold"
          : "border border-gray-200 opacity-40"
      }`}
    >
      <span className="text-[32px]">{badge.emoji}</span>
      <span className="mt-1 text-center font-body text-[10px] text-text/60">
        {badge.name}
      </span>
      {!badge.earned && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-text/10">
          <span className="text-xl">🔒</span>
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: fetch from GET /api/user/profile
    const fetchUser = async () => {
      try {
        // const response = await fetch('/api/user/profile');
        // const data = await response.json();
        // setUser(data);
        setUser(null); // No data from backend yet
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-dvh bg-background pb-20 pt-4">
        <div className="mx-4 space-y-4">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="h-32 rounded-2xl bg-white animate-pulse"
            ></div>
          ))}
        </div>
        <BottomNavBar />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-dvh bg-background pb-20 pt-4">
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-12">
          <div className="text-4xl">👤</div>
          <p className="font-heading text-base font-bold text-text">
            Profile Not Available
          </p>
          <p className="text-center font-body text-sm text-gray-600">
            Please sign in to view your profile
          </p>
        </div>
        <BottomNavBar />
      </div>
    );
  }

  const progressPercent = (user.currentXP / user.targetXP) * 100;
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-dvh bg-background pb-20 pt-4">
      {/* Profile Header Card */}
      <div className="mx-4 rounded-2xl bg-surface p-5 shadow-sm">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <Avatar initials={getInitials(user.name)} />

          {/* Name */}
          <h1 className="mt-3 font-heading text-lg font-bold text-text">
            {user.name}
          </h1>

          {/* Level Badge */}
          <div className="mt-2 rounded-full bg-gold-light px-3 py-1">
            <span className="font-body text-[13px] font-medium text-gold-dark">
              ⭐ {user.level}
            </span>
          </div>

          {/* XP Progress */}
          <div className="mt-4 w-full">
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gold transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-1 text-right font-body text-[11px] text-text/60">
              {user.currentXP} / {user.targetXP} XP
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row Card */}
      {user.stats.length > 0 && (
        <div className="mx-4 mt-3 rounded-2xl bg-surface p-4 shadow-sm">
          <div className="flex">
            {user.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-1 flex-col items-center ${
                  index < user.stats.length - 1 ? "border-r border-gray-200" : ""
                }`}
              >
                <span className="font-heading text-xl font-bold text-gold">
                  {stat.value}
                </span>
                <span className="mt-1 font-body text-[11px] text-text/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Badges Section */}
      {user.badges.length > 0 && (
        <div className="mx-4 mt-4">
          <h2 className="mb-3 font-heading text-base font-bold text-text">
            Badges
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {user.badges.map(badge => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </div>
      )}

      {user.badges.length === 0 && (
        <div className="mx-4 mt-4 rounded-2xl border-2 border-dashed border-gold-light bg-surface p-6 text-center">
          <p className="font-heading text-sm font-bold text-text">
            No badges earned yet
          </p>
          <p className="mt-2 font-body text-xs text-gray-600">
            Complete courses to earn badges
          </p>
        </div>
      )}

      {/* Certificates Section */}
      <div className="mx-4 mt-4">
        <h2 className="mb-3 font-heading text-base font-bold text-text">
          Certificates
        </h2>
        {user.certificates.length > 0 ? (
          <div className="space-y-3">
            {user.certificates.map(cert => (
              <div
                key={cert.id}
                className="rounded-2xl bg-surface p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  {/* Certificate Icon */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-light">
                    <span className="text-xl">📜</span>
                  </div>

                  {/* Certificate Info */}
                  <div className="flex-1">
                    <p className="font-heading text-sm font-bold text-text">
                      {cert.name}
                    </p>
                    <p className="font-body text-xs text-text/60">
                      Issued {cert.issuedDate}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gold-light"
                      aria-label="Download certificate"
                    >
                      <Download className="h-5 w-5 text-gold" />
                    </button>
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gold-light"
                      aria-label="Share certificate"
                    >
                      <Share2 className="h-5 w-5 text-gold" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-gold-light bg-surface p-6 text-center">
            <p className="font-heading text-sm font-bold text-text">
              No certificates yet
            </p>
            <p className="mt-2 font-body text-xs text-gray-600">
              Complete courses to earn certificates
            </p>
          </div>
        )}
      </div>

      {/* Settings Link */}
      <div className="mt-6 flex justify-center">
        <button className="flex items-center gap-2 font-body text-sm font-medium text-gold transition-colors hover:text-gold-dark">
          <Settings className="h-4 w-4" />
          Account Settings
        </button>
      </div>

      <BottomNavBar />
    </div>
  );
}
