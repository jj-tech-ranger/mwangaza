import { useState } from "react";
import AuthCard from "./AuthCard";
import logoSvg from "../../imports/mwangaza_logo_final.svg";

interface AuthScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function AuthScreen({ onNavigate }: AuthScreenProps = {}) {
  const [mode, setMode] = useState<"signup" | "signin">("signup");

  return (
    <div
      className="relative flex flex-col overflow-hidden"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Logo and Header */}
      <div className="flex flex-col items-center" style={{ marginTop: "64px" }}>
        <img src={logoSvg} alt="Mwangaza Logo" style={{ height: "72px", width: "auto" }} />

        <h1
          style={{
            marginTop: "16px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "26px",
            color: "#2D2006",
            textAlign: "center",
          }}
        >
          Welcome to Mwangaza
        </h1>

        <p
          style={{
            marginTop: "8px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#7A6020",
            textAlign: "center",
          }}
        >
          Join thousands of learners across Africa.
        </p>
      </div>

      {/* Auth Card */}
      <div style={{ marginTop: "36px" }}>
        <AuthCard
          mode={mode}
          onToggleMode={() => setMode(mode === "signup" ? "signin" : "signup")}
          onForgotPassword={() => onNavigate?.("forgotPassword")}
        />
      </div>

      {/* Legal Text */}
      <div
        className="absolute bottom-5 left-0 right-0 flex justify-center"
        style={{ paddingInline: "55px" }}
      >
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            color: "rgba(166, 124, 0, 0.6)",
            textAlign: "center",
            maxWidth: "280px",
            lineHeight: 1.4,
          }}
        >
          By continuing you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
