import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FilterDropdown } from "./filter-dropdown";

export function SearchBar() {
  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Search videos..."
        className="w-full max-w-xs bg-secondary text-secondary-foreground"
      />
      <Button type="submit" size="sm" variant="secondary">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
      <FilterDropdown />
    </div>
  );
}
