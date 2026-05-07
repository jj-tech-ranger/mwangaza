'use client';

import { useEffect, useState } from 'react';

interface UserData {
  name?: string;
  firstName?: string;
  imageUrl?: string;
  xp?: number;
}

export function DashboardTopBar() {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: fetch from GET /api/user/profile
    const fetchUser = async () => {
      try {
        // Placeholder for API call
        // const response = await fetch('/api/user/profile');
        // const data = await response.json();
        // setUser(data);
        setUser(null); // No data from backend yet
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 right-0 z-40 h-16 w-full bg-surface shadow-sm flex items-center justify-between px-4">
        <div className="h-8 w-32 rounded bg-gray-200 animate-pulse"></div>
        <div className="h-8 w-24 rounded bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  // Get initials from user name if available
  const getInitials = () => {
    if (!user) return '';
    const name = user.name || user.firstName || '';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const userName = user?.name || user?.firstName || 'Guest';
  const userXP = user?.xp || 0;
  const initials = getInitials() || 'U';

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-16 w-full bg-surface shadow-sm flex items-center justify-between px-4">
      {/* Left: Avatar + Greeting */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-heading font-bold text-xs">
          {initials}
        </div>
        <span className="font-heading text-sm font-bold text-text">
          {!user ? 'Welcome to Mwangaza' : `Good morning, ${userName} 👋`}
        </span>
      </div>

      {/* Right: XP Badge (only if user has data) */}
      {user && (
        <div className="bg-gold-light px-3 py-1.5 rounded-full flex items-center gap-1">
          <span className="text-lg">⚡</span>
          <span className="font-heading text-sm font-bold text-gold">
            {userXP} XP
          </span>
        </div>
      )}
    </div>
  );
}
