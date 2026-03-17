import { Link } from "react-router-dom";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  cartCount: number;
};

export default function StoreNav({ search, onSearchChange, cartCount }: Props) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl">💻</span>
          <span className="text-lg font-extrabold tracking-tight hidden sm:block">
            Laptop<span className="text-violet-400">Hub</span>
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-lg relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search laptops, brands, specs..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-gray-800/80 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 text-white placeholder-gray-500 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* Cart icon */}
          <div className="relative p-2.5 bg-gray-800 border border-gray-700 rounded-xl">
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <Link
            to="/"
            className="hidden md:block text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back
          </Link>
        </div>
      </div>
    </nav>
  );
}
