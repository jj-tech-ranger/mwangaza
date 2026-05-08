import { Bold, Italic, Underline, Heading1, Heading2, List, Image } from "lucide-react";

export default function ContentToolbar() {
  const tools = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Underline, label: "Underline" },
    { icon: Heading1, label: "Heading 1" },
    { icon: Heading2, label: "Heading 2" },
    { icon: List, label: "Bullet List" },
    { icon: Image, label: "Insert Image" },
  ];

  return (
    <div className="flex items-center gap-2" style={{ marginBottom: "12px" }}>
      {tools.map((tool, index) => {
        const Icon = tool.icon;
        return (
          <button
            key={index}
            title={tool.label}
            style={{
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FEF5D4")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <Icon size={16} color="#A67C00" strokeWidth={2} />
          </button>
        );
      })}
    </div>
  );
}
