interface ProgressDotsProps {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current - 1;
        return (
          <div
            key={index}
            style={{
              width: isActive ? "10px" : "8px",
              height: isActive ? "10px" : "8px",
              borderRadius: "50%",
              backgroundColor: isActive ? "#D4A017" : "#FEF5D4",
              border: isActive ? "none" : "1.5px solid #D4A017",
            }}
          />
        );
      })}
    </div>
  );
}
