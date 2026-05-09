import { ArrowLeft, Clock, BookOpen, Award } from "lucide-react";

interface CourseDetailsScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function CourseDetailsScreen({ onNavigate }: CourseDetailsScreenProps = {}) {
  const course = null as null | {
    title: string;
    description: string;
    moduleCount: number;
    duration: string;
    hasCertificate: boolean;
    progress: number;
    emoji?: string;
  };


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
        {course?.emoji ? (
          <div
            style={{
              fontSize: "80px",
            }}
          >
            {course.emoji}
          </div>
        ) : (
          <div style={{ height: "80px", width: "80px" }} />
        )}
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
          {course ? (
            <>
              <h1
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "24px",
                  color: "#2D2006",
                }}
              >
                {course.title}
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
                {course.description}
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
                    {course.moduleCount} modules
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
                    {course.duration}
                  </span>
                </div>
                {course.hasCertificate && (
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
                )}
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
                    {course.progress}%
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
                      width: `${course.progress}%`,
                      height: "100%",
                      backgroundColor: "#D4A017",
                      borderRadius: "100px",
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div style={{ height: "140px" }} />
          )}
        </div>
      </div>

      {/* Modules List */}
      <div className="mx-5" style={{ marginTop: "24px", paddingBottom: "100px" }}>
        <div style={{ height: "120px" }} />
      </div>

      {/* Bottom CTA */}
      {course && (
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
      )}
    </div>
  );
}
