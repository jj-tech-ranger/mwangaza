"use client";

import { useRouter } from "next/navigation";
import CertificateDetailScreen from "@/components/screens/CertificateDetailScreen";

interface CertificatePageProps {
  params: Promise<{ id: string }>;
}

export default function CertificatePage({ params }: CertificatePageProps) {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      profile: "/profile",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <CertificateDetailScreen onNavigate={handleNavigate} />;
}
