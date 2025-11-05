import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      color: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        success: "border-transparent bg-green-500 text-white dark:bg-green-900",
        warning: "border-transparent bg-yellow-500 text-white dark:bg-yellow-900",
        error: "border-transparent bg-red-500 text-white dark:bg-red-900",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

interface BadgeTAProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof badgeVariants> {
  label: string | React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  value?: string | number;
}

const BadgeTA = React.forwardRef<HTMLDivElement, BadgeTAProps>(
  ({ className, color, label, icon: Icon, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ color }), className)} {...props}>
        {Icon && <Icon className="mr-1.5 h-3 w-3" />}
        {label}
      </div>
    );
  }
);

BadgeTA.displayName = "BadgeTA";

export { BadgeTA };