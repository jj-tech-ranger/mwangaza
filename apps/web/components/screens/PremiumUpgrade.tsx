import { Crown, Check, X } from "lucide-react";
import { useState } from "react";
import PricingCard from "@/components/shared/PricingCard";

export default function PremiumUpgrade() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");

  const features = [
    { name: "All courses & lessons", free: true, premium: true },
    { name: "Daily lesson limit", free: "5/day", premium: "Unlimited 🔓" },
    { name: "Ad-free experience", free: false, premium: true },
    { name: "Offline access", free: "Limited", premium: "Full 🔓" },
    { name: "Early course access", free: false, premium: true },
    { name: "Certificate downloads", free: false, premium: true },
    { name: "Progress insights", free: false, premium: true },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "85%",
        backgroundColor: "#FFFDF5",
        borderRadius: "28px 28px 0 0",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
        maxWidth: "390px",
        margin: "0 auto",
        boxShadow: "0 -4px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Drag Handle */}
      <div className="flex justify-center" style={{ paddingTop: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "4px",
            backgroundColor: "rgba(212, 160, 23, 0.3)",
            borderRadius: "100px",
          }}
        />
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center" style={{ marginTop: "28px", paddingInline: "20px" }}>
        {/* Crown icon */}
        <div
          style={{
            width: "72px",
            height: "72px",
            backgroundColor: "#FEF5D4",
            border: "2px solid #D4A017",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Crown size={36} color="#D4A017" fill="#D4A017" />
        </div>

        {/* Headline */}
        <h1
          style={{
            marginTop: "12px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "24px",
            color: "#2D2006",
            textAlign: "center",
          }}
        >
          Unlock Your Full Potential
        </h1>

        {/* Subtitle */}
        <p
          style={{
            marginTop: "8px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "14px",
            color: "#7A6020",
            textAlign: "center",
            maxWidth: "280px",
            lineHeight: 1.5,
          }}
        >
          You've reached today's lesson limit. Go Premium for unlimited learning.
        </p>
      </div>

      {/* Feature Table */}
      <div className="mx-5" style={{ marginTop: "28px" }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(212, 160, 23, 0.15)",
            borderRadius: "20px",
            padding: "4px",
            overflow: "hidden",
          }}
        >
          {/* Header row */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr 80px 100px",
              padding: "12px 16px",
              borderBottom: "1px solid #FEF5D4",
            }}
          >
            <div />
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#7A6020",
                textAlign: "center",
              }}
            >
              Free
            </span>
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#A67C00",
                textAlign: "center",
              }}
            >
              Premium ⭐
            </span>
          </div>

          {/* Feature rows */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid"
              style={{
                gridTemplateColumns: "1fr 80px 100px",
                padding: "12px 16px",
                borderBottom: index < features.length - 1 ? "1px solid #FEF5D4" : "none",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#2D2006",
                }}
              >
                {feature.name}
              </span>

              {/* Free column */}
              <div className="flex justify-center">
                {typeof feature.free === "boolean" ? (
                  feature.free ? (
                    <Check size={16} color="#A67C00" strokeWidth={2.5} />
                  ) : (
                    <X size={16} color="#C8A84B" opacity={0.5} strokeWidth={2.5} />
                  )
                ) : (
                  <span
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      color: "#7A6020",
                    }}
                  >
                    {feature.free}
                  </span>
                )}
              </div>

              {/* Premium column */}
              <div className="flex justify-center">
                {typeof feature.premium === "boolean" ? (
                  <Check size={16} color="#D4A017" strokeWidth={2.5} />
                ) : (
                  <span
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#D4A017",
                    }}
                  >
                    {feature.premium}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-5 flex flex-col gap-3" style={{ marginTop: "24px" }}>
        <PricingCard
          plan="monthly"
          price="KES 299 / month"
          period="Billed monthly"
          subtitle="Billed monthly"
          selected={selectedPlan === "monthly"}
          onClick={() => setSelectedPlan("monthly")}
        />

        <PricingCard
          plan="annual"
          price="KES 2,499 / year"
          period="Billed annually"
          savings="Save 30% · Only KES 208/month"
          recommended
          selected={selectedPlan === "annual"}
          onClick={() => setSelectedPlan("annual")}
        />
      </div>

      {/* Trial Banner */}
      <div
        className="mx-5"
        style={{
          marginTop: "20px",
          backgroundColor: "#FEF5D4",
          border: "1.5px solid #D4A017",
          borderRadius: "16px",
          padding: "12px 16px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#A67C00",
          }}
        >
          🎁 Try 7 days free, cancel anytime
        </p>
      </div>

      {/* CTA */}
      <div className="mx-5 flex flex-col items-center" style={{ marginTop: "16px", paddingBottom: "40px" }}>
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
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          Start 7-Day Free Trial →
        </button>

        <p
          style={{
            marginTop: "12px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            color: "#7A6020",
            textAlign: "center",
            maxWidth: "280px",
          }}
        >
          After 7 days, {selectedPlan === "annual" ? "KES 2,499/year" : "KES 299/month"}. Cancel anytime.
        </p>

        <button
          style={{
            marginTop: "8px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            color: "#A67C00",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
