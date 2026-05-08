import { Download, Share2 } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuedDate: string;
  certificateNumber: string;
}

export default function CertificateCard({ title, issuedDate, certificateNumber }: CertificateCardProps) {
  return (
    <div
      className="flex items-center gap-4"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(212, 160, 23, 0.15)",
        borderRadius: "20px",
        padding: "16px",
        boxShadow: "0 4px 20px rgba(212, 160, 23, 0.10)",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "44px",
          height: "44px",
          backgroundColor: "#FEF5D4",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          flexShrink: 0,
        }}
      >
        📜
      </div>

      {/* Certificate info */}
      <div className="flex-1">
        <h3
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "15px",
            color: "#2D2006",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            marginTop: "2px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            color: "#7A6020",
          }}
        >
          Issued {issuedDate} · #{certificateNumber}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-2">
        <button
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
          <Download size={24} color="#A67C00" strokeWidth={2} />
        </button>
        <button
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
          <Share2 size={24} color="#A67C00" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
