// User & Authentication Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "student" | "teacher" | "admin";
  // TODO: Add more user fields from backend
}

// Course & Learning Types
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  level: "beginner" | "intermediate" | "advanced";
  modulesCount: number;
  duration: number; // in minutes
  // TODO: Add more course fields from backend
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  courseId: string;
  order: number;
  completed: boolean;
  // TODO: Add more lesson fields from backend
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: Question[];
  passingScore: number;
  // TODO: Add more quiz fields from backend
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  // TODO: Add more question fields from backend
}

// Achievement Types
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon?: string;
  unlockedAt?: Date;
  // TODO: Add more badge fields from backend
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  issuedAt: Date;
  certificateUrl?: string;
  // TODO: Add more certificate fields from backend
}

// Leaderboard Types
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  userName: string;
  avatar?: string;
  points: number;
  coursesCompleted: number;
  // TODO: Add more leaderboard fields from backend
}

// Profile Types
export interface UserProfile extends User {
  bio?: string;
  totalPoints: number;
  coursesCompleted: number;
  currentStreak: number;
  badges: Badge[];
  certificates: Certificate[];
  // TODO: Add more profile fields from backend
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: "achievement" | "course" | "reminder" | "social";
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  // TODO: Add more notification fields from backend
}

// Admin Types
export interface AdminStats {
  totalUsers: number;
  totalCourses: number;
  totalLessons: number;
  activeUsers: number;
  // TODO: Add more admin stats from backend
}

// Navigation & Routing
export type UserTab = "home" | "learn" | "leaderboard" | "profile" | "premium";
export type AdminNav = "overview" | "courses" | "users" | "analytics" | "lessons" | "settings";
