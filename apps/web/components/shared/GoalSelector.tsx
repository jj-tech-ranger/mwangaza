import { useState } from "react";

interface GoalOption {
  label: string;
  value: number;
}

interface GoalSelectorProps {
  options: GoalOption[];
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export default function GoalSelector({ options, defaultValue, onChange }: GoalSelectorProps) {
  const [selected, setSelected] = useState(defaultValue || options[1]?.value || options[0]?.value);

  const handleSelect = (value: number) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Option pills */}
      <div className="flex items-center gap-3">
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              style={{
                padding: isSelected ? "10px 20px" : "8px 16px",
                backgroundColor: isSelected ? "#D4A017" : "#FFFFFF",
                color: isSelected ? "#FFFFFF" : "#A67C00",
                border: isSelected ? "none" : "1.5px solid #D4A017",
                borderRadius: "100px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "all 0.2s",
              }}
            >
              {option.label}
              {isSelected && <span>✓</span>}
            </button>
          );
        })}
      </div>

      {/* Circular progress */}
      <div className="relative flex items-center justify-center">
        <svg width="80" height="80" viewBox="0 0 80 80">
          {/* Background track */}
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="#FEF5D4"
            strokeWidth="8"
          />
          {/* Progress arc (0% for now) */}
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="#D4A017"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`0 ${2 * Math.PI * 32}`}
            transform="rotate(-90 40 40)"
          />
        </svg>
        {/* Center text */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            color: "#A67C00",
          }}
        >
          0/{selected} XP
        </div>
      </div>

      {/* Subtext */}
      <div
        style={{
          fontFamily: "Nunito, sans-serif",
          fontWeight: 400,
          fontSize: "11px",
          color: "#7A6020",
        }}
      >
        You can change this anytime.
      </div>
    </div>
  );
}
