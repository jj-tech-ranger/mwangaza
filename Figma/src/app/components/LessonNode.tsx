import { Check, Play, Lock, Star, Trophy } from "lucide-react";
import { motion } from "motion/react";

interface LessonNodeProps {
  variant: "completed" | "active" | "upcoming" | "locked" | "milestone";
  label: string;
  number?: number;
}

export default function LessonNode({ variant, label, number }: LessonNodeProps) {
  const sizes = {
    completed: 56,
    active: 64,
    upcoming: 56,
    locked: 56,
    milestone: 80,
  };

  const size = sizes[variant];

  const renderIcon = () => {
    switch (variant) {
      case "completed":
        return <Check size={24} color="#FFFFFF" strokeWidth={3} />;
      case "active":
        return <Play size={28} color="#FFFFFF" fill="#FFFFFF" />;
      case "upcoming":
        return (
          <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "18px", fontWeight: 700, color: "#A67C00" }}>
            {number}
          </span>
        );
      case "locked":
        return <Lock size={22} color="#C8A84B" opacity={0.5} />;
      case "milestone":
        return <Star size={32} color="#D4A017" fill="#D4A017" />;
    }
  };

  const getNodeStyle = () => {
    switch (variant) {
      case "completed":
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#D4A017",
          border: "none",
        };
      case "active":
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#D4A017",
          border: "none",
          boxShadow: "0 0 0 12px rgba(212, 160, 23, 0.2)",
        };
      case "upcoming":
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#FEF5D4",
          border: "2px solid rgba(212, 160, 23, 0.4)",
        };
      case "locked":
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#F5E9BE",
          border: "none",
        };
      case "milestone":
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "#FFFDF5",
          border: "3px solid #D4A017",
        };
    }
  };

  const getLabelStyle = () => {
    switch (variant) {
      case "completed":
        return { fontSize: "11px", fontWeight: 400, color: "#A67C00" };
      case "active":
        return { fontSize: "12px", fontWeight: 700, color: "#2D2006" };
      case "upcoming":
        return { fontSize: "11px", fontWeight: 400, color: "#C8A84B" };
      case "locked":
        return { fontSize: "11px", fontWeight: 400, color: "#C8A84B", opacity: 0.5 };
      case "milestone":
        return { fontSize: "12px", fontWeight: 700, color: "#A67C00" };
    }
  };

  const NodeWrapper = variant === "active" ? motion.div : "div";
  const animationProps =
    variant === "active"
      ? {
          animate: { scale: [1, 1.05, 1] },
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }
      : {};

  return (
    <div className="flex flex-col items-center gap-2">
      <NodeWrapper
        {...animationProps}
        style={{
          ...getNodeStyle(),
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: variant === "active" ? "pointer" : "default",
        }}
      >
        {renderIcon()}
      </NodeWrapper>

      <div className="flex flex-col items-center gap-0.5">
        <span
          style={{
            ...getLabelStyle(),
            fontFamily: "Nunito, sans-serif",
            textAlign: "center",
            maxWidth: "80px",
          }}
        >
          {label}
        </span>
        {variant === "active" && (
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              color: "#D4A017",
            }}
          >
            START →
          </span>
        )}
      </div>
    </div>
  );
}
