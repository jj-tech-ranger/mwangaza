import { useState } from "react";
import BottomNav from "@/components/shared/BottomNav";
import Podium from "@/components/shared/Podium";
import LeaderboardRow from "@/components/shared/LeaderboardRow";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface LeaderboardScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function LeaderboardScreen({ onNavigate }: LeaderboardScreenProps = {}) {
  const [activeTab, setActiveTab] = useState<"week" | "alltime" | "friends">("week");

  // Different data for each tab
  const leaderboardData = {
    week: [
      { rank: 4, name: "Samuel", level: "⭐ Msomi", xp: 742, avatar: "SK" },
      { rank: 5, name: "Aisha", level: "⭐ Msomi", xp: 689, avatar: "AM" },
      { rank: 6, name: "Kofi", level: "⚡ Bingwa", xp: 621, avatar: "KA" },
      { rank: 7, name: "Zara", level: "⚡ Bingwa", xp: 458, avatar: "ZM" },
      { rank: 8, name: "You — Amina", level: "⭐ Msomi", xp: 340, avatar: "AW", isSelf: true },
    ],
    alltime: [
      { rank: 2, name: "Kwame", level: "⚡⚡ Shujaa", xp: 4521, avatar: "KO" },
      { rank: 3, name: "Fatima", level: "⚡⚡ Shujaa", xp: 3890, avatar: "FM" },
      { rank: 4, name: "Kofi", level: "⚡ Bingwa", xp: 3102, avatar: "KA" },
      { rank: 5, name: "Samuel", level: "⚡ Bingwa", xp: 2745, avatar: "SK" },
      { rank: 12, name: "You — Amina", level: "⭐ Msomi", xp: 1240, avatar: "AW", isSelf: true },
    ],
    friends: [
      { rank: 1, name: "Juma", level: "⭐ Msomi", xp: 856, avatar: "JM" },
      { rank: 2, name: "Sarah", level: "⭐ Msomi", xp: 734, avatar: "SM" },
      { rank: 3, name: "You — Amina", level: "⭐ Msomi", xp: 340, avatar: "AW", isSelf: true },
      { rank: 4, name: "Kendi", level: "⭐ Msomi", xp: 289, avatar: "KN" },
      { rank: 5, name: "Ali", level: "⭐ Mwanafunzi", xp: 145, avatar: "AK" },
    ],
  };

  const leaderboardUsers = leaderboardData[activeTab];

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
          Leaderboard
        </h1>

        {/* Tab row */}
        <div className="flex items-center gap-6" style={{ marginTop: "8px" }}>
          {["This Week", "All Time", "Friends"].map((tab, index) => {
            const tabId = ["week", "alltime", "friends"][index] as "week" | "alltime" | "friends";
            const isActive = activeTab === tabId;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tabId)}
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? "#D4A017" : "#7A6020",
                  background: "none",
                  border: "none",
                  borderBottom: isActive ? "2px solid #D4A017" : "none",
                  paddingBottom: "4px",
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* User's Own Rank Card */}
      <div
        className="mx-5 flex items-center gap-3"
        style={{
          marginTop: "24px",
          backgroundColor: "#FEF5D4",
          border: "2px solid #D4A017",
          borderRadius: "20px",
          padding: "14px 18px",
        }}
      >
        {/* Rank */}
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "22px",
            color: "#D4A017",
          }}
        >
          #8
        </span>

        {/* Avatar */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid #D4A017",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "14px",
            color: "#A67C00",
          }}
        >
          AW
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "14px",
              color: "#2D2006",
            }}
          >
            You — Amina
          </h3>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              color: "#7A6020",
            }}
          >
            340 XP this week
          </p>
        </div>

        {/* Change indicator */}
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#22C55E",
          }}
        >
          ↑ 2 from last week
        </span>
      </div>

      {/* Top 3 Podium */}
      <div className="mx-5" style={{ marginTop: "24px" }}>
        <Podium />
      </div>

      {/* Leaderboard List */}
      <div className="mx-5 flex flex-col gap-2" style={{ marginTop: "24px", paddingBottom: "20px" }}>
        {leaderboardUsers.map((user) => (
          <LeaderboardRow
            key={user.rank}
            rank={user.rank}
            name={user.name}
            level={user.level}
            xp={user.xp}
            avatar={user.avatar}
            variant={user.isSelf ? "self" : "regular"}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="leaderboard" onNavigate={onNavigate} />
    </div>
  );
}
