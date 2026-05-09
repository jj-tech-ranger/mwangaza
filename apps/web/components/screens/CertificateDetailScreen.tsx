import { ArrowLeft, Download, Share2, Award } from "lucide-react";

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

        <div style={{ width: "50px" }} />
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

            <div style={{ height: "220px" }} />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mx-5" style={{ marginTop: "24px", marginBottom: "40px" }}>
        <div className="flex gap-3">
          <button
            onClick={handleDownload}
            style={{
              flex: 1,
              height: "48px",
              backgroundColor: "#FEF5D4",
              border: "1.5px solid rgba(212, 160, 23, 0.3)",
              borderRadius: "12px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#A67C00",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <Download size={16} />
            Download
          </button>

          <button
            onClick={handleShare}
            style={{
              flex: 1,
              height: "48px",
              backgroundColor: "#FEF5D4",
              border: "1.5px solid rgba(212, 160, 23, 0.3)",
              borderRadius: "12px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#A67C00",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <Share2 size={16} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
