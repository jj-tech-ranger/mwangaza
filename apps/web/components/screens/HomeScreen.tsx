import { Bell } from "lucide-react";
import BottomNav from "@/components/shared/BottomNav";
import LessonNode from "@/components/shared/LessonNode";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface HomeScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps = {}) {
  const lessons = [
    { variant: "completed" as const, label: "Counting 1-10", number: 1, screen: "lesson" },
    { variant: "completed" as const, label: "Basic Addition", number: 2, screen: "lesson" },
    { variant: "active" as const, label: "Adding Two-Digit Numbers", number: 3, screen: "lesson" },
    { variant: "upcoming" as const, label: "Subtraction Basics", number: 4, screen: "lesson" },
    { variant: "upcoming" as const, label: "Borrowing in Subtraction", number: 5, screen: "lesson" },
    { variant: "milestone" as const, label: "Module 1 Complete", number: 0, screen: "results" },
    { variant: "locked" as const, label: "Multiplication Intro", number: 6, screen: "lesson" },
    { variant: "locked" as const, label: "Times Tables", number: 7, screen: "lesson" },
  ];

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
          {/* Notification Bell */}
          <button
            onClick={() => onNavigate?.("notifications")}
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={22} color="#A67C00" />
            {/* Notification Badge */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                width: "8px",
                height: "8px",
                backgroundColor: "#EF4444",
                borderRadius: "50%",
                border: "1.5px solid #FFFDF5",
              }}
            />
          </button>
          {/* User Avatar */}
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

          {/* XP Pill */}
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

      {/* Greeting Banner */}
      <div
        className="mx-5 flex items-center justify-between"
        style={{
          marginTop: "12px",
          backgroundColor: "#FEF5D4",
          borderRadius: "20px",
          padding: "16px 20px",
        }}
      >
        <div className="flex flex-col gap-1">
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "20px",
              color: "#2D2006",
            }}
          >
            Good morning, Amina 👋
          </h2>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              color: "#A67C00",
            }}
          >
            You're on a 5-day streak! 🔥
          </p>
        </div>

        {/* Daily Goal Ring */}
        <div className="relative flex items-center justify-center">
          <svg width="56" height="56" viewBox="0 0 56 56">
            {/* Background track */}
            <circle cx="28" cy="28" r="24" fill="none" stroke="#FDF0C2" strokeWidth="6" />
            {/* Progress arc (60% fill) */}
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="#D4A017"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${0.6 * 2 * Math.PI * 24} ${2 * Math.PI * 24}`}
              transform="rotate(-90 28 28)"
            />
          </svg>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#A67C00" }}>3/5</span>
            <span style={{ fontSize: "9px", color: "#C8930A" }}>today</span>
          </div>
        </div>
      </div>

      {/* Daily Challenge Card */}
      <div
        className="mx-5"
        style={{
          marginTop: "16px",
          backgroundColor: "#D4A017",
          borderRadius: "20px",
          padding: "16px 20px",
          cursor: "pointer",
        }}
        onClick={() => onNavigate?.("quiz")}
      >
        <div className="flex items-center justify-between">
          <div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "3px 8px",
                borderRadius: "100px",
                marginBottom: "8px",
              }}
            >
              ⚡ DAILY CHALLENGE
            </div>
            <h3
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              5 Quick Math Questions
            </h3>
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.85)",
                marginTop: "4px",
              }}
            >
              +50 bonus XP • Expires in 18h
            </p>
          </div>
          <div
            style={{
              fontSize: "36px",
            }}
          >
            🎯
          </div>
        </div>
      </div>

      {/* Section Label with Progress */}
      <div className="mx-5 flex items-center justify-between" style={{ marginTop: "20px" }}>
        <div>
          <h3
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "18px",
              color: "#2D2006",
            }}
          >
            Module 1: Basic Math
          </h3>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "12px",
              color: "#A67C00",
              marginTop: "2px",
            }}
          >
            3 of 8 lessons complete • 38% done
          </p>
        </div>
        <button
          onClick={() => onNavigate?.("catalog")}
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#D4A017",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          All Courses →
        </button>
      </div>

      {/* Learning Path */}
      <div className="flex flex-col items-center" style={{ marginTop: "24px", paddingBottom: "20px" }}>
        {lessons.map((lesson, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Lesson Node */}
            <div
              style={{ cursor: lesson.variant === "locked" ? "not-allowed" : "pointer" }}
              onClick={() => lesson.variant !== "locked" && onNavigate?.(lesson.screen)}
            >
              <LessonNode variant={lesson.variant} label={lesson.label} number={lesson.number} />
            </div>

            {/* Connecting Line */}
            {index < lessons.length - 1 && (
              <div
                style={{
                  width: "3px",
                  height: "60px",
                  backgroundColor: "#D4A017",
                  opacity: 0.3,
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Next Lesson Preview */}
      <div className="mx-5" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div
          style={{
            backgroundColor: "#FEF5D4",
            border: "1.5px solid #D4A017",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <div className="flex items-center justify-between">
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#A67C00",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                UP NEXT
              </p>
              <h4
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "16px",
                  color: "#2D2006",
                  marginTop: "6px",
                }}
              >
                {lessons.find(l => l.variant === "active")?.label || "Adding Two-Digit Numbers"}
              </h4>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  color: "#7A6020",
                  marginTop: "4px",
                }}
              >
                Learn step-by-step addition • 10 min • +10 XP
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const activeLesson = lessons.find(l => l.variant === "active");
                if (activeLesson) onNavigate?.(activeLesson.screen);
              }}
              style={{
                backgroundColor: "#D4A017",
                color: "#FFFFFF",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                marginLeft: "12px",
              }}
            >
              Start →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="home" onNavigate={onNavigate} />
    </div>
  );
}
