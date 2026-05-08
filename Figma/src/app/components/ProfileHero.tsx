interface ProfileHeroProps {
  initials: string;
  name: string;
  level: string;
  levelTitle: string;
  memberSince: string;
  currentXP: number;
  nextLevelXP: number;
  currentLevel: string;
  nextLevel: string;
}

export default function ProfileHero({
  initials,
  name,
  level,
  levelTitle,
  memberSince,
  currentXP,
  nextLevelXP,
  currentLevel,
  nextLevel,
}: ProfileHeroProps) {
  const progress = (currentXP / nextLevelXP) * 100;
  const remainingXP = nextLevelXP - currentXP;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(212, 160, 23, 0.15)",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(212, 160, 23, 0.10)",
      }}
    >
      {/* Top row - Avatar and info */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            border: "3px solid #D4A017",
            backgroundColor: "#FEF5D4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "24px",
            color: "#A67C00",
            flexShrink: 0,
          }}
        >
          {initials}
        </div>

        {/* Info */}
        <div className="flex-1">
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "18px",
              color: "#2D2006",
            }}
          >
            {name}
          </h2>

          <div
            style={{
              marginTop: "6px",
              display: "inline-block",
              backgroundColor: "#FEF5D4",
              color: "#A67C00",
              border: "1px solid #D4A017",
              borderRadius: "100px",
              padding: "4px 12px",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
            }}
          >
            {level} {levelTitle}
          </div>

          <p
            style={{
              marginTop: "6px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              color: "#7A6020",
            }}
          >
            {memberSince}
          </p>
        </div>
      </div>

      {/* XP Progress */}
      <div style={{ marginTop: "16px" }}>
        {/* Label row */}
        <div className="flex items-center justify-between" style={{ marginBottom: "6px" }}>
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              color: "#A67C00",
            }}
          >
            {currentLevel}
          </span>
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              color: "#C8A84B",
            }}
          >
            {nextLevel}
          </span>
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "#FEF5D4",
            borderRadius: "100px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#D4A017",
              borderRadius: "100px",
            }}
          />
        </div>

        {/* Remaining XP */}
        <p
          style={{
            marginTop: "4px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            color: "#7A6020",
            textAlign: "right",
          }}
        >
          {remainingXP} XP to next level
        </p>
      </div>
    </div>
  );
}
