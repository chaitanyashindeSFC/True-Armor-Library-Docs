import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxTAProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const CheckboxTA = React.forwardRef<HTMLInputElement, CheckboxTAProps>(
  ({ className, label, checked, onChange, disabled, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="checkbox"
            ref={ref}
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            disabled={disabled}
            className={cn(
              "peer h-4 w-4 appearance-none rounded border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          />
          <Check
            className={cn(
              "absolute left-0 top-0 h-4 w-4 scale-0 text-primary opacity-0 transition-all",
              checked && "scale-75 opacity-100"
            )}
          />
        </div>
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              disabled && "cursor-not-allowed opacity-70"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

CheckboxTA.displayName = "CheckboxTA";

export { CheckboxTA };