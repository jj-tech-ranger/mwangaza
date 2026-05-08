"use client";

import { useRouter } from "next/navigation";
import LessonResults from "@/components/screens/LessonResults";

interface ResultsPageProps {
  params: Promise<{ id: string }>;
}

export default function ResultsPage({ params }: ResultsPageProps) {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      home: "/home",
      lesson: "/lesson/1",
      nextLesson: "/lesson/2",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <LessonResults onNavigate={handleNavigate} />;
}
