import { ReactNode } from "react";
import ProgressDots from "./ProgressDots";
import logoSvg from "../../imports/mwangaza_logo_final.svg";

interface OnboardingSlideProps {
  slideNumber: 1 | 2 | 3;
  headline: string;
  bodyText: string;
  illustration: ReactNode;
  buttonText?: string;
  onNext?: () => void;
  onSkip?: () => void;
}

export default function OnboardingSlide({
  slideNumber,
  headline,
  bodyText,
  illustration,
  buttonText = "Next →",
  onNext,
  onSkip,
}: OnboardingSlideProps) {
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
      {/* Skip link - top right */}
      <button
        onClick={onSkip}
        className="absolute top-3 right-4 z-10"
        style={{
          color: "#A67C00",
          fontWeight: 700,
          fontSize: "13px",
          minWidth: "44px",
          minHeight: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Skip
      </button>

      {/* Logo - centered at y: 80px */}
      <div className="flex justify-center" style={{ marginTop: "80px" }}>
        <img src={logoSvg} alt="Mwangaza Logo" style={{ height: "120px", width: "auto" }} />
      </div>

      {/* Illustration card - y: 170px */}
      <div className="flex justify-center" style={{ marginTop: "26px" }}>
        <div
          className="flex items-center justify-center"
          style={{
            width: "310px",
            height: "240px",
            backgroundColor: "#FEF5D4",
            borderRadius: "32px",
          }}
        >
          {illustration}
        </div>
      </div>

      {/* Text block - y: 454px from top (244px from illustration) */}
      <div className="flex flex-col items-center" style={{ marginTop: "44px", paddingInline: "45px" }}>
        <h1
          className="text-center"
          style={{
            color: "#2D2006",
            fontWeight: 900,
            fontSize: "28px",
            maxWidth: "300px",
            lineHeight: 1.3,
          }}
        >
          {headline}
        </h1>
        <p
          className="text-center"
          style={{
            marginTop: "12px",
            color: "#7A6020",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: 1.6,
            maxWidth: "300px",
          }}
        >
          {bodyText}
        </p>
      </div>

      {/* Progress dots - y: 560px */}
      <div style={{ marginTop: "32px" }}>
        <ProgressDots total={3} current={slideNumber} />
      </div>

      {/* Next button - y: 592px */}
      <div className="px-8" style={{ marginTop: "32px" }}>
        <button
          onClick={onNext}
          style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {buttonText}
        </button>
      </div>

      {/* Sign in link - y: 660px */}
      <div className="text-center" style={{ marginTop: "16px" }}>
        <a
          href="#"
          style={{
            color: "#A67C00",
            fontWeight: 700,
            fontSize: "13px",
            textDecoration: "underline",
          }}
        >
          Already have an account? Sign in
        </a>
      </div>
    </div>
  );
}
