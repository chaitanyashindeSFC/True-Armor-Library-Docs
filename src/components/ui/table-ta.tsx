import * as React from "react";
import { cn } from "@/lib/utils";
import { PaginationTA } from "./pagination-ta";

interface TableTAProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  columns: string[];
  tableData: T[];
  length?: number;
  rowsCount?: number;
  setPage?: (page: number) => void;
}

export function TableTA<T>({
  columns,
  tableData,
  length,
  rowsCount = 10,
  setPage,
  className,
  ...props
}: TableTAProps<T>) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="p-4 align-middle [&:has([role=checkbox])]:pr-0"
                    >
                      {String(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {length && setPage && (
        <div className="mt-4">
          <PaginationTA
            length={length}
            rowsCount={rowsCount}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
}

TableTA.displayName = "TableTA";