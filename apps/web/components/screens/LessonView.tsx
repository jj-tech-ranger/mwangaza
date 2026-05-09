import { X } from "lucide-react";
import Image from "next/image";

interface LessonViewProps {
  onNavigate?: (screen: string) => void;
}

export default function LessonView({ onNavigate }: LessonViewProps = {}) {
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

        <div style={{ flex: 1 }} />
      </div>

      {/* Mwangaza Logo */}
      <div className="flex justify-center" style={{ marginTop: "12px" }}>
        <Image src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" width={28} height={28} />
      </div>

      {/* Empty Lesson Body */}
      <div style={{ flex: 1, minHeight: "320px" }} />

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
          disabled
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#F5E9BE",
            color: "#C8A84B",
            opacity: 0.6,
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: "not-allowed",
            transition: "all 0.2s",
          }}
        >
          Continue to Quiz →
        </button>
      </div>
    </div>
  );
}
