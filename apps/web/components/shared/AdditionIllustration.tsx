export default function AdditionIllustration() {
  return (
    <div
      className="flex items-center justify-center gap-6"
      style={{
        width: "100%",
        height: "140px",
        backgroundColor: "#FEF5D4",
        borderRadius: "20px",
      }}
    >
      {/* Stacked numbers 23 + 15 */}
      <div className="flex flex-col items-center gap-2">
        {/* First number 23 */}
        <div className="flex gap-1">
          <div
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: "rgba(254, 245, 212, 0.5)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "24px",
              fontWeight: 700,
              color: "#2D2006",
            }}
          >
            2
          </div>
          <div
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: "#D4A017",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "24px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            3
          </div>
        </div>

        {/* Plus sign */}
        <div
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#A67C00",
          }}
        >
          +
        </div>

        {/* Second number 15 */}
        <div className="flex gap-1">
          <div
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: "rgba(254, 245, 212, 0.5)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "24px",
              fontWeight: 700,
              color: "#2D2006",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: "#D4A017",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "24px",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            5
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div
        style={{
          fontSize: "28px",
          color: "#D4A017",
        }}
      >
        →
      </div>

      {/* Result */}
      <div
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "36px",
          fontWeight: 900,
          color: "#D4A017",
        }}
      >
        38
      </div>
    </div>
  );
}
