import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface ForgotPasswordScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function ForgotPasswordScreen({ onNavigate }: ForgotPasswordScreenProps = {}) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div
        className="relative flex flex-col"
        style={{
          width: "390px",
          height: "844px",
          backgroundColor: "#FFFDF5",
          fontFamily: "Nunito, sans-serif",
        }}
      >
        {/* Back button */}
        <button
          onClick={() => onNavigate?.("auth")}
          style={{
            position: "absolute",
            top: "56px",
            left: "20px",
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
          Back
        </button>

        {/* Success Content */}
        <div className="flex flex-col items-center" style={{ marginTop: "120px", paddingInline: "40px" }}>
          {/* Success Icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#FEF5D4",
              border: "2px solid #D4A017",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <Mail size={36} color="#D4A017" />
          </div>

          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "26px",
              color: "#2D2006",
              textAlign: "center",
            }}
          >
            Check Your Email
          </h1>

          <p
            style={{
              marginTop: "12px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              color: "#7A6020",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            We've sent a password reset link to
          </p>

          <p
            style={{
              marginTop: "8px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              color: "#A67C00",
              textAlign: "center",
            }}
          >
            {email}
          </p>

          <p
            style={{
              marginTop: "20px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              color: "#7A6020",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Click the link in the email to reset your password. The link expires in 1 hour.
          </p>

          <button
            onClick={() => onNavigate?.("auth")}
            style={{
              marginTop: "32px",
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
            Back to Sign In
          </button>

          <button
            onClick={() => setIsSubmitted(false)}
            style={{
              marginTop: "12px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#A67C00",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Didn't receive email? Resend
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Back button */}
      <button
        onClick={() => onNavigate?.("auth")}
        style={{
          position: "absolute",
          top: "56px",
          left: "20px",
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
        Back
      </button>

      {/* Logo and Header */}
      <div className="flex flex-col items-center" style={{ marginTop: "100px", paddingInline: "40px" }}>
        <img src="/imports/mwangaza_logo_final.svg" alt="Mwangaza Logo" style={{ height: "72px", width: "auto" }} />

        <h1
          style={{
            marginTop: "24px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "26px",
            color: "#2D2006",
            textAlign: "center",
          }}
        >
          Reset Password
        </h1>

        <p
          style={{
            marginTop: "8px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            color: "#7A6020",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Email Input */}
      <div className="mx-8" style={{ marginTop: "40px" }}>
        <label
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#2D2006",
            marginBottom: "8px",
            display: "block",
          }}
        >
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="amina@example.com"
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(212, 160, 23, 0.3)",
            borderRadius: "12px",
            padding: "0 16px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "15px",
            color: "#2D2006",
            outline: "none",
          }}
          onFocus={(e) => e.target.style.borderColor = "#D4A017"}
          onBlur={(e) => e.target.style.borderColor = "rgba(212, 160, 23, 0.3)"}
        />
      </div>

      {/* Submit Button */}
      <div className="mx-8" style={{ marginTop: "24px" }}>
        <button
          onClick={handleSubmit}
          disabled={!email || isLoading}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: email && !isLoading ? "#D4A017" : "#F5E9BE",
            color: email && !isLoading ? "#FFFFFF" : "#C8A84B",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: email && !isLoading ? "pointer" : "not-allowed",
            transition: "all 0.2s",
          }}
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>

      {/* Remember password link */}
      <div className="text-center" style={{ marginTop: "20px" }}>
        <button
          onClick={() => onNavigate?.("auth")}
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
          Remember your password? Sign in
        </button>
      </div>
    </div>
  );
}
