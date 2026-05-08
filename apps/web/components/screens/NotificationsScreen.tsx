import { ArrowLeft, Bell, Trophy, Flame, Star, Gift } from "lucide-react";
import { useState } from "react";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface NotificationsScreenProps {
  onNavigate?: (screen: string) => void;
}

interface Notification {
  id: string;
  type: "badge" | "streak" | "level" | "course" | "premium";
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: string;
}

export default function NotificationsScreen({ onNavigate }: NotificationsScreenProps = {}) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "badge",
      title: "New Badge Earned!",
      message: "You've earned the 'Addition Master' badge for completing 5 addition lessons.",
      time: "2 hours ago",
      read: false,
      icon: "➕",
    },
    {
      id: "2",
      type: "streak",
      title: "5-Day Streak! 🔥",
      message: "Amazing! You've learned for 5 days straight. Keep it up!",
      time: "1 day ago",
      read: false,
      icon: "🔥",
    },
    {
      id: "3",
      type: "level",
      title: "Level Up!",
      message: "Congratulations! You've reached level 'Msomi' (Scholar).",
      time: "2 days ago",
      read: true,
      icon: "⭐",
    },
    {
      id: "4",
      type: "course",
      title: "New Course Available",
      message: "Kiswahili Literacy is now available. Start learning today!",
      time: "3 days ago",
      read: true,
      icon: "🇰🇪",
    },
    {
      id: "5",
      type: "premium",
      title: "Limited Offer: Premium Trial",
      message: "Try Premium free for 7 days. Unlock unlimited lessons and offline access.",
      time: "5 days ago",
      read: true,
      icon: "👑",
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
      }}
    >
      {/* Top Bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-5"
        style={{
          height: "60px",
          marginTop: "44px",
          backgroundColor: "#FFFDF5",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <button
          onClick={() => onNavigate?.("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            color: "#A67C00",
          }}
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <img src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" style={{ height: "32px", width: "auto" }} />

        <div style={{ width: "50px" }} /> {/* Spacer for center alignment */}
      </div>

      {/* Header */}
      <div className="mx-5" style={{ marginTop: "20px" }}>
        <div className="flex items-center justify-between">
          <div>
            <h1
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "26px",
                color: "#2D2006",
              }}
            >
              Notifications
            </h1>
            {unreadCount > 0 && (
              <p
                style={{
                  marginTop: "4px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#A67C00",
                }}
              >
                {unreadCount} unread
              </p>
            )}
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#D4A017",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Mark all read
            </button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="mx-5" style={{ marginTop: "20px", paddingBottom: "40px" }}>
        {notifications.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center"
            style={{ marginTop: "100px" }}
          >
            <Bell size={48} color="#D4A017" opacity={0.3} />
            <p
              style={{
                marginTop: "16px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "15px",
                color: "#7A6020",
                textAlign: "center",
              }}
            >
              No notifications yet
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                style={{
                  backgroundColor: notification.read ? "#FFFFFF" : "#FEF5D4",
                  border: notification.read ? "1px solid rgba(212, 160, 23, 0.15)" : "1.5px solid #D4A017",
                  borderRadius: "16px",
                  padding: "16px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div className="flex gap-3">
                  {/* Icon */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: notification.read ? "#FEF5D4" : "#FFFFFF",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                    }}
                  >
                    {notification.icon}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div className="flex items-start justify-between">
                      <h3
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontWeight: 900,
                          fontSize: "15px",
                          color: "#2D2006",
                        }}
                      >
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#D4A017",
                            borderRadius: "50%",
                            marginLeft: "8px",
                            marginTop: "4px",
                          }}
                        />
                      )}
                    </div>

                    <p
                      style={{
                        marginTop: "4px",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "13px",
                        color: "#7A6020",
                        lineHeight: 1.5,
                      }}
                    >
                      {notification.message}
                    </p>

                    <p
                      style={{
                        marginTop: "8px",
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        color: "#A67C00",
                      }}
                    >
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
