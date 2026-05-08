import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import Confetti from "./Confetti";
import StarRating from "./StarRating";
import XPCard from "./XPCard";
import StreakBanner from "./StreakBanner";
import AchievementToast from "./AchievementToast";
import logoSvg from "../../imports/mwangaza_logo_final.svg";

interface LessonResultsProps {
  onNavigate?: (screen: string) => void;
}

export default function LessonResults({ onNavigate }: LessonResultsProps = {}) {
  const [showAchievement, setShowAchievement] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAchievement(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="relative flex flex-col items-center"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
        paddingBottom: "40px",
      }}
    >
      {/* Achievement Toast */}
      {showAchievement && (
        <AchievementToast
          type="badge"
          title="Badge Earned!"
          description="Addition Master - Complete 5 addition lessons"
          emoji="➕"
          onClose={() => setShowAchievement(false)}
        />
      )}

      {/* Confetti background */}
      <Confetti />

      {/* Mwangaza Logo */}
      <div style={{ marginTop: "64px", zIndex: 1 }}>
        <img src={logoSvg} alt="Mwangaza" style={{ height: "36px", width: "auto" }} />
      </div>

      {/* Celebration Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1] }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          marginTop: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "108px",
            height: "108px",
            border: "3px solid #D4A017",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFDF5",
          }}
        >
          <Trophy size={60} color="#D4A017" fill="#D4A017" />
        </div>

        {/* Pulse animation */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "108px",
            height: "108px",
            border: "3px solid #D4A017",
            borderRadius: "50%",
            opacity: 0.3,
          }}
        />
      </motion.div>

      {/* Headline */}
      <h1
        style={{
          marginTop: "24px",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 900,
          fontSize: "30px",
          color: "#2D2006",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        Excellent, Amina! 🌟
      </h1>

      {/* Score */}
      <p
        style={{
          marginTop: "12px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "16px",
          color: "#7A6020",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        You scored 4 out of 5
      </p>

      {/* Star Rating */}
      <div style={{ marginTop: "20px", zIndex: 1 }}>
        <StarRating filled={4} total={5} />
      </div>

      {/* XP Card */}
      <div className="mx-8" style={{ marginTop: "28px", width: "calc(100% - 64px)", zIndex: 1 }}>
        <XPCard earnedXP={15} baseXP={10} bonusXP={5} totalXP={355} level="Msomi" />
      </div>

      {/* Streak Banner */}
      <div className="mx-8" style={{ marginTop: "20px", width: "calc(100% - 64px)", zIndex: 1 }}>
        <StreakBanner days={6} message="Day 6 streak! Keep going tomorrow to reach Day 7." />
      </div>

      {/* CTA Buttons */}
      <div className="mx-5 flex flex-col gap-3" style={{ marginTop: "28px", width: "calc(100% - 40px)", zIndex: 1 }}>
        <button
          onClick={() => onNavigate?.("home")}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Continue to Home →
        </button>

        <button
          onClick={() => onNavigate?.("quiz")}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#FEF5D4",
            color: "#A67C00",
            border: "1.5px solid #D4A017",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#FDF0C2"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#FEF5D4"}
        >
          Review Answers
        </button>
      </div>
    </div>
  );
}
