"use client";

import { useRouter } from "next/navigation";
import FriendsSocialScreen from "@/components/screens/FriendsSocialScreen";

export default function FriendsPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      leaderboard: "/leaderboard",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <FriendsSocialScreen onNavigate={handleNavigate} />;
}
