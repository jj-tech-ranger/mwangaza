interface StreakBannerProps {
  days: number;
  message: string;
}

export default function StreakBanner({ days, message }: StreakBannerProps) {
  return (
    <div
      style={{
        backgroundColor: "#FEF5D4",
        borderRadius: "16px",
        padding: "14px 18px",
      }}
    >
      <p
        style={{
          fontFamily: "Nunito, sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          color: "#A67C00",
          lineHeight: 1.5,
        }}
      >
        🔥 {message}
      </p>
    </div>
  );
}
