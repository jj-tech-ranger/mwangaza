'use client';

import { ModuleHeader } from '@/components/module-header';
import { LessonCard } from '@/components/lesson-card';

export default function ModulePage() {
  const moduleData = {
    icon: '🔢',
    title: 'Addition & Subtraction',
    description: 'Master adding and subtracting numbers, including word problems.',
    completedLessons: 2,
    totalLessons: 4,
  };

  const lessons = [
    {
      number: 1,
      title: 'Single-digit addition',
      status: 'completed' as const,
    },
    {
      number: 2,
      title: 'Single-digit subtraction',
      status: 'completed' as const,
    },
    {
      number: 3,
      title: 'Adding two-digit numbers',
      status: 'current' as const,
    },
    {
      number: 4,
      title: 'Word problems',
      status: 'upcoming' as const,
      xpReward: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <ModuleHeader
        icon={moduleData.icon}
        title={moduleData.title}
        description={moduleData.description}
        completedLessons={moduleData.completedLessons}
        totalLessons={moduleData.totalLessons}
      />

      {/* Lessons List */}
      <div className="mx-4 mt-4 flex flex-col gap-2">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.number}
            number={lesson.number}
            title={lesson.title}
            status={lesson.status}
            xpReward={lesson.xpReward}
          />
        ))}
      </div>

      {/* Badge Achievement Card */}
      <div className="mx-4 mt-6 p-4 bg-gold bg-opacity-10 rounded-xl text-center">
        <p className="text-sm font-body text-text">
          Complete all lessons to earn the Addition & Subtraction badge{' '}
          <span className="text-lg">🏅</span>
        </p>
      </div>
    </div>
  );
}
