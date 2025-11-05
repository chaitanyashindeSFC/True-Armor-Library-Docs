import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  label: string;
  description?: string;
}

export interface StepperTAProps {
  steps: Step[];
  currentStep: number;
  color?: string;
  className?: string;
}

export function StepperTA({ steps, currentStep, color = "primary", className }: StepperTAProps) {
  return (
    <nav className={cn("flex w-full", className)} aria-label="Progress">
      <ol role="list" className="space-y-6">
        {steps.map((step, stepIdx) => (
          <li key={step.label} className="relative flex items-start">
            {stepIdx < currentStep ? (
              <>
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary"
                  aria-hidden="true"
                >
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-foreground">{step.label}</h3>
                  {step.description && (
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  )}
                </div>
              </>
            ) : stepIdx === currentStep - 1 ? (
              <>
                <div
                  className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-white"
                  aria-hidden="true"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-foreground">{step.label}</h3>
                  {step.description && (
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div
                  className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-muted bg-white"
                  aria-hidden="true"
                >
                  <span className="text-sm text-muted-foreground">{stepIdx + 1}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">{step.label}</h3>
                  {step.description && (
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  )}
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}