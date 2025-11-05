import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      buttonType: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary: "bg-transparent text-foreground hover:bg-accent/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      buttonType: "primary",
      size: "default",
    },
  }
);

export interface ButtonTAProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string | React.ReactNode;
  customCss?: string;
}

const ButtonTA = React.forwardRef<HTMLButtonElement, ButtonTAProps>(
  ({ className, buttonType, size, label, customCss, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ buttonType, size, className }), customCss)}
        ref={ref}
        {...props}
      >
        {label}
      </button>
    );
  }
);

ButtonTA.displayName = "ButtonTA";

export { ButtonTA };