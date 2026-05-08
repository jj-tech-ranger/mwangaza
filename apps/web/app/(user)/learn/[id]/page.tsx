"use client";

import { useRouter } from "next/navigation";
import CourseDetailsScreen from "@/components/screens/CourseDetailsScreen";

interface CourseDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      lesson: "/lesson/1",
      catalog: "/learn",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <CourseDetailsScreen onNavigate={handleNavigate} />;
}
