'use client';

export function DailyGoalCard() {
  const progress = 30;
  const total = 50;
  const percentage = (progress / total) * 100;

  return (
    <div className="mx-4 mt-4 bg-surface rounded-2xl p-5 shadow-sm">
      {/* Title */}
      <div className="text-xs uppercase font-heading font-bold text-gold-dark tracking-widest mb-6">
        Today's Goal
      </div>

      {/* Circular Progress */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background track */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="6"
            />
            {/* Progress fill */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#D4A017"
              strokeWidth="6"
              strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
              strokeLinecap="round"
            />
          </svg>

          {/* Center text */}
          <div className="absolute flex flex-col items-center">
            <div className="font-heading text-xl font-bold text-text">
              {progress}/{total} XP
            </div>
            <div className="text-xs text-gray-400">
              lessons done
            </div>
          </div>
        </div>

        {/* Status text */}
        <div className="text-sm text-gray-500 font-body">
          3 of 5 daily lessons done
        </div>
      </div>
    </div>
  );
}
