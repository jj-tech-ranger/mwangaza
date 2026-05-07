'use client';

import { DashboardTopBar } from '@/components/dashboard-top-bar';
import { DailyGoalCard } from '@/components/daily-goal-card';
import { ContinueLearningCard } from '@/components/continue-learning-card';
import { CourseCard } from '@/components/course-card';
import { BottomNavBar } from '@/components/bottom-nav-bar';
import { BookOpen } from 'lucide-react';

export default function DashboardPage() {
  // Backend data - will be fetched via API
  // For now: null (no data from backend yet)
  const enrolledCourses = null; // TODO: fetch from GET /api/courses/enrolled
  const userProgress = null; // TODO: fetch from GET /api/user/progress
  const currentLesson = null; // TODO: fetch from GET /api/user/current-lesson
  const isLoading = false;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <DashboardTopBar />

      {/* Main Content - Add top padding to account for fixed top bar */}
      <div className="pt-20 pb-24 px-0">
        {/* Daily Goal Card - Show only if user has progress data */}
        {userProgress ? (
          <DailyGoalCard />
        ) : (
          <div className="mx-4 mt-4 rounded-2xl bg-gold-light p-6 text-center">
            <p className="font-semibold text-gold-dark">Welcome to Mwangaza</p>
            <p className="mt-2 text-sm text-gray-600">
              Your learning journey starts here. Enroll in a course to begin!
            </p>
          </div>
        )}

        {/* Continue Learning Card - Show only if user has current lesson */}
        {currentLesson ? (
          <ContinueLearningCard />
        ) : null}

        {/* Your Courses Section */}
        <div className="mt-6 px-4">
          <h2 className="font-heading text-base font-bold text-text mb-4">
            Your Courses
          </h2>

          {isLoading ? (
            // Loading skeleton
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="h-24 rounded-2xl bg-white animate-pulse"
                ></div>
              ))}
            </div>
          ) : enrolledCourses && enrolledCourses.length > 0 ? (
            // Course Cards - When data is available
            <div className="space-y-3">
              {enrolledCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  name={course.name}
                  icon={course.icon}
                  color={course.color}
                  module={course.module}
                  totalModules={course.totalModules}
                  progress={course.progress}
                />
              ))}
            </div>
          ) : (
            // Empty State - No courses enrolled
            <div className="rounded-2xl border-2 border-dashed border-gold-light bg-white p-8 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-gold opacity-30" />
              <p className="mt-4 font-medium text-gray-600">
                No courses enrolled yet
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Explore our course catalog to get started
              </p>
              <button className="mt-6 rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-dark transition">
                Explore Courses
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
