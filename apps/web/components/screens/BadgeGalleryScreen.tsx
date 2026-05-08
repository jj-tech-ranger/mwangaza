import { ArrowLeft, Lock } from "lucide-react";
import { useState } from "react";
const logoSvg = "/imports/mwangaza_logo_final.svg";
import { motion } from "motion/react";

interface BadgeGalleryScreenProps {
  onNavigate?: (screen: string) => void;
}

interface Badge {
  id: string;
  emoji: string;
  name: string;
  description: string;
  earned: boolean;
  earnedDate?: string;
  requirement: string;
}

export default function BadgeGalleryScreen({ onNavigate }: BadgeGalleryScreenProps = {}) {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const badges: Badge[] = [
    {
      id: "1",
      emoji: "🔢",
      name: "Counting Master",
      description: "Mastered counting from 1 to 100",
      earned: true,
      earnedDate: "May 3, 2026",
      requirement: "Complete all counting lessons",
    },
    {
      id: "2",
      emoji: "➕",
      name: "Addition Master",
      description: "Expert at addition problems",
      earned: true,
      earnedDate: "May 7, 2026",
      requirement: "Complete 5 addition lessons",
    },
    {
      id: "3",
      emoji: "💯",
      name: "Perfect Score",
      description: "Scored 100% on a quiz",
      earned: true,
      earnedDate: "May 6, 2026",
      requirement: "Get all questions correct in any quiz",
    },
    {
      id: "4",
      emoji: "🔥",
      name: "5-Day Streak",
      description: "Learned 5 days in a row",
      earned: true,
      earnedDate: "May 8, 2026",
      requirement: "Learn every day for 5 consecutive days",
    },
    {
      id: "5",
      emoji: "➖",
      name: "Subtraction Pro",
      description: "Master of subtraction",
      earned: false,
      requirement: "Complete all subtraction lessons",
    },
    {
      id: "6",
      emoji: "✖️",
      name: "Multiplication Wizard",
      description: "Multiplication expert",
      earned: false,
      requirement: "Complete all multiplication lessons",
    },
    {
      id: "7",
      emoji: "➗",
      name: "Division Champion",
      description: "Division skills unlocked",
      earned: false,
      requirement: "Complete all division lessons",
    },
    {
      id: "8",
      emoji: "🏆",
      name: "Course Complete",
      description: "Finished an entire course",
      earned: false,
      requirement: "Complete all modules in Basic Math",
    },
    {
      id: "9",
      emoji: "⚡",
      name: "Speed Learner",
      description: "Completed 10 lessons in one day",
      earned: false,
      requirement: "Complete 10 lessons in 24 hours",
    },
    {
      id: "10",
      emoji: "🎯",
      name: "Goal Crusher",
      description: "Met daily goal 30 days straight",
      earned: false,
      requirement: "Reach your daily learning goal for 30 consecutive days",
    },
    {
      id: "11",
      emoji: "📚",
      name: "Bookworm",
      description: "Read 50 lesson explanations",
      earned: false,
      requirement: "Complete 50 lesson views",
    },
    {
      id: "12",
      emoji: "🌟",
      name: "Rising Star",
      description: "Reached 1000 XP",
      earned: false,
      requirement: "Earn 1000 total XP",
    },
  ];

  const earnedCount = badges.filter(b => b.earned).length;

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
      }}
    >
      {/* Top Bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-5"
        style={{
          height: "60px",
          marginTop: "44px",
          backgroundColor: "#FFFDF5",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <button
          onClick={() => onNavigate?.("profile")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            color: "#A67C00",
          }}
        >
          <ArrowLeft size={16} />
          Profile
        </button>

        <img src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" style={{ height: "32px", width: "auto" }} />

        <div style={{ width: "60px" }} /> {/* Spacer */}
      </div>

      {/* Header */}
      <div className="mx-5" style={{ marginTop: "20px" }}>
        <h1
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "26px",
            color: "#2D2006",
          }}
        >
          Badge Gallery
        </h1>
        <p
          style={{
            marginTop: "4px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            color: "#A67C00",
          }}
        >
          {earnedCount} of {badges.length} badges earned
        </p>

        {/* Progress Bar */}
        <div style={{ marginTop: "12px" }}>
          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "#FEF5D4",
              borderRadius: "100px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(earnedCount / badges.length) * 100}%`,
                height: "100%",
                backgroundColor: "#D4A017",
                borderRadius: "100px",
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div
        className="mx-5"
        style={{
          marginTop: "24px",
          paddingBottom: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
        }}
      >
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedBadge(badge)}
            style={{
              backgroundColor: badge.earned ? "#FEF5D4" : "#FFFFFF",
              border: badge.earned ? "2px solid #D4A017" : "1.5px solid rgba(212, 160, 23, 0.2)",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
              transition: "all 0.2s",
            }}
          >
            {/* Badge Icon */}
            <div
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: badge.earned ? "#FFFFFF" : "#FEF5D4",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                marginBottom: "8px",
                filter: badge.earned ? "none" : "grayscale(100%)",
                opacity: badge.earned ? 1 : 0.5,
              }}
            >
              {badge.earned ? badge.emoji : <Lock size={24} color="#A67C00" />}
            </div>

            {/* Badge Name */}
            <h3
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                color: badge.earned ? "#2D2006" : "#7A6020",
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              {badge.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div
          onClick={() => setSelectedBadge(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(45, 32, 6, 0.6)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#FFFDF5",
              borderRadius: "24px",
              padding: "32px",
              maxWidth: "310px",
              width: "100%",
              textAlign: "center",
            }}
          >
            {/* Badge Icon */}
            <motion.div
              animate={selectedBadge.earned ? {
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0],
              } : {}}
              transition={{
                duration: 0.6,
              }}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: selectedBadge.earned ? "#FEF5D4" : "#FFFFFF",
                border: selectedBadge.earned ? "3px solid #D4A017" : "2px solid rgba(212, 160, 23, 0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                margin: "0 auto",
                filter: selectedBadge.earned ? "none" : "grayscale(100%)",
                opacity: selectedBadge.earned ? 1 : 0.5,
              }}
            >
              {selectedBadge.earned ? selectedBadge.emoji : <Lock size={36} color="#A67C00" />}
            </motion.div>

            {/* Badge Name */}
            <h2
              style={{
                marginTop: "20px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "22px",
                color: "#2D2006",
              }}
            >
              {selectedBadge.name}
            </h2>

            {/* Description */}
            <p
              style={{
                marginTop: "8px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
                lineHeight: 1.5,
              }}
            >
              {selectedBadge.description}
            </p>

            {/* Requirement or Earned Date */}
            <div
              style={{
                marginTop: "16px",
                backgroundColor: selectedBadge.earned ? "#FEF5D4" : "#FFFFFF",
                border: "1px solid rgba(212, 160, 23, 0.2)",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
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
                {selectedBadge.earned ? "Earned" : "How to Earn"}
              </p>
              <p
                style={{
                  marginTop: "4px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#2D2006",
                }}
              >
                {selectedBadge.earned ? selectedBadge.earnedDate : selectedBadge.requirement}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedBadge(null)}
              style={{
                marginTop: "20px",
                width: "100%",
                height: "44px",
                backgroundColor: "#D4A017",
                color: "#FFFFFF",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
