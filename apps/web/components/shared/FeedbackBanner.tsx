interface FeedbackBannerProps {
  variant: "correct" | "incorrect";
  message: string;
}

export default function FeedbackBanner({ variant, message }: FeedbackBannerProps) {
  const styles =
    variant === "correct"
      ? {
          bg: "#D4F7E7",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          textColor: "#166534",
          icon: "✓",
        }
      : {
          bg: "#FEF2F2",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          textColor: "#991B1B",
          icon: "✗",
        };

  return (
    <div
      style={{
        backgroundColor: styles.bg,
        border: styles.border,
        borderRadius: "16px",
        padding: "14px 18px",
      }}
    >
      <p
        style={{
          fontFamily: "Nunito, sans-serif",
          fontWeight: 700,
          fontSize: "13px",
          color: styles.textColor,
          lineHeight: 1.6,
        }}
      >
        {styles.icon} {message}
      </p>
    </div>
  );
}
