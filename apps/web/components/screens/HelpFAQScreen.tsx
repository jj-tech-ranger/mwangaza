import { ArrowLeft, Search, ChevronDown, MessageCircle, Mail, HelpCircle } from "lucide-react";
import { useState } from "react";
import BottomNav from "@/components/shared/BottomNav";

interface HelpFAQScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function HelpFAQScreen({ onNavigate }: HelpFAQScreenProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          id: 1,
          question: "How do I start my first lesson?",
          answer: "Tap on any unlocked lesson circle on your learning path from the Home screen. Complete the lesson content, then take the quiz to earn XP and unlock the next lesson.",
        },
        {
          id: 2,
          question: "What are XP points and how do I earn them?",
          answer: "XP (Experience Points) are earned by completing lessons, taking quizzes, and maintaining your streak. Each lesson typically awards 20-50 XP. Bonus XP is available through daily challenges and perfect quiz scores.",
        },
        {
          id: 3,
          question: "How does the level system work?",
          answer: "You progress through levels (Mwanafunzi, Msomi, Bingwa, Shujaa) by earning XP. Each level requires more XP than the previous one and unlocks new features and badges.",
        },
      ],
    },
    {
      category: "Premium Features",
      questions: [
        {
          id: 4,
          question: "What's included in Premium?",
          answer: "Premium includes unlimited hearts, offline lessons, personalized learning paths, priority support, advanced analytics, no ads, and exclusive premium badges.",
        },
        {
          id: 5,
          question: "Can I try Premium before paying?",
          answer: "Yes! We offer a 7-day free trial for new Premium subscribers. Cancel anytime during the trial period without being charged.",
        },
        {
          id: 6,
          question: "How do I cancel my Premium subscription?",
          answer: "Go to Settings > Premium Subscription > Manage Subscription. You can cancel anytime and will retain access until the end of your billing period.",
        },
      ],
    },
    {
      category: "Courses & Learning",
      questions: [
        {
          id: 7,
          question: "How many courses are available?",
          answer: "We currently offer 4 main courses: Mathematics, English Communication, Kiswahili Literacy, and Home Management. More courses are added regularly based on community feedback.",
        },
        {
          id: 8,
          question: "Can I switch between courses?",
          answer: "Yes! You can enroll in multiple courses simultaneously. Access all your courses from the Learn tab and switch between them anytime.",
        },
        {
          id: 9,
          question: "What happens if I fail a quiz?",
          answer: "You can retake any quiz as many times as needed. Your highest score is saved. Review the lesson content before retrying for better results.",
        },
      ],
    },
    {
      category: "Streaks & Goals",
      questions: [
        {
          id: 10,
          question: "How do I maintain my streak?",
          answer: "Complete at least one lesson or daily challenge each day to maintain your streak. Streaks reset at midnight in your timezone. Premium members get streak freezes.",
        },
        {
          id: 11,
          question: "Can I change my daily goal?",
          answer: "Yes! Go to Settings > Learning Preferences > Daily Goal to adjust between 5, 10, 15, 20, or 30 minutes per day based on your schedule.",
        },
      ],
    },
    {
      category: "Technical Issues",
      questions: [
        {
          id: 12,
          question: "The app isn't loading properly. What should I do?",
          answer: "Try refreshing the app, clearing your cache, or restarting your device. If the issue persists, contact our support team with details about your device and the error.",
        },
        {
          id: 13,
          question: "My progress isn't syncing across devices",
          answer: "Make sure you're logged in with the same account on all devices and have a stable internet connection. Progress syncs automatically when online.",
        },
      ],
    },
  ];

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
            Email Us
          </button>
        </div>
      </div>

      {/* FAQ Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {filteredCategories.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
            }}
          >
            <HelpCircle size={48} color="#D4A017" style={{ margin: "0 auto 16px" }} />
            <h3
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "16px",
                fontWeight: 900,
                color: "#2D2006",
                marginBottom: "8px",
              }}
            >
              No results found
            </h3>
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
              }}
            >
              Try different keywords or contact support
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredCategories.map((category) => (
              <div key={category.category}>
                <h2
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    fontWeight: 900,
                    color: "#A67C00",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "12px",
                  }}
                >
                  {category.category}
                </h2>
                <div className="flex flex-col gap-2">
                  {category.questions.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1.5px solid rgba(212, 160, 23, 0.2)",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        style={{
                          width: "100%",
                          padding: "16px",
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px",
                          textAlign: "left",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "14px",
                            fontWeight: 900,
                            color: "#2D2006",
                            flex: 1,
                          }}
                        >
                          {item.question}
                        </h3>
                        <ChevronDown
                          size={20}
                          color="#A67C00"
                          style={{
                            transform: expandedId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        />
                      </button>
                      {expandedId === item.id && (
                        <div
                          style={{
                            padding: "0 16px 16px",
                            borderTop: "1px solid rgba(212, 160, 23, 0.1)",
                            paddingTop: "12px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "Nunito, sans-serif",
                              fontSize: "14px",
                              color: "#7A6020",
                              lineHeight: "1.6",
                            }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}
