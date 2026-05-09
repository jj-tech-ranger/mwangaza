import { Search, Filter, Mail, Ban, CheckCircle } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "@/components/shared/AdminSidebar";

interface AdminUsersScreenProps {
  onNavigate?: (screen: string) => void;
}

type AdminUser = {
  id: string;
  initials: string;
  name: string;
  email: string;
  level: string;
  xp: number;
  courses: number;
  joined: string;
  lastActive: string;
  status: "active" | "inactive" | "suspended";
};

export default function AdminUsersScreen({ onNavigate }: AdminUsersScreenProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");

  const users: AdminUser[] = [];
  const stats: Array<{ label: string; value: string; change: string; color: string }> = [];
  const todayLabel = "";

  return (
    <div
      className="flex"
      style={{
        width: "1440px",
        height: "900px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Sidebar */}
      <AdminSidebar activeNav="users" onNavigate={onNavigate} />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "32px",
          overflowY: "auto",
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between" style={{ marginBottom: "28px" }}>
          <div>
            <h1
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "28px",
                color: "#2D2006",
              }}
            >
              User Management
            </h1>
            <p
              style={{
                marginTop: "4px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
              }}
            >
              {users.length} total users • {users.filter(u => u.status === "active").length} active
            </p>
          </div>

          <div className="flex items-center gap-3">
            {todayLabel && (
              <div
                style={{
                  backgroundColor: "#FEF5D4",
                  color: "#A67C00",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  padding: "8px 16px",
                  borderRadius: "100px",
                }}
              >
                {todayLabel}
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {stats.length === 0 && <div style={{ height: "96px" }} />}
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(212, 160, 23, 0.15)",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
              }}
            >
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#7A6020",
                  marginBottom: "8px",
                }}
              >
                {stat.label}
              </p>
              <div className="flex items-end justify-between">
                <h3
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "26px",
                    fontWeight: 900,
                    color: stat.color,
                  }}
                >
                  {stat.value}
                </h3>
                <span
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#22C55E",
                  }}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-3" style={{ marginBottom: "24px" }}>
          <div
            style={{
              flex: 1,
              position: "relative",
              maxWidth: "400px",
            }}
          >
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
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                height: "44px",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid rgba(212, 160, 23, 0.3)",
                borderRadius: "12px",
                paddingLeft: "44px",
                paddingRight: "16px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#2D2006",
                outline: "none",
              }}
            />
          </div>

          <button
            style={{
              height: "44px",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid rgba(212, 160, 23, 0.3)",
              borderRadius: "12px",
              padding: "0 16px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#A67C00",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Filter size={16} />
            Filters
          </button>
        </div>

        {/* Users Table */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(212, 160, 23, 0.15)",
            borderRadius: "20px",
            boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            overflow: "hidden",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 150px",
              padding: "16px 24px",
              backgroundColor: "#FEF5D4",
              borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
            }}
          >
            {["User", "Level", "XP", "Courses", "Join Date", "Last Active", "Actions"].map((header) => (
              <div
                key={header}
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#A67C00",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {users.length === 0 && <div style={{ height: "64px" }} />}

          {/* Table Body */}
          {users.map((user, index) => (
            <div
              key={user.id}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 150px",
                padding: "20px 24px",
                borderBottom: index < users.length - 1 ? "1px solid rgba(212, 160, 23, 0.1)" : "none",
                alignItems: "center",
              }}
            >
              {/* User */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid #D4A017",
                    backgroundColor: "#FEF5D4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#A67C00",
                  }}
                >
                  {user.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#2D2006",
                    }}
                  >
                    {user.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      color: "#7A6020",
                    }}
                  >
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Level */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#A67C00",
                }}
              >
                {user.level}
              </div>

              {/* XP */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  color: "#7A6020",
                }}
              >
                {user.xp} XP
              </div>

              {/* Courses */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  color: "#7A6020",
                }}
              >
                {user.courses}
              </div>

              {/* Join Date */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  color: "#7A6020",
                }}
              >
                {user.joined}
              </div>

              {/* Last Active */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  color: "#7A6020",
                }}
              >
                {user.lastActive}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#FEF5D4",
                    border: "1px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Email"
                >
                  <Mail size={16} color="#A67C00" />
                </button>
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#FEF5D4",
                    border: "1px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Suspend"
                >
                  <Ban size={16} color="#A67C00" />
                </button>
                <button
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#FEF5D4",
                    border: "1px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title="Verify"
                >
                  <CheckCircle size={16} color="#A67C00" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
