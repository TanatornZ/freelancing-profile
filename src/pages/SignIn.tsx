import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle registration
    console.log({ name, email, password });
  };

  const dm = darkMode;

  return (
    <div className={`min-h-screen ${dm ? "bg-gray-950" : "bg-gray-100"} flex items-center justify-center px-4 transition-colors duration-300`}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-96 h-96 ${dm ? "bg-violet-600/20" : "bg-violet-400/20"} rounded-full blur-3xl`} />
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 ${dm ? "bg-violet-800/20" : "bg-violet-300/30"} rounded-full blur-3xl`} />
      </div>

      {/* Theme toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-5 right-5 p-2.5 rounded-xl border transition-all ${
          dm
            ? "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700"
            : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm"
        }`}
        aria-label="Toggle theme"
      >
        {dm ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className={`${dm ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} border rounded-2xl p-8 shadow-2xl transition-colors duration-300`}>
          {/* Logo / Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-600 rounded-xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
            </div>
            <h1 className={`text-2xl font-bold ${dm ? "text-white" : "text-gray-900"}`}>Create an account</h1>
            <p className={`${dm ? "text-gray-400" : "text-gray-500"} text-sm mt-1`}>
              Start your journey today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${dm ? "text-gray-300" : "text-gray-700"} mb-1.5`}>
                Full name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className={`w-full ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"} border focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 text-sm rounded-xl px-4 py-3 outline-none transition-all`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${dm ? "text-gray-300" : "text-gray-700"} mb-1.5`}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className={`w-full ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"} border focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 text-sm rounded-xl px-4 py-3 outline-none transition-all`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${dm ? "text-gray-300" : "text-gray-700"} mb-1.5`}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  className={`w-full ${dm ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"} border focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 text-sm rounded-xl px-4 py-3 pr-11 outline-none transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${dm ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"} transition-colors`}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113C21.186 17.023 16.97 20.25 12 20.25c-4.97 0-9.184-3.222-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {/* Password strength indicator */}
              {password.length > 0 && (
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        password.length >= i * 2
                          ? password.length < 6
                            ? "bg-red-500"
                            : password.length < 10
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          : "bg-gray-700"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-gray-800 accent-violet-600 cursor-pointer"
              />
              <span className={`text-sm ${dm ? "text-gray-400" : "text-gray-500"} leading-relaxed`}>
                I agree to the{" "}
                <a
                  href="#"
                  className="text-violet-500 hover:text-violet-400 transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-violet-500 hover:text-violet-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!agreed}
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${dm ? "border-gray-800" : "border-gray-200"}`} />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className={`${dm ? "bg-gray-900 text-gray-500" : "bg-white text-gray-400"} px-3 tracking-widest`}>
                or
              </span>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            {/* Google */}
            <button
              type="button"
              className={`w-full flex items-center justify-center gap-3 ${dm ? "bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-white" : "bg-white hover:bg-gray-50 border-gray-300 hover:border-gray-400 text-gray-800 shadow-sm"} border text-sm font-medium py-3 px-4 rounded-xl transition-all`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </button>

            {/* Facebook */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white text-sm font-medium py-3 px-4 rounded-xl transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Sign up with Facebook
            </button>
          </div>

          {/* Footer */}
          <p className={`text-center text-sm ${dm ? "text-gray-500" : "text-gray-500"} mt-6`}>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-500 hover:text-violet-400 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
