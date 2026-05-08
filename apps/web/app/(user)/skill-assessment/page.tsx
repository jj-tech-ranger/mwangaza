"use client";

import { useRouter } from "next/navigation";
import SkillAssessmentScreen from "@/components/screens/SkillAssessmentScreen";

export default function SkillAssessmentPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      home: "/home",
      learn: "/learn",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <SkillAssessmentScreen onNavigate={handleNavigate} />;
}
