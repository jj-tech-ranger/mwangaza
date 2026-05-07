'use client';

export function DashboardTopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-16 w-full bg-surface shadow-sm flex items-center justify-between px-4">
      {/* Left: Avatar + Greeting */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-heading font-bold text-sm">
          A
        </div>
        <span className="font-heading text-sm font-bold text-text">
          Good morning, Amina 👋
        </span>
      </div>

      {/* Right: XP Badge */}
      <div className="bg-gold-light px-3 py-1.5 rounded-full flex items-center gap-1">
        <span className="text-lg">⚡</span>
        <span className="font-heading text-sm font-bold text-gold">
          120 XP
        </span>
      </div>
    </div>
  );
}
