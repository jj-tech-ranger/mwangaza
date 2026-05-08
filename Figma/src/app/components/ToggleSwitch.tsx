interface ToggleSwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

export default function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <button
      onClick={() => onChange?.(!checked)}
      style={{
        position: "relative",
        width: "44px",
        height: "24px",
        backgroundColor: checked ? "#D4A017" : "#C8C8C8",
        borderRadius: "100px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s",
        padding: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2px",
          left: checked ? "22px" : "2px",
          width: "20px",
          height: "20px",
          backgroundColor: "#FFFFFF",
          borderRadius: "50%",
          transition: "left 0.2s",
        }}
      />
    </button>
  );
}
