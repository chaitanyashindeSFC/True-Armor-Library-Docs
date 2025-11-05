import * as React from "react";
import { BadgeTA } from "./badge-ta";
import { cn } from "@/lib/utils";

interface CardTAProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any card-specific props here
  bordered?: boolean;
  hoverable?: boolean;
}

const CardTA = React.forwardRef<HTMLDivElement, CardTAProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-soft transition-all duration-200 hover:shadow-medium",
        className
      )}
      {...props}
    />
  )
);
CardTA.displayName = "CardTA";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pb-2 pt-4 font-semibold text-lg tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  repos?: number;
  badgeColor?: string;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, repos, badgeColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {repos !== undefined && (
        <BadgeTA
          label={`${repos} repositories`}
          color={(badgeColor as "default" | "outline" | "secondary" | "success" | "warning" | "error") || "default"}
        />
      )}
    </div>
  )
);
CardFooter.displayName = "CardFooter";

const CardLeftIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute left-0 top-0 p-3", className)}
      {...props}
    />
  )
);
CardLeftIcon.displayName = "CardLeftIcon";

const CardRightIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute right-0 top-0 p-3", className)}
      {...props}
    />
  )
);
CardRightIcon.displayName = "CardRightIcon";

// Add compound components to CardTA
const CompoundCardTA = Object.assign(CardTA, {
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
  LeftIcon: CardLeftIcon,
  RightIcon: CardRightIcon,
});

export { CompoundCardTA as CardTA };