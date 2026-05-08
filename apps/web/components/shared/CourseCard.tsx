interface CourseCardProps {
  variant: "enrolled" | "available" | "comingSoon";
  emoji: string;
  title: string;
  modules?: number;
  lessons?: number;
  comingSoonText?: string;
  progress?: number;
  currentModule?: string;
}

export default function CourseCard({
  variant,
  emoji,
  title,
  modules,
  lessons,
  comingSoonText,
  progress = 0,
  currentModule,
}: CourseCardProps) {
  if (variant === "enrolled") {
    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(212, 160, 23, 0.15)",
          borderRadius: "20px",
          padding: "16px",
          boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
        }}
      >
        {/* Icon circle with progress ring */}
        <div className="relative flex items-center justify-center" style={{ width: "48px", height: "48px" }}>
          <svg width="48" height="48" viewBox="0 0 48 48">
            {/* Background track */}
            <circle cx="24" cy="24" r="20" fill="none" stroke="#FEF5D4" strokeWidth="4" />
            {/* Progress arc */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#D4A017"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${(progress / 100) * 2 * Math.PI * 20} ${2 * Math.PI * 20}`}
              transform="rotate(-90 24 24)"
            />
          </svg>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ fontSize: "20px" }}
          >
            {emoji}
          </div>
        </div>

        {/* Course name */}
        <h3
          style={{
            marginTop: "12px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "15px",
            color: "#2D2006",
          }}
        >
          {title}
        </h3>

        {/* Meta info */}
        <p
          style={{
            marginTop: "4px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            color: "#7A6020",
          }}
        >
          {modules} Modules · {lessons} Lessons
        </p>

        {/* Progress info */}
        {currentModule && (
          <div
            style={{
              marginTop: "8px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              color: "#A67C00",
            }}
          >
            {progress}% · {currentModule}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(212, 160, 23, 0.15)",
        borderRadius: "20px",
        padding: "16px",
        boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: "#FEF5D4",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
        }}
      >
        {emoji}
      </div>

      {/* Course name */}
      <h3
        style={{
          marginTop: "12px",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 900,
          fontSize: "15px",
          color: "#2D2006",
        }}
      >
        {title}
      </h3>

      {/* Meta info */}
      <p
        style={{
          marginTop: "4px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "11px",
          color: "#7A6020",
        }}
      >
        {modules} Modules · {lessons} Lessons
      </p>

      {/* Status pill */}
      <div style={{ marginTop: "12px" }}>
        {variant === "comingSoon" ? (
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#FEF5D4",
              color: "#C8930A",
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              padding: "6px 12px",
              borderRadius: "100px",
            }}
          >
            {comingSoonText}
          </div>
        ) : (
          <button
            style={{
              backgroundColor: "#D4A017",
              color: "#FFFFFF",
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Enroll
          </button>
        )}
      </div>
    </div>
  );
}
