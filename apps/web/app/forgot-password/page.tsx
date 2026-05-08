"use client";

import { useRouter } from "next/navigation";
import ForgotPasswordScreen from "@/components/screens/ForgotPasswordScreen";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    if (screen === "auth") {
      router.push("/auth");
    }
  };

  return <ForgotPasswordScreen onNavigate={handleNavigate} />;
}
