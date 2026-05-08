import { ArrowLeft, BookOpen, CheckCircle, Circle } from "lucide-react";
import { useState } from "react";

interface SkillAssessmentScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function SkillAssessmentScreen({ onNavigate }: SkillAssessmentScreenProps = {}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is 7 + 5?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "Which number comes next: 2, 4, 6, 8, __?",
      options: ["9", "10", "11", "12"],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "What is 15 - 8?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "How many sides does a triangle have?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: "What is 3 × 4?",
      options: ["7", "10", "12", "15"],
      correctAnswer: 2,
    },
    {
      id: 6,
      question: "Which is greater: 25 or 19?",
      options: ["25", "19", "They're equal", "Can't tell"],
      correctAnswer: 0,
    },
    {
      id: 7,
      question: "What is half of 20?",
      options: ["5", "8", "10", "15"],
      correctAnswer: 2,
    },
    {
      id: 8,
      question: "What is 18 ÷ 3?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 2,
    },
  ];

  const handleSelectAnswer = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const getRecommendation = (score: number) => {
    if (score >= 80) {
      return {
        level: "Advanced",
        message: "Great job! Start with Module 3 to challenge yourself.",
        startModule: "Module 3: Multiplication",
      };
    } else if (score >= 50) {
      return {
        level: "Intermediate",
        message: "Good foundation! Begin with Module 2 to build your skills.",
        startModule: "Module 2: Two-Digit Operations",
      };
    } else {
      return {
        level: "Beginner",
        message: "Perfect starting point! Begin with Module 1 basics.",
        startModule: "Module 1: Basic Math",
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const hasAnswer = selectedAnswers[currentQuestion] !== undefined;

  if (isComplete) {
    const score = calculateScore();
    const recommendation = getRecommendation(score);

    return (
      <div
        style={{
          width: "390px",
          height: "844px",
          backgroundColor: "#FFFDF5",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Nunito, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#D4A017",
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <CheckCircle size={48} color="#22C55E" />
          </div>
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "26px",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
          >
            Assessment Complete!
          </h1>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Here's your personalized learning path
          </p>
        </div>

        {/* Results */}
        <div
          style={{
            flex: 1,
            padding: "24px 20px",
            overflowY: "auto",
          }}
        >
          {/* Score Card */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "2px solid #D4A017",
              borderRadius: "20px",
              padding: "24px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
                marginBottom: "12px",
              }}
            >
              Your Score
            </p>
            <h2
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "56px",
                fontWeight: 900,
                color: "#D4A017",
                lineHeight: "1",
                marginBottom: "4px",
              }}
            >
              {score}%
            </h2>
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#A67C00",
              }}
            >
              {recommendation.level} Level
            </p>
          </div>

          {/* Recommendation */}
          <div
            style={{
              backgroundColor: "#FEF5D4",
              borderRadius: "16px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "16px",
                fontWeight: 900,
                color: "#2D2006",
                marginBottom: "12px",
              }}
            >
              Recommended Starting Point
            </h3>
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              {recommendation.message}
            </p>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1.5px solid rgba(212, 160, 23, 0.3)",
                borderRadius: "12px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#D4A017",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BookOpen size={22} color="#FFFFFF" />
              </div>
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "15px",
                    fontWeight: 900,
                    color: "#2D2006",
                    marginBottom: "2px",
                  }}
                >
                  {recommendation.startModule}
                </h4>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    color: "#7A6020",
                  }}
                >
                  Start here →
                </p>
              </div>
            </div>
          </div>

          {/* Performance Breakdown */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1.5px solid rgba(212, 160, 23, 0.2)",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "16px",
                fontWeight: 900,
                color: "#2D2006",
                marginBottom: "16px",
              }}
            >
              Performance Breakdown
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { skill: "Basic Addition", score: 90 },
                { skill: "Subtraction", score: score >= 80 ? 85 : 60 },
                { skill: "Multiplication", score: score >= 80 ? 75 : 40 },
                { skill: "Number Recognition", score: 95 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "6px" }}>
                    <span
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "13px",
                        color: "#7A6020",
                      }}
                    >
                      {item.skill}
                    </span>
                    <span
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: item.score >= 70 ? "#22C55E" : "#D4A017",
                      }}
                    >
                      {item.score}%
                    </span>
                  </div>
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
                        width: `${item.score}%`,
                        height: "100%",
                        backgroundColor: item.score >= 70 ? "#22C55E" : "#D4A017",
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          style={{
            padding: "16px 20px",
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid rgba(212, 160, 23, 0.15)",
          }}
        >
          <button
            onClick={() => onNavigate?.("home")}
            style={{
              width: "100%",
              height: "56px",
              backgroundColor: "#D4A017",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "100px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "16px",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Start Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
          <button
            onClick={() => onNavigate?.("onboarding3")}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#FEF5D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={20} color="#A67C00" />
          </button>
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "18px",
                color: "#2D2006",
              }}
            >
              Skill Assessment
            </h1>
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                color: "#7A6020",
              }}
            >
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
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
      </div>

      {/* Question */}
      <div
        style={{
          flex: 1,
          padding: "32px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "22px",
            fontWeight: 900,
            color: "#2D2006",
            marginBottom: "32px",
            lineHeight: "1.4",
          }}
        >
          {questions[currentQuestion].question}
        </h2>

        {/* Answer Options */}
        <div className="flex flex-col gap-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion] === index;
            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                style={{
                  backgroundColor: isSelected ? "#FEF5D4" : "#FFFFFF",
                  border: `2px solid ${isSelected ? "#D4A017" : "rgba(212, 160, 23, 0.2)"}`,
                  borderRadius: "16px",
                  padding: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  textAlign: "left",
                }}
              >
                {isSelected ? (
                  <CheckCircle size={24} color="#D4A017" />
                ) : (
                  <Circle size={24} color="#D1D5DB" />
                )}
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: isSelected ? "#2D2006" : "#7A6020",
                  }}
                >
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div
          className="flex items-center justify-center gap-2"
          style={{ marginTop: "auto", paddingTop: "32px" }}
        >
          {questions.map((_, index) => (
            <div
              key={index}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor:
                  index === currentQuestion
                    ? "#D4A017"
                    : selectedAnswers[index] !== undefined
                    ? "#C8930A"
                    : "#FEF5D4",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <div className="flex gap-3">
          {currentQuestion > 0 && (
            <button
              onClick={handlePrevious}
              style={{
                flex: 1,
                height: "52px",
                backgroundColor: "#FFFFFF",
                color: "#A67C00",
                border: "2px solid rgba(212, 160, 23, 0.3)",
                borderRadius: "100px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Previous
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!hasAnswer}
            style={{
              flex: currentQuestion > 0 ? 2 : 1,
              height: "52px",
              backgroundColor: hasAnswer ? "#D4A017" : "#E5E7EB",
              color: hasAnswer ? "#FFFFFF" : "#9CA3AF",
              border: "none",
              borderRadius: "100px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              fontWeight: 900,
              cursor: hasAnswer ? "pointer" : "not-allowed",
            }}
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
