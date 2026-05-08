import { Check, X as XIcon } from "lucide-react";

interface QuizOptionProps {
  letter: "A" | "B" | "C" | "D";
  text: string;
  variant: "default" | "correct" | "wrong" | "neutral-post";
  onClick?: () => void;
}

export default function QuizOption({ letter, text, variant, onClick }: QuizOptionProps) {
  const getStyles = () => {
    switch (variant) {
      case "correct":
        return {
          bg: "#FEF5D4",
          border: "2px solid #D4A017",
          letterCircleBg: "#D4A017",
          letterColor: "#FFFFFF",
          showIcon: true,
          icon: <Check size={24} color="#D4A017" strokeWidth={3} />,
        };
      case "wrong":
        return {
          bg: "#FEF2F2",
          border: "2px solid #EF4444",
          letterCircleBg: "#EF4444",
          letterColor: "#FFFFFF",
          showIcon: true,
          icon: <XIcon size={24} color="#EF4444" strokeWidth={3} />,
        };
      case "neutral-post":
      case "default":
      default:
        return {
          bg: "#FFFFFF",
          border: "1.5px solid #E8D48A",
          letterCircleBg: "#FEF5D4",
          letterColor: "#A67C00",
          showIcon: false,
          icon: null,
        };
    }
  };

  const styles = getStyles();

  return (
    <button
      onClick={onClick}
      disabled={variant !== "default"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "60px",
        backgroundColor: styles.bg,
        border: styles.border,
        borderRadius: "16px",
        padding: "0 20px",
        cursor: variant === "default" ? "pointer" : "default",
        transition: "all 0.2s",
      }}
    >
      <div className="flex items-center gap-4">
        {/* Letter circle */}
        <div
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: styles.letterCircleBg,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: styles.letterColor,
          }}
        >
          {letter}
        </div>

        {/* Answer text */}
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "18px",
            color: "#2D2006",
          }}
        >
          {text}
        </span>
      </div>

      {/* Icon (check or X) */}
      {styles.showIcon && styles.icon}
    </button>
  );
}
