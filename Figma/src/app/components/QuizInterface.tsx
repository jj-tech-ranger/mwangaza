import { X, Timer } from "lucide-react";
import { useState } from "react";
import QuizOption from "./QuizOption";
import FeedbackBanner from "./FeedbackBanner";
import logoSvg from "../../imports/mwangaza_logo_final.svg";

interface QuizInterfaceProps {
  onNavigate?: (screen: string) => void;
}

export default function QuizInterface({ onNavigate }: QuizInterfaceProps = {}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>("A");
  const [showFeedback, setShowFeedback] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(1);

  const totalQuestions = 5;

  // Different question types for variety
  const questions = [
    {
      type: "multiple-choice",
      question: "What is 45 + 33?",
      options: [
        { letter: "A", text: "78", isCorrect: true },
        { letter: "B", text: "77", isCorrect: false },
        { letter: "C", text: "88", isCorrect: false },
        { letter: "D", text: "68", isCorrect: false },
      ],
      explanation: "45 + 33 = 78. Add ones: 5+3=8. Add tens: 4+3=7.",
    },
    {
      type: "multiple-choice",
      question: "If you have 12 apples and get 8 more, how many do you have?",
      options: [
        { letter: "A", text: "18", isCorrect: false },
        { letter: "B", text: "20", isCorrect: true },
        { letter: "C", text: "19", isCorrect: false },
        { letter: "D", text: "21", isCorrect: false },
      ],
      explanation: "12 + 8 = 20 apples in total.",
    },
    {
      type: "true-false",
      question: "23 + 15 = 38",
      options: [
        { letter: "A", text: "True", isCorrect: true },
        { letter: "B", text: "False", isCorrect: false },
      ],
      explanation: "Correct! 23 + 15 = 38",
    },
  ];

  const currentQuestion = questions[questionIndex] || questions[0];

  // Question states: completed (green), current (gold filled), upcoming (outline)
  const questionStates = [
    "completed", // Question 1 - correct
    "current", // Question 2 - active
    "upcoming", // Question 3
    "upcoming", // Question 4
    "upcoming", // Question 5
  ];

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
        <img src={logoSvg} alt="Mwangaza" style={{ height: "28px", width: "auto" }} />
      </div>

      {/* Question Card */}
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

      {/* Answer Options */}
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

      {/* Feedback Banner */}
      {showFeedback && (
        <div className="mx-5" style={{ marginTop: "20px" }}>
          <FeedbackBanner
            variant="correct"
            message={currentQuestion.explanation}
          />
        </div>
      )}

      {/* Next Button */}
      <div className="mx-5" style={{ marginTop: "16px" }}>
        <button
          onClick={async () => {
            if (currentQuestion === totalQuestions) {
              setIsSubmitting(true);
              await new Promise(resolve => setTimeout(resolve, 800));
              onNavigate?.("results");
            }
          }}
          disabled={isSubmitting}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: isSubmitting ? "#C8930A" : "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            transition: "all 0.2s",
            transform: isSubmitting ? "scale(0.98)" : "scale(1)",
          }}
        >
          {isSubmitting ? "Submitting..." : currentQuestion === totalQuestions ? "Finish Quiz →" : "Next Question →"}
        </button>
      </div>
    </div>
  );
}
