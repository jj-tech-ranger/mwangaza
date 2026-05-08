interface StreakCalendarProps {
  streakDays: number;
}

export default function StreakCalendar({ streakDays }: StreakCalendarProps) {
  // Generate last 7 days
  const today = new Date();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const dayNumber = date.getDate();
    const isActive = i < streakDays; // Last streakDays are active
    const isToday = i === 0;

    days.push({
      dayName,
      dayNumber,
      isActive,
      isToday,
    });
  }

  return (
    <div
      style={{
        backgroundColor: "#FEF5D4",
        borderRadius: "20px",
        padding: "20px",
        border: "1px solid rgba(212, 160, 23, 0.2)",
      }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: "16px" }}>
        <h3
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "16px",
            color: "#2D2006",
          }}
        >
          Your Streak 🔥
        </h3>
        <div
          style={{
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            padding: "6px 12px",
            borderRadius: "100px",
          }}
        >
          {streakDays} days
        </div>
      </div>

      <div className="flex items-center justify-between">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            style={{ flex: 1 }}
          >
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                color: "#A67C00",
                marginBottom: "6px",
              }}
            >
              {day.dayName}
            </span>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: day.isActive ? "#D4A017" : "#FFFFFF",
                border: day.isToday ? "2px solid #A67C00" : day.isActive ? "none" : "1.5px solid rgba(212, 160, 23, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: day.isActive ? "#FFFFFF" : "#A67C00",
              }}
            >
              {day.isActive ? "✓" : day.dayNumber}
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "12px",
          color: "#7A6020",
          textAlign: "center",
          marginTop: "16px",
        }}
      >
        Keep learning every day to maintain your streak!
      </p>
    </div>
  );
}
