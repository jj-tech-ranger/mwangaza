"use client";

import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerOption {
  id: string;
  value: string;
  isCorrect: boolean;
}

const answerOptions: AnswerOption[] = [
  { id: "A", value: "78", isCorrect: true },
  { id: "B", value: "77", isCorrect: false },
  { id: "C", value: "88", isCorrect: false },
  { id: "D", value: "68", isCorrect: false },
];

const totalQuestions = 5;
const currentQuestion = 2;

// Question results: null = not answered, true = correct, false = incorrect
const questionResults: (boolean | null)[] = [true, null, null, null, null];

function ProgressDots({
  results,
  currentIndex,
}: {
  results: (boolean | null)[];
  currentIndex: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {results.map((result, index) => {
        const isCurrent = index === currentIndex;
        const isAnswered = result !== null;

        return (
          <div
            key={index}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              isAnswered && result === true && "bg-[#22C55E]",
              isAnswered && result === false && "bg-[#EF4444]",
              isCurrent && !isAnswered && "bg-[#D4A017]",
              !isCurrent && !isAnswered && "border-2 border-[#E5E7EB] bg-transparent"
            )}
          />
        );
      })}
    </div>
  );
}

function AnswerOptionCard({
  option,
  selectedId,
  isAnswered,
  onSelect,
}: {
  option: AnswerOption;
  selectedId: string | null;
  isAnswered: boolean;
  onSelect: (id: string) => void;
}) {
  const isSelected = selectedId === option.id;
  const showCorrect = isAnswered && option.isCorrect;
  const showIncorrect = isAnswered && isSelected && !option.isCorrect;

  return (
    <button
      onClick={() => !isAnswered && onSelect(option.id)}
      disabled={isAnswered}
      className={cn(
        "flex w-full items-center justify-between rounded-xl border-[1.5px] px-4 py-4 transition-all",
        !isAnswered && "border-[#E5E7EB] bg-[#FFFFFF] active:scale-[0.98]",
        showCorrect && "border-[#D4A017] bg-[#FDF3D0]",
        showIncorrect && "border-[#EF4444] bg-[#FEE2E2]",
        isAnswered && !showCorrect && !showIncorrect && "border-[#E5E7EB] bg-[#FFFFFF]"
      )}
    >
      <span
        className={cn(
          "font-body text-base font-bold",
          showCorrect && "text-[#A67C00]",
          showIncorrect && "text-[#EF4444]",
          !showCorrect && !showIncorrect && "text-[#1A1A2E]"
        )}
      >
        {option.value}
      </span>

      {showCorrect && (
        <Check className="h-5 w-5 text-[#A67C00]" strokeWidth={2.5} />
      )}
      {showIncorrect && (
        <X className="h-5 w-5 text-[#EF4444]" strokeWidth={2.5} />
      )}
    </button>
  );
}

function FeedbackBanner({
  isCorrect,
  explanation,
}: {
  isCorrect: boolean;
  explanation: string;
}) {
  return (
    <div
      className={cn(
        "mx-4 mt-4 rounded-xl px-4 py-3",
        isCorrect ? "bg-[#22C55E]" : "bg-[#EF4444]"
      )}
    >
      <p className="font-body text-[13px] leading-relaxed text-[#FFFFFF]">
        {isCorrect ? (
          <>
            <Check className="mr-1.5 inline h-4 w-4" strokeWidth={2.5} />
            {explanation}
          </>
        ) : (
          <>
            <X className="mr-1.5 inline h-4 w-4" strokeWidth={2.5} />
            {explanation}
          </>
        )}
      </p>
    </div>
  );
}

export default function QuizPage() {
  const [selectedId, setSelectedId] = useState<string | null>("C"); // Pre-selected wrong answer for demo
  const [isAnswered, setIsAnswered] = useState(true); // Show answered state for demo

  const selectedOption = answerOptions.find((opt) => opt.id === selectedId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  const handleSelect = (id: string) => {
    if (isAnswered) return;
    setSelectedId(id);
    setIsAnswered(true);
  };

  return (
    <div className="flex min-h-dvh flex-col bg-[#F8F4E8]">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-[#F8F4E8] px-4 pb-4 pt-4">
        <div className="flex items-center justify-between">
          {/* Empty div for spacing */}
          <div className="w-12" />

          {/* Progress dots */}
          <ProgressDots results={questionResults} currentIndex={currentQuestion - 1} />

          {/* Timer pill */}
          <div className="flex h-7 items-center rounded-full bg-[#E5E7EB] px-3">
            <span className="font-body text-xs font-medium text-[#1A1A2E]/70">
              0:45
            </span>
          </div>
        </div>

        {/* Question label */}
        <p className="mt-3 text-center font-body text-xs text-[#1A1A2E]/60">
          Question {currentQuestion} of {totalQuestions}
        </p>
      </header>

      {/* Question card */}
      <div className="mx-4 mt-2 rounded-2xl bg-[#FFFFFF] p-6 shadow-sm">
        <h1 className="text-center font-heading text-[22px] font-bold leading-[1.4] text-[#1A1A2E]">
          What is 45 + 33?
        </h1>
      </div>

      {/* Answer options */}
      <div className="mx-4 mt-4 flex flex-col gap-3">
        {answerOptions.map((option) => (
          <AnswerOptionCard
            key={option.id}
            option={option}
            selectedId={selectedId}
            isAnswered={isAnswered}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Feedback banner */}
      {isAnswered && (
        <FeedbackBanner
          isCorrect={isCorrect}
          explanation={
            isCorrect
              ? "Correct! 45 + 33 = 78. Add 5+3=8, then 4+3=7."
              : "Incorrect. 45 + 33 = 78. Add 5+3=8, then 4+3=7."
          }
        />
      )}

      {/* Spacer for bottom bar */}
      <div className="flex-1" />

      {/* Sticky bottom */}
      <div className="sticky bottom-0 bg-[#F8F4E8] px-4 pb-6 pt-4">
        <button
          disabled={!isAnswered}
          className={cn(
            "flex h-[52px] w-full items-center justify-center gap-2 rounded-full font-heading text-base font-bold transition-all",
            isAnswered
              ? "bg-[#D4A017] text-[#FFFFFF] active:scale-[0.98]"
              : "cursor-not-allowed bg-[#D4A017]/40 text-[#FFFFFF]/70"
          )}
        >
          Next Question
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
