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

  const courses = [];
  const hasEnrolledCourses = false;

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

      {/* Empty State */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          marginTop: "60px",
          paddingBottom: "20px",
          flex: 1,
        }}
      >
        <Sun size={64} color="#D4A017" style={{ marginBottom: "20px", opacity: 0.3 }} />
        <h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "20px",
            color: "#2D2006",
            textAlign: "center",
          }}
        >
          No Courses Available Yet
        </h2>
        <p
          style={{
            marginTop: "12px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            color: "#7A6020",
            textAlign: "center",
            maxWidth: "280px",
          }}
        >
          Check back soon for exciting new courses to explore and grow your skills.
        </p>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="learn" onNavigate={onNavigate} />
    </div>
  );
}
