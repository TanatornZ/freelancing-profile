import { Link } from "react-router-dom";

const MENU_ITEMS = [
  {
    name: "Classic Smash",
    description: "Double smashed beef patty, American cheese, pickles, onion, special sauce",
    price: "$9.99",
    tag: "Best Seller",
    tagColor: "bg-amber-500",
    emoji: "🍔",
  },
  {
    name: "Bacon BBQ Blaze",
    description: "Crispy bacon, cheddar, caramelized onion, smoky BBQ sauce, brioche bun",
    price: "$12.49",
    tag: "Fan Favorite",
    tagColor: "bg-red-500",
    emoji: "🥓",
  },
  {
    name: "Mushroom Swiss",
    description: "Sautéed mushrooms, Swiss cheese, garlic aioli, fresh arugula",
    price: "$11.99",
    tag: "Vegetarian",
    tagColor: "bg-emerald-500",
    emoji: "🍄",
  },
  {
    name: "Spicy Inferno",
    description: "Jalapeños, pepper jack, sriracha mayo, crispy shallots, ghost pepper ketchup",
    price: "$12.99",
    tag: "🔥 Hot",
    tagColor: "bg-orange-500",
    emoji: "🌶️",
  },
];

const FEATURES = [
  {
    icon: "🥩",
    title: "100% Fresh Beef",
    description: "Daily ground, never frozen. Hand-formed patties smashed to perfection on a screaming-hot griddle.",
  },
  {
    icon: "🌾",
    title: "Brioche Buns",
    description: "Baked fresh every morning. Buttery, pillowy, toasted just right to hold every glorious layer.",
  },
  {
    icon: "🥬",
    title: "Local Produce",
    description: "Crisp veggies sourced from local farms. Seasonal, sustainable, and always fresh.",
  },
  {
    icon: "⚡",
    title: "Ready in 5 min",
    description: "Fast without compromise. Our streamlined kitchen means hot food hits your hands fast.",
  },
];

const TESTIMONIALS = [
  {
    name: "Alex T.",
    role: "Food Blogger",
    quote: "Hands down the best smash burger in the city. The crust on that patty is absolutely insane.",
    avatar: "AT",
  },
  {
    name: "Maria S.",
    role: "Regular Customer",
    quote: "I come here every Friday. The Bacon BBQ Blaze is life-changing. My whole office is addicted.",
    avatar: "MS",
  },
  {
    name: "James K.",
    role: "Chef & Critic",
    quote: "Simple ingredients, executed flawlessly. This is what burger craftsmanship looks like.",
    avatar: "JK",
  },
];

export default function HamburgerLanding() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-60 -left-60 w-150 h-150 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-60 w-125 h-125 bg-orange-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 left-1/3 w-125 h-125 bg-red-800/10 rounded-full blur-3xl" />
      </div>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍔</span>
            <span className="text-xl font-extrabold tracking-tight">
              Baby<span className="text-amber-400">Burger</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
            <a href="#features" className="hover:text-amber-400 transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#menu"
              className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50"
            >
              Order Now
            </a>
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors hidden md:block"
            >
              ← Back
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 pt-24 pb-32 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-wider">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          Now Open · Dine In &amp; Takeaway
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Burgers That Hit{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Different
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          Hand-crafted smash burgers made with 100% fresh beef, brioche buns baked
          daily, and sauces you won't find anywhere else. This is your new favourite
          burger.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 w-full sm:w-auto"
          >
            🍔 See the Menu
          </a>
          <a
            href="#features"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all border border-gray-700 w-full sm:w-auto"
          >
            Why BabyBurger?
          </a>
        </div>

        {/* Hero stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "50K+", label: "Burgers Sold" },
            { value: "4.9★", label: "Avg. Rating" },
            { value: "<5 min", label: "Avg. Wait" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-amber-400">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section id="features" className="bg-gray-900/50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Why <span className="text-amber-400">BabyBurger</span>?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Every detail matters. Here's what makes us obsessively good.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-gray-800 transition-all group"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────────────── */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Our Menu</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Four iconic burgers. Zero compromises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.name}
                className="bg-gray-900 border border-gray-800 hover:opacity-90 transition-opacity rounded-2xl p-6 hover:border-amber-500/40 transition-all group flex gap-5"
              >
                <div className="text-5xl shrink-0 w-14 text-center">{item.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors cursor-default">
                      {item.name}
                    </h3>
                    <span
                      className={`${item.tagColor} text-white cursor-default text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 cursor-default">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-extrabold text-lg cursor-default">{item.price}</span>
                    <button className="bg-amber-500/10 cursor-pointer hover:bg-amber-500 text-amber-400 hover:text-gray-950 text-xs font-bold px-4 py-1.5 rounded-lg transition-all border border-amber-500/30">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section id="reviews" className="bg-gray-900/50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              What People Say
            </h2>
            <p className="text-gray-400">Real reviews from real burger lovers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 flex flex-col gap-4"
              >
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-gray-950 font-extrabold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto text-amber-400 text-sm">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-3xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🍔</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Drop Into{" "}
              <span className="text-amber-400">BabyBurger</span>?
            </h2>
            <p className="text-gray-400 mb-8">
              Order online, pick up in 5 minutes. Or find us at 42 Flame Street — open
              daily 11am–11pm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#menu"
                className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-amber-500/30"
              >
                Order Now
              </a>
              <a
                href="tel:+10000000000"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all border border-gray-700"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍔</span>
            <span className="font-bold text-gray-400">
              Burger<span className="text-amber-400">Drop</span>
            </span>
          </div>
          <p>© 2026 BabyBurger. All rights reserved.</p>
          <Link to="/" className="hover:text-gray-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
