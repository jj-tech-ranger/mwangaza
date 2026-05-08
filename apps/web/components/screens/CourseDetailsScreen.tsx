import { ArrowLeft, Clock, BookOpen, Award, Lock } from "lucide-react";
import { useState } from "react";

interface CourseDetailsScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function CourseDetailsScreen({ onNavigate }: CourseDetailsScreenProps = {}) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const modules = [
    {
      number: 1,
      title: "Skills & Number Recognition",
      lessons: 5,
      duration: "25 min",
      locked: false,
      progress: 100,
    },
    {
      number: 2,
      title: "Basic Learning",
      lessons: 8,
      duration: "40 min",
      locked: false,
      progress: 63,
    },
    {
      number: 3,
      title: "Basic Progress",
      lessons: 8,
      duration: "40 min",
      locked: true,
      progress: 0,
    },
    {
      number: 4,
      title: "Growth Basics",
      lessons: 10,
      duration: "50 min",
      locked: true,
      progress: 0,
    },
    {
      number: 5,
      title: "Achievement Basics",
      lessons: 10,
      duration: "50 min",
      locked: true,
      progress: 0,
    },
    {
      number: 6,
      title: "Problem Solving",
      lessons: 12,
      duration: "60 min",
      locked: true,
      progress: 0,
    },
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
      }}
    >
      {/* Header Image */}
      <div
        style={{
          height: "200px",
          background: "linear-gradient(135deg, #D4A017 0%, #C8930A 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Back button */}
        <button
          onClick={() => onNavigate?.("catalog")}
          style={{
            position: "absolute",
            top: "56px",
            left: "20px",
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={20} color="#FFFFFF" />
        </button>

        {/* Course Icon */}
        <div
          style={{
            fontSize: "80px",
          }}
        >
          📐
        </div>
      </div>

      {/* Course Info */}
      <div className="mx-5" style={{ marginTop: "-30px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(212, 160, 23, 0.15)",
            border: "1px solid rgba(212, 160, 23, 0.2)",
          }}
        >
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "24px",
              color: "#2D2006",
            }}
          >
            Mathematics
          </h1>

          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              color: "#7A6020",
              marginTop: "8px",
              lineHeight: 1.6,
            }}
          >
            Master fundamental math skills from counting to problem solving. Perfect for beginners building a strong foundation.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4" style={{ marginTop: "16px" }}>
            <div className="flex items-center gap-1.5">
              <BookOpen size={16} color="#A67C00" />
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#7A6020",
                }}
              >
                6 modules
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} color="#A67C00" />
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#7A6020",
                }}
              >
                4.5 hours
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award size={16} color="#A67C00" />
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#7A6020",
                }}
              >
                Certificate
              </span>
            </div>
          </div>

          {/* Progress */}
          <div style={{ marginTop: "16px" }}>
            <div className="flex items-center justify-between" style={{ marginBottom: "6px" }}>
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#A67C00",
                }}
              >
                Your Progress
              </span>
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#A67C00",
                }}
              >
                38%
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
                  width: "38%",
                  height: "100%",
                  backgroundColor: "#D4A017",
                  borderRadius: "100px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="mx-5" style={{ marginTop: "24px", paddingBottom: "100px" }}>
        <h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "18px",
            color: "#2D2006",
            marginBottom: "12px",
          }}
        >
          Course Modules
        </h2>

        <div className="flex flex-col gap-3">
          {modules.map((module) => (
            <div
              key={module.number}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1.5px solid rgba(212, 160, 23, 0.2)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {/* Module Header */}
              <button
                onClick={() => setExpandedModule(expandedModule === module.number ? null : module.number)}
                style={{
                  width: "100%",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {/* Module Number */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: module.locked ? "#FEF5D4" : "#D4A017",
                    color: module.locked ? "#A67C00" : "#FFFFFF",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: 900,
                    flexShrink: 0,
                  }}
                >
                  {module.locked ? <Lock size={20} /> : module.number}
                </div>

                {/* Module Info */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: module.locked ? "#7A6020" : "#2D2006",
                    }}
                  >
                    {module.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      color: "#A67C00",
                      marginTop: "2px",
                    }}
                  >
                    {module.lessons} lessons · {module.duration}
                  </p>
                </div>

                {/* Progress or Lock */}
                {!module.locked && module.progress > 0 && (
                  <div
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#22C55E",
                    }}
                  >
                    {module.progress}%
                  </div>
                )}
              </button>

              {/* Expanded Content (lessons preview) */}
              {expandedModule === module.number && !module.locked && (
                <div
                  style={{
                    padding: "0 16px 16px",
                    borderTop: "1px solid #FEF5D4",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "13px",
                      color: "#7A6020",
                      marginTop: "12px",
                      lineHeight: 1.5,
                    }}
                  >
                    Learn step-by-step with interactive examples and practice exercises. Complete all lessons to unlock the next module.
                  </p>
                  <button
                    onClick={() => onNavigate?.("home")}
                    style={{
                      marginTop: "12px",
                      width: "100%",
                      height: "40px",
                      backgroundColor: "#D4A017",
                      color: "#FFFFFF",
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      borderRadius: "100px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {module.progress > 0 ? "Continue Learning →" : "Start Module →"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="fixed bottom-0 left-0 right-0"
        style={{
          backgroundColor: "#FFFDF5",
          borderTop: "1px solid rgba(212, 160, 23, 0.15)",
          padding: "12px 20px",
          paddingBottom: "calc(12px + 34px)",
          maxWidth: "390px",
        }}
      >
        <button
          onClick={() => onNavigate?.("home")}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Continue Learning →
        </button>
      </div>
    </div>
  );
}
