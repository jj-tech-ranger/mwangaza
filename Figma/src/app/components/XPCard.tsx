import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface XPCardProps {
  earnedXP: number;
  baseXP: number;
  bonusXP: number;
  totalXP: number;
  level: string;
}

export default function XPCard({ earnedXP, baseXP, bonusXP, totalXP, level }: XPCardProps) {
  const [displayXP, setDisplayXP] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = earnedXP / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= earnedXP) {
        setDisplayXP(earnedXP);
        clearInterval(timer);
      } else {
        setDisplayXP(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [earnedXP]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(212, 160, 23, 0.2)",
        borderRadius: "24px",
        boxShadow: "0 8px 28px rgba(212, 160, 23, 0.12)",
        padding: "24px",
      }}
    >
      {/* Top label */}
      <p
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          color: "#A67C00",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          textAlign: "center",
        }}
      >
        XP EARNED
      </p>

      {/* Large XP number */}
      <h2
        style={{
          marginTop: "12px",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 900,
          fontSize: "52px",
          color: "#D4A017",
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        +{displayXP} XP
      </h2>

      {/* Breakdown */}
      <p
        style={{
          marginTop: "12px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "12px",
          color: "#7A6020",
          textAlign: "center",
        }}
      >
        {baseXP} base · +{bonusXP} bonus (80%+ score)
      </p>

      {/* Divider */}
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          height: "1px",
          backgroundColor: "rgba(212, 160, 23, 0.15)",
        }}
      />

      {/* New total */}
      <p
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          color: "#A67C00",
          textAlign: "center",
        }}
      >
        Total: {totalXP} XP · Level: {level} ⭐
      </p>
    </motion.div>
  );
}
