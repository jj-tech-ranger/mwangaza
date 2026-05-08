"use client";

import { useRouter } from "next/navigation";
import NotificationsScreen from "@/components/screens/NotificationsScreen";

export default function NotificationsPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      home: "/home",
      lesson: "/lesson/1",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <NotificationsScreen onNavigate={handleNavigate} />;
}
