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
  one: "oklch(0.89 0.16 0)",
  two: "oklch(0.89 0.16 40)",
  three: "oklch(0.89 0.16 80)",
  four: "oklch(0.89 0.16 120)",
  five: "oklch(0.89 0.16 160)",
  six: "oklch(0.89 0.16 200)",
  seven: "oklch(0.89 0.16 240)",
  eight: "oklch(0.89 0.16 280)",
  nine: "oklch(0.89 0.16 320)",
};
export function Sidebar() {
  const colorValues = Object.values(brightColors);

  const firstColumn = categories.filter((_, index) => index % 3 === 0);
  const secondColumn = categories.filter((_, index) => index % 3 === 1);
  const thirdColumn = categories.filter((_, index) => index % 3 === 2);

  return (
    <div className="grid grid-cols-2  gap-4 mt-20">
      <div className="grid gap-4">
        {firstColumn.map((category, index) => (
          <button
            key={category}
            className="py-1 rounded-full text-black font-medium text-sm"
            style={{
              backgroundColor: colorValues[index % colorValues.length],
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {secondColumn.map((category, index) => (
          <button
            key={category}
            className="py-1 rounded-full text-black font-medium text-sm"
            style={{
              backgroundColor: colorValues[index % colorValues.length],
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {thirdColumn.map((category, index) => (
          <button
            key={category}
            className="py-1 rounded-full text-black font-medium text-sm"
            style={{
              backgroundColor: colorValues[index % colorValues.length],
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
