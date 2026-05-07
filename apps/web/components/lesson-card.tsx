'use client';

import { CheckCircle2, Play, Lock } from 'lucide-react';

export type LessonStatus = 'completed' | 'current' | 'upcoming';

interface LessonCardProps {
  number: number;
  title: string;
  status: LessonStatus;
  xpReward?: number;
}

export function LessonCard({
  number,
  title,
  status,
  xpReward = 10,
}: LessonCardProps) {
  const getIcon = () => {
    switch (status) {
      case 'completed':
        return (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success">
            <CheckCircle2 size={20} className="text-white" />
          </div>
        );
      case 'current':
        return (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold">
            <Play size={16} className="text-white fill-white" />
          </div>
        );
      case 'upcoming':
        return (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
            <span className="text-xs font-bold text-gray-700">{number}</span>
          </div>
        );
    }
  };

  const getTitleClass = () => {
    if (status === 'completed') return 'opacity-60';
    if (status === 'current') return 'font-bold';
    return '';
  };

  const getRightContent = () => {
    if (status === 'current') {
      return (
        <button className="px-4 py-2 rounded-full bg-gold text-white text-xs font-bold hover:opacity-90 transition-opacity">
          Continue →
        </button>
      );
    }
    if (status === 'upcoming') {
      return (
        <div className="px-3 py-1 rounded-full bg-gold bg-opacity-10 text-gold text-xs font-bold">
          +{xpReward} XP
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
      {getIcon()}
      <span className={`flex-1 text-sm font-body text-text ${getTitleClass()}`}>
        {title}
      </span>
      {getRightContent()}
    </div>
  );
}
