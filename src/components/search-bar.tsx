"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FilterDropdown } from "./filter-dropdown";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("query", searchTerm);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="w-full max-w-xs bg-secondary text-secondary-foreground"
        />
        <Button type="submit" size="sm" variant="secondary">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
      <FilterDropdown />
    </div>
  );
}
