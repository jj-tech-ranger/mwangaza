"use client";

import { useRouter } from "next/navigation";
import LessonView from "@/components/screens/LessonView";

interface LessonPageProps {
  params: Promise<{ id: string }>;
}

export default function LessonPage({ params }: LessonPageProps) {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      quiz: "/quiz/1",
      home: "/home",
      courseDetails: "/learn/1",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <LessonView onNavigate={handleNavigate} />;
}
