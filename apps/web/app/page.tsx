"use client";

import { useRouter } from "next/navigation";
import SplashScreen from "@/components/shared/SplashScreen";

export default function SplashPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    if (screen === "onboarding") {
      router.push("/onboarding");
    } else if (screen === "auth") {
      router.push("/auth");
    } else if (screen === "home") {
      router.push("/home");
    }
  };

  return <SplashScreen onNavigate={handleNavigate} />;
}
