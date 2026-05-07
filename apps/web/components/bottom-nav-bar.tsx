'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, BookOpen, User, Star } from 'lucide-react';

export function BottomNavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/courses', icon: BookOpen, label: 'Learn' },
    { href: '/profile', icon: User, label: 'Profile' },
    { href: '/premium', icon: Star, label: 'Premium' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 h-16 w-full bg-surface shadow-lg shadow-black/10 flex items-center justify-around px-4 border-t border-gray-100">
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href === '/dashboard' && pathname === '/');
        return (
          <button
            key={item.href}
            onClick={() => router.push(item.href)}
            className={`flex flex-col items-center gap-1 py-2 transition-opacity ${
              isActive
                ? 'opacity-100'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Icon
              size={24}
              className={isActive ? 'text-gold' : 'text-gray-400'}
            />
            <span
              className={`text-xs font-heading font-bold ${
                isActive ? 'text-gold' : 'text-gray-400'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
