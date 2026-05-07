'use client';

import { ModuleHeader } from '@/components/module-header';
import { LessonCard } from '@/components/lesson-card';

export default function ModulePage() {
  // Backend data - will be fetched via API
  // TODO: fetch from GET /api/modules/[moduleId]
  const moduleData = null;
  const lessons = null;

  return (
    <div className="min-h-screen bg-background pb-20">
      {!moduleData ? (
        <div className="flex h-screen items-center justify-center px-4">
          <div className="text-center">
            <p className="text-gray-600 font-medium mb-2">Module not found</p>
            <p className="text-sm text-gray-500">Please select a module from the course</p>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <ModuleHeader
            icon={moduleData.icon}
            title={moduleData.title}
            description={moduleData.description}
            completedLessons={moduleData.completedLessons}
            totalLessons={moduleData.totalLessons}
          />

          {/* Lessons List */}
          <div className="mx-4 mt-4">
            {lessons && lessons.length > 0 ? (
              <div className="flex flex-col gap-2">
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
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-gold-light bg-white p-8 text-center">
                <p className="text-gray-600 font-medium">No lessons in this module yet</p>
              </div>
            )}
          </div>

          {/* Badge Achievement Card */}
          {lessons && lessons.length > 0 && (
            <div className="mx-4 mt-6 p-4 bg-gold bg-opacity-10 rounded-xl text-center">
              <p className="text-sm font-body text-text">
                Complete all lessons to earn a badge <span className="text-lg">🏅</span>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
