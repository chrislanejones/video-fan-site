"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

const filterOptions = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "week" },
  { label: "This Month", value: "month" },
  { label: "This Year", value: "year" },
];

export function FilterDropdown({
  onFilterChange,
}: {
  onFilterChange?: (value: string) => void;
}) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterSelect = (filterValue: string) => {
    setSelectedFilter(filterValue);
    if (onFilterChange) {
      onFilterChange(filterValue);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="h-8 w-8" variant="secondary">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter videos</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {filterOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleFilterSelect(option.value)}
            className={selectedFilter === option.value ? "bg-gray-100" : ""}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
