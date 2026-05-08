import { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  children: ReactNode;
}

export default function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(212, 160, 23, 0.15)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#FEF5D4",
        }}
      >
        <h3
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Rows */}
      <div>{children}</div>
    </div>
  );
}
