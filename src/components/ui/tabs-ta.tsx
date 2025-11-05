import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export interface TabItem {
  title: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

export interface TabsTAProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  tabs: TabItem[];
  variant?: "default" | "pills" | "underline";
  color?: string;
}

const TabsTA = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsTAProps
>(({ className, tabs, variant = "default", color = "primary", ...props }, ref) => {
  const variantStyles = {
    default: "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1",
    pills: "inline-flex space-x-1",
    underline: "inline-flex h-10 items-center justify-center",
  };

  const triggerStyles = {
    default: "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
    pills: "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
    underline: "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary",
  };

  return (
    <TabsPrimitive.Root
      ref={ref}
      className={cn("w-full", className)}
      defaultValue="0"
      {...props}
    >
      <TabsPrimitive.List className={cn(variantStyles[variant])}>
        {tabs.map((tab, index) => (
          <TabsPrimitive.Trigger
            key={index}
            value={String(index)}
            className={cn(triggerStyles[variant])}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.title}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab, index) => (
        <TabsPrimitive.Content
          key={index}
          value={String(index)}
          className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
});

TabsTA.displayName = "TabsTA";

export { TabsTA };