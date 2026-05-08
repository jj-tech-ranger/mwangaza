export default function PhonePreviewFrame() {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          width: "220px",
          height: "450px",
          backgroundColor: "#FFFFFF",
          borderRadius: "28px",
          border: "8px solid #2D2006",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            height: "28px",
            backgroundColor: "#FFFDF5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "8px",
            color: "#2D2006",
          }}
        >
          9:41
        </div>

        {/* Content area */}
        <div
          style={{
            padding: "12px",
            backgroundColor: "#FFFDF5",
            height: "calc(100% - 28px)",
            overflowY: "auto",
          }}
        >
          {/* Breadcrumb */}
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "7px",
              color: "#A67C00",
              marginBottom: "4px",
            }}
          >
            Basic Math › Module 2 › Lesson 3
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "14px",
              color: "#2D2006",
              marginBottom: "12px",
            }}
          >
            Adding Two-Digit Numbers
          </h1>

          {/* Section label */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#FEF5D4",
              color: "#A67C00",
              fontFamily: "Nunito, sans-serif",
              fontSize: "7px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "100px",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            📖 LEARN
          </div>

          {/* Content */}
          <div
            style={{
              backgroundColor: "#FEF5D4",
              borderRadius: "12px",
              padding: "12px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "10px",
                color: "#2D2006",
                textAlign: "center",
              }}
            >
              23 + 15 = 38
            </div>
          </div>

          {/* Text content */}
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "9px",
              color: "#2D2006",
              lineHeight: 1.6,
            }}
          >
            When adding two-digit numbers, start with the <strong>ones</strong> column first.
          </p>

          <div
            style={{
              marginTop: "8px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "9px",
              color: "#2D2006",
              lineHeight: 1.6,
            }}
          >
            <strong>Example:</strong> 23 + 15
            <ul style={{ marginLeft: "16px", marginTop: "4px" }}>
              <li>Ones: 3 + 5 = 8</li>
              <li>Tens: 2 + 1 = 3</li>
              <li>
                Answer: <strong>38</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p
        style={{
          marginTop: "16px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "12px",
          color: "#7A6020",
          textAlign: "center",
          maxWidth: "260px",
        }}
      >
        This is how students will see this lesson.
      </p>
    </div>
  );
}
