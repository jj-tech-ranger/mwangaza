'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ModuleHeaderProps {
  icon: string;
  title: string;
  description: string;
  completedLessons: number;
  totalLessons: number;
}

export function ModuleHeader({
  icon,
  title,
  description,
  completedLessons,
  totalLessons,
}: ModuleHeaderProps) {
  const router = useRouter();
  const progressPercent = (completedLessons / totalLessons) * 100;

  return (
    <div className="mx-4 mt-4 p-5 bg-white rounded-2xl shadow-sm">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="mb-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ArrowLeft size={20} className="text-text" />
      </button>

      {/* Module icon */}
      <div className="flex items-center justify-center w-10 h-10 text-2xl mb-3">
        {icon}
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold font-heading text-text mb-2">
        {title}
      </h1>

      {/* Description */}
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-body text-text">
          {completedLessons} of {totalLessons} lessons complete
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
