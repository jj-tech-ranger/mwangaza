"use client";

import { useState } from "react";
import {
  BookOpen,
  Package,
  FileText,
  User,
  BarChart3,
  Plus,
  Pencil,
  Trash2,
  Archive,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = "courses" | "modules" | "lessons" | "users" | "analytics";

interface Course {
  id: number;
  name: string;
  slug: string;
  modules: number;
  status: "published" | "draft";
}

const navItems: { id: NavItem; label: string; icon: React.ReactNode }[] = [
  { id: "courses", label: "Courses", icon: <BookOpen className="h-4 w-4" /> },
  { id: "modules", label: "Modules", icon: <Package className="h-4 w-4" /> },
  { id: "lessons", label: "Lessons", icon: <FileText className="h-4 w-4" /> },
  { id: "users", label: "Users", icon: <User className="h-4 w-4" /> },
  { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" /> },
];

const courses: Course[] = [
  { id: 1, name: "Basic Math", slug: "basic-math", modules: 6, status: "published" },
  { id: 2, name: "English Communication", slug: "english-comm", modules: 0, status: "draft" },
  { id: 3, name: "Kiswahili Literacy", slug: "kiswahili", modules: 0, status: "draft" },
];

function MwangazaLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="#FDF3D0" stroke="#D4A017" strokeWidth="2" />
      <path
        d="M16 8L18.5 13L24 13.5L20 17.5L21 23L16 20.5L11 23L12 17.5L8 13.5L13.5 13L16 8Z"
        fill="#D4A017"
      />
    </svg>
  );
}

function StatusBadge({ status }: { status: "published" | "draft" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        status === "published"
          ? "bg-[#22C55E]/10 text-[#22C55E]"
          : "bg-[#EAB308]/10 text-[#EAB308]"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "published" ? "bg-[#22C55E]" : "bg-[#EAB308]"
        )}
      />
      {status === "published" ? "Published" : "Draft"}
    </span>
  );
}

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState<NavItem>("courses");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F4E8] lg:flex-row">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="flex h-16 items-center gap-3 border-b border-[#E5E7EB] bg-[#FFFFFF] px-4 lg:hidden"
      >
        <span className="font-heading text-lg font-bold text-[#1A1A2E]">Menu</span>
      </button>

      {/* Sidebar */}
      <aside className={`${
        sidebarOpen ? "flex" : "hidden"
      } absolute left-0 top-16 z-40 w-full flex-col bg-[#FFFFFF] shadow-[1px_0_0_0_#E5E7EB] lg:relative lg:top-0 lg:flex lg:w-[240px]`}>
        {/* Logo section */}
        <div className="flex items-center gap-3 border-b border-[#E5E7EB] px-5 py-5">
          <MwangazaLogo />
          <div>
            <p className="font-heading text-base font-bold text-[#1A1A2E]">
              Mwangaza
            </p>
            <p className="font-body text-xs text-[#6B6B6B]">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveNav(item.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left font-body text-sm transition-colors",
                    activeNav === item.id
                      ? "border-l-[3px] border-[#D4A017] bg-[#FDF3D0] pl-[13px] text-[#A67C00]"
                      : "text-[#1A1A2E] hover:bg-[#F8F4E8]"
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 lg:ml-[240px] lg:p-8">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-heading text-2xl font-bold text-[#1A1A2E]">
            Courses
          </h1>
          <button className="flex items-center gap-2 rounded-lg bg-[#D4A017] px-4 py-2.5 font-heading text-sm font-semibold text-[#FFFFFF] transition-colors hover:bg-[#A67C00]">
            <Plus className="h-4 w-4" />
            Add Course
          </button>
        </div>

        {/* Table card */}
        <div className="overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8F4E8]">
                <th className="px-6 py-4 text-left font-body text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                  Course Name
                </th>
                <th className="px-6 py-4 text-left font-body text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                  Slug
                </th>
                <th className="px-6 py-4 text-left font-body text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                  Modules
                </th>
                <th className="px-6 py-4 text-left font-body text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                  Status
                </th>
                <th className="px-6 py-4 text-right font-body text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-[#F8F4E8]/50">
                  <td className="px-6 py-4">
                    <span className="font-body text-sm font-medium text-[#1A1A2E]">
                      {course.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-body text-sm text-[#6B6B6B]">
                      {course.slug}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-body text-sm text-[#1A1A2E]">
                      {course.modules}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={course.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-body text-xs font-medium text-[#1A1A2E] transition-colors hover:bg-[#F8F4E8]"
                        aria-label={`Edit ${course.name}`}
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                      </button>
                      {course.status === "published" ? (
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-body text-xs font-medium text-[#6B6B6B] transition-colors hover:bg-[#F8F4E8]"
                          aria-label={`Archive ${course.name}`}
                        >
                          <Archive className="h-3.5 w-3.5" />
                          Archive
                        </button>
                      ) : (
                        <button
                          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-body text-xs font-medium text-[#EF4444] transition-colors hover:bg-[#EF4444]/10"
                          aria-label={`Delete ${course.name}`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
