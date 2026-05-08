"use client";

import { useRouter } from "next/navigation";
import PaymentCheckoutScreen from "@/components/screens/PaymentCheckoutScreen";

export default function CheckoutPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      premium: "/premium",
      home: "/home",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <PaymentCheckoutScreen onNavigate={handleNavigate} />;
}
