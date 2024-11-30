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
          className="inline-block py-1 rounded-full border-2 border-transparent text-black font-medium text-sm 
          bg-opacity-[92%] 
          hover:brightness-110 hover:saturate-350 
          transition-all duration-300 ease-in-out hover:border-white"
          style={{
            backgroundColor: colorValues[index % colorValues.length],
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
