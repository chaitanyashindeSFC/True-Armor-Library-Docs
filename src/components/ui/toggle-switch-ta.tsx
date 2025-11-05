import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export interface ToggleSwitchTAProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  size?: "sm" | "md" | "lg";
  label?: string;
  description?: string;
}

const ToggleSwitchTA = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  ToggleSwitchTAProps
>(({ className, size = "md", label, description, ...props }, ref) => {
  const sizes = {
    sm: {
      switch: "h-4 w-8",
      thumb: "h-3 w-3",
      translate: "translate-x-4",
    },
    md: {
      switch: "h-6 w-11",
      thumb: "h-5 w-5",
      translate: "translate-x-5",
    },
    lg: {
      switch: "h-8 w-14",
      thumb: "h-7 w-7",
      translate: "translate-x-6",
    },
  };

  return (
    <div className="flex items-center space-x-2">
      <SwitchPrimitive.Root
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          sizes[size].switch,
          className
        )}
        {...props}
        ref={ref}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:bg-primary-foreground data-[state=unchecked]:translate-x-0",
            sizes[size].thumb,
            "data-[state=checked]:" + sizes[size].translate
          )}
        />
      </SwitchPrimitive.Root>
      {(label || description) && (
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={props.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
    </div>
  );
});

ToggleSwitchTA.displayName = "ToggleSwitchTA";

export { ToggleSwitchTA };