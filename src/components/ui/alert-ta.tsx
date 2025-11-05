import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>div]:pl-7",
  {
    variants: {
      type: {
        info: "bg-primary/10 border-primary/20 text-foreground",
        success: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900/30",
        warning: "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-900/30",
        error: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900/30",
      },
    },
    defaultVariants: {
      type: "info",
    },
  }
);

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
};

interface AlertTAProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>, VariantProps<typeof alertVariants> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  message?: React.ReactNode; // Alternative to description
}

export function AlertTA({ className, title, description, message, type, ...props }: AlertTAProps) {
  const Icon = icons[type || "info"];
  
  return (
    <div className={cn(alertVariants({ type }), className)} {...props}>
      <Icon className="h-5 w-5" />
      <div className="flex flex-col gap-1">
        {title && <h5 className="font-medium leading-none tracking-tight">{title}</h5>}
        {(description || message) && (
          <div className="text-sm [&_p]:leading-relaxed">
            {description || message}
          </div>
        )}
      </div>
    </div>
  );
}

// Named exports for composition
export function Alert({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative rounded-lg border p-4", className)} {...props} />;
}

export function AlertIcon({ className, type = "info" }: { className?: string; type?: keyof typeof icons }) {
  const Icon = icons[type];
  return <Icon className={cn("h-5 w-5", className)} />;
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn("font-medium leading-none tracking-tight", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />;
}