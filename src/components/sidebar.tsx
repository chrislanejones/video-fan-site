import React from "react";

const categories = [
  "All",
  "Music",
  "Gaming",
  "Sports",
  "News",
  "Education",
  "Entertainment",
  "Technology",
  "Fashion",
  "Travel",
  "Food",
  "Art",
];

const brightColors = {
  red: "oklch(50 50 0)",
  blue: "oklch(50 50 240)",
  green: "oklch(50 50 120)",
  yellow: "oklch(50 50 60)",
  purple: "oklch(50 50 270)",
  orange: "oklch(50 50 30)",
  pink: "oklch(50 50 330)",
  teal: "oklch(80 80 170)",
  indigo: "oklch(50 50 250)",
  lime: "oklch(80 80 80)",
  cyan: "oklch(80 80 180)",
  amber: "oklch(80 80 45)",
};

export function Sidebar() {
  return (
    <div
      className="w-full grid gap-[10px]"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
        gridTemplateRows: "masonry",
      }}
    >
      {categories.map((category, index) => (
        <button
          key={category}
          className="inline-block px-3 py-1 rounded-full text-black font-medium text-sm"
          style={{
            backgroundColor:
              Object.values(brightColors)[
                index % Object.values(brightColors).length
              ],
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
