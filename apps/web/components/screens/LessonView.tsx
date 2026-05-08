import { X } from "lucide-react";
import { useState } from "react";
import ProgressBar from "@/components/shared/ProgressBar";
import LearningIllustration from "@/components/shared/LearningIllustration";
import TapToReveal from "@/components/shared/TapToReveal";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface LessonViewProps {
  onNavigate?: (screen: string) => void;
}

export default function LessonView({ onNavigate }: LessonViewProps = {}) {
  const [exampleRevealed, setExampleRevealed] = useState(false);

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
        paddingBottom: "80px",
      }}
    >
      {/* Top Lesson Bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-5"
        style={{
          height: "56px",
          marginTop: "44px",
          backgroundColor: "#FFFDF5",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => onNavigate?.("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={24} color="#A67C00" />
        </button>

        {/* Progress bar */}
        <div style={{ flex: 1, marginInline: "16px" }}>
          <ProgressBar progress={33} />
        </div>

        {/* XP pill */}
        <div
          style={{
            backgroundColor: "#FDF0C2",
            color: "#A67C00",
            fontWeight: 700,
            fontSize: "11px",
            padding: "4px 10px",
            borderRadius: "100px",
          }}
        >
          ⚡ +10 XP
        </div>
      </div>

      {/* Mwangaza Logo */}
      <div className="flex justify-center" style={{ marginTop: "12px" }}>
        <img src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" style={{ height: "28px", width: "auto" }} />
      </div>

      {/* Lesson Header */}
      <div className="mx-5" style={{ marginTop: "12px" }}>
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            color: "#A67C00",
            letterSpacing: "0.3px",
          }}
        >
          Mathematics › Module 2 › Lesson 3
        </p>
        <h1
          style={{
            marginTop: "6px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "24px",
            color: "#2D2006",
          }}
        >
          Adding Two-Digit Numbers
        </h1>
      </div>

      {/* Section Label - LEARN */}
      <div className="mx-5" style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#FEF5D4",
            color: "#A67C00",
            fontWeight: 700,
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            padding: "4px 12px",
            borderRadius: "100px",
          }}
        >
          📖 LEARN
        </div>
      </div>

      {/* Illustration Card */}
      <div className="mx-5" style={{ marginTop: "12px" }}>
        <LearningIllustration />
      </div>

      {/* Explanation Text */}
      <div className="mx-5" style={{ marginTop: "16px" }}>
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            color: "#2D2006",
            lineHeight: 1.7,
            maxWidth: "350px",
          }}
        >
          When adding two-digit numbers, always start with the ones column first, then move to the tens
          column. This keeps things simple and avoids mistakes.
        </p>
      </div>

      {/* Section Label - TRY IT */}
      <div className="mx-5" style={{ marginTop: "24px" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#FEF5D4",
            color: "#A67C00",
            fontWeight: 700,
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            padding: "4px 12px",
            borderRadius: "100px",
          }}
        >
          ✏️ TRY IT
        </div>
      </div>

      {/* Worked Example Card */}
      <div className="mx-5" style={{ marginTop: "12px" }}>
        <TapToReveal
          problem="34 + 22 = ?"
          answer="56"
          explanation="4+2=6 ones, 3+2=5 tens → 56"
          onReveal={() => setExampleRevealed(true)}
        />
      </div>

      {/* Bottom Sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{
          backgroundColor: "#FFFDF5",
          borderTop: "1px solid rgba(212, 160, 23, 0.15)",
          padding: "12px 20px",
          paddingBottom: "calc(12px + 34px)",
        }}
      >
        <button
          disabled={!exampleRevealed}
          onClick={() => exampleRevealed && onNavigate?.("quiz")}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: exampleRevealed ? "#D4A017" : "#F5E9BE",
            color: exampleRevealed ? "#FFFFFF" : "#C8A84B",
            opacity: exampleRevealed ? 1 : 0.6,
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: exampleRevealed ? "pointer" : "not-allowed",
            transition: "all 0.2s",
          }}
        >
          Continue to Quiz →
        </button>
      </div>
    </div>
  );
}
