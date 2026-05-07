"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkedExample {
  id: number;
  problem: string;
  answer: string;
  explanation: string;
}

// Mock data removed - will be fetched from backend
// TODO: fetch from GET /api/lessons/[lessonId]
const workedExamples: WorkedExample[] = [];

function AdditionIllustration() {
  return (
    <div className="flex justify-center">
      <div className="flex h-[120px] w-[120px] items-center justify-center rounded-2xl border-2 border-[#D4A017] bg-[#FDF3D0]/50">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top number: 23 */}
          <text
            x="50"
            y="28"
            textAnchor="end"
            className="fill-[#1A1A2E] font-body text-[20px] font-bold"
          >
            23
          </text>
          {/* Plus sign */}
          <text
            x="20"
            y="48"
            className="fill-[#D4A017] font-body text-[20px] font-bold"
          >
            +
          </text>
          {/* Bottom number: 15 */}
          <text
            x="50"
            y="48"
            textAnchor="end"
            className="fill-[#1A1A2E] font-body text-[20px] font-bold"
          >
            15
          </text>
          {/* Line */}
          <line
            x1="18"
            y1="54"
            x2="62"
            y2="54"
            stroke="#A67C00"
            strokeWidth="2"
          />
          {/* Answer: 38 */}
          <text
            x="50"
            y="72"
            textAnchor="end"
            className="fill-[#D4A017] font-body text-[20px] font-bold"
          >
            38
          </text>
        </svg>
      </div>
    </div>
  );
}

function WorkedExampleCard({
  example,
  revealed,
  onReveal,
}: {
  example: WorkedExample;
  revealed: boolean;
  onReveal: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[#FDF3D0] bg-[#FFFFFF] p-4 shadow-sm">
      <p className="mb-3 text-center font-body text-lg font-medium text-[#1A1A2E]">
        {example.problem}
      </p>

      {!revealed ? (
        <button
          onClick={onReveal}
          className="w-full rounded-lg border-2 border-dashed border-[#D4A017] bg-[#FFFFFF] px-4 py-3 font-body text-sm font-medium text-[#D4A017] transition-colors hover:bg-[#FDF3D0]/30 active:bg-[#FDF3D0]/50"
        >
          Tap to reveal
        </button>
      ) : (
        <div className="space-y-2 text-center">
          <p className="font-heading text-[28px] font-bold text-[#D4A017]">
            {example.answer}
          </p>
          <p className="font-body text-sm text-[#1A1A2E]/70">
            {example.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default function LessonPage() {
  const [revealedExamples, setRevealedExamples] = useState<Set<number>>(
    new Set()
  );
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const handleReveal = (id: number) => {
    setRevealedExamples((prev) => new Set([...prev, id]));
  };

  const allRevealed = workedExamples.every((ex) => revealedExamples.has(ex.id));
  const progressValue = 33; // 33% - in explanation section

  return (
    <div className="flex min-h-dvh flex-col bg-[#F8F4E8]">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-[#F8F4E8] px-4 pb-3 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <button
            onClick={() => setShowExitConfirm(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#1A1A2E] transition-colors hover:bg-[#1A1A2E]/10"
            aria-label="Exit lesson"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="font-body text-xs text-[#1A1A2E]/60">
            Lesson 3 of 4
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
          <div
            className="h-full rounded-full bg-[#D4A017] transition-all duration-300"
            style={{ width: `${progressValue}%` }}
          />
        </div>
      </header>

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto px-4 pb-28">
        {/* Section 1: Explanation */}
        <section className="mb-8">
          <span className="mb-4 inline-block font-body text-[10px] font-medium uppercase tracking-[0.1em] text-[#A67C00]">
            LEARN
          </span>

          {/* Illustration */}
          <div className="mb-6">
            <AdditionIllustration />
          </div>

          {/* Explanation text */}
          <div className="mx-auto max-w-[320px]">
            <p className="font-body text-[15px] leading-[1.7] text-[#1A1A2E]">
              When adding two-digit numbers, start with the ones column, then
              move to the tens column.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#1A1A2E]">
              For example: 23 + 15. First add 3 + 5 = 8. Then add 2 + 1 = 3. The
              answer is 38.
            </p>
          </div>
        </section>

        {/* Section 2: Worked Examples */}
        <section>
          <span className="mb-4 inline-block font-body text-[10px] font-medium uppercase tracking-[0.1em] text-[#A67C00]">
            TRY IT
          </span>

          <div className="space-y-4">
            {workedExamples.map((example) => (
              <WorkedExampleCard
                key={example.id}
                example={example}
                revealed={revealedExamples.has(example.id)}
                onReveal={() => handleReveal(example.id)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-[#E5E7EB] bg-[#FFFFFF] px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button
          disabled={!allRevealed}
          className={cn(
            "flex h-[52px] w-full items-center justify-center gap-2 rounded-full font-heading text-base font-bold transition-all",
            allRevealed
              ? "bg-[#D4A017] text-[#FFFFFF] active:scale-[0.98]"
              : "cursor-not-allowed bg-[#D4A017]/40 text-[#FFFFFF]/70"
          )}
        >
          Start Quiz
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Exit confirmation modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A2E]/50 px-6">
          <div className="w-full max-w-[300px] rounded-2xl bg-[#FFFFFF] p-6">
            <h2 className="mb-2 text-center font-heading text-lg font-bold text-[#1A1A2E]">
              Exit lesson?
            </h2>
            <p className="mb-6 text-center font-body text-sm text-[#1A1A2E]/70">
              Your progress in this lesson will not be saved.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 rounded-full border border-[#E5E7EB] bg-[#FFFFFF] py-3 font-heading text-sm font-semibold text-[#1A1A2E] transition-colors hover:bg-[#F8F4E8]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Navigate back - in a real app this would use router.push or similar
                  window.history.back();
                }}
                className="flex-1 rounded-full bg-[#EF4444] py-3 font-heading text-sm font-semibold text-[#FFFFFF] transition-colors hover:bg-[#EF4444]/90"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
