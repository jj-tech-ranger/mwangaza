import { Home, BookOpen, Trophy, User, Crown } from "lucide-react";

interface BottomNavProps {
  activeTab: "home" | "learn" | "leaderboard" | "profile" | "premium";
  onNavigate?: (screen: string) => void;
}

export default function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  const tabs = [
    { id: "home" as const, icon: Home, label: "Home", screen: "home" },
    { id: "learn" as const, icon: BookOpen, label: "Learn", screen: "catalog" },
    { id: "leaderboard" as const, icon: Trophy, label: "Board", screen: "leaderboard" },
    { id: "profile" as const, icon: User, label: "Me", screen: "profile" },
    { id: "premium" as const, icon: Crown, label: "★ Pro", screen: "premium" },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        height: "72px",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(212, 160, 23, 0.2)",
      }}
    >
      <div className="flex items-center justify-around h-full" style={{ maxWidth: "390px", margin: "0 auto" }}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate?.(tab.screen)}
              className="flex flex-col items-center justify-center gap-1 relative"
              style={{
                flex: 1,
                height: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {/* Active indicator dot */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#D4A017",
                  }}
                />
              )}

              {/* Icon */}
              <Icon
                size={24}
                color={isActive ? "#D4A017" : "#A67C00"}
                fill={isActive ? "#D4A017" : "none"}
                opacity={isActive ? 1 : 0.5}
                strokeWidth={2}
              />

              {/* Label */}
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#A67C00",
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
