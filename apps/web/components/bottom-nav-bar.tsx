'use client';

import { Home, BookOpen, User, Star } from 'lucide-react';

export function BottomNavBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 h-16 w-full bg-surface shadow-lg shadow-black/10 flex items-center justify-around px-4 border-t border-gray-100">
      {/* Home - Active */}
      <button className="flex flex-col items-center gap-1 py-2">
        <Home size={24} className="text-gold" />
        <span className="text-xs font-heading font-bold text-gold">Home</span>
      </button>

      {/* Learn */}
      <button className="flex flex-col items-center gap-1 py-2 opacity-60 hover:opacity-100 transition-opacity">
        <BookOpen size={24} className="text-gray-400" />
        <span className="text-xs font-heading text-gray-400">Learn</span>
      </button>

      {/* Profile */}
      <button className="flex flex-col items-center gap-1 py-2 opacity-60 hover:opacity-100 transition-opacity">
        <User size={24} className="text-gray-400" />
        <span className="text-xs font-heading text-gray-400">Profile</span>
      </button>

      {/* Premium */}
      <button className="flex flex-col items-center gap-1 py-2 opacity-60 hover:opacity-100 transition-opacity">
        <Star size={24} className="text-gray-400" />
        <span className="text-xs font-heading text-gray-400">Premium</span>
      </button>
    </div>
  );
}
