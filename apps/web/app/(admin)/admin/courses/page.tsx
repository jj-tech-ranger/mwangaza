"use client";

import { useRouter } from "next/navigation";
import AdminCoursesScreen from "@/components/screens/AdminCoursesScreen";

export default function AdminCoursesPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      admin: "/admin",
      editor: "/admin/editor",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <AdminCoursesScreen onNavigate={handleNavigate} />;
}
