import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react";
import { useState } from "react";

interface PaymentCheckoutScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function PaymentCheckoutScreen({ onNavigate }: PaymentCheckoutScreenProps = {}) {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("yearly");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    monthly: {
      price: "$9.99",
      period: "month",
      total: "$9.99",
      savings: null,
    },
    yearly: {
      price: "$6.99",
      period: "month",
      total: "$83.88",
      savings: "Save 30%",
    },
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
    return formatted;
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(formatCardNumber(value));
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setExpiryDate(formatExpiryDate(value));
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  const handleSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onNavigate?.("premium");
    }, 2000);
  };

  const currentPlan = plans[selectedPlan];

  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate?.("premium")}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#FEF5D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={20} color="#A67C00" />
          </button>
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "20px",
              color: "#2D2006",
            }}
          >
            Checkout
          </h1>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {/* Plan Selection */}
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              color: "#2D2006",
              marginBottom: "12px",
            }}
          >
            Select Plan
          </h2>
          <div className="flex flex-col gap-3">
            {(["yearly", "monthly"] as const).map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                style={{
                  backgroundColor: selectedPlan === plan ? "#FEF5D4" : "#FFFFFF",
                  border: `2px solid ${selectedPlan === plan ? "#D4A017" : "rgba(212, 160, 23, 0.2)"}`,
                  borderRadius: "16px",
                  padding: "16px",
                  cursor: "pointer",
                  textAlign: "left",
                  position: "relative",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "16px",
                        fontWeight: 900,
                        color: "#2D2006",
                        marginBottom: "4px",
                      }}
                    >
                      {plan === "yearly" ? "Yearly" : "Monthly"}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "14px",
                        color: "#7A6020",
                      }}
                    >
                      {plans[plan].price}/{plans[plan].period}
                    </p>
                    {plans[plan].savings && (
                      <p
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#22C55E",
                          marginTop: "4px",
                        }}
                      >
                        {plans[plan].savings}
                      </p>
                    )}
                  </div>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: selectedPlan === plan ? "#D4A017" : "transparent",
                      border: `2px solid ${selectedPlan === plan ? "#D4A017" : "#D1D5DB"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {selectedPlan === plan && <Check size={14} color="#FFFFFF" />}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Payment Information */}
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              color: "#2D2006",
              marginBottom: "12px",
            }}
          >
            Payment Information
          </h2>

          <div className="flex flex-col gap-3">
            {/* Card Number */}
            <div>
              <label
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#7A6020",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Card Number
              </label>
              <div style={{ position: "relative" }}>
                <CreditCard
                  size={18}
                  color="#A67C00"
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  style={{
                    width: "100%",
                    height: "52px",
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "12px",
                    paddingLeft: "48px",
                    paddingRight: "16px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "15px",
                    color: "#2D2006",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Expiry and CVV */}
            <div className="flex gap-3">
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#7A6020",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
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
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#7A6020",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  CVV
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="123"
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
                />
              </div>
            </div>

            {/* Cardholder Name */}
            <div>
              <label
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#7A6020",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Cardholder Name
              </label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John Doe"
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
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div
          style={{
            backgroundColor: "#FEF5D4",
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "14px",
              color: "#2D2006",
              marginBottom: "12px",
            }}
          >
            Order Summary
          </h3>
          <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
              }}
            >
              {selectedPlan === "yearly" ? "Yearly Premium" : "Monthly Premium"}
            </span>
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#2D2006",
              }}
            >
              {currentPlan.total}
            </span>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(212, 160, 23, 0.3)",
              paddingTop: "12px",
              marginTop: "12px",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "16px",
                  fontWeight: 900,
                  color: "#2D2006",
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "#D4A017",
                }}
              >
                {currentPlan.total}
              </span>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div
          className="flex items-center gap-2"
          style={{
            backgroundColor: "#E7F6EC",
            padding: "12px 16px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <Lock size={16} color="#22C55E" />
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "12px",
              color: "#047857",
            }}
          >
            Your payment is secured with 256-bit encryption
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <button
          onClick={handleSubmit}
          disabled={isProcessing}
          style={{
            width: "100%",
            height: "56px",
            backgroundColor: isProcessing ? "#D1D5DB" : "#D4A017",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "100px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "16px",
            fontWeight: 900,
            cursor: isProcessing ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {isProcessing ? (
            <>Processing...</>
          ) : (
            <>
              <Lock size={20} />
              Complete Payment
            </>
          )}
        </button>
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            color: "#7A6020",
            textAlign: "center",
            marginTop: "12px",
          }}
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
