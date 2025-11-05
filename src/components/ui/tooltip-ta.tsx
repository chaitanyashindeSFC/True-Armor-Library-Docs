import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tooltipVariants = cva(
  "z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-success",
        error: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ToolTipTAProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  delayDuration?: number;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

const ToolTipTA = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  ToolTipTAProps
>(({
  children,
  content,
  delayDuration = 200,
  side = "top",
  align = "center",
  variant,
  ...props
}, ref) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root delayDuration={delayDuration} {...props}>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={ref}
          side={side}
          align={align}
          className={cn(tooltipVariants({ variant }))}
          sideOffset={4}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-current" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
));

ToolTipTA.displayName = "ToolTipTA";

export { ToolTipTA };