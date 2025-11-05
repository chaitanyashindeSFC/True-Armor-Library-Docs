import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Download, MoreVertical, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

interface ContextMenuTAProps extends React.ComponentProps<typeof ContextMenu> {
  type?: "action" | "download" | "archived";
  children?: React.ReactNode;
}

const menuItems = {
  action: [
    { label: "Edit", onClick: () => {} },
    { label: "Delete", onClick: () => {} },
  ],
  download: [
    { label: "Download", onClick: () => {}, icon: Download },
  ],
  archived: [
    { label: "Archive", onClick: () => {}, icon: Archive },
  ],
};

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, children, icon: Icon, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {Icon && <Icon className="mr-2 h-4 w-4" />}
    {children}
  </ContextMenuPrimitive.Item>
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

export const ContextMenuTA = React.forwardRef<HTMLButtonElement, ContextMenuTAProps>(
  ({ type = "action", children, ...props }, ref) => {
    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          {children || (
            <button
              ref={ref}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          )}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuGroup>
            {menuItems[type].map((item, index) => (
              <ContextMenuItem key={index} onClick={item.onClick} icon={item.icon}>
                {item.label}
              </ContextMenuItem>
            ))}
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  }
);

ContextMenuTA.displayName = "ContextMenuTA";

export { ContextMenu, ContextMenuTrigger, ContextMenuItem, ContextMenuContent };