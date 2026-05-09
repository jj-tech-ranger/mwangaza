import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import QuizOption from "@/components/shared/QuizOption";
import FeedbackBanner from "@/components/shared/FeedbackBanner";

interface QuizInterfaceProps {
  onNavigate?: (screen: string) => void;
}

export default function QuizInterface({ onNavigate }: QuizInterfaceProps = {}) {
  const [showFeedback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions: Array<{
    type: "multiple-choice" | "true-false";
    question: string;
    options: Array<{ letter: string; text: string; isCorrect: boolean }>;
    explanation: string;
  }> = [];

  const totalQuestions = questions.length;
  const currentQuestion = questions[questionIndex] ?? null;
  const hasQuestions = Boolean(currentQuestion);

  // Question states: completed (green), current (gold filled), upcoming (outline)
  const questionStates = Array.from({ length: totalQuestions }, (_, index) => {
    if (index < questionIndex) return "completed";
    if (index === questionIndex) return "current";
    return "upcoming";
  });

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
        paddingBottom: "40px",
      }}
    >
      {/* Top Quiz Bar */}
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

        {/* Step indicators */}
        <div className="flex items-center gap-2.5">
          {questionStates.map((state, index) => {
            let fillColor = "none";
            let strokeColor = "rgba(212, 160, 23, 0.3)";

            if (state === "completed") {
              fillColor = "#22C55E";
              strokeColor = "#22C55E";
            } else if (state === "current") {
              fillColor = "#D4A017";
              strokeColor = "#D4A017";
            }

            return (
              <svg key={index} width="10" height="10">
                <circle cx="5" cy="5" r="4.5" fill={fillColor} stroke={strokeColor} strokeWidth="1" />
              </svg>
            );
          })}
        </div>

        {/* Timer pill */}
        <div
          className="flex items-center gap-1"
          style={{
            backgroundColor: "#FEF5D4",
            color: "#A67C00",
            fontWeight: 700,
            fontSize: "12px",
            padding: "6px 10px",
            borderRadius: "100px",
          }}
        >
          ⏱ 0:38
        </div>
      </div>

      {/* Mwangaza Logo */}
      <div className="flex justify-center" style={{ marginTop: "12px" }}>
        <Image src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" width={28} height={28} />
      </div>

      {/* Question Card */}
      {hasQuestions ? (
        <div
          className="mx-5"
          style={{
            marginTop: "28px",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid rgba(212, 160, 23, 0.15)",
            boxShadow: "0 4px 20px rgba(212, 160, 23, 0.10)",
            padding: "28px 24px",
          }}
        >
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              color: "#A67C00",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              textAlign: "center",
            }}
          >
            QUESTION {questionIndex + 1} OF {totalQuestions}
          </p>

          <h2
            style={{
              marginTop: "16px",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: currentQuestion.type === "true-false" ? "22px" : "28px",
              color: "#2D2006",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            {currentQuestion.question}
          </h2>
        </div>
      ) : (
        <div className="mx-5" style={{ marginTop: "28px", height: "140px" }} />
      )}

      {/* Answer Options */}
      {hasQuestions ? (
        <div className="mx-5 flex flex-col gap-3" style={{ marginTop: "28px" }}>
          {currentQuestion.options.map((option) => (
            <QuizOption
              key={option.letter}
              letter={option.letter}
              text={option.text}
              variant={showFeedback ? (option.isCorrect ? "correct" : option.letter === "C" ? "wrong" : "neutral-post") : "neutral"}
            />
          ))}
        </div>
      ) : (
        <div className="mx-5" style={{ marginTop: "28px", height: "120px" }} />
      )}

      {/* Feedback Banner */}
      {showFeedback && currentQuestion && (
        <div className="mx-5" style={{ marginTop: "20px" }}>
          <FeedbackBanner variant="correct" message={currentQuestion.explanation} />
        </div>
      )}

      {/* Next Button */}
      <div className="mx-5" style={{ marginTop: "16px" }}>
        <button
          onClick={async () => {
            if (!hasQuestions) return;
            if (questionIndex + 1 >= totalQuestions) {
              setIsSubmitting(true);
              await new Promise(resolve => setTimeout(resolve, 800));
              onNavigate?.("results");
              return;
            }
            setQuestionIndex((prev) => prev + 1);
          }}
          disabled={isSubmitting || !hasQuestions}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: isSubmitting || !hasQuestions ? "#C8930A" : "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: isSubmitting || !hasQuestions ? "not-allowed" : "pointer",
            transition: "all 0.2s",
            transform: isSubmitting ? "scale(0.98)" : "scale(1)",
          }}
        >
          {isSubmitting ? "Submitting..." : questionIndex + 1 >= totalQuestions ? "Finish Quiz →" : "Next Question →"}
        </button>
      </div>
    </div>
  );
}
