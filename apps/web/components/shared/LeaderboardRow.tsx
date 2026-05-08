interface LeaderboardRowProps {
  rank: number;
  name: string;
  level?: string;
  xp: number;
  avatar: string;
  variant: "regular" | "self";
}

export default function LeaderboardRow({ rank, name, level, xp, avatar, variant }: LeaderboardRowProps) {
  const isSelf = variant === "self";

  return (
    <div
      className="flex items-center gap-3"
      style={{
        backgroundColor: isSelf ? "#FEF5D4" : "#FFFFFF",
        border: isSelf ? "1px solid rgba(212, 160, 23, 0.2)" : "1px solid rgba(212, 160, 23, 0.12)",
        borderRadius: "16px",
        height: "64px",
        padding: "0 16px",
      }}
    >
      {/* Rank */}
      <span
        style={{
          width: "28px",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 900,
          fontSize: "14px",
          color: "#A67C00",
        }}
      >
        #{rank}
      </span>

      {/* Avatar */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "2px solid #D4A017",
          backgroundColor: "#FEF5D4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 900,
          fontSize: "13px",
          color: "#A67C00",
          flexShrink: 0,
        }}
      >
        {avatar}
      </div>

      {/* Name and level */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "14px",
              color: "#2D2006",
            }}
          >
            {name}
          </span>
          {level && (
            <div
              style={{
                backgroundColor: "#FEF5D4",
                color: "#A67C00",
                border: "1px solid #D4A017",
                borderRadius: "100px",
                padding: "2px 8px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "10px",
                fontWeight: 700,
              }}
            >
              {level}
            </div>
          )}
        </div>
      </div>

      {/* XP */}
      <span
        style={{
          fontFamily: "Nunito, sans-serif",
          fontWeight: 700,
          fontSize: "14px",
          color: "#D4A017",
          marginRight: "12px",
        }}
      >
        {xp} XP
      </span>

      {/* Hi-5 button */}
      <button
        style={{
          backgroundColor: "transparent",
          color: "#A67C00",
          border: "1.5px solid #A67C00",
          borderRadius: "100px",
          padding: "6px 12px",
          height: "30px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        👋 Hi-5
      </button>
    </div>
  );
}
