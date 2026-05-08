"use client";

import { useRouter } from "next/navigation";
import AdminUsersScreen from "@/components/screens/AdminUsersScreen";

export default function AdminUsersPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      admin: "/admin",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <AdminUsersScreen onNavigate={handleNavigate} />;
}
