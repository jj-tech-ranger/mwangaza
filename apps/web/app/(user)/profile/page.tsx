"use client";

import { useRouter } from "next/navigation";
import ProfileScreen from "@/components/screens/ProfileScreen";

export default function ProfilePage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      badges: "/profile/badges",
      certificates: "/profile/certificates/1",
      settings: "/settings",
      home: "/home",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <ProfileScreen onNavigate={handleNavigate} />;
}
