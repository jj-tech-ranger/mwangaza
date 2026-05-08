"use client";

import { useRouter } from "next/navigation";
import LessonEditor from "@/components/screens/LessonEditor";

export default function EditorPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      admin: "/admin",
      courses: "/admin/courses",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <LessonEditor onNavigate={handleNavigate} />;
}
