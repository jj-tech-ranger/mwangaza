interface PricingCardProps {
  plan: "monthly" | "annual";
  price: string;
  period: string;
  subtitle?: string;
  savings?: string;
  recommended?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export default function PricingCard({
  plan,
  price,
  period,
  subtitle,
  savings,
  recommended,
  selected,
  onClick,
}: PricingCardProps) {
  const isAnnual = plan === "annual";

  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: isAnnual ? "#FEF5D4" : "#FFFFFF",
        border: isAnnual ? "2px solid #D4A017" : "1.5px solid #E8D48A",
        borderRadius: "20px",
        padding: "16px 20px",
        textAlign: "left",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Best Value Badge */}
      {recommended && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            padding: "4px 8px",
            borderRadius: "0 16px 0 8px",
          }}
        >
          BEST VALUE
        </div>
      )}

      {/* Radio button */}
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid #D4A017",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {selected && (
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#D4A017",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "20px",
            color: isAnnual ? "#D4A017" : "#2D2006",
          }}
        >
          {price}
        </h3>
        <p
          style={{
            marginTop: "2px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "12px",
            color: "#7A6020",
          }}
        >
          {subtitle || period}
        </p>
        {savings && (
          <p
            style={{
              marginTop: "4px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "#22C55E",
            }}
          >
            {savings}
          </p>
        )}
      </div>
    </button>
  );
}
