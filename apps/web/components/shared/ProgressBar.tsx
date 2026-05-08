interface ProgressBarProps {
  progress: number; // 0-100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "8px",
        backgroundColor: "#FEF5D4",
        borderRadius: "100px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#D4A017",
          borderRadius: "100px",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}
