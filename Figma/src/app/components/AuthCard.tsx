import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Phone } from "lucide-react";

interface AuthCardProps {
  mode: "signup" | "signin";
  onToggleMode?: () => void;
  onForgotPassword?: () => void;
}

export default function AuthCard({ mode, onToggleMode, onForgotPassword }: AuthCardProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center" style={{ paddingInline: "24px" }}>
      {/* Auth Card */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid rgba(212, 160, 23, 0.2)",
          boxShadow: "0 8px 32px rgba(212, 160, 23, 0.12)",
          padding: "28px 24px",
        }}
      >
        <div className="flex flex-col gap-3.5">
          {/* Google Button */}
          <button
            style={{
              height: "52px",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid #D4A017",
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#2D2006",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.1713 8.36788H17.5001V8.33329H10.0001V11.6666H14.7096C14.0225 13.6069 12.1763 15 10.0001 15C7.23884 15 5.00009 12.7612 5.00009 9.99996C5.00009 7.23871 7.23884 4.99996 10.0001 4.99996C11.2746 4.99996 12.4342 5.48079 13.3171 6.26621L15.6742 3.90913C14.1859 2.52204 12.1951 1.66663 10.0001 1.66663C5.39801 1.66663 1.66676 5.39788 1.66676 9.99996C1.66676 14.602 5.39801 18.3333 10.0001 18.3333C14.6022 18.3333 18.3334 14.602 18.3334 9.99996C18.3334 9.44121 18.2767 8.89579 18.1713 8.36788Z"
                fill="#FFC107"
              />
              <path
                d="M2.62793 6.12121L5.36585 8.12913C6.10627 6.29496 7.90002 5.00004 10.0001 5.00004C11.2746 5.00004 12.4342 5.48088 13.3171 6.26629L15.6742 3.90921C14.1859 2.52213 12.1951 1.66671 10.0001 1.66671C6.79919 1.66671 4.02335 3.47371 2.62793 6.12121Z"
                fill="#FF3D00"
              />
              <path
                d="M10.0001 18.3333C12.1526 18.3333 14.1084 17.5096 15.5876 16.17L13.0084 13.9875C12.1434 14.6279 11.0901 15 10.0001 15C7.83259 15 5.99176 13.6179 5.29884 11.6892L2.58301 13.7829C3.96051 16.4817 6.76051 18.3333 10.0001 18.3333Z"
                fill="#4CAF50"
              />
              <path
                d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.988L13.0084 13.9871L15.5876 16.1696C15.4042 16.3363 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2767 8.89587 18.1713 8.36796Z"
                fill="#1976D2"
              />
            </svg>
            Continue with Google
          </button>

          {/* Phone Button */}
          <button
            style={{
              height: "52px",
              backgroundColor: "#FEF5D4",
              border: "1.5px solid #D4A017",
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#A67C00",
              cursor: "pointer",
            }}
          >
            <Phone size={20} strokeWidth={2.5} color="#A67C00" />
            Continue with Phone Number
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3" style={{ margin: "4px 0" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(212, 160, 23, 0.15)" }} />
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#A67C00",
                backgroundColor: "#FFFFFF",
                padding: "0 8px",
              }}
            >
              or
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(212, 160, 23, 0.15)" }} />
          </div>

          {/* Email Input */}
          <div className="relative">
            <div
              className="absolute left-4 top-1/2"
              style={{ transform: "translateY(-50%)", pointerEvents: "none" }}
            >
              <Mail size={18} color="#A67C00" />
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                height: "52px",
                backgroundColor: "#FFFDF5",
                border: "1.5px solid #E8D48A",
                borderRadius: "14px",
                paddingLeft: "48px",
                paddingRight: "16px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#2D2006",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.border = "2px solid #D4A017";
                e.target.style.boxShadow = "0 0 0 3px rgba(212, 160, 23, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1.5px solid #E8D48A";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div
              className="absolute left-4 top-1/2"
              style={{ transform: "translateY(-50%)", pointerEvents: "none" }}
            >
              <Lock size={18} color="#A67C00" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                height: "52px",
                backgroundColor: "#FFFDF5",
                border: "1.5px solid #E8D48A",
                borderRadius: "14px",
                paddingLeft: "48px",
                paddingRight: "48px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#2D2006",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.border = "2px solid #D4A017";
                e.target.style.boxShadow = "0 0 0 3px rgba(212, 160, 23, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.border = "1.5px solid #E8D48A";
                e.target.style.boxShadow = "none";
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2"
              style={{ transform: "translateY(-50%)", cursor: "pointer", background: "none", border: "none" }}
            >
              {showPassword ? <EyeOff size={18} color="#A67C00" /> : <Eye size={18} color="#A67C00" />}
            </button>
          </div>

          {/* Forgot Password Link (only show in signin mode) */}
          {mode === "signin" && (
            <div style={{ textAlign: "right", marginTop: "-8px" }}>
              <button
                onClick={onForgotPassword}
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#A67C00",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Primary CTA */}
          <button
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
              marginTop: "4px",
            }}
          >
            {mode === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>

      {/* Toggle mode link */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <span
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            color: "#7A6020",
          }}
        >
          {mode === "signup" ? "Already have an account? " : "Don't have an account? "}
        </span>
        <button
          onClick={onToggleMode}
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#D4A017",
            textDecoration: "underline",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {mode === "signup" ? "Sign in" : "Sign up"}
        </button>
      </div>
    </div>
  );
}
