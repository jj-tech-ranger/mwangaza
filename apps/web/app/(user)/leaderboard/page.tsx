"use client";

import { useRouter } from "next/navigation";
import LeaderboardScreen from "@/components/screens/LeaderboardScreen";

export default function LeaderboardPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      friends: "/friends",
      home: "/home",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <LeaderboardScreen onNavigate={handleNavigate} />;
}
