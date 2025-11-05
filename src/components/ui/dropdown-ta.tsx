import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DropDownTAProps<T> {
  items: T[];
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
  selectedItem?: T;
  setSelectedItem?: (item: T) => void;
  getItemLabel?: (item: T) => string;
  showSearch?: boolean;
  placeholder?: string;
}

export function DropDownTA<T>({
  items,
  isOpen,
  setIsOpen,
  searchTerm = "",
  setSearchTerm,
  selectedItem,
  setSelectedItem,
  getItemLabel = (item: T) => String(item),
  showSearch = false,
  placeholder = "Select an item...",
}: DropDownTAProps<T>) {
  const [open, setOpenInternal] = React.useState(false);
  const [search, setSearchInternal] = React.useState("");
  const [selected, setSelectedInternal] = React.useState<T | undefined>(undefined);

  // Use controlled or uncontrolled state
  const handleOpen = setIsOpen || setOpenInternal;
  const handleSearch = setSearchTerm || setSearchInternal;
  const handleSelected = setSelectedItem || setSelectedInternal;
  const currentOpen = isOpen ?? open;
  const currentSearch = searchTerm ?? search;
  const currentSelected = selectedItem ?? selected;

  return (
    <Popover open={currentOpen} onOpenChange={handleOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={currentOpen}
          className="w-[200px] justify-between"
        >
          {currentSelected ? getItemLabel(currentSelected) : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {showSearch && (
            <CommandInput
              placeholder="Search..."
              value={currentSearch}
              onValueChange={handleSearch}
            />
          )}
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {items.map((item, index) => (
              <CommandItem
                key={index}
                value={getItemLabel(item)}
                onSelect={() => {
                  handleSelected(item);
                  handleOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentSelected === item ? "opacity-100" : "opacity-0"
                  )}
                />
                {getItemLabel(item)}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}