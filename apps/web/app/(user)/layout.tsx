"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import BottomNav from "@/components/shared/BottomNav";
import { UserTab } from "@/lib/types";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const pathname = usePathname();

  // Determine active tab based on current route
  const getActiveTab = (): UserTab => {
    if (pathname.includes("/learn")) return "learn";
    if (pathname.includes("/leaderboard")) return "leaderboard";
    if (pathname.includes("/profile") || pathname.includes("/badges") || pathname.includes("/certificates"))
      return "profile";
    if (pathname.includes("/premium")) return "premium";
    return "home";
  };

  const activeTab = getActiveTab();

  return (
    <div className="min-h-screen bg-background">
      {children}
      <BottomNav activeTab={activeTab} />
    </div>
  );
}
