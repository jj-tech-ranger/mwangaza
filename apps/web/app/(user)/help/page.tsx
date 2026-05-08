"use client";

import { useRouter } from "next/navigation";
import HelpFAQScreen from "@/components/screens/HelpFAQScreen";

export default function HelpPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      settings: "/settings",
      home: "/home",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <HelpFAQScreen onNavigate={handleNavigate} />;
}
