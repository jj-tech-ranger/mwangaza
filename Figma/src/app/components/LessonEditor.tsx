import { ArrowLeft, Eye } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import MarkdownEditor from "./MarkdownEditor";
import PhonePreviewFrame from "./PhonePreviewFrame";

export default function LessonEditor() {
  const [activeTab, setActiveTab] = useState<"explanation" | "examples" | "quiz">("explanation");

  const tabs = [
    { id: "explanation" as const, label: "Explanation" },
    { id: "examples" as const, label: "Examples" },
    { id: "quiz" as const, label: "Quiz" },
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
      <AdminSidebar activeNav="lessons" />

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: "20px 32px",
            borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
          }}
        >
          {/* Back arrow */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              color: "#A67C00",
            }}
          >
            <ArrowLeft size={16} />
            All Lessons
          </button>

          {/* Editable title */}
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "20px",
              color: "#2D2006",
              borderBottom: "2px dashed transparent",
              padding: "4px 8px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = "#D4A017";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            Adding Two-Digit Numbers
          </h1>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <button
              style={{
                height: "38px",
                backgroundColor: "transparent",
                color: "#A67C00",
                border: "1.5px solid #A67C00",
                borderRadius: "100px",
                padding: "0 20px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Eye size={16} />
              Preview
            </button>

            <button
              style={{
                height: "38px",
                backgroundColor: "#D4A017",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "100px",
                padding: "0 24px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Publish
            </button>

            <div
              style={{
                backgroundColor: "#FEF3C7",
                color: "#92400E",
                fontFamily: "Nunito, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                padding: "6px 12px",
                borderRadius: "100px",
              }}
            >
              🟡 Draft
            </div>
          </div>
        </div>

        {/* Split Pane */}
        <div className="flex" style={{ flex: 1 }}>
          {/* Left Pane - Editor */}
          <div
            style={{
              width: "50%",
              backgroundColor: "#FFFDF5",
              borderRight: "1px solid rgba(212, 160, 23, 0.15)",
              padding: "24px",
              overflowY: "auto",
            }}
          >
            {/* Label */}
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                color: "#A67C00",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "12px",
              }}
            >
              Content Editor
            </p>

            {/* Sub-tabs */}
            <div className="flex items-center gap-6" style={{ marginBottom: "20px" }}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "14px",
                      fontWeight: isActive ? 700 : 400,
                      color: isActive ? "#D4A017" : "#7A6020",
                      background: "none",
                      border: "none",
                      borderBottom: isActive ? "2px solid #D4A017" : "none",
                      paddingBottom: "6px",
                      cursor: "pointer",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Content based on active tab */}
            {activeTab === "explanation" && <MarkdownEditor />}
            {activeTab === "examples" && (
              <div style={{ padding: "40px", textAlign: "center", color: "#7A6020" }}>
                Examples editor content
              </div>
            )}
            {activeTab === "quiz" && (
              <div style={{ padding: "40px", textAlign: "center", color: "#7A6020" }}>
                Quiz editor content
              </div>
            )}
          </div>

          {/* Right Pane - Preview */}
          <div
            style={{
              width: "50%",
              backgroundColor: "#F8F4E8",
              padding: "24px",
              overflowY: "auto",
            }}
          >
            {/* Label */}
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                color: "#A67C00",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "24px",
              }}
            >
              Live Preview
            </p>

            <PhonePreviewFrame />
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            backgroundColor: "#FFFDF5",
            borderTop: "1px solid rgba(212, 160, 23, 0.15)",
            padding: "12px 32px",
          }}
        >
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "12px",
              color: "#7A6020",
            }}
          >
            Last saved 2 min ago
          </p>

          <div className="flex items-center gap-3">
            <button
              style={{
                height: "40px",
                backgroundColor: "transparent",
                color: "#A67C00",
                border: "1.5px solid #A67C00",
                borderRadius: "100px",
                padding: "0 20px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Discard Changes
            </button>

            <button
              style={{
                height: "40px",
                backgroundColor: "#FEF5D4",
                color: "#A67C00",
                border: "1.5px solid #D4A017",
                borderRadius: "100px",
                padding: "0 20px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Save Draft
            </button>

            <button
              style={{
                height: "40px",
                backgroundColor: "#D4A017",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "100px",
                padding: "0 24px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Publish Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
