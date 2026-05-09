import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value?: number | null;
  change?: string;
  changePositive?: boolean;
}

export default function StatCard({ icon: Icon, label, value, change, changePositive }: StatCardProps) {
  const hasValue = value !== null && value !== undefined;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(212, 160, 23, 0.15)",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
      }}
    >
      <div className="flex items-start justify-between" style={{ marginBottom: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#FEF5D4",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={20} color="#D4A017" strokeWidth={2.5} />
        </div>
      </div>

      <p
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "12px",
          fontWeight: 700,
          color: "#A67C00",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: "8px",
        }}
      >
        {label}
      </p>

      {hasValue ? (
        <h3
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "32px",
            color: "#D4A017",
            lineHeight: 1,
          }}
        >
          {value.toLocaleString()}
        </h3>
      ) : (
        <div style={{ height: "32px" }} />
      )}

      {change && (
        <p
          style={{
            marginTop: "8px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "12px",
            color: changePositive ? "#22C55E" : "#EF4444",
          }}
        >
          {change}
        </p>
      )}
    </div>
  );
}
