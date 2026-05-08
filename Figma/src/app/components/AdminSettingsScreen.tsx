import { Save, Bell, Lock, Globe, Mail, Database, Shield } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminSettingsScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function AdminSettingsScreen({ onNavigate }: AdminSettingsScreenProps = {}) {
  const [settings, setSettings] = useState({
    siteName: "Mwangaza Learning",
    adminEmail: "admin@mwangaza.com",
    allowRegistration: true,
    requireEmailVerification: true,
    enableNotifications: true,
    maintenanceMode: false,
    defaultLanguage: "en",
    maxLoginAttempts: 5,
    sessionTimeout: 30,
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (key: string, value: any) => {
    setSettings({ ...settings, [key]: value });
    setHasChanges(true);
  };

  const handleSave = () => {
    setHasChanges(false);
  };

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
      <AdminSidebar activeNav="settings" onNavigate={onNavigate} />

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
              Platform Settings
            </h1>
            <p
              style={{
                marginTop: "4px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
              }}
            >
              Configure platform behavior and security
            </p>
          </div>

          {hasChanges && (
            <button
              onClick={handleSave}
              style={{
                height: "44px",
                backgroundColor: "#D4A017",
                color: "#FFFFFF",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                padding: "0 24px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Save size={18} />
              Save Changes
            </button>
          )}
        </div>

        {/* Settings Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* General Settings */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(212, 160, 23, 0.15)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            }}
          >
            <div className="flex items-center gap-2" style={{ marginBottom: "20px" }}>
              <Globe size={20} color="#D4A017" />
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "16px",
                  color: "#2D2006",
                }}
              >
                General Settings
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#7A6020",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Platform Name
                </label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => handleChange("siteName", e.target.value)}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "44px",
                    backgroundColor: "#FFFDF5",
                    border: "1.5px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "12px",
                    padding: "0 16px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    color: "#2D2006",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#7A6020",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Default Language
                </label>
                <select
                  value={settings.defaultLanguage}
                  onChange={(e) => handleChange("defaultLanguage", e.target.value)}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "44px",
                    backgroundColor: "#FFFDF5",
                    border: "1.5px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "12px",
                    padding: "0 16px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    color: "#2D2006",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="en">English</option>
                  <option value="sw">Kiswahili</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
              </div>

              <div className="flex items-center justify-between" style={{ maxWidth: "400px" }}>
                <div>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#2D2006",
                    }}
                  >
                    Maintenance Mode
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      color: "#7A6020",
                      marginTop: "2px",
                    }}
                  >
                    Disable public access temporarily
                  </p>
                </div>
                <button
                  onClick={() => handleChange("maintenanceMode", !settings.maintenanceMode)}
                  style={{
                    width: "52px",
                    height: "28px",
                    backgroundColor: settings.maintenanceMode ? "#D4A017" : "#E5E7EB",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                    transition: "background-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "4px",
                      left: settings.maintenanceMode ? "28px" : "4px",
                      transition: "left 0.2s",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* User & Authentication */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(212, 160, 23, 0.15)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            }}
          >
            <div className="flex items-center gap-2" style={{ marginBottom: "20px" }}>
              <Shield size={20} color="#D4A017" />
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "16px",
                  color: "#2D2006",
                }}
              >
                User & Authentication
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#2D2006",
                    }}
                  >
                    Allow New Registrations
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      color: "#7A6020",
                      marginTop: "2px",
                    }}
                  >
                    Enable users to create new accounts
                  </p>
                </div>
                <button
                  onClick={() => handleChange("allowRegistration", !settings.allowRegistration)}
                  style={{
                    width: "52px",
                    height: "28px",
                    backgroundColor: settings.allowRegistration ? "#D4A017" : "#E5E7EB",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "4px",
                      left: settings.allowRegistration ? "28px" : "4px",
                      transition: "left 0.2s",
                    }}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#2D2006",
                    }}
                  >
                    Require Email Verification
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "12px",
                      color: "#7A6020",
                      marginTop: "2px",
                    }}
                  >
                    Users must verify email before access
                  </p>
                </div>
                <button
                  onClick={() => handleChange("requireEmailVerification", !settings.requireEmailVerification)}
                  style={{
                    width: "52px",
                    height: "28px",
                    backgroundColor: settings.requireEmailVerification ? "#D4A017" : "#E5E7EB",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "4px",
                      left: settings.requireEmailVerification ? "28px" : "4px",
                      transition: "left 0.2s",
                    }}
                  />
                </button>
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#7A6020",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Max Login Attempts
                </label>
                <input
                  type="number"
                  value={settings.maxLoginAttempts}
                  onChange={(e) => handleChange("maxLoginAttempts", parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "44px",
                    backgroundColor: "#FFFDF5",
                    border: "1.5px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "12px",
                    padding: "0 16px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    color: "#2D2006",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#7A6020",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) => handleChange("sessionTimeout", parseInt(e.target.value))}
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    height: "44px",
                    backgroundColor: "#FFFDF5",
                    border: "1.5px solid rgba(212, 160, 23, 0.3)",
                    borderRadius: "12px",
                    padding: "0 16px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    color: "#2D2006",
                    outline: "none",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(212, 160, 23, 0.15)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            }}
          >
            <div className="flex items-center gap-2" style={{ marginBottom: "20px" }}>
              <Bell size={20} color="#D4A017" />
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "16px",
                  color: "#2D2006",
                }}
              >
                Notifications
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#2D2006",
                  }}
                >
                  Enable Platform Notifications
                </p>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "12px",
                    color: "#7A6020",
                    marginTop: "2px",
                  }}
                >
                  Send email and push notifications to users
                </p>
              </div>
              <button
                onClick={() => handleChange("enableNotifications", !settings.enableNotifications)}
                style={{
                  width: "52px",
                  height: "28px",
                  backgroundColor: settings.enableNotifications ? "#D4A017" : "#E5E7EB",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "4px",
                    left: settings.enableNotifications ? "28px" : "4px",
                    transition: "left 0.2s",
                  }}
                />
              </button>
            </div>
          </div>

          {/* Email Configuration */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(212, 160, 23, 0.15)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            }}
          >
            <div className="flex items-center gap-2" style={{ marginBottom: "20px" }}>
              <Mail size={20} color="#D4A017" />
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "16px",
                  color: "#2D2006",
                }}
              >
                Email Configuration
              </h3>
            </div>

            <div>
              <label
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#7A6020",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Admin Email Address
              </label>
              <input
                type="email"
                value={settings.adminEmail}
                onChange={(e) => handleChange("adminEmail", e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "44px",
                  backgroundColor: "#FFFDF5",
                  border: "1.5px solid rgba(212, 160, 23, 0.3)",
                  borderRadius: "12px",
                  padding: "0 16px",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  color: "#2D2006",
                  outline: "none",
                }}
              />
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  color: "#7A6020",
                  marginTop: "6px",
                }}
              >
                Receives system alerts and user inquiries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
