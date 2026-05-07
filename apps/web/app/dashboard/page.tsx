import { DashboardTopBar } from '@/components/dashboard-top-bar';
import { DailyGoalCard } from '@/components/daily-goal-card';
import { ContinueLearningCard } from '@/components/continue-learning-card';
import { CourseCard } from '@/components/course-card';
import { BottomNavBar } from '@/components/bottom-nav-bar';

export default function DashboardPage() {
  const courses = [
    {
      name: 'Financial Literacy',
      icon: '💰',
      color: '#22C55E',
      module: 1,
      totalModules: 6,
      progress: 65,
    },
    {
      name: 'Digital Marketing',
      icon: '📱',
      color: '#D4A017',
      module: 2,
      totalModules: 8,
      progress: 40,
    },
    {
      name: 'Python Basics',
      icon: '🐍',
      color: '#3B82F6',
      module: 1,
      totalModules: 10,
      progress: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <DashboardTopBar />

      {/* Main Content - Add top padding to account for fixed top bar */}
      <div className="pt-20 pb-24 px-0">
        {/* Daily Goal Card */}
        <DailyGoalCard />

        {/* Continue Learning Card */}
        <ContinueLearningCard />

        {/* Your Courses Section */}
        <div className="mt-6 px-4">
          <h2 className="font-heading text-base font-bold text-text mb-4">
            Your Courses
          </h2>

          {/* Course Cards */}
          {courses.map((course, index) => (
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
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}
