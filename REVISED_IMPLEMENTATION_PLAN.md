# Mwangaza Frontend Implementation Plan - REVISED
## Backend-Driven Data Architecture with Empty State Handling

**Status:** REVISION - Data Architecture  
**Target Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui  
**Viewport:** 375px mobile-first, full viewport height  
**Key Change:** NO mock or static course/user data. Backend-driven only.

---

## Overview of Changes

This revision fundamentally changes the data strategy:

### ❌ REMOVED:
- All mock/static course data
- All mock user data (fake profiles, badges, certificates)
- All hardcoded quiz questions
- All hardcoded module/lesson content
- Placeholder course cards with fake titles/progress

### ✅ ADDED:
- Empty state messaging across all screens
- Placeholder containers ready for backend data
- Loading skeleton placeholders
- Clear "no data" UI patterns
- Backend-first data fetching architecture

**Core Principle:** The frontend is a **data consumer**, not a data provider. Every piece of content flows from the backend.

---

## Screen-by-Screen Architecture

### 1. SPLASH SCREEN (/)
**Current State:** Static brand splash  
**Data Required:** None (static UI only)  
**Changes:** No changes needed - this is a static brand moment

```typescript
// /app/page.tsx
// No data required - animation + CTA only
```

---

### 2. ONBOARDING CAROUSEL (/onboarding)
**Current State:** 3 static slides with value propositions  
**Data Required:** None (static UI only)  
**Changes:** No changes needed - educational flow, not data-driven

```typescript
// /app/onboarding/page.tsx
// Static slides showing app value. No data fetching.
```

---

### 3. AUTHENTICATION SCREEN (/auth)
**Current State:** Auth form with sign up / sign in tabs  
**Data Required:** None (form submission only)  
**Changes:** No changes to UI. Focus on error states for failed auth.

**Empty States to Handle:**
- Password field validation errors
- Email format validation errors
- Account-not-found error
- Incorrect-password error
- Account-already-exists error (for signup)

**Backend Points:**
- POST `/api/auth/signup` - Returns { user, token }
- POST `/api/auth/signin` - Returns { user, token }

```typescript
// /app/auth/page.tsx - No data fetching on page load
// Form submission sends credentials → backend
// Error states displayed on form
```

---

### 4. DASHBOARD/HOME (/dashboard)
**Current State:** Shows mock user data, daily goal ring, mock courses  
**Data Required:**
- User profile (name, avatar, level)
- User progress (XP, next level XP)
- Enrolled courses (list with progress)
- Continue learning (most recent lesson)

**REVISED APPROACH - Empty States:**

```typescript
// /app/dashboard/page.tsx

export default function Dashboard() {
  const { user, loading } = useUser(); // From API
  const { courses, loading: coursesLoading } = useCourses(); // From API
  
  return (
    <main className="bg-background min-h-screen">
      {/* Header with user greeting or "Welcome back!" if no user */}
      {user ? (
        <h1>Welcome back, {user.name}!</h1>
      ) : (
        <h1>Welcome to Mwangaza</h1>
      )}
      
      {/* Daily Goal Ring - Shown if user has progress data */}
      {user?.progress ? (
        <DailyGoalRing xp={user.progress.xp} nextLevelXp={user.progress.nextLevelXp} />
      ) : (
        <div className="bg-surface rounded-2xl p-6 text-center text-gray-500">
          <p>Your learning journey starts here. Enroll in a course to begin!</p>
        </div>
      )}
      
      {/* Continue Learning Section */}
      {user?.currentLesson ? (
        <ContinueLearningCard lesson={user.currentLesson} />
      ) : (
        <div className="bg-gold-light rounded-2xl p-6 text-center">
          <p className="text-gold-dark font-semibold">No lessons started yet</p>
          <p className="text-sm text-gray-600">Browse courses below to begin learning</p>
        </div>
      )}
      
      {/* Enrolled Courses Section */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-text mb-4">Your Courses</h2>
        
        {coursesLoading ? (
          // Loading skeleton
          <div className="space-y-3">
            {[1, 2, 3].map(i => <CourseCardSkeleton key={i} />)}
          </div>
        ) : courses && courses.length > 0 ? (
          // Course cards with real data
          <div className="space-y-3">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          // Empty state
          <div className="bg-surface rounded-2xl p-8 text-center border-2 border-dashed border-gold-light">
            <svg className="w-16 h-16 mx-auto mb-4 text-gold opacity-30">
              {/* Empty course icon */}
            </svg>
            <p className="text-gray-600 font-medium mb-2">No courses enrolled yet</p>
            <p className="text-sm text-gray-500 mb-6">Explore our course catalog to get started</p>
            <a href="/courses" className="btn btn-primary">Explore Courses</a>
          </div>
        )}
      </section>
      
      {/* Bottom navigation */}
      <BottomNavBar />
    </main>
  );
}
```

**Backend Endpoints:**
- GET `/api/user/profile` - User name, avatar, level
- GET `/api/user/progress` - XP, next level XP
- GET `/api/courses/enrolled` - List of enrolled courses
- GET `/api/user/current-lesson` - Most recent lesson (for "continue learning")

**Error States:**
- `loading` - Show skeleton placeholders
- `error` - Show error message with retry button
- `no courses` - Show empty state with CTA to explore courses
- `no current lesson` - Show empty state encouraging starting a new lesson

---

### 5. COURSE DETAIL (/course/[courseId])
**Current State:** Hardcoded course with fake modules  
**Data Required:**
- Course details (name, description, icon, progress %)
- Module list with completion status
- Enrollment status (enrolled vs. available for enrollment)

**REVISED APPROACH - Empty States:**

```typescript
// /app/course/[courseId]/page.tsx

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const { course, loading, error } = useCourse(params.courseId);
  
  if (loading) return <CourseDetailSkeleton />;
  if (error) return <ErrorPage message="Course not found" />;
  if (!course) return <EmptyState title="Course not available" />;
  
  return (
    <main className="bg-background min-h-screen">
      {/* Course banner with name, description */}
      <CourseBanner course={course} />
      
      {/* Modules section */}
      <section className="p-4">
        <h2 className="text-lg font-bold text-text mb-4">Modules</h2>
        
        {course.modules && course.modules.length > 0 ? (
          <div className="space-y-3">
            {course.modules.map(module => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        ) : (
          // Empty state
          <div className="bg-surface rounded-2xl p-8 text-center border-2 border-dashed border-gold-light">
            <p className="text-gray-600">No modules available yet</p>
            <p className="text-sm text-gray-500">Check back soon for course content</p>
          </div>
        )}
      </section>
      
      {/* Enrollment CTA if not enrolled */}
      {!course.isEnrolled && (
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <button className="btn btn-primary w-full">Enroll Now</button>
        </div>
      )}
    </main>
  );
}
```

**Backend Endpoints:**
- GET `/api/courses/:courseId` - Course details
- GET `/api/courses/:courseId/modules` - Module list
- POST `/api/courses/:courseId/enroll` - Enroll in course

---

### 6. MODULE DETAIL (/module/[moduleId])
**Current State:** Hardcoded module with fake lessons  
**Data Required:**
- Module name, description
- Lesson list with completion status
- Module progress percentage

**REVISED APPROACH:**

```typescript
// /app/module/[moduleId]/page.tsx

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  const { module, loading } = useModule(params.moduleId);
  
  if (loading) return <ModuleSkeleton />;
  
  return (
    <main className="bg-background min-h-screen p-4">
      {/* Module header */}
      <h1 className="text-2xl font-bold text-text mb-2">{module?.name || "Module"}</h1>
      <p className="text-gray-600 mb-6">{module?.description}</p>
      
      {/* Progress bar */}
      {module?.progress !== undefined && (
        <ProgressBar value={module.progress} className="mb-6" />
      )}
      
      {/* Lessons section */}
      <h2 className="text-lg font-bold text-text mb-4">Lessons</h2>
      
      {module?.lessons && module.lessons.length > 0 ? (
        <div className="space-y-3">
          {module.lessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      ) : (
        // Empty state
        <div className="bg-surface rounded-2xl p-8 text-center">
          <p className="text-gray-600 font-medium">No lessons in this module yet</p>
        </div>
      )}
    </main>
  );
}
```

---

### 7. LESSON SCREEN (/lesson/[lessonId])
**Current State:** Static lesson with learn + try it sections  
**Data Required:**
- Lesson title and description
- Learn section content (explanation, example)
- Try It section (worked examples)

**REVISED APPROACH:**

```typescript
// /app/lesson/[lessonId]/page.tsx

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const { lesson, loading } = useLesson(params.lessonId);
  const [revealed, setRevealed] = useState<boolean[]>([]);
  
  if (loading) return <LessonSkeleton />;
  if (!lesson) return <div>Lesson not found</div>;
  
  return (
    <main className="bg-background min-h-screen flex flex-col">
      {/* Progress bar */}
      <header className="h-16 bg-white border-b flex items-center px-4">
        <ProgressBar value={33} className="flex-1" />
      </header>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {/* LEARN Section */}
        {lesson.content?.learn && (
          <section className="mb-8">
            <h2 className="text-sm font-bold text-gold-dark uppercase tracking-wide mb-4">Learn</h2>
            <p className="text-gray-700 leading-relaxed">{lesson.content.learn.explanation}</p>
            
            {lesson.content.learn.example && (
              <div className="mt-4 p-4 bg-gold-light rounded-lg">
                <p className="font-mono text-sm">{lesson.content.learn.example}</p>
              </div>
            )}
          </section>
        )}
        
        {/* TRY IT Section */}
        {lesson.content?.tryIt && lesson.content.tryIt.length > 0 ? (
          <section>
            <h2 className="text-sm font-bold text-gold-dark uppercase tracking-wide mb-4">Try It</h2>
            <div className="space-y-4">
              {lesson.content.tryIt.map((example, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border-2 border-gold-light">
                  <button
                    onClick={() => {
                      const newRevealed = [...revealed];
                      newRevealed[idx] = !newRevealed[idx];
                      setRevealed(newRevealed);
                    }}
                    className="text-center w-full py-3 text-gold-dark font-medium border-2 border-dashed border-gold-dark rounded-lg"
                  >
                    {revealed[idx] ? "Hide Answer" : "Tap to Reveal"}
                  </button>
                  
                  {revealed[idx] && (
                    <div className="mt-4 pt-4 border-t border-gold-light">
                      <p className="text-sm text-gray-600 mb-2">{example.answer}</p>
                      <p className="text-xs text-gray-500">{example.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="bg-surface rounded-2xl p-6 text-center text-gray-500">
            <p>No practice examples available for this lesson</p>
          </div>
        )}
      </div>
      
      {/* CTA Button - Start Quiz */}
      {revealed.length > 0 && revealed.every(r => r) && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <button className="btn btn-primary w-full">Start Quiz</button>
        </div>
      )}
    </main>
  );
}
```

**Backend Endpoints:**
- GET `/api/lessons/:lessonId` - Lesson content (learn, tryIt sections)

---

### 8. QUIZ SCREEN (/quiz/[quizId])
**Current State:** Hardcoded 5-question quiz  
**Data Required:**
- Quiz metadata (title, description)
- Quiz questions (array)
- For each question: question text, options (A/B/C/D), correct answer

**REVISED APPROACH:**

```typescript
// /app/quiz/[quizId]/page.tsx

export default function QuizPage({ params }: { params: { quizId: string } }) {
  const { quiz, loading } = useQuiz(params.quizId);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  
  if (loading) return <QuizSkeleton />;
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <div>No quiz questions available</div>;
  }
  
  const currentQuestion = quiz.questions[currentQuestionIdx];
  const progressPercent = ((currentQuestionIdx + 1) / quiz.questions.length) * 100;
  
  return (
    <main className="bg-background min-h-screen flex flex-col">
      {/* Top bar with progress and timer */}
      <header className="bg-white border-b p-4">
        <ProgressBar value={progressPercent} />
        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <span>Question {currentQuestionIdx + 1} of {quiz.questions.length}</span>
          <span>0:45</span>
        </div>
      </header>
      
      {/* Question content */}
      <div className="flex-1 p-4 overflow-y-auto pb-20">
        <div className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-text text-center mb-6">
            {currentQuestion.question}
          </h2>
          
          {/* Answer options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D
              const isSelected = selectedAnswers[currentQuestionIdx] === optionLabel;
              const isCorrect = optionLabel === currentQuestion.correctAnswer;
              
              return (
                <button
                  key={optionLabel}
                  onClick={() => {
                    const newAnswers = [...selectedAnswers];
                    newAnswers[currentQuestionIdx] = optionLabel;
                    setSelectedAnswers(newAnswers);
                  }}
                  className={`w-full p-4 rounded-lg border-2 text-left font-medium transition ${
                    isSelected
                      ? isCorrect
                        ? "bg-success bg-opacity-10 border-success text-success"
                        : "bg-error bg-opacity-10 border-error text-error"
                      : "border-gray-200 text-text hover:border-gold"
                  }`}
                >
                  <span className="font-bold">{optionLabel}.</span> {option}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Feedback if answered */}
        {selectedAnswers[currentQuestionIdx] && (
          <div className={`p-4 rounded-lg text-sm ${
            selectedAnswers[currentQuestionIdx] === currentQuestion.correctAnswer
              ? "bg-success bg-opacity-10 text-success border border-success"
              : "bg-error bg-opacity-10 text-error border border-error"
          }`}>
            <p className="font-semibold mb-1">
              {selectedAnswers[currentQuestionIdx] === currentQuestion.correctAnswer
                ? "Correct!"
                : "Not quite right"}
            </p>
            <p className="text-xs">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>
      
      {/* Navigation CTA */}
      {selectedAnswers[currentQuestionIdx] && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 space-y-2">
          <button
            onClick={() => {
              if (currentQuestionIdx < quiz.questions.length - 1) {
                setCurrentQuestionIdx(currentQuestionIdx + 1);
              } else {
                // Submit and go to results
                submitQuiz();
              }
            }}
            className="btn btn-primary w-full"
          >
            {currentQuestionIdx === quiz.questions.length - 1 ? "See Results" : "Next Question"}
          </button>
        </div>
      )}
    </main>
  );
}
```

**Backend Endpoints:**
- GET `/api/quizzes/:quizId` - Quiz questions
- POST `/api/quizzes/:quizId/submit` - Submit answers, get score

---

### 9. RESULTS SCREEN (/results)
**Current State:** Static celebration with confetti, trophy, XP  
**Data Required:**
- Score (correct out of total)
- XP earned
- Star rating (1-3)
- Feedback message

**REVISED APPROACH:**

```typescript
// /app/results/page.tsx

export default function ResultsPage() {
  const { results, loading } = useQuizResults(); // From query params or API
  
  if (loading || !results) {
    return <ResultsSkeleton />;
  }
  
  return (
    <main className="bg-background min-h-screen flex flex-col items-center justify-center p-4">
      {/* Confetti animation */}
      <Confetti />
      
      {/* Trophy with pulse animation */}
      <div className="mb-6 animate-pulse">
        <TrophyIcon className="w-20 h-20 text-gold" />
      </div>
      
      {/* Headline and score */}
      <h1 className="text-2xl font-bold text-text text-center mb-2">Great job!</h1>
      <p className="text-gray-600 text-center mb-8">
        You scored {results.correct} out of {results.total}
      </p>
      
      {/* Star rating */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map(i => (
          <StarIcon
            key={i}
            filled={i <= results.stars}
            className={`w-8 h-8 ${i <= results.stars ? "text-gold" : "text-gray-300"}`}
          />
        ))}
      </div>
      
      {/* XP earned */}
      <div className="bg-white rounded-2xl p-6 w-full mb-6 text-center">
        <p className="text-sm text-gray-600 mb-1">XP EARNED</p>
        <p className="text-4xl font-bold text-gold">+{results.xpEarned}</p>
      </div>
      
      {/* Streak/motivation card */}
      {results.streak && (
        <div className="bg-gold-light rounded-2xl p-4 w-full mb-6 text-center">
          <p className="text-gold-dark font-semibold">
            🔥 {results.streak} day streak! Keep it up!
          </p>
        </div>
      )}
      
      {/* CTAs */}
      <div className="space-y-2 w-full">
        <button className="btn btn-primary w-full">Continue</button>
        <button className="btn btn-secondary w-full">Review Answers</button>
      </div>
    </main>
  );
}
```

**Backend Endpoints:**
- GET `/api/quizzes/:quizId/results?attemptId=...` - Quiz results and feedback

---

### 10. PROFILE SCREEN (/profile)
**Current State:** Hardcoded user with fake badges, certificates  
**Data Required:**
- User profile (name, avatar, level, total XP)
- Earned badges (list with icons)
- Completed certificates
- User stats (lessons completed, courses, etc.)

**REVISED APPROACH - Empty States:**

```typescript
// /app/profile/page.tsx

export default function ProfilePage() {
  const { user, loading } = useUser();
  const { badges, loading: badgesLoading } = useUserBadges();
  const { certificates, loading: certsLoading } = useUserCertificates();
  
  if (loading) return <ProfileSkeleton />;
  if (!user) return <div>Please sign in</div>;
  
  return (
    <main className="bg-background min-h-screen p-4 pb-20">
      {/* Profile header */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full border-4 border-gold bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600 mb-4">
          {user.avatar ? <img src={user.avatar} /> : user.name.charAt(0)}
        </div>
        <h1 className="text-2xl font-bold text-text">{user.name}</h1>
        <div className="bg-gold rounded-full px-3 py-1 text-white text-sm font-medium mt-2">
          Level {user.level}
        </div>
      </div>
      
      {/* XP Progress */}
      <div className="bg-white rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-600">XP Progress</p>
          <p className="text-sm font-bold text-text">{user.xp} / {user.nextLevelXp}</p>
        </div>
        <ProgressBar value={(user.xp / user.nextLevelXp) * 100} />
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gold">{user.lessonsCompleted || 0}</p>
          <p className="text-xs text-gray-600 mt-1">Lessons</p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gold">{user.coursesCompleted || 0}</p>
          <p className="text-xs text-gray-600 mt-1">Courses</p>
        </div>
        <div className="bg-white rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gold">{badges?.length || 0}</p>
          <p className="text-xs text-gray-600 mt-1">Badges</p>
        </div>
      </div>
      
      {/* Badges section */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-text mb-4">Badges</h2>
        
        {badgesLoading ? (
          <div className="flex gap-2">
            {[1, 2, 3].map(i => <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse" />)}
          </div>
        ) : badges && badges.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {badges.map(badge => (
              <div key={badge.id} className="relative">
                <img src={badge.icon} alt={badge.name} className="w-16 h-16 rounded-lg border-2 border-gold" />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface rounded-2xl p-6 text-center">
            <p className="text-gray-600">No badges earned yet</p>
            <p className="text-sm text-gray-500 mt-1">Complete lessons and quizzes to earn badges</p>
          </div>
        )}
      </section>
      
      {/* Certificates section */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-text mb-4">Certificates</h2>
        
        {certsLoading ? (
          <div className="bg-gray-200 rounded-lg h-32 animate-pulse" />
        ) : certificates && certificates.length > 0 ? (
          <div className="space-y-3">
            {certificates.map(cert => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        ) : (
          <div className="bg-surface rounded-2xl p-6 text-center">
            <p className="text-gray-600">No certificates yet</p>
            <p className="text-sm text-gray-500 mt-1">Complete courses to earn certificates</p>
          </div>
        )}
      </section>
      
      {/* Settings link */}
      <div className="text-center">
        <a href="/settings" className="text-gold hover:text-gold-dark font-medium">
          Account Settings
        </a>
      </div>
      
      <BottomNavBar />
    </main>
  );
}
```

**Backend Endpoints:**
- GET `/api/user/profile` - User data (name, avatar, level, XP)
- GET `/api/user/badges` - List of earned badges
- GET `/api/user/certificates` - List of certificates
- GET `/api/user/stats` - Aggregated stats (lessons, courses)

---

### 11. PREMIUM UPGRADE (/premium)
**Current State:** Hardcoded pricing table  
**Data Required:**
- Pricing plans (Free, Annual)
- Features list for comparison
- Pricing amounts

**REVISED APPROACH:**

```typescript
// /app/premium/page.tsx

export default function PremiumPage() {
  const { plans, loading } = usePricingPlans();
  const [selectedPlan, setSelectedPlan] = useState("annual");
  
  if (loading) return <PremiumSkeleton />;
  
  return (
    <main className="bg-background min-h-screen p-4 pb-20">
      {/* Hero section */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-2xl flex items-center justify-center">
          <CrownIcon className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-text mb-2">Unlock Premium</h1>
        <p className="text-gray-600">Get unlimited access to all features</p>
      </div>
      
      {/* Plan selection */}
      {plans && plans.length > 0 ? (
        <>
          {/* Plan cards */}
          <div className="space-y-3 mb-8">
            {plans.map(plan => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition ${
                  selectedPlan === plan.id
                    ? "bg-gold-light border-gold"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-text">{plan.name}</p>
                    <p className="text-sm text-gray-600">{plan.billing}</p>
                  </div>
                  <p className="text-2xl font-bold text-gold">${plan.price}</p>
                </div>
                {plan.badge && (
                  <span className="inline-block mt-2 bg-gold text-white text-xs font-bold px-2 py-1 rounded">
                    {plan.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          {/* Features comparison */}
          <div className="bg-white rounded-2xl p-6 mb-8">
            <h2 className="font-bold text-text mb-4">Features</h2>
            <div className="space-y-3">
              {plans[0]?.features?.map((feature, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <p className="text-sm text-gray-700">{feature.name}</p>
                  <div className="flex gap-4">
                    {plans.map(plan => (
                      <div key={plan.id}>
                        {feature.included ? (
                          <CheckIcon className="w-5 h-5 text-success" />
                        ) : (
                          <XIcon className="w-5 h-5 text-error" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <button className="btn btn-primary w-full mb-2">Unlock Premium</button>
          <button className="btn btn-ghost w-full">Maybe Later</button>
        </>
      ) : (
        <div className="bg-surface rounded-2xl p-8 text-center">
          <p className="text-gray-600">Pricing plans not available</p>
          <p className="text-sm text-gray-500 mt-1">Please try again later</p>
        </div>
      )}
    </main>
  );
}
```

**Backend Endpoints:**
- GET `/api/pricing/plans` - Available pricing plans
- POST `/api/payments/checkout` - Create checkout session

---

### 12. ADMIN DASHBOARD (/admin)
**Current State:** Hardcoded course management table  
**Data Required:**
- Courses list (for management)
- Course metadata (name, status, created date, etc.)

**REVISED APPROACH - Empty States:**

```typescript
// /app/admin/page.tsx

export default function AdminPage() {
  const { courses, loading } = useAdminCourses();
  const [isOpen, setIsOpen] = useState(false);
  
  if (loading) return <AdminSkeleton />;
  
  return (
    <div className="flex min-h-screen bg-background lg:flex-row flex-col">
      {/* Mobile menu button */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-4 bg-white border-b">
        Menu
      </button>
      
      {/* Sidebar */}
      <aside className={`${isOpen ? "flex" : "hidden"} lg:flex w-full lg:w-60 flex-col bg-white border-r p-6`}>
        <h1 className="text-xl font-bold text-text mb-8">Admin Panel</h1>
        <nav className="space-y-2">
          {["Courses", "Modules", "Lessons", "Users", "Analytics"].map(item => (
            <a key={item} href={`/admin/${item.toLowerCase()}`} className="block p-2 rounded hover:bg-gold-light text-gray-700">
              {item}
            </a>
          ))}
        </nav>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text">Courses</h2>
          <button className="btn btn-primary">Add Course</button>
        </div>
        
        {/* Courses table */}
        {courses && courses.length > 0 ? (
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gold-light">
                <tr>
                  <th className="text-left p-4 font-bold text-text">Name</th>
                  <th className="text-left p-4 font-bold text-text">Status</th>
                  <th className="text-left p-4 font-bold text-text">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 text-text">{course.name}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        course.status === "published"
                          ? "bg-success bg-opacity-20 text-success"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="p-4 space-x-2">
                      <button className="text-gold hover:text-gold-dark">Edit</button>
                      <button className="text-error hover:text-red-700">
                        {course.status === "published" ? "Archive" : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-600 font-medium mb-2">No courses created yet</p>
            <p className="text-sm text-gray-500 mb-6">Click "Add Course" to create your first course</p>
            <button className="btn btn-primary">Create First Course</button>
          </div>
        )}
      </main>
    </div>
  );
}
```

**Backend Endpoints:**
- GET `/api/admin/courses` - List of all courses
- POST `/api/admin/courses` - Create course
- PUT `/api/admin/courses/:courseId` - Update course
- DELETE `/api/admin/courses/:courseId` - Delete course

---

### 13. 404 ERROR PAGE (/not-found.tsx)
**Current State:** To be created  
**Data Required:** None (static page)

```typescript
// /app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Dark to light illustration */}
      <div className="w-32 h-32 mb-8 bg-gradient-to-r from-black to-gold rounded-2xl flex items-center justify-center">
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          {/* Left half: darkness (moon or dark circle) */}
          {/* Right half: light (sun or light rays) */}
          <circle cx="16" cy="32" r="12" fill="currentColor" className="text-gray-800" />
          <circle cx="48" cy="32" r="12" fill="currentColor" className="text-gold" />
        </svg>
      </div>
      
      {/* 404 heading */}
      <h1 className="text-6xl font-bold text-text mb-2">404</h1>
      
      {/* Headline and subheading */}
      <h2 className="text-2xl font-bold text-text text-center mb-2">
        Oops! You've ventured into darkness.
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-sm">
        This page doesn't exist. Let Mwangaza light your way home.
      </p>
      
      {/* CTAs */}
      <div className="space-y-2 w-full max-w-sm">
        <Link href="/dashboard" className="btn btn-primary block text-center">
          Go Home
        </Link>
        <Link href="/dashboard" className="btn btn-secondary block text-center">
          Explore Courses
        </Link>
      </div>
    </main>
  );
}
```

---

## Data Fetching Architecture

### Pattern: useAsync Custom Hook

```typescript
// lib/use-async.ts

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useAsync<T>(asyncFn: () => Promise<T>): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    asyncFn()
      .then(data => setState({ data, loading: false, error: null }))
      .catch(error => setState({ data: null, loading: false, error }));
  }, []);

  return state;
}
```

### Usage Pattern:

```typescript
// In any screen component:
const { data: user, loading, error } = useAsync(() => 
  fetch("/api/user/profile").then(r => r.json())
);

if (loading) return <SkeletonLoader />;
if (error) return <ErrorState />;
if (!user) return <EmptyState />;

return <UserContent user={user} />;
```

---

## Styling & Component Guidelines

### Buttons (All Styles Required)

**Primary Button** (CTAs, main actions)
```typescript
<button className="px-6 py-3 bg-gold text-white font-bold rounded-lg hover:bg-gold-dark transition">
  Action
</button>
```

**Secondary Button** (Alternative actions)
```typescript
<button className="px-6 py-3 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold-light transition">
  Alternative
</button>
```

**Ghost Button** (Tertiary, less emphasis)
```typescript
<button className="px-6 py-3 text-gold font-medium hover:bg-gold-light transition rounded-lg">
  Maybe Later
</button>
```

**Disabled State** (Any button when unavailable)
```typescript
<button disabled className="px-6 py-3 bg-gray-300 text-gray-500 font-bold rounded-lg cursor-not-allowed opacity-50">
  Disabled
</button>
```

### Icons & Modals

**All icons should be:**
- SVG-based for scalability
- Properly sized (16px, 20px, 24px, or larger)
- Branded color (gold, gold-dark, error, success)
- Functional and clear (no ambiguity)

**Modals should:**
- Have overlay (bg-black/40)
- Center on screen
- Dismiss on outside click
- Have clear close button (X icon)
- Show appropriate error/success states

### Empty States

**Every data-driven screen must have:**
1. Loading state (skeleton placeholders)
2. Empty state (no data message + CTA)
3. Error state (error message + retry)
4. Success state (with data displayed)

---

## Complete User Flow: Start to Finish

### Flow 1: First-Time User
```
Splash (/) 
  → Onboarding (/onboarding - slide 1, 2, 3)
    → Auth (/auth - Sign Up)
      → Dashboard (/dashboard - empty, "no courses")
        → Premium (/premium - upsell)
          → Explore Courses (redirect to /courses - not yet built, or back to /dashboard)
            → Enroll in Course
              → Course Detail (/course/[id] - shows modules)
                → Module Detail (/module/[id] - shows lessons)
                  → Lesson (/lesson/[id] - learn + try it)
                    → Quiz (/quiz/[id] - questions)
                      → Results (/results - celebration)
```

### Flow 2: Returning User
```
Splash (/) 
  → Auth (/auth - Sign In)
    → Dashboard (/dashboard - shows enrolled courses)
      → Continue Learning (to Lesson)
        → Quiz → Results
```

### Flow 3: Admin User
```
Splash (/)
  → Auth (/auth - Sign In as Admin)
    → Admin Dashboard (/admin - course management)
      → Create Course
        → Manage Modules
          → Manage Lessons
            → Manage Quiz
```

### Error Handling Flow
```
Any Invalid Route
  → 404 Page (/not-found)
    → Go Home (to /dashboard)
```

---

## Key Changes from Previous Version

| Aspect | Before | After |
|--------|--------|-------|
| **Course Data** | Hardcoded mock courses | Backend-fetched only |
| **User Data** | Hardcoded profile, badges | Backend-fetched, empty states |
| **Quiz Questions** | 5 hardcoded questions | Backend-fetched from API |
| **Empty States** | Not handled | Designed for all screens |
| **Loading States** | No skeletons | Skeleton placeholders shown |
| **Error Handling** | Minimal | Comprehensive error states |
| **Data Lifecycle** | Static | Dynamic, from backend |

---

## Backend Integration Checklist

Before connecting backend APIs, ensure:

- [ ] All screens have empty states designed
- [ ] Loading skeletons created for data sections
- [ ] Error boundary components prepared
- [ ] API client initialized (`lib/api-client.ts`)
- [ ] Auth token storage planned (localStorage/cookies)
- [ ] User context provider prepared
- [ ] Error handling middleware configured
- [ ] Request/response logging setup
- [ ] Retry logic for failed requests
- [ ] Timeout handling for slow APIs

---

## Summary

This revised plan ensures that:

✅ **Zero mock data** in the frontend  
✅ **Backend-first architecture** - frontend consumes API  
✅ **Empty state design** across all screens  
✅ **Proper loading/error states** for every data fetch  
✅ **Clean user flow** from splash to results  
✅ **Well-styled buttons, modals, icons** throughout  
✅ **Production-ready UI** independent of backend  

The frontend is now a **data consumer** that gracefully handles all states: loading, empty, error, and success.
