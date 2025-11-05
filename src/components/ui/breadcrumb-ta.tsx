import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadCrumbTAProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BreadCrumbTA({ children, className, ...props }: BreadCrumbTAProps) {
  return (
    <nav className={cn("flex items-center text-sm text-muted-foreground", className)} {...props}>
      {children}
    </nav>
  );
}

interface BreadCrumbItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string | React.ReactNode;
  active?: boolean;
}

export function BreadCrumbItem({ label, active, className, ...props }: BreadCrumbItemProps) {
  return (
    <span 
      className={cn(
        "overflow-hidden text-ellipsis whitespace-nowrap", 
        active ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {label}
    </span>
  );
}

export function BreadCrumbSeperator() {
  return <ChevronRight className="mx-2 h-4 w-4" />;
}

BreadCrumbTA.displayName = "BreadCrumbTA";
BreadCrumbItem.displayName = "BreadCrumbItem";
BreadCrumbSeperator.displayName = "BreadCrumbSeperator";