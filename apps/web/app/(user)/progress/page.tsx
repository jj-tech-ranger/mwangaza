"use client";

import { useRouter } from "next/navigation";
import ProgressAnalyticsScreen from "@/components/screens/ProgressAnalyticsScreen";

export default function ProgressPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      home: "/home",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <ProgressAnalyticsScreen onNavigate={handleNavigate} />;
}
