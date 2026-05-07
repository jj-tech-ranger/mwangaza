'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CourseBannerProps {
  title: string;
  modules: number;
  lessons: number;
  completedModules: number;
}

export function CourseBanner({
  title,
  modules,
  lessons,
  completedModules,
}: CourseBannerProps) {
  const router = useRouter();
  const completionPercentage = (completedModules / modules) * 100;

  return (
    <div className="w-full">
      {/* Banner with gradient background */}
      <div
        className="relative w-full pt-4 pb-6 px-4"
        style={{
          background: `linear-gradient(135deg, #D4A017 0%, #A67C00 100%)`,
        }}
      >
        {/* Back button and title */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => router.back()}
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1">
            <h1 className="text-[24px] font-bold text-white font-heading">
              {title}
            </h1>
            <p className="text-[13px] text-white/80 font-body mt-0.5">
              {modules} Modules · {lessons} Lessons
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 bg-white/30 rounded-full h-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-white/90 font-body">
            {completedModules} of {modules} modules complete
          </p>
        </div>
      </div>
    </div>
  );
}
