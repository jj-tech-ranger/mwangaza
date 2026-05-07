'use client';

import { CourseBanner } from '@/components/course-banner';
import { ModuleCard } from '@/components/module-card';

export default function CoursePage() {
  // Backend data - will be fetched via API
  // TODO: fetch from GET /api/courses/[courseId]
  const course = null;
  const modules = null;

  // Handle loading/empty state
  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center px-4 bg-background">
        <div className="text-center">
          <p className="text-gray-600 font-medium mb-2">Course not found</p>
          <p className="text-sm text-gray-500">Please select a course from the dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Course Banner */}
      <CourseBanner
        title={String(course.title)}
        modules={Number(course.modules)}
        lessons={Number(course.lessons)}
        completedModules={Number(course.completedModules)}
      />

      {/* Module List */}
      <div className="px-4 mt-4">
        {modules ? (
          <div className="space-y-3">
            {modules.map((module: any) => (
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
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-gold-light bg-white p-8 text-center">
            <p className="text-gray-600 font-medium">No modules available yet</p>
            <p className="mt-2 text-sm text-gray-500">Check back soon for course content</p>
          </div>
        )}
      </div>
    </div>
  );
}
