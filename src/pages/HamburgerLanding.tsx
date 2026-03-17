import { Link } from "react-router-dom";
import burger from "../assets/landing/burger.png";
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
      <section className="container mx-auto px-6 pt-20 pb-28">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-wider">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Now Open · Dine In &amp; Takeaway
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-6">
              Burgers That Hit{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                Different
              </span>
            </h1>

            <p className="max-w-lg text-gray-400 text-lg mb-10 leading-relaxed">
              Hand-crafted smash burgers made with 100% fresh beef, brioche buns
              baked daily, and sauces you won't find anywhere else.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-14">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
              {[
                { value: "50K+", label: "Burgers Sold" },
                { value: "4.9★", label: "Avg. Rating" },
                { value: "<5 min", label: "Avg. Wait" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-amber-400">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Burger SVG Illustration ── */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-105 md:h-105">
              {/* Glow behind burger */}
              <div className="absolute inset-8 bg-amber-500/20 rounded-full blur-3xl" />
              {/* Floating ring decorations */}
              <div className="absolute top-6 right-10 w-5 h-5 rounded-full border-2 border-amber-400/40 animate-bounce" style={{ animationDelay: "0.2s" }} />
              <div className="absolute bottom-10 left-8 w-3 h-3 rounded-full bg-orange-500/50 animate-bounce" style={{ animationDelay: "0.6s" }} />
              <div className="absolute top-1/3 left-4 w-2 h-2 rounded-full bg-amber-400/60 animate-bounce" style={{ animationDelay: "0.9s" }} />

             <img src={burger} alt="Burger" className="rotate-15"/>
            </div>
          </div>

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
                className="bg-gray-900 border border-gray-800 hover:opacity-90 rounded-2xl p-6 hover:border-amber-500/40 transition-all group flex gap-5"
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
          <div className="bg-linear-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-3xl p-12 max-w-2xl mx-auto">
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


//  {/* SVG Burger */}
//               <svg
//                 viewBox="0 0 400 370"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-full h-full drop-shadow-2xl"
//                 style={{ filter: "drop-shadow(0 20px 60px rgba(245,158,11,0.25))" }}
//               >
//                 {/* ── Top Bun ── */}
//                 {/* Bun shadow */}
//                 <ellipse cx="200" cy="108" rx="148" ry="20" fill="#78350f" opacity="0.25" />
//                 {/* Main bun dome */}
//                 <path d="M60 108 Q55 55 200 42 Q345 55 340 108 Z" fill="url(#bunGrad)" />
//                 {/* Bun bottom flat */}
//                 <rect x="58" y="105" width="284" height="22" rx="8" fill="url(#bunFlatGrad)" />
//                 {/* Sesame seeds */}
//                 <ellipse cx="155" cy="72" rx="11" ry="6" fill="#fef3c7" transform="rotate(-20 155 72)" />
//                 <ellipse cx="200" cy="58" rx="11" ry="6" fill="#fef3c7" />
//                 <ellipse cx="245" cy="68" rx="11" ry="6" fill="#fef3c7" transform="rotate(18 245 68)" />
//                 <ellipse cx="178" cy="90" rx="9" ry="5" fill="#fef3c7" transform="rotate(-10 178 90)" />
//                 <ellipse cx="222" cy="88" rx="9" ry="5" fill="#fef3c7" transform="rotate(12 222 88)" />
//                 {/* Bun shine */}
//                 <ellipse cx="175" cy="65" rx="30" ry="14" fill="white" opacity="0.12" transform="rotate(-15 175 65)" />

//                 {/* ── Lettuce ── */}
//                 <path d="M52 128 Q70 118 90 128 Q110 138 130 126 Q150 114 170 126 Q190 138 210 126 Q230 114 250 126 Q270 138 290 126 Q310 114 330 126 Q350 136 348 134 L348 148 Q330 140 310 152 Q290 164 270 150 Q250 136 230 150 Q210 164 190 150 Q170 136 150 150 Q130 164 110 150 Q90 136 70 150 Q58 156 52 148 Z" fill="#16a34a" />
//                 <path d="M52 128 Q70 118 90 128 Q110 138 130 126 Q150 114 170 126 Q190 138 210 126 Q230 114 250 126 Q270 138 290 126 Q310 114 330 126 Q350 136 348 134"
//                   stroke="#15803d" strokeWidth="1.5" fill="none" />
//                 {/* Lettuce highlights */}
//                 <path d="M80 132 Q100 124 120 132" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.6" />
//                 <path d="M180 130 Q200 122 220 130" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.6" />
//                 <path d="M280 130 Q300 122 320 130" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.6" />

//                 {/* ── Tomato slices ── */}
//                 <rect x="68" y="148" width="264" height="26" rx="6" fill="#dc2626" />
//                 <rect x="68" y="148" width="264" height="6" rx="3" fill="#ef4444" opacity="0.6" />
//                 {/* Tomato seeds pattern */}
//                 <ellipse cx="120" cy="162" rx="12" ry="7" fill="#fca5a5" opacity="0.5" />
//                 <ellipse cx="165" cy="158" rx="10" ry="6" fill="#fca5a5" opacity="0.4" />
//                 <ellipse cx="210" cy="163" rx="13" ry="7" fill="#fca5a5" opacity="0.5" />
//                 <ellipse cx="260" cy="159" rx="11" ry="6" fill="#fca5a5" opacity="0.4" />
//                 <ellipse cx="300" cy="162" rx="10" ry="6" fill="#fca5a5" opacity="0.4" />

//                 {/* ── Cheese ── */}
//                 <path d="M62 174 L338 174 L352 196 L48 196 Z" fill="#fbbf24" />
//                 <path d="M62 174 L338 174 L352 196 L48 196 Z" fill="url(#cheeseGrad)" />
//                 {/* Cheese drip left */}
//                 <path d="M82 196 Q78 210 72 216 Q68 220 74 220 Q80 218 86 210 L88 196 Z" fill="#f59e0b" />
//                 {/* Cheese drip right */}
//                 <path d="M310 196 Q314 212 322 218 Q326 222 320 222 Q314 218 308 210 L306 196 Z" fill="#f59e0b" />
//                 {/* Melted cheese drip middle */}
//                 <path d="M188 196 Q185 218 182 226 Q180 230 186 228 Q192 222 194 210 L196 196 Z" fill="#f59e0b" />

//                 {/* ── Beef Patty ── */}
//                 <rect x="55" y="196" width="290" height="46" rx="12" fill="url(#pattyGrad)" />
//                 {/* Patty char marks */}
//                 <path d="M90 205 Q130 210 170 205" stroke="#292524" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
//                 <path d="M200 208 Q240 215 280 208" stroke="#292524" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
//                 <path d="M95 220 Q125 225 155 220" stroke="#292524" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
//                 <path d="M220 218 Q255 225 285 218" stroke="#292524" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
//                 {/* Patty top highlight */}
//                 <rect x="55" y="196" width="290" height="10" rx="8" fill="white" opacity="0.06" />

//                 {/* ── Sauce drizzle ── */}
//                 <path d="M100 242 Q150 236 200 244 Q250 252 300 242" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />

//                 {/* ── Bottom Bun ── */}
//                 <rect x="55" y="248" width="290" height="52" rx="16" fill="url(#bottomBunGrad)" />
//                 {/* Bottom bun highlight */}
//                 <rect x="55" y="248" width="290" height="12" rx="8" fill="white" opacity="0.07" />
//                 {/* Bottom bun shadow line */}
//                 <rect x="55" y="288" width="290" height="12" rx="6" fill="#78350f" opacity="0.2" />

//                 {/* ── Plate / shadow ── */}
//                 <ellipse cx="200" cy="315" rx="175" ry="16" fill="#1c1917" opacity="0.5" />

//                 {/* ── Gradients ── */}
//                 <defs>
//                   <radialGradient id="bunGrad" cx="50%" cy="30%" r="60%">
//                     <stop offset="0%" stopColor="#fde68a" />
//                     <stop offset="50%" stopColor="#f59e0b" />
//                     <stop offset="100%" stopColor="#b45309" />
//                   </radialGradient>
//                   <linearGradient id="bunFlatGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#d97706" />
//                     <stop offset="100%" stopColor="#92400e" />
//                   </linearGradient>
//                   <linearGradient id="cheeseGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#fde68a" stopOpacity="0.6" />
//                     <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
//                   </linearGradient>
//                   <linearGradient id="pattyGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#57534e" />
//                     <stop offset="40%" stopColor="#3d2c1e" />
//                     <stop offset="100%" stopColor="#1c1008" />
//                   </linearGradient>
//                   <linearGradient id="bottomBunGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#fde68a" />
//                     <stop offset="30%" stopColor="#f59e0b" />
//                     <stop offset="100%" stopColor="#92400e" />
//                   </linearGradient>
//                 </defs>
//               </svg>