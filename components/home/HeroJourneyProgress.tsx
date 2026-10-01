"use client";

import { useMemo, type ReactElement } from "react";

const STEP_COUNT = 4;

export const HERO_JOURNEY_PROGRESS_LABELS = [
  "Details",
  "KYC",
  "Verify",
  "Get Funds",
] as const;

function clampCurrentStepIndex(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(STEP_COUNT - 1, Math.floor(value)));
}

export type HeroJourneyProgressProps = {
  readonly currentStepIndex?: number;
  readonly stepLabels?: readonly string[];
  readonly accentColor?: string;
  readonly trackRemainColor?: string;
};

/**
 * Segmented journey progress: Details → KYC → Verify → Get Funds.
 */
export default function HeroJourneyProgress({
  currentStepIndex: currentStepIndexProp = 1,
  stepLabels,
}: HeroJourneyProgressProps): ReactElement {
  const labels = useMemo(() => {
    if (stepLabels && stepLabels.length === STEP_COUNT) {
      return stepLabels;
    }
    return [...HERO_JOURNEY_PROGRESS_LABELS];
  }, [stepLabels]);
  const currentStepIndex = clampCurrentStepIndex(currentStepIndexProp);

  return (
    <div className="w-full text-left">
      <p className="mb-2 text-sm font-bold text-gray-900 h-short:mb-1 h-short:text-xs">
        Loan in 4 Easy Steps
      </p>
      <div className="grid grid-cols-4 gap-2">
        {labels.map((label, index) => {
          let barClassName = "h-1.5 w-full rounded-full bg-gray-200 h-short:h-1";
          if (index < currentStepIndex) {
            barClassName = "h-1.5 w-full rounded-full bg-gray-900 h-short:h-1";
          } else if (index === currentStepIndex) {
            barClassName = "h-1.5 w-full rounded-full bg-[#FECA42] h-short:h-1";
          }
          return (
            <div key={label} className="min-w-0">
              <div className={barClassName} />
              <p className="mt-2 text-center text-[10px] font-medium leading-tight text-gray-600 sm:text-xs h-short:mt-1">
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
