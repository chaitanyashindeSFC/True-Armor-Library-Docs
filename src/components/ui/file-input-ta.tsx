import * as React from "react";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileInputTAProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  customCss?: string;
}

export const FileInputTA = React.forwardRef<HTMLInputElement, FileInputTAProps>(
  ({ className, label, error, customCss, ...props }, ref) => {
    const [dragActive, setDragActive] = React.useState(false);
    const [fileName, setFileName] = React.useState<string>();

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setFileName(e.dataTransfer.files[0].name);
        if (props.onChange) {
          const event = {
            ...e,
            target: { ...e.target, files: e.dataTransfer.files },
          } as unknown as React.ChangeEvent<HTMLInputElement>;
          props.onChange(event);
        }
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setFileName(e.target.files[0].name);
      }
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <div className="w-full">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <div
          className={cn(
            "mt-2 flex justify-center rounded-lg border border-dashed border-input px-6 py-8",
            dragActive && "border-primary/50 bg-primary/5",
            error && "border-red-500",
            customCss
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
            <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-semibold text-primary hover:text-primary/80"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  ref={ref}
                  type="file"
                  className="sr-only"
                  onChange={handleChange}
                  {...props}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            {fileName && (
              <p className="mt-2 text-sm text-muted-foreground">{fileName}</p>
            )}
            {error && (
              <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

FileInputTA.displayName = "FileInputTA";