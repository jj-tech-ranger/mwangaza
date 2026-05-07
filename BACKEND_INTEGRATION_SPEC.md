# Backend Integration Specification & Data Flow

## Overview
This document outlines the backend integration points for the Mwangaza frontend. All 12 screens are designed to work seamlessly with REST/GraphQL APIs without requiring code changes to the UI layer.

## Architecture Pattern

### Data Flow
```
User Interaction → Component State → API Call (SWR/React Query) → Backend API → Database
                                          ↓
                                    UI Update (Real-time)
```

### Integration Points (Defined)
The frontend is structured to accept data from the following endpoints. All are currently using mock/static data.

---

## Screen-by-Screen Integration Map

### 1. Splash Screen (/)
**Purpose:** Immediate loading state with branding  
**Current State:** Static splash with hardcoded animation  
**Integration Points:** None (purely UI presentation)

```typescript
// No backend calls needed
// Flows to: /onboarding (first time) or /dashboard (returning user)
```

### 2. Onboarding Carousel (/onboarding)
**Purpose:** 3-slide introduction for new users  
**Current State:** Static slides with slide navigation  
**Integration Points:** None required for initial MVP

```typescript
// Possible future integration:
// POST /api/users/onboarding-complete
//   → Marks user as onboarded, redirects to /auth
```

### 3. Sign Up / Sign In (/auth)
**Purpose:** User authentication  
**Current State:** Form with tab switching  
**Integration Points:**

#### Sign Up Flow
```typescript
interface SignUpRequest {
  email: string;
  password: string;
  fullName: string;
  grade?: number; // 1-12
}

interface SignUpResponse {
  userId: string;
  token: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    grade?: number;
    createdAt: string;
  }
}

// POST /api/auth/signup
// Handles: User creation, password hashing, JWT token generation
// Response: User profile + auth token
// Error Codes: 409 (duplicate email), 400 (validation error)
```

#### Sign In Flow
```typescript
interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  userId: string;
  token: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    grade?: number;
  }
}

// POST /api/auth/signin
// Handles: Credential validation, JWT generation
// Response: User profile + auth token
// Error Codes: 401 (invalid credentials), 404 (user not found)
```

**Component Update Location:** `/apps/web/components/auth-form.tsx`  
**Required Changes:**
- Add form submission handler with API call
- Handle loading state (button disabled)
- Display error messages from API
- Store JWT in localStorage/cookies
- Redirect on success to `/dashboard`

### 4. Dashboard (/dashboard)
**Purpose:** Home screen showing daily goal and courses  
**Current State:** Mock data with hardcoded courses  
**Integration Points:**

#### Get User Progress
```typescript
interface UserProgress {
  userId: string;
  dailyGoalXP: number;
  dailyGoalCompleted: number;
  totalXP: number;
  streak: number;
  lastActiveDate: string;
  level: number;
}

// GET /api/users/me/progress
// Auth Required: Yes (Bearer token)
// Cache: 5 minutes (SWR revalidateOnFocus)
```

#### Get Enrolled Courses
```typescript
interface CourseProgress {
  courseId: string;
  courseTitle: string;
  icon: string; // emoji or URL
  color?: string; // hex or color name
  completedModules: number;
  totalModules: number;
  progress: number; // 0-100
  currentModule: number; // 1-based index
}

// GET /api/users/me/courses
// Auth Required: Yes
// Returns: Array<CourseProgress> sorted by lastAccessed
// Cache: 5 minutes
```

**Component Update Location:** `/apps/web/app/dashboard/page.tsx`  
**Required Changes:**
- Replace mock courses array with API call using SWR
- Add loading skeleton for course cards
- Add error boundary for failed requests
- Add pull-to-refresh functionality
- Cache with SWR: `useSWR('/api/users/me/courses', fetcher)`

**Data Structure Current (Mock):**
```typescript
const courses = [
  {
    name: 'Financial Literacy',
    icon: '💰',
    color: '#22C55E',
    module: 1,
    totalModules: 6,
    progress: 65,
  },
  // ...
];
```

**Data Structure Expected (API):**
```typescript
{
  courseId: "basic-math",
  courseTitle: "Basic Math",
  icon: "🔢",
  color: "#D4A017",
  completedModules: 1,
  totalModules: 6,
  progress: 17,
  currentModule: 2,
  lastAccessed: "2024-01-15T10:30:00Z"
}
```

### 5. Course Detail (/course/[courseId])
**Purpose:** Show modules within a course  
**Current State:** Mock modules with static status  
**Integration Points:**

#### Get Course Details
```typescript
interface CourseDetail {
  id: string;
  title: string;
  description: string;
  totalLessons: number;
  icon: string;
  completedModules: number;
  totalModules: number;
}

// GET /api/courses/:courseId
// Auth Required: No (but can include for personalized data)
```

#### Get Course Modules
```typescript
interface ModuleInCourse {
  number: number; // 1-based
  title: string;
  lessonCount: number;
  status: 'locked' | 'in-progress' | 'completed';
  progress?: number; // 0-100, only if in-progress
  badgeEarned?: boolean; // only if completed
  xpReward?: number;
}

// GET /api/courses/:courseId/modules
// Auth Required: Yes
// Returns: Array<ModuleInCourse>
```

**Component Update Location:** `/apps/web/app/course/page.tsx`  
**Required Changes:**
- Add useRouter() to get courseId from URL params
- Replace mock data with API calls
- Add loading states for skeleton screens
- Handle locked modules (show lock icon)
- Add badge display on completion
- Use SWR for caching: `useSWR(\`/api/courses/${courseId}/modules\`)`

**Route Update Needed:**
```typescript
// Current: /apps/web/app/course/page.tsx (no dynamic routing)
// Change to: /apps/web/app/course/[courseId]/page.tsx
// Use: const { courseId } = useParams() or params prop
```

### 6. Module Detail (/module/[moduleId])
**Purpose:** Show lessons within a module  
**Current State:** Mock lessons with static status  
**Integration Points:**

#### Get Module Details
```typescript
interface ModuleDetail {
  id: string;
  courseId: string;
  title: string;
  icon: string;
  description: string;
  completedLessons: number;
  totalLessons: number;
}

// GET /api/modules/:moduleId
```

#### Get Module Lessons
```typescript
interface LessonInModule {
  number: number; // 1-based
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  xpReward?: number;
  estimatedDuration?: number; // minutes
}

// GET /api/modules/:moduleId/lessons
// Auth Required: Yes
```

**Component Update Location:** `/apps/web/app/module/page.tsx`  
**Required Changes:**
- Add dynamic routing with moduleId parameter
- Replace mock data with API calls
- Show completed/current/upcoming status
- Display XP rewards
- Add time estimates if available
- Use SWR: `useSWR(\`/api/modules/${moduleId}/lessons\`)`

**Route Update Needed:**
```typescript
// Change to: /apps/web/app/module/[moduleId]/page.tsx
```

### 7. Lesson Screen (/lesson/[lessonId])
**Purpose:** Learn section with worked examples  
**Current State:** Hardcoded worked examples (34+22=56, 47+31=78)  
**Integration Points:**

#### Get Lesson Content
```typescript
interface WorkedExample {
  id: number;
  problem: string;
  answer: string;
  explanation: string;
}

interface LessonContent {
  id: string;
  title: string;
  moduleId: string;
  courseId: string;
  learningPoints: string[];
  workedExamples: WorkedExample[];
  estimatedTime: number; // minutes
}

// GET /api/lessons/:lessonId
// Auth Required: No (content is public)
```

**Component Update Location:** `/apps/web/app/lesson/page.tsx`  
**Required Changes:**
- Add dynamic routing with lessonId
- Replace hardcoded examples with API data
- Load worked examples dynamically
- Mark lesson as "started" via POST
- Use SWR for content caching: `useSWR(\`/api/lessons/${lessonId}\`)`

**Route Update Needed:**
```typescript
// Change to: /apps/web/app/lesson/[lessonId]/page.tsx
```

#### Mark Lesson Started (Optional)
```typescript
// POST /api/lessons/:lessonId/start
// Auth Required: Yes
// Body: { startedAt: string }
```

### 8. Quiz Screen (/quiz/[quizId])
**Purpose:** Multi-choice quiz after lesson  
**Current State:** 5 question quiz, showing Q2 with feedback  
**Integration Points:**

#### Get Quiz Questions
```typescript
interface QuizQuestion {
  id: string;
  questionNumber: number;
  question: string;
  options: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  correctOptionId: string;
  explanation: string;
  xpReward: number;
}

interface QuizData {
  id: string;
  lessonId: string;
  title: string;
  totalQuestions: number;
  timeLimit?: number; // seconds
  questions: QuizQuestion[];
}

// GET /api/quizzes/:quizId
// Auth Required: No (content is public)
// Note: Don't expose correctOptionId or explanation until answered
```

#### Submit Quiz Answer
```typescript
interface QuizAnswerRequest {
  quizId: string;
  questionId: string;
  selectedOptionId: string;
  timeSpent: number; // seconds
}

interface QuizAnswerResponse {
  isCorrect: boolean;
  correctOptionId: string;
  explanation: string;
  xpEarned: number;
}

// POST /api/quizzes/:quizId/answers
// Auth Required: Yes
// Body: QuizAnswerRequest
// Returns: QuizAnswerResponse with feedback
```

#### Submit Complete Quiz
```typescript
interface QuizSubmissionRequest {
  quizId: string;
  answers: Array<{
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
    timeSpent: number;
  }>;
  totalTimeSpent: number;
}

interface QuizSubmissionResponse {
  quizId: string;
  score: number; // 0-100
  totalXPEarned: number;
  passed: boolean;
  passingScore: number; // 60
}

// POST /api/quizzes/:quizId/submit
// Auth Required: Yes
// Body: QuizSubmissionRequest
// Returns: QuizSubmissionResponse + user progress updates
```

**Component Update Location:** `/apps/web/app/quiz/page.tsx`  
**Required Changes:**
- Add dynamic routing with quizId
- Load questions from API on mount
- Submit answer immediately on selection (POST)
- Display real-time feedback from API
- Show XP earned per question
- Calculate progress automatically
- Hide correct answer until feedback received
- Use SWR for quiz content: `useSWR(\`/api/quizzes/${quizId}\`)`

**Route Update Needed:**
```typescript
// Change to: /apps/web/app/quiz/[quizId]/page.tsx
```

**Current Mock Structure:**
```typescript
const answerOptions = [
  { id: "A", value: "78", isCorrect: true },
  { id: "B", value: "77", isCorrect: false },
  // ...
];
const totalQuestions = 5;
const currentQuestion = 2;
```

### 9. Results Screen (/results/[quizId])
**Purpose:** Celebration after quiz completion  
**Current State:** Shows score +15 XP earned, with confetti  
**Integration Points:**

#### Get Quiz Results
```typescript
interface QuizResult {
  quizId: string;
  lessonId: string;
  courseId: string;
  score: number; // 0-100
  totalXPEarned: number;
  starCount: number; // 1-3 based on score
  passedQuiz: boolean;
  currentStreak: number;
  newBadgesEarned: string[]; // badge IDs
  levelUp: boolean;
  newLevel?: number;
}

// GET /api/quizzes/:quizId/results
// Auth Required: Yes
// Returns: Quiz result summary from last submission
```

**Component Update Location:** `/apps/web/app/results/page.tsx`  
**Required Changes:**
- Load results from API on mount
- Display dynamic XP earned (animate count-up from 0)
- Show actual star count (not hardcoded 2 gold + 1 grey)
- Fetch badges earned from API
- Display streak updates from API
- Update user progress context
- Use SWR: `useSWR(\`/api/quizzes/${quizId}/results\`)`

**Route Update Needed:**
```typescript
// Change to: /apps/web/app/results/[quizId]/page.tsx
```

**Current Mock Data:**
```typescript
const xpEarned = 15;
const stars = 2; // gold
// Hardcoded streak and badge data
```

### 10. User Profile (/profile)
**Purpose:** Show user stats, badges, and certificates  
**Current State:** Mock user data (Amina, level 3, 250/500 XP)  
**Integration Points:**

#### Get User Profile
```typescript
interface UserProfile {
  userId: string;
  fullName: string;
  email: string;
  avatar?: string; // URL or initials
  level: number;
  totalXP: number;
  nextLevelXP: number; // XP needed for next level
  currentXP: number;
  streak: number;
  longestStreak: number;
  lessonsCompleted: number;
  coursesEnrolled: number;
  badgesEarned: number;
}

// GET /api/users/me/profile
// Auth Required: Yes
// Cache: 10 minutes
```

#### Get User Badges
```typescript
interface UserBadge {
  id: string;
  name: string;
  emoji: string;
  earnedAt: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface UnlockedBadges {
  earned: UserBadge[];
  locked: Array<{
    id: string;
    name: string;
    emoji: string;
    requirement: string;
  }>;
}

// GET /api/users/me/badges
// Auth Required: Yes
```

#### Get User Certificate
```typescript
interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  earnedAt: string;
  certificateUrl: string; // URL to download PDF
}

// GET /api/users/me/certificates
// Auth Required: Yes
// Returns: Array<Certificate>
```

**Component Update Location:** `/apps/web/app/profile/page.tsx`  
**Required Changes:**
- Replace mock user data with API calls
- Use multiple SWR hooks for parallel data fetching:
  - `useSWR('/api/users/me/profile')`
  - `useSWR('/api/users/me/badges')`
  - `useSWR('/api/users/me/certificates')`
- Update XP bar to show actual progress
- Show actual badge count
- Allow download/share of certificates
- Add loading skeletons
- Error boundaries for failed requests

**Current Mock Data:**
```typescript
// Hardcoded user: Amina, Level 3, 250/500 XP
// Hardcoded badges: 3 earned, 1 locked
// Hardcoded stats: 12 lessons, 2 courses, 3 badges
```

### 11. Premium Upgrade (/premium)
**Purpose:** Subscription upgrade screen  
**Current State:** Static pricing comparison  
**Integration Points:**

#### Get Pricing Plans
```typescript
interface PricingPlan {
  id: string;
  name: string; // 'Monthly' or 'Annual'
  price: number; // USD
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  discountPercentage?: number; // for annual
}

interface PremiumFeatures {
  features: Array<{
    name: string;
    free: boolean | string;
    premium: boolean | string;
  }>;
  plans: PricingPlan[];
}

// GET /api/premium/features
// Auth Required: No (public pricing)
```

#### Initiate Subscription
```typescript
interface SubscriptionRequest {
  planId: string; // 'monthly' or 'annual'
}

interface SubscriptionResponse {
  sessionId: string;
  checkoutUrl: string; // Stripe/Paddle checkout URL
}

// POST /api/premium/checkout
// Auth Required: Yes
// Body: SubscriptionRequest
// Returns: Checkout session details
// Redirects to: External payment processor
```

**Component Update Location:** `/apps/web/app/premium/page.tsx`  
**Required Changes:**
- Replace hardcoded pricing with API call
- Add loading state for plans
- On "Unlock Premium" click, call checkout API
- Redirect to payment processor (Stripe/Paddle)
- Handle post-payment redirect with success message
- Use SWR: `useSWR('/api/premium/features')`

**Current Mock Data:**
```typescript
const features = [
  { name: "All courses & lessons", free: true, premium: true },
  { name: "Daily lesson limit", free: "5/day", premium: "Unlimited" },
  // ...
];
// Hardcoded plans: Monthly $4.99, Annual $39.99
```

### 12. Admin Dashboard (/admin)
**Purpose:** Course and user management  
**Current State:** Mock data with Basic Math course (published)  
**Integration Points:**

#### Get Admin Dashboard Data
```typescript
interface AdminStats {
  totalUsers: number;
  totalCourses: number;
  totalLessons: number;
  activeUsersToday: number;
  newUsersThisWeek: number;
}

// GET /api/admin/stats
// Auth Required: Yes, Admin role
// Requires: isAdmin = true in JWT claims
```

#### Get Courses (Admin View)
```typescript
interface AdminCourse {
  id: string;
  name: string;
  slug: string;
  moduleCount: number;
  status: 'published' | 'draft';
  createdAt: string;
  updatedAt: string;
  enrollmentCount: number;
}

// GET /api/admin/courses
// Auth Required: Yes, Admin role
// Pagination: ?page=1&limit=20
// Sorting: ?sortBy=name&order=asc
```

#### Create/Update Course
```typescript
interface CourseUpdateRequest {
  name: string;
  slug: string;
  description?: string;
}

// POST /api/admin/courses (create)
// PATCH /api/admin/courses/:courseId (update)
// DELETE /api/admin/courses/:courseId (soft delete)
// Auth Required: Yes, Admin role
```

**Component Update Location:** `/apps/web/app/admin/page.tsx`  
**Required Changes:**
- Add auth check for admin role (redirect if not admin)
- Replace mock courses with API calls
- Add SWR for courses: `useSWR('/api/admin/courses')`
- Implement add/edit/delete functionality with API calls
- Add confirmation dialogs for destructive actions
- Show loading states during operations
- Add pagination support
- Add search/filter by course name

**Current Mock Data:**
```typescript
const courses = [
  { id: 1, name: "Basic Math", slug: "basic-math", modules: 6, status: "published" },
  { id: 2, name: "English Communication", slug: "english-comm", modules: 0, status: "draft" },
  // ...
];
```

### 13. 404 Error Page (/not-found)
**Purpose:** Custom 404 error handler  
**Current State:** "Lost in Darkness" theme with navigation  
**Integration Points:** None (no backend calls needed)

---

## API Response Patterns

### Standard Success Response
```typescript
interface ApiResponse<T> {
  success: true;
  data: T;
  timestamp: string;
}
```

### Standard Error Response
```typescript
interface ApiError {
  success: false;
  error: {
    code: string; // e.g., 'VALIDATION_ERROR', 'UNAUTHORIZED'
    message: string;
    details?: Record<string, string[]>; // field-level errors
  };
  timestamp: string;
}
```

### HTTP Status Codes
- 200: Success
- 201: Created
- 400: Bad Request (validation error)
- 401: Unauthorized (missing/invalid token)
- 403: Forbidden (insufficient permissions)
- 404: Not Found (resource doesn't exist)
- 409: Conflict (e.g., duplicate email)
- 500: Server Error

---

## Data Fetching Setup (Recommended)

### 1. Environment Variables
```env
NEXT_PUBLIC_API_URL=https://api.mwangaza.com
NEXT_PUBLIC_API_VERSION=v1
```

### 2. API Client Setup
```typescript
// /apps/web/lib/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth and redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### 3. SWR Fetcher
```typescript
// /apps/web/lib/fetcher.ts
import apiClient from './api';

export const fetcher = (url: string) => 
  apiClient.get(url).then(res => res.data);
```

### 4. Usage in Components
```typescript
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function Dashboard() {
  const { data: courses, error, isLoading } = useSWR(
    '/courses',
    fetcher,
    { revalidateOnFocus: true }
  );

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <ErrorBoundary error={error} />;

  return (
    // Render courses
  );
}
```

---

## State Management

### Global User Context (Recommended)
```typescript
// /apps/web/context/user-context.tsx
import { createContext, useContext } from 'react';

interface UserContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { data: user, mutate } = useSWR('/users/me', fetcher);

  const logout = () => {
    localStorage.removeItem('authToken');
    mutate(null);
    router.push('/auth');
  };

  return (
    <UserContext.Provider value={{ user, loading: !user && !error, logout, ... }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
```

---

## Summary: Integration Checklist

- [ ] Set up API client with axios/fetch
- [ ] Configure SWR for data fetching
- [ ] Create UserProvider for auth state
- [ ] Update Dashboard (/dashboard) with course API
- [ ] Update Course Detail with modules API
- [ ] Update Module Detail with lessons API
- [ ] Update Lesson with content API
- [ ] Update Quiz with questions & submission API
- [ ] Update Results with quiz results API
- [ ] Update Profile with user data API
- [ ] Update Premium with pricing API
- [ ] Update Admin Dashboard with courses API
- [ ] Add error boundaries for failed requests
- [ ] Add loading skeletons for all data-loaded screens
- [ ] Test all API integrations end-to-end
- [ ] Add offline mode support (cached responses)
- [ ] Monitor performance (Lighthouse, Core Web Vitals)

---

## Notes

- All API endpoints are prefixed with `/api/v1`
- Authentication uses JWT Bearer tokens
- All timestamps are ISO 8601 format
- All prices are in USD unless otherwise specified
- Admin endpoints require `isAdmin: true` in JWT claims
- CORS is configured to allow frontend domain
- Rate limiting: 100 requests per minute per user
- Pagination limit: max 100 items per request
