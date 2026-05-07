# Mwangaza - Architecture & User Flow Diagrams

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                   MWANGAZA FRONTEND                        │
│                  (Next.js 14 App Router)                   │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────┐  ┌──────────────────────┐  ┌─────────────────────┐
│   Clerk Auth         │  │  Next.js App Router  │  │  Tailwind CSS       │
│   (User Login)       │  │  (15 Routes)         │  │  (Design System)    │
└──────────────────────┘  └──────────────────────┘  └─────────────────────┘
         │                        │                         │
         └────────────────────────┼─────────────────────────┘
                                  │
                    ┌─────────────────────────────┐
                    │   Global State Context      │
                    │  (User, Auth, App State)    │
                    └─────────────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  Dashboard       │  │  Courses         │  │  Learning Flow   │
│  (User Hub)      │  │  (Browse)        │  │  (Learn→Quiz)    │
│                  │  │                  │  │                  │
│ - Daily Goal     │  │ - Course List    │  │ - Lesson View    │
│ - Continue Learn │  │ - Filters        │  │ - Quiz           │
│ - Course Cards   │  │ - Enroll CTA     │  │ - Results        │
└──────────────────┘  └──────────────────┘  └──────────────────┘
        │                     │                       │
        │                     │                       │
        └─────────────────────┼───────────────────────┘
                              │
                    ┌─────────────────────┐
                    │  API Calls to       │
                    │  Backend Server     │
                    │                     │
                    │  GET /api/user/*    │
                    │  GET /api/courses/*│
                    │  POST /api/quiz/*  │
                    │  etc...            │
                    └─────────────────────┘
                              │
                    ┌─────────────────────┐
                    │  Backend Database   │
                    │  (PostgreSQL/etc)   │
                    │                     │
                    │  - Users            │
                    │  - Courses          │
                    │  - Progress         │
                    │  - Quizzes          │
                    └─────────────────────┘
```

---

## Data Flow - Dashboard Screen

```
Dashboard Page Load
       │
       ▼
Is user authenticated? (Clerk)
       │
    ┌──┴──┐
    NO    YES
    │      │
   │       ▼
   │   Fetch User Data
   │   (GET /api/user/profile)
   │       │
   │    ┌──┴──────┐
   │   NO DATA   HAS DATA
   │    │          │
   │    ▼          ▼
   │  Show        Fetch
   │  "Loading"   Enrolled
   │  ─────▶     Courses
   │             │
   │          ┌──┴──────┐
   │         NO DATA   HAS DATA
   │          │          │
   │          ▼          ▼
   │        Show       Display
   │        Empty      Courses
   │        State      List
   │          │          │
   └──────────┼──────────┘
              │
              ▼
         Render Page
         (with data or
          empty state)
```

---

## Component Tree - Dashboard

```
DashboardLayout
  │
  ├─ TopBar
  │  ├─ Logo
  │  ├─ User Greeting (dynamic)
  │  └─ Settings Icon
  │
  ├─ MainContent
  │  │
  │  ├─ DailyGoalCard
  │  │  ├─ ProgressRing
  │  │  └─ XP Display
  │  │
  │  ├─ ContinueLearningCard (conditional)
  │  │  ├─ LessonThumbnail
  │  │  ├─ LessonTitle
  │  │  └─ ContinueButton
  │  │
  │  └─ CoursesSection
  │     ├─ SectionTitle
  │     └─ CourseList
  │        └─ CourseCard (repeating)
  │           ├─ CourseIcon
  │           ├─ CourseName
  │           ├─ ProgressBar
  │           └─ ModuleStatus
  │
  └─ BottomNav
     ├─ DashboardLink (active)
     ├─ CoursesLink
     ├─ ProfileLink
     └─ MoreLink
```

---

## Complete User Journey

### New User Journey (First Time)

```
┌─────────────────┐
│  App Opens      │
│  (No auth)      │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  Splash Screen                      │
│  ────────────────────────────       │
│  "Mwangaza - Lighting the path"    │
│  [Get Started button]               │
│  [Sign In link]                     │
└────────┬────────────────────────────┘
         │
         ├─[Get Started]──────────────┐
         │                            │
         ▼                            ▼
    ┌─────────────┐          ┌──────────────────┐
    │ Onboarding  │          │ Sign In / Up Page│
    │ Slide 1     │          │ ─────────────    │
    │ "Welcome"   │          │ [Email input]    │
    └─────┬───────┘          │ [Password input] │
          │                  │ [Sign In button] │
         [Next]              └────────┬─────────┘
          │                           │
    ┌─────▼───────┐         ┌────────▼─────────┐
    │ Onboarding  │         │ Create Account   │
    │ Slide 2     │         │ ─────────────    │
    │ "Features"  │         │ [Email input]    │
    └─────┬───────┘         │ [Password input] │
          │                 │ [Confirm pwd]    │
         [Next]             │ [Create btn]     │
          │                 └────────┬─────────┘
    ┌─────▼───────────┐             │
    │ Onboarding      │             │
    │ Slide 3         │             │
    │ "Ready?"        │             │
    │ [Create Account]│             │
    └─────┬───────────┘             │
          │                          │
          └──────────┬───────────────┘
                     │
                     ▼
          ┌─────────────────────┐
          │  Clerk Auth         │
          │  (handles signup)   │
          └─────┬───────────────┘
                │
                ▼
          ┌──────────────────────┐
          │ User Created         │
          │ (Clerk saves user)   │
          └─────┬────────────────┘
                │
                ▼
          ┌──────────────────────┐
          │  Dashboard           │
          │  (Empty - no courses)│
          │                      │
          │  "No courses         │
          │   enrolled yet"      │
          │                      │
          │  [Explore Courses]   │
          └─────┬────────────────┘
                │
                ▼
          ┌──────────────────────┐
          │  Courses Catalog     │
          │  (Browse available)  │
          └─────┬────────────────┘
                │
                ▼
          ┌──────────────────────┐
          │  Course Detail       │
          │  (View modules)      │
          │                      │
          │  [Enroll button]     │
          └─────┬────────────────┘
                │
                ▼
          ┌──────────────────────┐
          │  Enroll Confirmed    │
          │  (POST /api/enroll)  │
          └─────┬────────────────┘
                │
                ▼
          ┌──────────────────────┐
          │  Learning Begins     │
          │  (Lesson → Quiz...)  │
          └──────────────────────┘
```

### Existing User Journey (Return)

```
┌─────────────────┐
│  App Opens      │
│  (Has auth)     │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  Splash Screen                      │
│  (quickly transitions)              │
└────────┬────────────────────────────┘
         │
         ▼ (auto redirect)
┌─────────────────────────────────────┐
│  Dashboard                          │
│  ────────────────────────────────   │
│  "Hi, Amina" (from user data)      │
│                                     │
│  ┌─────────────────────────────┐   │
│  │  Daily Goal: 0/3            │   │
│  │  [Ring progress]            │   │
│  └─────────────────────────────┘   │
│                                     │
│  Continue Learning                  │
│  [Lesson card: Tap to continue]    │
│                                     │
│  Your Courses                       │
│  ┌─────────┐  ┌─────────┐         │
│  │Course 1 │  │Course 2 │         │
│  │Progress│  │Progress│         │
│  └─────────┘  └─────────┘         │
└────────┬────────────────────────────┘
         │
    ┌────┴────┐
    │          │
  [Continue] [New Course]
    │          │
    ▼          ▼
 Lesson    Courses
    │       Catalog
    │          │
    ├──────────┼──────────┐
    │          │          │
    ▼          ▼          ▼
  Quiz   Choose   Enroll
    │     Course     │
    │       │        │
    └───┬───┴────┬───┘
        │        │
        ▼        ▼
      Results Dashboard
        │
        ▼
   Continue →
   (back to
    dashboard)
```

---

## Admin Flow

```
┌─────────────────┐
│ Admin User      │
│ (role="admin")  │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────┐
│  Admin Dashboard                │
│  /admin                         │
│                                 │
│  Sidebar Navigation:            │
│  ✓ Courses   (active)          │
│  □ Modules                     │
│  □ Lessons                     │
│  □ Users                       │
└────────┬────────────────────────┘
         │
    ┌────┴────┬────────┬───────┐
    │          │        │       │
    ▼          ▼        ▼       ▼
 Courses   Modules Lessons   Users
   │          │        │       │
   │       [Add]    [Add]   [View]
   │        │        │       │
   ├─[Add]─┤    [List]     [List]
   │        │        │       │
   │    [List]   [Edit]  [Manage]
   │        │    [Delete]
   │    [Edit]
   │    [Publish]
   │    [Archive]
   │
   ▼
CREATE/EDIT COURSE MODAL
├─ Course Title
├─ Description
├─ Status (Draft/Published)
├─ Color Picker
└─ [Save] [Cancel]
   │
   ├─ POST /api/admin/courses
   │  (Create)
   │
   └─ PATCH /api/admin/courses/[id]
      (Update)
```

---

## State Management Architecture

```
┌─────────────────────────────────────────────┐
│        Global App Context                  │
│  (AppContext/useAppContext hook)           │
│                                             │
│  ├─ user: {                                │
│  │    id, name, email, level, xp,         │
│  │    avatar, createdAt                    │
│  │  }                                       │
│  │                                          │
│  ├─ auth: {                                │
│  │    isLoading, isAuthenticated,         │
│  │    user, error                          │
│  │  }                                       │
│  │                                          │
│  ├─ courses: {                             │
│  │    enrolled: Course[],                  │
│  │    current: Course | null,              │
│  │    isLoading, error                     │
│  │  }                                       │
│  │                                          │
│  └─ progress: {                            │
│      currentLesson: Lesson | null,         │
│      dailyGoal: { completed, total },      │
│      stats: { totalLessons, badges, ... }  │
│    }                                        │
│                                             │
└─────────────────────────────────────────────┘

  ┌─────────┬────────┬────────┬──────────┐
  │         │        │        │          │
  ▼         ▼        ▼        ▼          ▼
Pages → Components → Hooks → Utilities → API
(consume) (display) (fetch)  (helpers) (calls)

Example flow:
1. Dashboard page mounts
2. useEffect triggers data fetch
3. Call fetch('/api/user/profile')
4. Data returns → Update context
5. Components subscribe to context
6. Components re-render with data
7. Empty state or data displays
```

---

## Error Handling & Fallback Strategy

```
API Request
     │
     ▼
Success (200-299)
     │
     ├─ Valid data structure?
     │  │
     │  YES─ Update state
     │       Display content
     │
     └─ NO─ Log error
           Show generic error
           Retry button
           
Error (4xx, 5xx)
     │
     ├─ 401 Unauthorized
     │  └─ Redirect to login
     │
     ├─ 403 Forbidden
     │  └─ Show access denied
     │
     ├─ 404 Not found
     │  └─ Show empty state
     │
     └─ 5xx Server error
        └─ Show retry button
           
Network Error
     │
     └─ Show offline message
        Retry button
        Queue for sync later
```

---

## Empty State Patterns

### Pattern 1: No Data (After fetch returns empty)

```
┌────────────────────────────┐
│  📚                        │
│  (icon)                    │
│                            │
│  No courses enrolled yet   │
│  (main message)            │
│                            │
│  Explore our catalog to    │
│  get started               │
│  (secondary text)          │
│                            │
│  [Explore Courses]         │
│  (CTA button)              │
└────────────────────────────┘
```

### Pattern 2: Loading (Before fetch completes)

```
┌────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░  │
│  (skeleton card)           │
│  ░░░░░░░░░░░░░░░░░░░░░░  │
│                            │
│  ░░░░░░░░░░░░░░░░░░░░░░  │
│  (skeleton card)           │
│  ░░░░░░░░░░░░░░░░░░░░░░  │
│                            │
│  ░░░░░░░░░░░░░░░░░░░░░░  │
│  (skeleton card)           │
│  ░░░░░░░░░░░░░░░░░░░░░░  │
└────────────────────────────┘
```

### Pattern 3: Error (Fetch failed)

```
┌────────────────────────────┐
│  ⚠️                        │
│                            │
│  Something went wrong      │
│                            │
│  Please try again or       │
│  contact support           │
│                            │
│  [Retry]                   │
│  Support link              │
└────────────────────────────┘
```

---

## API Integration Checklist

```
BEFORE Integration
─────────────────
□ Frontend builds with 0 errors
□ All routes working
□ No mock data in code
□ Empty states implemented
□ Loading states prepared
□ Error states prepared
□ TODO comments with endpoints
□ Types prepared for data
□ Responsive design verified
□ Accessibility checked
□ Clerk auth ready

DURING Integration
──────────────────
□ Create API endpoints
□ Return proper JSON structure
□ Implement error codes
□ Add rate limiting
□ Implement authentication
□ Add input validation
□ Setup CORS
□ Add logging

AFTER Integration
─────────────────
□ Test with real data
□ Verify loading states
□ Verify error states
□ Test edge cases
□ Performance test
□ Load test
□ Security audit
□ Deploy to staging
□ UAT testing
□ Deploy to production
```

---

## Summary

This architecture document provides:

✅ System overview diagram  
✅ Data flow visualization  
✅ Component hierarchy  
✅ Complete user journeys (new & returning)  
✅ Admin management flow  
✅ State management structure  
✅ Error handling strategy  
✅ Empty state patterns  
✅ Integration checklist  

All screens are designed to work with dynamic backend data while gracefully handling absence of data through empty states, loading skeletons, and error displays.
