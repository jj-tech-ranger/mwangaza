import { Plus, Search, Edit, Trash2, Eye, Users } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";

interface AdminCoursesScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function AdminCoursesScreen({ onNavigate }: AdminCoursesScreenProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      emoji: "📐",
      title: "Basic Math",
      modules: 6,
      lessons: 53,
      students: 1248,
      status: "active",
      lastUpdated: "May 7, 2026",
    },
    {
      id: 2,
      emoji: "💬",
      title: "English Communication",
      modules: 8,
      lessons: 64,
      students: 0,
      status: "draft",
      lastUpdated: "May 5, 2026",
    },
    {
      id: 3,
      emoji: "🇰🇪",
      title: "Kiswahili Literacy",
      modules: 5,
      lessons: 42,
      students: 0,
      status: "draft",
      lastUpdated: "May 2, 2026",
    },
    {
      id: 4,
      emoji: "🍳",
      title: "Home Management",
      modules: 4,
      lessons: 28,
      students: 0,
      status: "draft",
      lastUpdated: "April 28, 2026",
    },
  ];

  return (
    <div
      className="flex"
      style={{
        width: "1440px",
        height: "900px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Sidebar */}
      <AdminSidebar activeNav="courses" onNavigate={onNavigate} />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "32px",
          overflowY: "auto",
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between" style={{ marginBottom: "28px" }}>
          <div>
            <h1
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "28px",
                color: "#2D2006",
              }}
            >
              Course Management
            </h1>
            <p
              style={{
                marginTop: "4px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
              }}
            >
              {courses.length} total courses • {courses.filter(c => c.status === "active").length} active
            </p>
          </div>

          <button
            style={{
              height: "44px",
              backgroundColor: "#D4A017",
              color: "#FFFFFF",
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              padding: "0 24px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Plus size={18} />
            New Course
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-3" style={{ marginBottom: "24px" }}>
          <div
            style={{
              flex: 1,
              position: "relative",
              maxWidth: "400px",
            }}
          >
            <Search
              size={18}
              color="#A67C00"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                height: "44px",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid rgba(212, 160, 23, 0.3)",
                borderRadius: "12px",
                paddingLeft: "44px",
                paddingRight: "16px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#2D2006",
                outline: "none",
              }}
            />
          </div>

          <select
            style={{
              height: "44px",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid rgba(212, 160, 23, 0.3)",
              borderRadius: "12px",
              padding: "0 16px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              color: "#2D2006",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>

        {/* Courses Table */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(212, 160, 23, 0.15)",
            borderRadius: "20px",
            boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            overflow: "hidden",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50px 2fr 1fr 1fr 1fr 1fr 1fr 150px",
              padding: "16px 24px",
              backgroundColor: "#FEF5D4",
              borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
            }}
          >
            {["Icon", "Course Name", "Modules", "Lessons", "Students", "Status", "Last Updated", "Actions"].map((header) => (
              <div
                key={header}
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#A67C00",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Table Body */}
          {courses.map((course, index) => (
            <div
              key={course.id}
              style={{
                display: "grid",
                gridTemplateColumns: "50px 2fr 1fr 1fr 1fr 1fr 1fr 150px",
                padding: "20px 24px",
                borderBottom: index < courses.length - 1 ? "1px solid rgba(212, 160, 23, 0.1)" : "none",
                alignItems: "center",
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: "28px" }}>{course.emoji}</div>

              {/* Course Name */}
              <div>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#2D2006",
                  }}
                >
                  {course.title}
                </p>
              </div>

              {/* Modules */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  color: "#7A6020",
                }}
              >
                {course.modules}
              </div>

              {/* Lessons */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  color: "#7A6020",
                }}
              >
                {course.lessons}
              </div>

              {/* Students */}
              <div className="flex items-center gap-1.5">
                <Users size={14} color="#A67C00" />
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#A67C00",
                  }}
                >
                  {course.students}
                </span>
              </div>

              {/* Status */}
              <div>
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: course.status === "active" ? "#D4A017" : "#FEF5D4",
                    color: course.status === "active" ? "#FFFFFF" : "#A67C00",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "100px",
                  }}
                >
                  {course.status}
                </div>
              </div>

              {/* Last Updated */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#7A6020",
                }}
              >
                {course.lastUpdated}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#FEF5D4",
                    border: "1px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="View"
                >
                  <Eye size={16} color="#A67C00" />
                </button>
                <button
                  onClick={() => onNavigate?.("editor")}
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#FEF5D4",
                    border: "1px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Edit"
                >
                  <Edit size={16} color="#A67C00" />
                </button>
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#FFF5F5",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Delete"
                >
                  <Trash2 size={16} color="#EF4444" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
