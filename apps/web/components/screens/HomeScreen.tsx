import { Bell } from "lucide-react";
import BottomNav from "@/components/shared/BottomNav";
import LessonNode from "@/components/shared/LessonNode";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface HomeScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps = {}) {
  const lessons = [];
  const hasLessons = false;

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
            Welcome back 👋
          </h2>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              color: "#A67C00",
            }}
          >
            Ready to learn today?
          </p>
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
              Complete a course to unlock lessons
            </h3>
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.85)",
                marginTop: "4px",
              }}
            >
              Ready when you are
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

      {/* Empty State */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          marginTop: "40px",
          paddingBottom: "20px",
          flex: 1,
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "20px", opacity: 0.5 }}>📚</div>
        <h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "20px",
            color: "#2D2006",
            textAlign: "center",
          }}
        >
          No Courses Yet
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
          Explore our course catalog to get started on your learning journey.
        </p>
        <button
          onClick={() => onNavigate?.("learn")}
          style={{
            marginTop: "24px",
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            padding: "12px 24px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Browse Courses →
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="home" onNavigate={onNavigate} />
    </div>
  );
}
