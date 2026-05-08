import { Lock } from "lucide-react";

interface BadgeCardProps {
  emoji: string;
  name: string;
  variant: "earned" | "locked";
}

export default function BadgeCard({ emoji, name, variant }: BadgeCardProps) {
  const isLocked = variant === "locked";

  return (
    <div
      style={{
        width: "80px",
        height: "96px",
        backgroundColor: "#FFFFFF",
        border: isLocked ? "1px solid rgba(212, 160, 23, 0.15)" : "2px solid #D4A017",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        opacity: isLocked ? 0.4 : 1,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#FEF5D4",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          position: "relative",
        }}
      >
        {emoji}
        {/* Lock overlay for locked badges */}
        {isLocked && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lock size={16} color="#FFFFFF" />
          </div>
        )}
      </div>

      {/* Badge name */}
      <span
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          color: "#A67C00",
          textAlign: "center",
          paddingInline: "4px",
        }}
      >
        {name}
      </span>
    </div>
  );
}
