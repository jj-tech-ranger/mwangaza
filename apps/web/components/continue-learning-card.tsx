'use client';

export function ContinueLearningCard() {
  const progressPercent = 40;

  return (
    <div className="mx-4 mt-4 rounded-2xl p-5 shadow-sm bg-gradient-to-br from-gold to-gold-dark overflow-hidden">
      {/* Label */}
      <div className="text-xs uppercase font-heading font-bold text-white text-opacity-70 tracking-widest mb-2">
        Continue
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-white mb-1">
        Basic Math
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-white text-opacity-80 font-body mb-4">
        Lesson 3 · Adding two-digit numbers
      </p>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white bg-opacity-30 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Resume Button */}
      <div className="flex justify-end">
        <button className="bg-white text-gold font-heading font-bold rounded-full px-5 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center gap-1">
          Resume <span>→</span>
        </button>
      </div>
    </div>
  );
}
