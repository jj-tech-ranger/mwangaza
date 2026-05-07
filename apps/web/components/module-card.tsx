'use client';

import { CheckCircle2, Lock } from 'lucide-react';

export type ModuleStatus = 'completed' | 'in-progress' | 'locked';

interface ModuleCardProps {
  number: number;
  title: string;
  lessonCount: number;
  status: ModuleStatus;
  progress?: number; // 0-100 for in-progress modules
  badgeEarned?: boolean;
}

export function ModuleCard({
  number,
  title,
  lessonCount,
  status,
  progress = 0,
  badgeEarned = false,
}: ModuleCardProps) {
  const borderColor =
    status === 'completed' ? '#22C55E' : status === 'in-progress' ? '#D4A017' : 'transparent';
  const titleOpacity = status === 'locked' ? 0.4 : 1;

  return (
    <div
      className={`relative bg-white rounded-2xl p-4 shadow-sm transition-all ${
        status === 'locked' ? 'opacity-70' : ''
      }`}
      style={{
        borderLeft: `4px solid ${borderColor}`,
      }}
    >
      {/* Locked overlay */}
      {status === 'locked' && (
        <div className="absolute inset-0 bg-gray-400/20 rounded-2xl flex items-center justify-center">
          <Lock size={28} className="text-gray-600" />
        </div>
      )}

      {/* Badge - top right */}
      <div className="absolute top-3 right-3">
        {status === 'completed' && (
          <CheckCircle2 size={24} className="text-success" />
        )}
        {status === 'in-progress' && (
          <div className="bg-gold px-2 py-1 rounded-full text-[10px] font-bold text-white font-heading">
            IN PROGRESS
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pr-24">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[13px] font-bold text-gold font-heading">
            Module {number}
          </span>
        </div>
        <h3
          className="text-[15px] font-bold text-text font-heading mb-1"
          style={{ opacity: titleOpacity }}
        >
          {title}
        </h3>
        <p className="text-[12px] text-[#6B6B6B] font-body mb-3">
          {lessonCount} lesson{lessonCount !== 1 ? 's' : ''}
        </p>

        {/* Progress bar - shown for in-progress modules */}
        {status === 'in-progress' && (
          <>
            <div className="w-full bg-[#E5E7EB] rounded-full h-1.5 mb-2">
              <div
                className="bg-gold rounded-full h-1.5 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[11px] text-[#6B6B6B] font-body">
              {Math.round((progress / 100) * lessonCount)}/{lessonCount} lessons
            </p>
          </>
        )}

        {/* Badge earned message */}
        {status === 'completed' && badgeEarned && (
          <p className="text-[11px] text-success font-body mt-2">
            Badge earned 🏅
          </p>
        )}
      </div>
    </div>
  );
}
