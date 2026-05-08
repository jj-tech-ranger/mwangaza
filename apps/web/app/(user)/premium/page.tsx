"use client";

import { useRouter } from "next/navigation";
import PremiumUpgrade from "@/components/screens/PremiumUpgrade";

export default function PremiumPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      checkout: "/checkout",
      home: "/home",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <PremiumUpgrade onNavigate={handleNavigate} />;
}
