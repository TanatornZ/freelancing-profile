import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import StoreNav from "../components/laptopStore/StoreNav";
import SidebarFilters from "../components/laptopStore/SidebarFilters";
import SortBar from "../components/laptopStore/SortBar";
import ProductCard from "../components/laptopStore/ProductCard";
import { LAPTOPS } from "../data/mockLaptopData";

export default function LaptopStore() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [cartCount, setCartCount] = useState(0);

  const clearAll = () => {
    setBrand("All");
    setCategory("All");
    setMaxPrice(3000);
    setSearch("");
  };

  const filtered = useMemo(() => {
    let list = [...LAPTOPS];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.brand.toLowerCase().includes(q) ||
          l.cpu.toLowerCase().includes(q),
      );
    }
    if (brand !== "All") list = list.filter((l) => l.brand === brand);
    if (category !== "All") list = list.filter((l) => l.category === category);
    list = list.filter((l) => l.price <= maxPrice);

    switch (sort) {
      case "price_asc": list.sort((a, b) => a.price - b.price); break;
      case "price_desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "reviews": list.sort((a, b) => b.reviews - a.reviews); break;
    }
    return list;
  }, [search, brand, category, sort, maxPrice]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-100 h-100 bg-blue-700/10 rounded-full blur-3xl" />
      </div>

      {/* ── Nav ───────────────────────────────────────────────── */}
      <StoreNav
        search={search}
        onSearchChange={setSearch}
        cartCount={cartCount}
      />

      <div className="container mx-auto px-6 py-8">
        {/* ── Page header ─────────────────────────────────────── */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Laptops &amp;{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
              Notebooks
            </span>
          </h1>
          <p className="text-gray-400">
            {filtered.length} products found — find your perfect machine
          </p>
        </div>

        {/* ── Sort bar ────────────────────────────────────────── */}
        <SortBar
          brand={brand}
          sort={sort}
          view={view}
          onBrandChange={setBrand}
          onSortChange={setSort}
          onViewChange={setView}
        />

        {/* ── Active filter chips ──────────────────────────────── */}
        {(brand !== "All" || category !== "All" || maxPrice < 3000) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {brand !== "All" && (
              <span className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full">
                {brand}
                <button onClick={() => setBrand("All")}>✕</button>
              </span>
            )}
            {category !== "All" && (
              <span className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full">
                {category}
                <button onClick={() => setCategory("All")}>✕</button>
              </span>
            )}
            {maxPrice < 3000 && (
              <span className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full">
                Max ${maxPrice.toLocaleString()}
                <button onClick={() => setMaxPrice(3000)}>✕</button>
              </span>
            )}
          </div>
        )}

        <div className="flex gap-8">
          {/* ── Sidebar filters ─────────────────────────────────── */}
          <SidebarFilters
            brand={brand}
            category={category}
            maxPrice={maxPrice}
            onBrandChange={setBrand}
            onCategoryChange={setCategory}
            onMaxPriceChange={setMaxPrice}
            onClearAll={clearAll}
          />

          {/* ── Product grid / list ──────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-gray-500">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-lg font-semibold text-gray-400">No laptops found</p>
                <p className="text-sm mt-1">Try adjusting your filters or search term</p>
                <button
                  onClick={clearAll}
                  className="mt-6 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div
                className={
                  view === "grid"
                    ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "flex flex-col gap-4"
                }
              >
                {filtered.map((laptop) => (
                  <ProductCard
                    key={laptop.id}
                    laptop={laptop}
                    view={view}
                    onAddToCart={() => setCartCount((c) => c + 1)}
                  />
                ))}
              </div>
            )}

            {/* Pagination stub */}
            {filtered.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                {[1, 2, 3, "...", 8].map((p, i) => (
                  <button
                    key={i}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                      p === 1
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                        : "bg-gray-800 border border-gray-700 text-gray-400 hover:border-violet-500/50 hover:text-white"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="mt-16 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-xl">💻</span>
            <span className="font-bold text-gray-400">
              Laptop<span className="text-violet-400">Hub</span>
            </span>
          </div>
          <p>© 2026 LaptopHub. All rights reserved.</p>
          <Link to="/" className="hover:text-gray-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

  