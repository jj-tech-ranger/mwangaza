import { ArrowLeft, Download, Share2, Award } from "lucide-react";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface CertificateDetailScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function CertificateDetailScreen({ onNavigate }: CertificateDetailScreenProps = {}) {
  const handleDownload = () => {
    // Simulate download
    console.log("Downloading certificate...");
  };

  const handleShare = () => {
    // Simulate share
    console.log("Sharing certificate...");
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
      {/* Top Bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-5"
        style={{
          height: "60px",
          marginTop: "44px",
          backgroundColor: "#FFFDF5",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <button
          onClick={() => onNavigate?.("profile")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            color: "#A67C00",
          }}
        >
          <ArrowLeft size={16} />
          Profile
        </button>

        <h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            color: "#2D2006",
          }}
        >
          Certificate
        </h2>

        <div style={{ width: "50px" }} /> {/* Spacer */}
      </div>

      {/* Certificate Card */}
      <div className="mx-5" style={{ marginTop: "24px" }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "3px solid #D4A017",
            borderRadius: "20px",
            padding: "32px 24px",
            boxShadow: "0 8px 32px rgba(212, 160, 23, 0.2)",
            position: "relative",
          }}
        >
          {/* Decorative corners */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              width: "20px",
              height: "20px",
              borderTop: "3px solid #D4A017",
              borderLeft: "3px solid #D4A017",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "20px",
              height: "20px",
              borderTop: "3px solid #D4A017",
              borderRight: "3px solid #D4A017",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              width: "20px",
              height: "20px",
              borderBottom: "3px solid #D4A017",
              borderLeft: "3px solid #D4A017",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              width: "20px",
              height: "20px",
              borderBottom: "3px solid #D4A017",
              borderRight: "3px solid #D4A017",
            }}
          />

          {/* Certificate Content */}
          <div className="flex flex-col items-center">
            {/* Award Icon */}
            <div
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "#FEF5D4",
                border: "2px solid #D4A017",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Award size={32} color="#D4A017" fill="#D4A017" />
            </div>

            <h3
              style={{
                marginTop: "20px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#A67C00",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Certificate of Completion
            </h3>

            <h1
              style={{
                marginTop: "16px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "24px",
                color: "#2D2006",
                textAlign: "center",
              }}
            >
              Basic Math
            </h1>

            <p
              style={{
                marginTop: "16px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                color: "#7A6020",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              This certifies that
            </p>

            <h2
              style={{
                marginTop: "8px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "22px",
                color: "#D4A017",
                textAlign: "center",
              }}
            >
              Amina Wanjiku
            </h2>

            <p
              style={{
                marginTop: "12px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                color: "#7A6020",
                textAlign: "center",
                lineHeight: 1.6,
                maxWidth: "260px",
              }}
            >
              has successfully completed all 6 modules and earned 450 XP in the Basic Math course
            </p>

            {/* Date and ID */}
            <div
              style={{
                marginTop: "24px",
                width: "100%",
                paddingTop: "20px",
                borderTop: "1px solid #FEF5D4",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#A67C00",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Date Issued
                </p>
                <p
                  style={{
                    marginTop: "2px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "12px",
                    color: "#2D2006",
                  }}
                >
                  May 8, 2026
                </p>
              </div>

              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#A67C00",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Certificate ID
                </p>
                <p
                  style={{
                    marginTop: "2px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "12px",
                    color: "#2D2006",
                  }}
                >
                  MW-2026-0432
                </p>
              </div>
            </div>

            {/* Logo */}
            <img
              src="/imports/mwangaza_logo_final.svg"
              alt="Mwangaza"
              style={{
                height: "28px",
                width: "auto",
                marginTop: "20px",
                opacity: 0.7,
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-5" style={{ marginTop: "20px" }}>
        <div
          style={{
            backgroundColor: "#FEF5D4",
            border: "1px solid rgba(212, 160, 23, 0.2)",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#D4A017",
                }}
              >
                53
              </p>
              <p
                style={{
                  marginTop: "2px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "11px",
                  color: "#7A6020",
                }}
              >
                Lessons
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#D4A017",
                }}
              >
                450
              </p>
              <p
                style={{
                  marginTop: "2px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "11px",
                  color: "#7A6020",
                }}
              >
                XP Earned
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#D4A017",
                }}
              >
                92%
              </p>
              <p
                style={{
                  marginTop: "2px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "11px",
                  color: "#7A6020",
                }}
              >
                Avg Score
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mx-5 flex gap-3" style={{ marginTop: "20px", paddingBottom: "40px" }}>
        <button
          onClick={handleDownload}
          style={{
            flex: 1,
            height: "52px",
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Download size={18} />
          Download PDF
        </button>

        <button
          onClick={handleShare}
          style={{
            flex: 1,
            height: "52px",
            backgroundColor: "#FEF5D4",
            color: "#A67C00",
            border: "1.5px solid #D4A017",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            borderRadius: "100px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Share2 size={18} />
          Share
        </button>
      </div>
    </div>
  );
}
