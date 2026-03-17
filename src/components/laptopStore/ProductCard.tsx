import { useState } from "react";
import StarRating from "./StarRating";
import type { Laptop } from "../../types/laptop.interface";
import laptopImage from "../../assets/laptop-show.png";

type Props = {
  laptop: Laptop;
  view: "grid" | "list";
  onAddToCart?: () => void;
};

export default function ProductCard({ laptop, view, onAddToCart }: Props) {
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAddToCart?.();
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = laptop.originalPrice
    ? Math.round(
        ((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100,
      )
    : null;

  // ── Wishlist button ───────────────────────────────────────────────────────
  const WishlistBtn = ({ className }: { className?: string }) => (
    <button
      onClick={() => setWishlisted(!wishlisted)}
      className={`p-2 rounded-lg border transition-all ${
        wishlisted
          ? "border-red-500/50 bg-red-500/10 text-red-400"
          : "border-gray-700 text-gray-500 hover:text-red-400 hover:border-red-500/50"
      } ${className ?? ""}`}
    >
      <svg
        className="w-4 h-4"
        fill={wishlisted ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );

  // ── Add to cart button ────────────────────────────────────────────────────
  const CartBtn = ({ className }: { className?: string }) => (
    <button
      onClick={handleAdd}
      disabled={!laptop.inStock}
      className={`rounded-lg cursor-pointer text-sm font-bold transition-all ${
        laptop.inStock
          ? added
            ? "bg-green-500 text-white"
            : "bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-500/20 hover:shadow-violet-500/40"
          : "bg-gray-800 text-gray-500 cursor-not-allowed"
      } ${className ?? ""}`}
    >
      {!laptop.inStock ? "Out of Stock" : added ? "✓ Added" : "Add to Cart"}
    </button>
  );

  // ── LIST VIEW ─────────────────────────────────────────────────────────────
  if (view === "list") {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/40 transition-all group flex gap-6 items-center">
        {/* Emoji thumbnail */}
        <img
          src={laptopImage}
          alt={laptop.name}
          className="object-contain w-24 h-24"
        />

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">{laptop.brand}</p>
              <h3 className="font-bold text-white group-hover:text-violet-400 transition-colors">
                {laptop.name}
              </h3>
            </div>
            {laptop.badge && (
              <span
                className={`${laptop.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0`}
              >
                {laptop.badge}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-400">
            <span>🔲 {laptop.cpu}</span>
            <span>🧠 {laptop.ram}</span>
            <span>💾 {laptop.storage}</span>
            <span>🖥 {laptop.display}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={laptop.rating} />
            <span className="text-xs text-gray-500">
              {laptop.rating} ({laptop.reviews.toLocaleString()})
            </span>
          </div>
        </div>

        {/* Price + actions */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          <div className="text-right">
            <p className="text-2xl font-extrabold text-white">
              ${laptop.price.toLocaleString()}
            </p>
            {laptop.originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${laptop.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <WishlistBtn />
            <CartBtn className="px-5 py-2" />
          </div>
        </div>
      </div>
    );
  }

  // ── GRID VIEW ─────────────────────────────────────────────────────────────
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all group flex flex-col">
      {/* Thumbnail */}
      <div className="relative bg-gray-800/60 h-44 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
        <img
          src={laptopImage}
          alt={laptop.name}
          className="object-contain w-2/3 h-2/3"
        />

        {discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        )}
        {laptop.badge && (
          <span
            className={`absolute top-3 right-3 ${laptop.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}
          >
            {laptop.badge}
          </span>
        )}

        {/* Wishlist — appears on hover */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`absolute bottom-3 right-3 p-2 rounded-lg backdrop-blur-sm transition-all ${
            wishlisted
              ? "bg-red-500/20 text-red-400 border border-red-500/40"
              : "bg-gray-900/70 text-gray-400 border border-gray-700/50 opacity-0 group-hover:opacity-100"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill={wishlisted ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {!laptop.inStock && (
          <div className="absolute inset-0 bg-gray-950/60 flex items-center justify-center">
            <span className="bg-gray-800 border border-gray-700 text-gray-400 text-xs font-bold px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gray-500 mb-0.5">{laptop.brand}</p>
        <h3 className="font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
          {laptop.name}
        </h3>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1 my-3 text-xs text-gray-400">
          <span className="truncate">🔲 {laptop.cpu}</span>
          <span>🧠 {laptop.ram}</span>
          <span>💾 {laptop.storage}</span>
          <span className="truncate">🖥 {laptop.display}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={laptop.rating} />
          <span className="text-xs text-gray-500">
            {laptop.rating} ({laptop.reviews.toLocaleString()})
          </span>
        </div>

        <div className="mt-auto">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-2xl font-extrabold text-white">
              ${laptop.price.toLocaleString()}
            </span>
            {laptop.originalPrice && (
              <span className="text-sm text-gray-500 line-through mb-0.5">
                ${laptop.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <CartBtn className="w-full py-2.5" />
        </div>
      </div>
    </div>
  );
}
