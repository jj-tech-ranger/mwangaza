"use client";

import { useRouter } from "next/navigation";
import QuizInterface from "@/components/screens/QuizInterface";

interface QuizPageProps {
  params: Promise<{ id: string }>;
}

export default function QuizPage({ params }: QuizPageProps) {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      results: "/results/1",
      lesson: "/lesson/1",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <QuizInterface onNavigate={handleNavigate} />;
}
