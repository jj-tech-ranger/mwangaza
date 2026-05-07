'use client';

interface CourseCardProps {
  name: string;
  icon: string;
  color: string;
  module: number;
  totalModules: number;
  progress: number;
}

export function CourseCard({
  name,
  icon,
  color,
  module,
  totalModules,
  progress,
}: CourseCardProps) {
  return (
    <div className="bg-surface rounded-xl shadow-sm p-4 flex items-center gap-4 mb-3">
      {/* Left: Icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
        style={{ backgroundColor: color + '20' }}
      >
        {icon}
      </div>

      {/* Middle: Course Info */}
      <div className="flex-1">
        <h4 className="font-heading font-bold text-sm text-text">
          {name}
        </h4>
        <p className="text-xs text-gray-500 font-body">
          Module {module} of {totalModules}
        </p>
      </div>

      {/* Right: Mini Progress Circle */}
      <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 32 32"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray={`${(progress / 100) * 88} 88`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xs font-heading font-bold text-text text-opacity-70">
          {progress}%
        </span>
      </div>
    </div>
  );
}
