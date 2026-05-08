import { Search, Filter, Mail, Ban, CheckCircle } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminUsersScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function AdminUsersScreen({ onNavigate }: AdminUsersScreenProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    {
      id: 1,
      name: "Amina Wanjiku",
      email: "amina.w@example.com",
      avatar: "AW",
      joinDate: "May 3, 2026",
      xp: 340,
      level: "Msomi",
      courses: 1,
      status: "active",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Kwame Osei",
      email: "kwame.o@example.com",
      avatar: "KO",
      joinDate: "April 28, 2026",
      xp: 1520,
      level: "Bingwa",
      courses: 2,
      status: "active",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Fatima Hassan",
      email: "fatima.h@example.com",
      avatar: "FH",
      joinDate: "April 25, 2026",
      xp: 890,
      level: "Msomi",
      courses: 1,
      status: "active",
      lastActive: "3 hours ago",
    },
    {
      id: 4,
      name: "Juma Makena",
      email: "juma.m@example.com",
      avatar: "JM",
      joinDate: "April 20, 2026",
      xp: 2240,
      level: "Shujaa",
      courses: 3,
      status: "active",
      lastActive: "5 hours ago",
    },
    {
      id: 5,
      name: "Sarah Ndlovu",
      email: "sarah.n@example.com",
      avatar: "SN",
      joinDate: "April 15, 2026",
      xp: 145,
      level: "Mwanafunzi",
      courses: 1,
      status: "suspended",
      lastActive: "2 weeks ago",
    },
  ];

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
              May 8, 2026
            </div>
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
          {[
            { label: "Total Users", value: "1,248", change: "+12%", color: "#D4A017" },
            { label: "Active Today", value: "234", change: "+5%", color: "#22C55E" },
            { label: "New This Week", value: "89", change: "+18%", color: "#C8930A" },
            { label: "Premium Users", value: "156", change: "+23%", color: "#A67C00" },
          ].map((stat, index) => (
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
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#A67C00",
                  }}
                >
                  {user.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2D2006",
                    }}
                  >
                    {user.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "13px",
                      color: "#7A6020",
                      marginTop: "2px",
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
                ⭐ {user.level}
              </div>

              {/* XP */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#D4A017",
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
                  fontSize: "13px",
                  color: "#7A6020",
                }}
              >
                {user.joinDate}
              </div>

              {/* Last Active */}
              <div
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: user.status === "active" ? "#22C55E" : "#EF4444",
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
                    backgroundColor: user.status === "suspended" ? "#D1FAE5" : "#FFF5F5",
                    border: `1px solid ${user.status === "suspended" ? "#22C55E" : "#EF4444"}33`,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  title={user.status === "suspended" ? "Activate" : "Suspend"}
                >
                  {user.status === "suspended" ? (
                    <CheckCircle size={16} color="#22C55E" />
                  ) : (
                    <Ban size={16} color="#EF4444" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
