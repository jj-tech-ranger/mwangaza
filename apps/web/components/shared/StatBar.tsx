interface StatBarProps {
  stats: Array<{
    value: number;
    label: string;
  }>;
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <div
      className="flex items-center justify-around"
      style={{
        backgroundColor: "#FEF5D4",
        borderRadius: "16px",
        padding: "14px",
      }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "24px",
              color: "#D4A017",
            }}
          >
            {stat.value}
          </span>
          <span
            style={{
              marginTop: "2px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "11px",
              color: "#7A6020",
            }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
