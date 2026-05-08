import { useState } from "react";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import CourseCatalogScreen from "./CourseCatalogScreen";
import LessonView from "./LessonView";
import QuizInterface from "./QuizInterface";
import LessonResults from "./LessonResults";
import ProfileScreen from "./ProfileScreen";
import LeaderboardScreen from "./LeaderboardScreen";
import PremiumUpgrade from "./PremiumUpgrade";
import SettingsScreen from "./SettingsScreen";
import AdminDashboard from "./AdminDashboard";
import AdminCoursesScreen from "./AdminCoursesScreen";
import AdminUsersScreen from "./AdminUsersScreen";
import AdminAnalyticsScreen from "./AdminAnalyticsScreen";
import AdminSettingsScreen from "./AdminSettingsScreen";
import LessonEditor from "./LessonEditor";
import OnboardingSlide from "./OnboardingSlide";
import SteppingStonesIllustration from "./SteppingStonesIllustration";
import MedalsIllustration from "./MedalsIllustration";
import DailyGoalIllustration from "./DailyGoalIllustration";
import SplashScreen from "./SplashScreen";
import CourseDetailsScreen from "./CourseDetailsScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import NotificationsScreen from "./NotificationsScreen";
import BadgeGalleryScreen from "./BadgeGalleryScreen";
import CertificateDetailScreen from "./CertificateDetailScreen";
import SearchResultsScreen from "./SearchResultsScreen";
import ProgressAnalyticsScreen from "./ProgressAnalyticsScreen";
import PaymentCheckoutScreen from "./PaymentCheckoutScreen";
import HelpFAQScreen from "./HelpFAQScreen";
import FriendsSocialScreen from "./FriendsSocialScreen";
import SkillAssessmentScreen from "./SkillAssessmentScreen";

export default function ScreenSwitcher() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(1);

  const screens = {
    // Splash
    splash: { name: "00. Splash Screen", component: <SplashScreen onComplete={() => setCurrentScreen("onboarding1")} /> },
    // Onboarding
    onboarding1: {
      name: "01. Onboarding - Slide 1",
      component: (
        <OnboardingSlide
          slideNumber={1}
          headline="Your Learning Path"
          bodyText="Every lesson you complete lights up a new step on your golden path."
          illustration={<SteppingStonesIllustration />}
          buttonText="Next →"
          onNext={() => setCurrentScreen("onboarding2")}
          onSkip={() => setCurrentScreen("auth")}
        />
      ),
    },
    onboarding2: {
      name: "02. Onboarding - Slide 2",
      component: (
        <OnboardingSlide
          slideNumber={2}
          headline="Earn as You Learn"
          bodyText="Collect XP, unlock African-inspired level titles, and earn certificates you can download and share."
          illustration={<MedalsIllustration />}
          buttonText="Next →"
          onNext={() => setCurrentScreen("onboarding3")}
          onSkip={() => setCurrentScreen("auth")}
        />
      ),
    },
    onboarding3: {
      name: "03. Onboarding - Slide 3",
      component: (
        <OnboardingSlide
          slideNumber={3}
          headline="Set Your Daily Goal"
          bodyText="Even 5 minutes a day adds up. Choose how much time you want to spend learning each day."
          illustration={<DailyGoalIllustration />}
          buttonText="Get Started →"
          onNext={() => setCurrentScreen("auth")}
          onSkip={() => setCurrentScreen("auth")}
        />
      ),
    },
    // Auth
    auth: { name: "04. Authentication", component: <AuthScreen onNavigate={setCurrentScreen} /> },
    forgotPassword: { name: "04b. Forgot Password", component: <ForgotPasswordScreen onNavigate={setCurrentScreen} /> },
    // Main App
    home: { name: "05. Home / Learning Path", component: <HomeScreen onNavigate={setCurrentScreen} /> },
    catalog: { name: "06. Course Catalog", component: <CourseCatalogScreen onNavigate={setCurrentScreen} /> },
    courseDetails: { name: "06b. Course Details", component: <CourseDetailsScreen onNavigate={setCurrentScreen} /> },
    lesson: { name: "07. Lesson View", component: <LessonView onNavigate={setCurrentScreen} /> },
    quiz: { name: "08. Quiz Interface", component: <QuizInterface onNavigate={setCurrentScreen} /> },
    results: { name: "09. Lesson Results", component: <LessonResults onNavigate={setCurrentScreen} /> },
    profile: { name: "10. Profile & Badges", component: <ProfileScreen onNavigate={setCurrentScreen} /> },
    badgeGallery: { name: "10b. Badge Gallery", component: <BadgeGalleryScreen onNavigate={setCurrentScreen} /> },
    certificateDetail: { name: "10c. Certificate Detail", component: <CertificateDetailScreen onNavigate={setCurrentScreen} /> },
    leaderboard: { name: "11. Leaderboard", component: <LeaderboardScreen onNavigate={setCurrentScreen} /> },
    notifications: { name: "11b. Notifications", component: <NotificationsScreen onNavigate={setCurrentScreen} /> },
    settings: { name: "12. Settings", component: <SettingsScreen onNavigate={setCurrentScreen} /> },
    premium: {
      name: "13. Premium Upgrade",
      component: (
        <div style={{ position: "relative", width: "390px", height: "844px", backgroundColor: "#FFFDF5" }}>
          <PremiumUpgrade />
        </div>
      ),
    },
    paymentCheckout: { name: "13b. Payment Checkout", component: <PaymentCheckoutScreen onNavigate={setCurrentScreen} /> },
    searchResults: { name: "13c. Search Results", component: <SearchResultsScreen onNavigate={setCurrentScreen} /> },
    progressAnalytics: { name: "13d. Progress Analytics", component: <ProgressAnalyticsScreen onNavigate={setCurrentScreen} /> },
    helpFAQ: { name: "13e. Help & FAQ", component: <HelpFAQScreen onNavigate={setCurrentScreen} /> },
    friendsSocial: { name: "13f. Friends & Social", component: <FriendsSocialScreen onNavigate={setCurrentScreen} /> },
    skillAssessment: { name: "13g. Skill Assessment", component: <SkillAssessmentScreen onNavigate={setCurrentScreen} /> },
    // Admin
    admin: { name: "14. Admin Dashboard", component: <AdminDashboard onNavigate={setCurrentScreen} />, desktop: true },
    adminCourses: { name: "14b. Admin Courses", component: <AdminCoursesScreen onNavigate={setCurrentScreen} />, desktop: true },
    adminUsers: { name: "14c. Admin Users", component: <AdminUsersScreen onNavigate={setCurrentScreen} />, desktop: true },
    adminAnalytics: { name: "14d. Admin Analytics", component: <AdminAnalyticsScreen onNavigate={setCurrentScreen} />, desktop: true },
    adminSettings: { name: "14e. Admin Settings", component: <AdminSettingsScreen onNavigate={setCurrentScreen} />, desktop: true },
    editor: { name: "15. Content Editor", component: <LessonEditor />, desktop: true },
  };

  return (
    <div style={{ display: "flex", fontFamily: "Nunito, sans-serif" }}>
      {/* Screen Selector Sidebar */}
      <div
        style={{
          width: "280px",
          height: "100vh",
          backgroundColor: "#FFFDF5",
          borderRight: "2px solid #D4A017",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <h2
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 900,
            fontSize: "18px",
            color: "#2D2006",
            marginBottom: "16px",
          }}
        >
          Mwangaza Screens
        </h2>
        <p
          style={{
            fontSize: "11px",
            color: "#7A6020",
            marginBottom: "20px",
            lineHeight: 1.5,
          }}
        >
          Click to navigate between all 31 screens
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {Object.entries(screens).map(([key, screen]) => (
            <button
              key={key}
              onClick={() => setCurrentScreen(key)}
              style={{
                padding: "10px 12px",
                backgroundColor: currentScreen === key ? "#FEF5D4" : "transparent",
                border: currentScreen === key ? "2px solid #D4A017" : "1px solid rgba(212, 160, 23, 0.2)",
                borderRadius: "12px",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                fontWeight: currentScreen === key ? 700 : 400,
                color: currentScreen === key ? "#A67C00" : "#2D2006",
                transition: "all 0.2s",
              }}
            >
              {screen.name}
              {screen.desktop && (
                <span style={{ fontSize: "10px", marginLeft: "6px", color: "#C8930A" }}>(Desktop)</span>
              )}
            </button>
          ))}
        </div>

        <div
          style={{
            marginTop: "24px",
            padding: "12px",
            backgroundColor: "#FEF5D4",
            borderRadius: "12px",
            border: "1px solid rgba(212, 160, 23, 0.3)",
          }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, color: "#A67C00", marginBottom: "6px" }}>
            ✓ Design System Complete
          </p>
          <ul style={{ fontSize: "10px", color: "#7A6020", marginLeft: "16px", lineHeight: 1.6 }}>
            <li>31 production-ready screens</li>
            <li>40+ reusable components</li>
            <li>Consistent gold palette</li>
            <li>Nunito typography</li>
            <li>4px spacing grid</li>
          </ul>
        </div>
      </div>

      {/* Screen Display */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F1E8",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            borderRadius: screens[currentScreen as keyof typeof screens]?.desktop ? "0" : "44px",
            overflow: "hidden",
          }}
        >
          {screens[currentScreen as keyof typeof screens]?.component}
        </div>
      </div>
    </div>
  );
}
