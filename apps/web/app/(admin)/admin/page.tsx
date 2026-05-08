"use client";

import { useRouter } from "next/navigation";
import AdminDashboard from "@/components/screens/AdminDashboard";

export default function AdminPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      adminCourses: "/admin/courses",
      adminUsers: "/admin/users",
      adminAnalytics: "/admin/analytics",
      editor: "/admin/editor",
      adminSettings: "/admin/settings",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <AdminDashboard onNavigate={handleNavigate} />;
}
