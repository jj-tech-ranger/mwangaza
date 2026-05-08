import { Search, Sun } from "lucide-react";
import { useState } from "react";
import BottomNav from "@/components/shared/BottomNav";
import CourseCard from "@/components/shared/CourseCard";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface CourseCatalogScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function CourseCatalogScreen({ onNavigate }: CourseCatalogScreenProps = {}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Math", "English", "Life Skills", "Wellness"];

  const courses = [
    {
      emoji: "📐",
      title: "Basic Math",
      modules: 6,
      lessons: 32,
      variant: "enrolled" as const,
      progress: 65,
      currentModule: "Module 2 of 6",
    },
    {
      emoji: "💬",
      title: "English Communication",
      modules: 8,
      lessons: 24,
      variant: "comingSoon" as const,
      comingSoonText: "Coming Q2",
    },
    {
      emoji: "🇰🇪",
      title: "Kiswahili Literacy",
      modules: 5,
      lessons: 20,
      variant: "comingSoon" as const,
      comingSoonText: "Coming Q3",
    },
    {
      emoji: "🍳",
      title: "Home Management",
      modules: 4,
      lessons: 16,
      variant: "comingSoon" as const,
      comingSoonText: "Coming Q3",
    },
    {
      emoji: "🩺",
      title: "First Aid",
      modules: 3,
      lessons: 12,
      variant: "comingSoon" as const,
      comingSoonText: "Coming Q4",
    },
    {
      emoji: "🧠",
      title: "Wellness",
      modules: 4,
      lessons: 18,
      variant: "comingSoon" as const,
      comingSoonText: "Coming Q4",
    },
  ];

  const enrolledCourse = courses.find((c) => c.variant === "enrolled");
  const availableCourses = courses.filter((c) => c.variant !== "enrolled");

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
        paddingBottom: "72px",
      }}
    >
      {/* Top Bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-5"
        style={{
          height: "60px",
          marginTop: "44px",
          backgroundColor: "#FFFDF5",
        }}
      >
        <img src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" style={{ height: "32px", width: "auto" }} />

        <div className="flex items-center gap-2">
          <div
            onClick={() => onNavigate?.("profile")}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "2px solid #D4A017",
              backgroundColor: "#FEF5D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "14px",
              color: "#A67C00",
              cursor: "pointer",
            }}
          >
            A
          </div>
          <div
            onClick={() => onNavigate?.("profile")}
            style={{
              backgroundColor: "#FDF0C2",
              color: "#A67C00",
              fontWeight: 700,
              fontSize: "12px",
              padding: "6px 12px",
              borderRadius: "100px",
              cursor: "pointer",
            }}
          >
            ⚡ 340 XP
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="mx-5" style={{ marginTop: "12px" }}>
        <h1
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "26px",
            color: "#2D2006",
          }}
        >
          Discover Courses
        </h1>
        <p
          style={{
            marginTop: "6px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            color: "#7A6020",
          }}
        >
          Expand your skills, one course at a time.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mx-5" style={{ marginTop: "26px" }}>
        <div
          className="relative flex items-center"
          style={{
            height: "48px",
            backgroundColor: "#FEF5D4",
            border: "1.5px solid rgba(212, 160, 23, 0.3)",
            borderRadius: "100px",
            paddingLeft: "48px",
            paddingRight: "16px",
          }}
        >
          <Search
            size={18}
            color="#A67C00"
            style={{
              position: "absolute",
              left: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Search courses..."
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              color: "#2D2006",
            }}
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div
        className="mx-5 flex gap-2 overflow-x-auto"
        style={{ marginTop: "16px", scrollbarWidth: "none" }}
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                flexShrink: 0,
                height: "34px",
                backgroundColor: isActive ? "#D4A017" : "#FEF5D4",
                color: isActive ? "#FFFFFF" : "#A67C00",
                border: isActive ? "none" : "1.5px solid rgba(212, 160, 23, 0.3)",
                borderRadius: "100px",
                padding: "0 16px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Enrolled Section */}
      <div className="mx-5" style={{ marginTop: "24px" }}>
        <h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          Currently Enrolled
        </h2>

        {/* Enrolled Card */}
        {enrolledCourse && (
          <div
            className="flex items-center gap-4"
            style={{
              marginTop: "12px",
              backgroundColor: "#D4A017",
              borderRadius: "20px",
              padding: "20px",
              minHeight: "100px",
            }}
          >
            <Sun size={36} color="#FFFFFF" strokeWidth={2.5} />

            <div className="flex-1">
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}
              >
                {enrolledCourse.title}
              </h3>

              {/* Progress bar */}
              <div
                style={{
                  marginTop: "8px",
                  width: "100%",
                  height: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "100px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${enrolledCourse.progress}%`,
                    height: "100%",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "100px",
                  }}
                />
              </div>

              <p
                style={{
                  marginTop: "6px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  color: "#FFFFFF",
                }}
              >
                {enrolledCourse.currentModule} · Lesson 4
              </p>
            </div>

            <button
              onClick={() => onNavigate?.("home")}
              style={{
                backgroundColor: "#FFFFFF",
                color: "#D4A017",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                padding: "8px 16px",
                height: "32px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Resume →
            </button>
          </div>
        )}
      </div>

      {/* Available Courses Grid */}
      <div className="mx-5" style={{ marginTop: "24px", paddingBottom: "20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
          }}
        >
          {availableCourses.map((course, index) => (
            <div
              key={index}
              onClick={() => course.variant !== "comingSoon" && onNavigate?.("courseDetails")}
              style={{ cursor: course.variant !== "comingSoon" ? "pointer" : "default" }}
            >
              <CourseCard
                variant={course.variant}
                emoji={course.emoji}
                title={course.title}
                modules={course.modules}
                lessons={course.lessons}
                comingSoonText={course.comingSoonText}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="learn" onNavigate={onNavigate} />
    </div>
  );
}
