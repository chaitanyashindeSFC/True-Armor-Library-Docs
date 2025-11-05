import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export interface ProgressBarTAProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  progress?: number;
  height?: string;
}

const ProgressBarTA = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressBarTAProps
>(({ className, progress = 0, height = "h-2", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-full bg-secondary",
      height,
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - Math.min(progress, 100)}%)` }}
    />
  </ProgressPrimitive.Root>
));

ProgressBarTA.displayName = ProgressPrimitive.Root.displayName;

export { ProgressBarTA };