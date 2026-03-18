import { BRANDS, SORT_OPTIONS } from "../../data/mockLaptopData";

type Props = {
  brand: string;
  sort: string;
  view: "grid" | "list";
  onBrandChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onViewChange: (value: "grid" | "list") => void;
};

export default function SortBar({
  brand,
  sort,
  view,
  onBrandChange,
  onSortChange,
  onViewChange,
}: Props) {
  return (
    <div className="flex items-center gap-3 mb-6 flex-wrap">
      {/* Mobile brand pills */}
      <div className="flex gap-2 flex-wrap lg:hidden">
        {BRANDS.filter((b) => b !== "All")
          .slice(0, 4)
          .map((b) => (
            <button
              key={b}
              onClick={() => onBrandChange(brand === b ? "All" : b)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                brand === b
                  ? "border-violet-500 bg-violet-500/20 text-violet-400"
                  : "border-gray-700 text-gray-400 hover:border-gray-600"
              }`}
            >
              {b}
            </button>
          ))}
      </div>

      <div className="ml-auto flex items-center gap-3">
        {/* Sort select */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-sm text-gray-300 rounded-xl px-3 py-2 outline-none focus:border-violet-500 transition-all cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        {/* Grid / List toggle */}
        <div className="flex bg-gray-800 border border-gray-700 rounded-xl p-1 gap-1">
          <button
            onClick={() => onViewChange("grid")}
            className={`p-1.5 rounded-lg transition-all ${
              view === "grid"
                ? "bg-violet-600 text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => onViewChange("list")}
            className={`p-1.5 rounded-lg transition-all ${
              view === "list"
                ? "bg-violet-600 text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
