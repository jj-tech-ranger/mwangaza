"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/shared/SplashScreen";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to the main app after 2.5 seconds
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return <SplashScreen />;
}
