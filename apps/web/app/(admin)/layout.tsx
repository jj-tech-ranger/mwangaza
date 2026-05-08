"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/shared/AdminSidebar";
import { AdminNav } from "@/lib/types";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  // Determine active nav based on current route
  const getActiveNav = (): AdminNav => {
    if (pathname.includes("/admin/courses")) return "courses";
    if (pathname.includes("/admin/users")) return "users";
    if (pathname.includes("/admin/analytics")) return "analytics";
    if (pathname.includes("/admin/editor")) return "lessons";
    if (pathname.includes("/admin/settings")) return "settings";
    return "overview";
  };

  const activeNav = getActiveNav();

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar activeNav={activeNav} />
      <main className="flex-1" style={{ marginLeft: "240px" }}>
        {children}
      </main>
    </div>
  );
}
