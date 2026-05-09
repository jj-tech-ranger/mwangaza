import { useState } from "react";
import Image from "next/image";
import BottomNav from "@/components/shared/BottomNav";
import Podium from "@/components/shared/Podium";

interface LeaderboardScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function LeaderboardScreen({ onNavigate }: LeaderboardScreenProps = {}) {
  const [activeTab, setActiveTab] = useState<"week" | "alltime" | "friends">("week");

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
        <Image src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" width={32} height={32} />

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
          />
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

      {/* Top 3 Podium */}
      <div className="mx-5" style={{ marginTop: "24px" }}>
        <Podium />
      </div>

      {/* Leaderboard List */}
      <div className="mx-5" style={{ marginTop: "24px", paddingBottom: "20px", height: "120px" }} />

      {/* Bottom Navigation */}
      <BottomNav activeTab="leaderboard" onNavigate={onNavigate} />
    </div>
  );
}
