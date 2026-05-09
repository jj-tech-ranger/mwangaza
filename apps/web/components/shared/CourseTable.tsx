import { Edit, Archive, Trash2 } from "lucide-react";

interface Course {
  name: string;
  slug: string;
  modules: number;
  status: "published" | "draft";
}

export default function CourseTable() {
  const courses: Course[] = [];

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(212, 160, 23, 0.15)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "2fr 1.5fr 0.8fr 1fr 1.2fr",
          padding: "12px 20px",
          backgroundColor: "#FEF5D4",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Course
        </span>
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Slug
        </span>
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Modules
        </span>
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Status
        </span>
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Actions
        </span>
      </div>

      {courses.length === 0 && <div style={{ height: "64px" }} />}

      {/* Rows */}
      {courses.map((course, index) => (
        <div
          key={index}
          className="grid"
          style={{
            gridTemplateColumns: "2fr 1.5fr 0.8fr 1fr 1.2fr",
            padding: "14px 20px",
            borderTop: "1px solid #FEF5D4",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#2D2006",
            }}
          >
            {course.name}
          </span>

          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              color: "#7A6020",
            }}
          >
            {course.slug}
          </span>

          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#A67C00",
            }}
          >
            {course.modules}
          </span>

          <div>
            {course.status === "published" ? (
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#D4F7E7",
                  color: "#166534",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "100px",
                }}
              >
                🟢 Published
              </span>
            ) : (
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#FEF3C7",
                  color: "#92400E",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "100px",
                }}
              >
                🟡 Draft
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              style={{
                height: "32px",
                backgroundColor: "transparent",
                color: "#A67C00",
                border: "1.5px solid #A67C00",
                borderRadius: "100px",
                padding: "0 12px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Edit size={14} />
              Edit
            </button>

            {course.status === "published" ? (
              <button
                style={{
                  height: "32px",
                  backgroundColor: "transparent",
                  color: "#A67C00",
                  border: "1.5px solid #A67C00",
                  borderRadius: "100px",
                  padding: "0 12px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Archive size={14} />
              </button>
            ) : (
              <button
                style={{
                  height: "32px",
                  backgroundColor: "transparent",
                  color: "#EF4444",
                  border: "1.5px solid #EF4444",
                  borderRadius: "100px",
                  padding: "0 12px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
