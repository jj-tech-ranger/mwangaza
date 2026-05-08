"use client";

import { useRouter } from "next/navigation";
import AuthScreen from "@/components/shared/AuthScreen";

export default function AuthPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    if (screen === "home") {
      router.push("/home");
    } else if (screen === "forgot") {
      router.push("/forgot-password");
    } else if (screen === "splash") {
      router.push("/");
    }
  };

  return <AuthScreen onNavigate={handleNavigate} />;
}
