import { ArrowLeft, Search, ChevronDown, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import BottomNav from "@/components/shared/BottomNav";

interface HelpFAQScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function HelpFAQScreen({ onNavigate }: HelpFAQScreenProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqCategories: Array<{ category: string; questions: Array<{ id: number; question: string; answer: string }> }> = [];

  const filteredCategories = searchQuery
    ? faqCategories.map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.questions.length > 0)
    : faqCategories;

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
        <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
          <button
            onClick={() => onNavigate?.("settings")}
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
            Help & FAQ
          </h1>
        </div>

        {/* Search Bar */}
        <div style={{ position: "relative" }}>
          <Search
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search help articles..."
            style={{
              width: "100%",
              height: "48px",
              backgroundColor: "#FEF5D4",
              border: "none",
              borderRadius: "24px",
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

      {/* Contact Options */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "12px",
          }}
        >
          Need More Help?
        </p>
        <div className="flex gap-2">
          <button
            style={{
              flex: 1,
              height: "48px",
              backgroundColor: "#FEF5D4",
              border: "1.5px solid rgba(212, 160, 23, 0.3)",
              borderRadius: "12px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#A67C00",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <MessageCircle size={16} />
            Live Chat
          </button>
          <button
            style={{
              flex: 1,
              height: "48px",
              backgroundColor: "#FEF5D4",
              border: "1.5px solid rgba(212, 160, 23, 0.3)",
              borderRadius: "12px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#A67C00",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <Mail size={16} />
            Email
          </button>
        </div>
      </div>

      {/* FAQ List */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {filteredCategories.length === 0 && <div style={{ height: "160px" }} />}
        {filteredCategories.map((category, index) => (
          <div key={index} style={{ marginBottom: "24px" }}>
            <h2
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#2D2006",
                marginBottom: "12px",
              }}
            >
              {category.category}
            </h2>

            {category.questions.map((faq) => (
              <div
                key={faq.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid rgba(212, 160, 23, 0.2)",
                  borderRadius: "16px",
                  padding: "14px 16px",
                  marginBottom: "10px",
                }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#2D2006",
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown size={18} color="#A67C00" style={{ transform: expandedId === faq.id ? "rotate(180deg)" : "rotate(0)" }} />
                </button>

                {expandedId === faq.id && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "13px",
                      color: "#7A6020",
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}
