import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import BottomNav from "@/components/shared/BottomNav";
import SettingsSection from "@/components/shared/SettingsSection";
import SettingsRow from "@/components/shared/SettingsRow";

interface SettingsScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps = {}) {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [badgeEarned, setBadgeEarned] = useState(true);
  const [newCourses, setNewCourses] = useState(false);
  const [offlineMode, setOfflineMode] = useState(true);
  const [language, setLanguage] = useState("English");
  const [dailyGoal, setDailyGoal] = useState("10 min");
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);
  const [showGoalPicker, setShowGoalPicker] = useState(false);
  const avatarInitials = "";
  const accountEmail = "";
  const accountPhone = "";

  const languages = ["English", "Kiswahili", "Français", "العربية"];
  const goals = ["5 min", "10 min", "15 min", "20 min", "30 min"];

  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
        overflowY: "auto",
        paddingBottom: "72px",
      }}
    >
      {/* Top Bar */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between px-5"
        style={{
          height: "60px",
          marginTop: "44px",
          backgroundColor: "#FFFDF5",
        }}
      >
        {/* Back arrow */}
        <button
          onClick={() => onNavigate?.("profile")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            color: "#A67C00",
          }}
        >
          <ArrowLeft size={16} />
          Profile
        </button>

        {/* Title */}
        <h1
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "20px",
            color: "#2D2006",
          }}
        >
          Settings
        </h1>

        {/* Logo */}
        <Image src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" width={32} height={32} />
      </div>

      {/* Avatar Section */}
      <div className="flex flex-col items-center" style={{ marginTop: "0px" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "3px solid #D4A017",
            backgroundColor: "#FEF5D4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "28px",
            color: "#A67C00",
          }}
        >
          {avatarInitials}
        </div>

        <button
          style={{
            marginTop: "12px",
            fontFamily: "Nunito, sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: "#D4A017",
            textDecoration: "underline",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Change Photo
        </button>
      </div>

      {/* Settings Sections */}
      <div className="mx-5 flex flex-col gap-4" style={{ marginTop: "32px" }}>
        {/* Account Section */}
        <SettingsSection title="Account">
          <SettingsRow icon="📧" label="Email" variant="value" value={accountEmail} />
          <SettingsRow icon="📱" label="Phone" variant="value" value={accountPhone} />
          <SettingsRow icon="🔒" label="Password" variant="link" linkText="Change" />
          <SettingsRow icon="🖼" label="Avatar" variant="chevron" />
        </SettingsSection>

        {/* Notifications Section */}
        <SettingsSection title="Notifications">
          <SettingsRow
            icon="🔔"
            label="Daily reminder"
            variant="toggle"
            toggleChecked={dailyReminder}
            onToggle={setDailyReminder}
          />
          <SettingsRow
            icon="🏅"
            label="Badge earned"
            variant="toggle"
            toggleChecked={badgeEarned}
            onToggle={setBadgeEarned}
          />
          <SettingsRow
            icon="📢"
            label="New courses"
            variant="toggle"
            toggleChecked={newCourses}
            onToggle={setNewCourses}
          />
        </SettingsSection>

        {/* Preferences Section */}
        <SettingsSection title="Preferences">
          <div onClick={() => setShowLanguagePicker(true)} style={{ cursor: "pointer" }}>
            <SettingsRow icon="🌍" label="Language" variant="value" value={language} />
          </div>
          <div onClick={() => setShowGoalPicker(true)} style={{ cursor: "pointer" }}>
            <SettingsRow icon="🎯" label="Daily goal" variant="value" value={dailyGoal} />
          </div>
          <SettingsRow
            icon="📶"
            label="Offline mode"
            variant="toggle"
            toggleChecked={offlineMode}
            onToggle={setOfflineMode}
          />
        </SettingsSection>

        {/* Language Picker Modal */}
        {showLanguagePicker && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(45, 32, 6, 0.5)",
              zIndex: 100,
              display: "flex",
              alignItems: "flex-end",
            }}
            onClick={() => setShowLanguagePicker(false)}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#FFFDF5",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                padding: "24px",
                maxHeight: "60vh",
                overflowY: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "20px",
                  color: "#2D2006",
                  marginBottom: "16px",
                }}
              >
                Select Language
              </h3>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setShowLanguagePicker(false);
                  }}
                  style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: language === lang ? "#FEF5D4" : "#FFFFFF",
                    border: language === lang ? "2px solid #D4A017" : "1px solid rgba(212, 160, 23, 0.2)",
                    borderRadius: "12px",
                    marginBottom: "8px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "15px",
                    fontWeight: language === lang ? 700 : 400,
                    color: "#2D2006",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Daily Goal Picker Modal */}
        {showGoalPicker && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(45, 32, 6, 0.5)",
              zIndex: 100,
              display: "flex",
              alignItems: "flex-end",
            }}
            onClick={() => setShowGoalPicker(false)}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#FFFDF5",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                padding: "24px",
                maxHeight: "60vh",
                overflowY: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "20px",
                  color: "#2D2006",
                  marginBottom: "8px",
                }}
              >
                Daily Learning Goal
              </h3>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "13px",
                  color: "#7A6020",
                  marginBottom: "16px",
                }}
              >
                How much time do you want to spend learning each day?
              </p>
              {goals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => {
                    setDailyGoal(goal);
                    setShowGoalPicker(false);
                  }}
                  style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: dailyGoal === goal ? "#FEF5D4" : "#FFFFFF",
                    border: dailyGoal === goal ? "2px solid #D4A017" : "1px solid rgba(212, 160, 23, 0.2)",
                    borderRadius: "12px",
                    marginBottom: "8px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "15px",
                    fontWeight: dailyGoal === goal ? 700 : 400,
                    color: "#2D2006",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Danger Zone */}
        <div
          style={{
            backgroundColor: "#FFF5F5",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <h4
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#EF4444",
              marginBottom: "4px",
            }}
          >
            Delete Account
          </h4>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "12px",
              color: "#7A6020",
            }}
          >
            This will permanently remove your data.
          </p>
        </div>

        {/* Save Button */}
        <button
          style={{
            marginTop: "8px",
            width: "100%",
            height: "52px",
            backgroundColor: "#D4A017",
            color: "#FFFFFF",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Save Changes
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}
