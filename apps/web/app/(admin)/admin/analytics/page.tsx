"use client";

import { useRouter } from "next/navigation";
import AdminAnalyticsScreen from "@/components/screens/AdminAnalyticsScreen";

export default function AdminAnalyticsPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      admin: "/admin",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <AdminAnalyticsScreen onNavigate={handleNavigate} />;
}
