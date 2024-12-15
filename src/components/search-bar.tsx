"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FilterDropdown } from "./filter-dropdown";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Clapperboard } from "lucide-react";
import { UploadVideoButton } from "./upload-button";
import { ModeToggle } from "./mode-toggle";

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
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clapperboard className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">VideoApp</span>
        </div>
        <div className="flex items-center space-x-2">
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <Input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full max-w-xs bg-secondary text-secondary-foreground h-8"
            />
            <Button type="submit" size="sm" variant="secondary">
              <Search />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <FilterDropdown />
          <ModeToggle />
          <UploadVideoButton />
        </div>
      </div>
    </div>
  );
}
