import { BRANDS, CATEGORIES } from "../../data/mockLaptopData";

type Props = {
  brand: string;
  category: string;
  maxPrice: number;
  onBrandChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onMaxPriceChange: (value: number) => void;
  onClearAll: () => void;
};

export default function SidebarFilters({
  brand,
  category,
  maxPrice,
  onBrandChange,
  onCategoryChange,
  onMaxPriceChange,
  onClearAll,
}: Props) {
  return (
    <aside className="hidden lg:flex flex-col gap-7 w-56 flex-shrink-0">
      {/* Brand */}
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
          Brand
        </h4>
        <div className="flex flex-col gap-1.5">
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => onBrandChange(b)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                brand === b
                  ? "bg-violet-600/20 text-violet-400 font-semibold border border-violet-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
          Category
        </h4>
        <div className="flex flex-col gap-1.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => onCategoryChange(c)}
              className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                category === c
                  ? "bg-violet-600/20 text-violet-400 font-semibold border border-violet-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
          Max Price
        </h4>
        <input
          type="range"
          min={500}
          max={3000}
          step={100}
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full accent-violet-500"
          aria-label="filter price"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$500</span>
          <span className="text-violet-400 font-bold">
            ${maxPrice.toLocaleString()}
          </span>
          <span>$3,000</span>
        </div>
      </div>

      {/* Clear all */}
      <button
        onClick={onClearAll}
        className="text-sm text-gray-500 hover:text-red-400 transition-colors text-left"
      >
        ✕ Clear all filters
      </button>
    </aside>
  );
}
