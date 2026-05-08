"use client";

import { useRouter } from "next/navigation";
import HomeScreen from "@/components/screens/HomeScreen";

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      lesson: "/lesson/1",
      results: "/results/1",
      notifications: "/notifications",
      home: "/home",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <HomeScreen onNavigate={handleNavigate} />;
}
