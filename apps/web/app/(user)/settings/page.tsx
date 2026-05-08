"use client";

import { useRouter } from "next/navigation";
import SettingsScreen from "@/components/screens/SettingsScreen";

export default function SettingsPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      help: "/help",
      auth: "/auth",
      profile: "/profile",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <SettingsScreen onNavigate={handleNavigate} />;
}
