"use client";

import { useRouter } from "next/navigation";
import BadgeGalleryScreen from "@/components/screens/BadgeGalleryScreen";

export default function BadgesPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      profile: "/profile",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <BadgeGalleryScreen onNavigate={handleNavigate} />;
}
