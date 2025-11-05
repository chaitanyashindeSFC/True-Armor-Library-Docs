import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export interface RangeSliderTAProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number[];
  value?: number[];
  onValueChange?: (value: number[]) => void;
}

const RangeSliderTA = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderTAProps
>(({ className, min = 0, max = 100, step = 1, defaultValue = [0], value, onValueChange, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    min={min}
    max={max}
    step={step}
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
    >
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderPrimitive.Root>
));

RangeSliderTA.displayName = SliderPrimitive.Root.displayName;

export { RangeSliderTA };