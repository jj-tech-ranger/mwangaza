import {
  Home,
  BookOpen,
  Package,
  FileText,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import logoSvg from "../../imports/mwangaza_logo_final.svg";

interface AdminSidebarProps {
  activeNav: string;
  onNavigate?: (screen: string) => void;
}

export default function AdminSidebar({ activeNav, onNavigate }: AdminSidebarProps) {
  const navLinks = [
    { id: "overview", icon: Home, label: "Overview", screen: "admin" },
    { id: "courses", icon: BookOpen, label: "Courses", screen: "adminCourses" },
    { id: "users", icon: Users, label: "Users", screen: "adminUsers" },
    { id: "analytics", icon: BarChart3, label: "Analytics", screen: "adminAnalytics" },
    { id: "lessons", icon: FileText, label: "Content Editor", screen: "editor" },
    { id: "settings", icon: Settings, label: "Settings", screen: "adminSettings" },
  ];

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#FFFDF5",
        borderRight: "1px solid rgba(212, 160, 23, 0.2)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Top - Logo and label */}
      <div
        style={{
          padding: "24px 20px",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <img src={logoSvg} alt="Mwangaza" style={{ height: "36px", width: "auto" }} />
        <p
          style={{
            marginTop: "8px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#A67C00",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Admin Panel
        </p>
      </div>

      {/* Navigation Links */}
      <div style={{ flex: 1, padding: "16px 12px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {navLinks.map((link) => {
          const isActive = activeNav === link.id;
          const Icon = link.icon;

          return (
            <button
              key={link.id}
              onClick={() => onNavigate?.(link.screen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 14px",
                backgroundColor: isActive ? "#FEF5D4" : "transparent",
                borderLeft: isActive ? "3px solid #D4A017" : "3px solid transparent",
                borderRadius: isActive ? "0 10px 10px 0" : "10px",
                cursor: "pointer",
                border: "none",
                textAlign: "left",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              <Icon
                size={20}
                color={isActive ? "#A67C00" : "#A67C00"}
                opacity={isActive ? 1 : 0.5}
                strokeWidth={2}
              />
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: isActive ? "#A67C00" : "#7A6020",
                }}
              >
                {link.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom - Admin info */}
      <div
        style={{
          padding: "16px 20px",
          borderTop: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "2px solid #D4A017",
              backgroundColor: "#FEF5D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#A67C00",
            }}
          >
            AD
          </div>
          <div className="flex-1">
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#2D2006",
              }}
            >
              Admin
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate?.("auth")}
          style={{
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "Nunito, sans-serif",
            fontSize: "12px",
            color: "#EF4444",
            padding: 0,
          }}
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </div>
  );
}
