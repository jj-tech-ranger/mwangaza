import { ChevronRight } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

interface SettingsRowProps {
  icon: string;
  label: string;
  variant: "chevron" | "toggle" | "link" | "value";
  value?: string;
  linkText?: string;
  toggleChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  onClick?: () => void;
}

export default function SettingsRow({
  icon,
  label,
  variant,
  value,
  linkText,
  toggleChecked = false,
  onToggle,
  onClick,
}: SettingsRowProps) {
  return (
    <div
      onClick={variant === "chevron" ? onClick : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 16px",
        borderBottom: "1px solid #FEF5D4",
        cursor: variant === "chevron" ? "pointer" : "default",
      }}
    >
      {/* Left side - icon and label */}
      <div className="flex items-center gap-3">
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#FEF5D4",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "#2D2006",
          }}
        >
          {label}
        </span>
      </div>

      {/* Right side - based on variant */}
      <div className="flex items-center gap-2">
        {variant === "value" && value && (
          <>
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                color: "#7A6020",
              }}
            >
              {value}
            </span>
            <ChevronRight size={18} color="#A67C00" />
          </>
        )}

        {variant === "chevron" && <ChevronRight size={18} color="#A67C00" />}

        {variant === "link" && (
          <button
            onClick={onClick}
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#D4A017",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {linkText}
          </button>
        )}

        {variant === "toggle" && <ToggleSwitch checked={toggleChecked} onChange={onToggle} />}
      </div>
    </div>
  );
}
