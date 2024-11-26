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
  red: "#FF5252",
  blue: "#448AFF",
  green: "#69F0AE",
  yellow: "#FFD740",
  purple: "#E040FB",
  orange: "#FFAB40",
  pink: "#FF4081",
  teal: "#64FFDA",
  indigo: "#536DFE",
  lime: "#EEFF41",
  cyan: "#18FFFF",
  amber: "#FFD740",
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
