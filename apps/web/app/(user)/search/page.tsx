"use client";

import { useRouter } from "next/navigation";
import SearchResultsScreen from "@/components/screens/SearchResultsScreen";

export default function SearchPage() {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    const routeMap: { [key: string]: string } = {
      courseDetails: "/learn/1",
      learn: "/learn",
    };
    if (routeMap[screen]) {
      router.push(routeMap[screen]);
    }
  };

  return <SearchResultsScreen onNavigate={handleNavigate} />;
}
