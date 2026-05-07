'use client';

import { CourseBanner } from '@/components/course-banner';
import { ModuleCard } from '@/components/module-card';

export default function CoursePage() {
  // Mock course data
  const course = {
    id: 'basic-math',
    title: 'Basic Math',
    modules: 6,
    lessons: 24,
    completedModules: 1,
  };

  // Mock module data
  const modules = [
    {
      number: 1,
      title: 'Counting & Number Sense',
      lessonCount: 4,
      status: 'completed' as const,
      badgeEarned: true,
    },
    {
      number: 2,
      title: 'Addition & Subtraction',
      lessonCount: 4,
      status: 'in-progress' as const,
      progress: 50, // 2 of 4 lessons
    },
    {
      number: 3,
      title: 'Multiplication & Division',
      lessonCount: 4,
      status: 'locked' as const,
    },
    {
      number: 4,
      title: 'Fractions',
      lessonCount: 4,
      status: 'locked' as const,
    },
    {
      number: 5,
      title: 'Decimals & Percentages',
      lessonCount: 4,
      status: 'locked' as const,
    },
    {
      number: 6,
      title: 'Practical Math',
      lessonCount: 4,
      status: 'locked' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Course Banner */}
      <CourseBanner
        title={course.title}
        modules={course.modules}
        lessons={course.lessons}
        completedModules={course.completedModules}
      />

      {/* Module List */}
      <div className="px-4 mt-4 space-y-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.number}
            number={module.number}
            title={module.title}
            lessonCount={module.lessonCount}
            status={module.status}
            progress={module.progress || 0}
            badgeEarned={module.badgeEarned}
          />
        ))}
      </div>
    </div>
  );
}
