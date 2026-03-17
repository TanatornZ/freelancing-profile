// ─── Laptop Interface ─────────────────────────────────────────────────────────
export interface Laptop {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  ram: string;
  storage: string;
  display: string;
  cpu: string;
  badge?: string;
  badgeColor?: string;
  emoji: string;
  inStock: boolean;
}
