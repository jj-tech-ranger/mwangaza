"use client";

import { useRouter } from "next/navigation";
import CourseCatalogScreen from "@/components/screens/CourseCatalogScreen";

export default function LearnPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      courseDetails: "/learn/1",
      search: "/search",
      notifications: "/notifications",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <CourseCatalogScreen onNavigate={handleNavigate} />;
}
