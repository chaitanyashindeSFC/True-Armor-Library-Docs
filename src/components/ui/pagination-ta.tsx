import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface PaginationTAProps {
  totalPages?: number;
  length?: number;
  rowsCount?: number;
  page?: number;
  setPage?: (page: number) => void;
  onChange?: (page: number) => void;
  className?: string;
}

export function PaginationTA({
  totalPages,
  length,
  rowsCount = 10,
  page = 0,
  setPage,
  onChange,
  className,
}: PaginationTAProps) {
  const handleChange = setPage || onChange;
  const total = totalPages || Math.ceil((length || 0) / rowsCount);

  // Generate page numbers to show
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(0);
    for (let i = page - delta; i <= page + delta; i++) {
      if (i > 0 && i < total - 1) {
        range.push(i);
      }
    }
    range.push(total - 1);

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className={cn("flex items-center justify-center space-x-2", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleChange?.(page - 1)}
        disabled={page === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="flex items-center space-x-1">
        {getPageNumbers().map((pageNum, i) => (
          <Button
            key={i}
            variant={pageNum === page ? "default" : "outline"}
            size="icon"
            onClick={() => pageNum !== '...' && handleChange?.(pageNum as number)}
            disabled={pageNum === '...'}
            className={cn(
              "h-8 w-8",
              pageNum === page && "bg-primary text-primary-foreground"
            )}
          >
            {pageNum}
          </Button>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleChange?.(page + 1)}
        disabled={page >= total - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}