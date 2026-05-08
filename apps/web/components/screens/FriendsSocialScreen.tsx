import { ArrowLeft, UserPlus, Search, Users, Send, Check, X } from "lucide-react";
import { useState } from "react";
import BottomNav from "@/components/shared/BottomNav";

interface FriendsSocialScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function FriendsSocialScreen({ onNavigate }: FriendsSocialScreenProps = {}) {
  const [activeTab, setActiveTab] = useState<"friends" | "requests" | "find">("friends");
  const [searchQuery, setSearchQuery] = useState("");

  const friends: any[] = [];
  const requests: any[] = [];
  const suggestions: any[] = [];

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
        <div className="flex items-center justify-between" style={{ marginBottom: "16px" }}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate?.("profile")}
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
              Friends
            </h1>
          </div>

          <div
            style={{
              backgroundColor: "#FEF5D4",
              color: "#A67C00",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              padding: "6px 12px",
              borderRadius: "100px",
            }}
          >
            {friends.length} friends
          </div>
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
            placeholder="Search friends..."
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

      {/* Tabs */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "12px 20px",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
          display: "flex",
          gap: "8px",
        }}
      >
        {[
          { id: "friends", label: "My Friends", count: friends.length },
          { id: "requests", label: "Requests", count: requests.length },
          { id: "find", label: "Find Friends", count: null },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              flex: 1,
              padding: "10px 16px",
              backgroundColor: activeTab === tab.id ? "#D4A017" : "transparent",
              color: activeTab === tab.id ? "#FFFFFF" : "#7A6020",
              border: "none",
              borderRadius: "12px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              position: "relative",
            }}
          >
            {tab.label}
            {tab.count !== null && tab.count > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "6px",
                  width: "18px",
                  height: "18px",
                  backgroundColor: activeTab === tab.id ? "#FFFFFF" : "#D4A017",
                  color: activeTab === tab.id ? "#D4A017" : "#FFFFFF",
                  borderRadius: "50%",
                  fontSize: "10px",
                  fontWeight: 900,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {/* My Friends Tab */}
        {activeTab === "friends" && (
          <div className="flex flex-col gap-3">
            {friends.map((friend) => (
              <div
                key={friend.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid rgba(212, 160, 23, 0.2)",
                  borderRadius: "16px",
                  padding: "16px",
                }}
              >
                <div className="flex items-center gap-3">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        border: "2px solid #D4A017",
                        backgroundColor: "#FEF5D4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#A67C00",
                      }}
                    >
                      {friend.avatar}
                    </div>
                    {friend.online && (
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          backgroundColor: "#22C55E",
                          border: "2px solid #FFFFFF",
                          borderRadius: "50%",
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "15px",
                        fontWeight: 900,
                        color: "#2D2006",
                        marginBottom: "4px",
                      }}
                    >
                      {friend.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "13px",
                          color: "#A67C00",
                          fontWeight: 700,
                        }}
                      >
                        ⭐ {friend.level}
                      </span>
                      <span style={{ color: "#D4A017" }}>•</span>
                      <span
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "13px",
                          color: "#7A6020",
                        }}
                      >
                        {friend.xp} XP
                      </span>
                    </div>
                    <div className="flex items-center gap-1" style={{ marginTop: "4px" }}>
                      <span style={{ fontSize: "14px" }}>🔥</span>
                      <span
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "12px",
                          color: "#7A6020",
                        }}
                      >
                        {friend.streak} day streak
                      </span>
                    </div>
                  </div>
                  <button
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#FEF5D4",
                      border: "1px solid rgba(212, 160, 23, 0.3)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Send size={18} color="#A67C00" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === "requests" && (
          <div className="flex flex-col gap-3">
            {requests.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <Users size={48} color="#D4A017" style={{ margin: "0 auto 16px" }} />
                <h3
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: 900,
                    color: "#2D2006",
                    marginBottom: "8px",
                  }}
                >
                  No pending requests
                </h3>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    color: "#7A6020",
                  }}
                >
                  You're all caught up!
                </p>
              </div>
            ) : (
              requests.map((request) => (
                <div
                  key={request.id}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid rgba(212, 160, 23, 0.2)",
                    borderRadius: "16px",
                    padding: "16px",
                  }}
                >
                  <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        border: "2px solid #D4A017",
                        backgroundColor: "#FEF5D4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#A67C00",
                      }}
                    >
                      {request.avatar}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "15px",
                          fontWeight: 900,
                          color: "#2D2006",
                          marginBottom: "4px",
                        }}
                      >
                        {request.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "13px",
                            color: "#A67C00",
                            fontWeight: 700,
                          }}
                        >
                          ⭐ {request.level}
                        </span>
                        <span style={{ color: "#D4A017" }}>•</span>
                        <span
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "13px",
                            color: "#7A6020",
                          }}
                        >
                          {request.xp} XP
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "12px",
                          color: "#7A6020",
                          marginTop: "2px",
                        }}
                      >
                        {request.mutualFriends} mutual friends
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      style={{
                        flex: 1,
                        height: "40px",
                        backgroundColor: "#D4A017",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "12px",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <Check size={16} />
                      Accept
                    </button>
                    <button
                      style={{
                        flex: 1,
                        height: "40px",
                        backgroundColor: "#FFFFFF",
                        color: "#7A6020",
                        border: "1.5px solid rgba(212, 160, 23, 0.3)",
                        borderRadius: "12px",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <X size={16} />
                      Decline
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Find Friends Tab */}
        {activeTab === "find" && (
          <div className="flex flex-col gap-3">
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#A67C00",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              Suggested for you
            </p>
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid rgba(212, 160, 23, 0.2)",
                  borderRadius: "16px",
                  padding: "16px",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      border: "2px solid #D4A017",
                      backgroundColor: "#FEF5D4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#A67C00",
                    }}
                  >
                    {suggestion.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "15px",
                        fontWeight: 900,
                        color: "#2D2006",
                        marginBottom: "4px",
                      }}
                    >
                      {suggestion.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "13px",
                          color: "#A67C00",
                          fontWeight: 700,
                        }}
                      >
                        ⭐ {suggestion.level}
                      </span>
                      <span style={{ color: "#D4A017" }}>•</span>
                      <span
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "13px",
                          color: "#7A6020",
                        }}
                      >
                        {suggestion.xp} XP
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        color: "#7A6020",
                        marginTop: "2px",
                      }}
                    >
                      {suggestion.mutualFriends} mutual friends
                    </p>
                  </div>
                  <button
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#D4A017",
                      border: "none",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <UserPlus size={18} color="#FFFFFF" />
                  </button>
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
