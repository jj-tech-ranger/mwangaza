import { useState } from "react";
import ContentToolbar from "./ContentToolbar";

export default function MarkdownEditor() {
  const [content, setContent] = useState(
    `# Adding Two-Digit Numbers
When adding two-digit numbers, start with the **ones** column first.

**Example:** 23 + 15
- Ones: 3 + 5 = 8
- Tens: 2 + 1 = 3
- Answer: **38**`
  );

  const wordCount = content.split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <div>
      <ContentToolbar />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          minHeight: "300px",
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(212, 160, 23, 0.2)",
          borderRadius: "12px",
          padding: "16px",
          fontFamily: "monospace",
          fontSize: "14px",
          color: "#2D2006",
          lineHeight: 1.7,
          resize: "vertical",
          outline: "none",
        }}
        onFocus={(e) => {
          e.target.style.border = "2px solid #D4A017";
        }}
        onBlur={(e) => {
          e.target.style.border = "1px solid rgba(212, 160, 23, 0.2)";
        }}
      />

      <div
        style={{
          marginTop: "12px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "11px",
          color: "#7A6020",
        }}
      >
        {wordCount} words · Grade 3 level ✓
      </div>
    </div>
  );
}
