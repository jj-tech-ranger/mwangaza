import { useState } from "react";

interface TapToRevealProps {
  problem: string;
  answer: string;
  explanation: string;
  onReveal?: () => void;
}

export default function TapToReveal({ problem, answer, explanation, onReveal }: TapToRevealProps) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    onReveal?.();
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1.5px dashed #D4A017",
        borderRadius: "16px",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Problem */}
      <h3
        style={{
          fontFamily: "Nunito, sans-serif",
          fontWeight: 900,
          fontSize: "22px",
          color: "#2D2006",
          textAlign: "center",
        }}
      >
        {problem}
      </h3>

      {!revealed ? (
        /* Tap to Reveal Button */
        <button
          onClick={handleReveal}
          style={{
            marginTop: "12px",
            height: "40px",
            width: "160px",
            backgroundColor: "#FEF5D4",
            color: "#A67C00",
            border: "1.5px solid #D4A017",
            borderRadius: "100px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Tap to Reveal
        </button>
      ) : (
        /* Revealed Content */
        <div className="flex flex-col items-center" style={{ marginTop: "12px" }}>
          <div
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "32px",
              color: "#D4A017",
            }}
          >
            {answer}
          </div>
          <p
            style={{
              marginTop: "8px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "12px",
              color: "#7A6020",
              textAlign: "center",
            }}
          >
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
