"use client";

import { useRouter } from "next/navigation";
import AdminSettingsScreen from "@/components/screens/AdminSettingsScreen";

export default function AdminSettingsPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      admin: "/admin",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <AdminSettingsScreen onNavigate={handleNavigate} />;
}
