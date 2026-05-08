import { motion } from "motion/react";
import { Trophy, Award, Star, Zap } from "lucide-react";

interface AchievementToastProps {
  type: "badge" | "streak" | "level" | "xp";
  title: string;
  description: string;
  emoji?: string;
  onClose?: () => void;
}

export default function AchievementToast({ type, title, description, emoji, onClose }: AchievementToastProps) {
  const icons = {
    badge: <Trophy size={24} color="#D4A017" fill="#D4A017" />,
    streak: <span style={{ fontSize: "24px" }}>🔥</span>,
    level: <Star size={24} color="#D4A017" fill="#D4A017" />,
    xp: <Zap size={24} color="#D4A017" fill="#D4A017" />,
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        position: "fixed",
        top: "60px",
        left: "20px",
        right: "20px",
        maxWidth: "350px",
        margin: "0 auto",
        zIndex: 1000,
        backgroundColor: "#FFFDF5",
        border: "2px solid #D4A017",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(212, 160, 23, 0.3)",
        padding: "16px 20px",
      }}
      onClick={onClose}
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#FEF5D4",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {emoji ? <span style={{ fontSize: "24px" }}>{emoji}</span> : icons[type]}
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "15px",
              color: "#2D2006",
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              color: "#7A6020",
              marginTop: "2px",
            }}
          >
            {description}
          </p>
        </div>

        {/* Confetti animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{ fontSize: "20px" }}
        >
          ✨
        </motion.div>
      </div>
    </motion.div>
  );
}
