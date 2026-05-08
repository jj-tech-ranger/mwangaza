import { Settings } from "lucide-react";
import BottomNav from "@/components/shared/BottomNav";
import ProfileHero from "@/components/shared/ProfileHero";
import StatBar from "@/components/shared/StatBar";
import BadgeCard from "@/components/shared/BadgeCard";
import CertificateCard from "@/components/shared/CertificateCard";
import StreakCalendar from "@/components/shared/StreakCalendar";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface ProfileScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps = {}) {
  const stats = [
    { value: 14, label: "Lessons" },
    { value: 1, label: "Courses" },
    { value: 3, label: "Badges" },
  ];

  const badges = [];
  const hasBadges = false;

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

        <button
          onClick={() => onNavigate?.("settings")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Settings size={24} color="#A67C00" />
        </button>
      </div>

      {/* Profile Hero */}
      <div className="mx-5" style={{ marginTop: "0px" }}>
        <ProfileHero
          initials="AW"
          name="Amina Wanjiku"
          level="⭐ Msomi"
          levelTitle="— Scholar"
          memberSince="Member since May 2026"
          currentXP={250}
          nextLevelXP={500}
          currentLevel="Msomi"
          nextLevel="Hodari"
        />
      </div>

      {/* Stats Row */}
      <div className="mx-5" style={{ marginTop: "12px" }}>
        <StatBar stats={stats} />
      </div>

      {/* Streak Calendar */}
      <div className="mx-5" style={{ marginTop: "20px" }}>
        <StreakCalendar streakDays={5} />
      </div>

      {/* Badges Section */}
      <div className="mx-5" style={{ marginTop: "20px" }}>
        {/* Section header */}
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "18px",
              color: "#2D2006",
            }}
          >
            Badges
          </h2>
          <button
            onClick={() => onNavigate?.("badgeGallery")}
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
            See all →
          </button>
        </div>

        {/* Badges scroll row */}
        <div
          className="flex gap-3 overflow-x-auto"
          style={{ marginTop: "12px", scrollbarWidth: "none" }}
        >
          {badges.map((badge, index) => (
            <BadgeCard key={index} emoji={badge.emoji} name={badge.name} variant={badge.variant} />
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mx-5" style={{ marginTop: "20px", paddingBottom: "20px" }}>
        {/* Section header */}
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "18px",
              color: "#2D2006",
            }}
          >
            Certificates
          </h2>
          <button
            onClick={() => onNavigate?.("certificateDetail")}
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
            See all →
          </button>
        </div>

        {/* Certificate card */}
        <div style={{ marginTop: "12px" }} onClick={() => onNavigate?.("certificateDetail")}>
          <CertificateCard
            title="Mathematics"
            issuedDate="May 2026"
            certificateNumber="MW-00142"
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}
