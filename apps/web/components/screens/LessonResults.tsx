import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Confetti from "@/components/shared/Confetti";
import StarRating from "@/components/shared/StarRating";
import XPCard from "@/components/shared/XPCard";
import StreakBanner from "@/components/shared/StreakBanner";
import AchievementToast from "@/components/shared/AchievementToast";

interface LessonResultsProps {
  onNavigate?: (screen: string) => void;
}

export default function LessonResults({ onNavigate }: LessonResultsProps = {}) {
  let result: null | {
    headline: string;
    scoreText: string;
    stars: number;
    totalStars: number;
    earnedXp: number;
    baseXp: number;
    bonusXp: number;
    totalXp: number;
    level: string;
    streakDays: number;
    streakMessage: string;
  } = null;
  const hasResult = Boolean(result);
  const [showAchievement, setShowAchievement] = useState(false);

  useEffect(() => {
    if (!hasResult) {
      return;
    }

    const timer = setTimeout(() => setShowAchievement(false), 4000);
    return () => clearTimeout(timer);
  }, [hasResult]);

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
          description=""
          emoji=""
          onClose={() => setShowAchievement(false)}
        />
      )}

      {/* Confetti background */}
      {hasResult && <Confetti />}

      {/* Mwangaza Logo */}
      <div style={{ marginTop: "64px", zIndex: 1 }}>
        <Image src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" width={36} height={36} />
      </div>

      {/* Celebration Icon */}
      {hasResult && (
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
      )}

      {/* Headline */}
      {hasResult && (
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
          {result?.headline}
        </h1>
      )}

      {/* Score */}
      {hasResult && (
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
          {result?.scoreText}
        </p>
      )}

      {/* Star Rating */}
      {hasResult && (
        <div style={{ marginTop: "20px", zIndex: 1 }}>
          <StarRating filled={result?.stars ?? 0} total={result?.totalStars ?? 0} />
        </div>
      )}

      {/* XP Card */}
      {hasResult && (
        <div className="mx-8" style={{ marginTop: "28px", width: "calc(100% - 64px)", zIndex: 1 }}>
          <XPCard
            earnedXP={result?.earnedXp ?? 0}
            baseXP={result?.baseXp ?? 0}
            bonusXP={result?.bonusXp ?? 0}
            totalXP={result?.totalXp ?? 0}
            level={result?.level ?? ""}
          />
        </div>
      )}

      {/* Streak Banner */}
      {hasResult && (
        <div className="mx-8" style={{ marginTop: "20px", width: "calc(100% - 64px)", zIndex: 1 }}>
          <StreakBanner days={result?.streakDays ?? 0} message={result?.streakMessage ?? ""} />
        </div>
      )}

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
