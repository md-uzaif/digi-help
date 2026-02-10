import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="h-10 w-10"
            role="img"
          >
            <defs>
              <linearGradient id="digiHelpLogo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f766e" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="42" height="42" rx="10" fill="url(#digiHelpLogo)" />
            <path
              d="M16 17h10a7 7 0 1 1 0 14H16V17z"
              fill="#ffffff"
              opacity="0.9"
            />
            <path
              d="M19 21h6a4 4 0 1 1 0 8h-6v-8z"
              fill="#0f172a"
              opacity="0.85"
            />
            <circle cx="32" cy="16" r="3" fill="#ffffff" opacity="0.9" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-2xl md:text-3xl font-semibold text-slate-900">
              Digi <span className="text-emerald-700">Help</span>
            </span>
            <span className="text-[10px] md:text-[10px] font-medium text-slate-600">
              Online Digital Services
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <li>
            <a className="transition hover:text-emerald-700" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="transition hover:text-emerald-700" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="transition hover:text-emerald-700" href="#why-choose">
              Why Choose
            </a>
          </li>
          <li>
            <a className="transition hover:text-emerald-700" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium items-center gap-2"
          >
            WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 px-3 py-2 text-slate-700"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm text-slate-700">
            <a className="hover:text-blue-600" href="#services">
              Services
            </a>
            <a className="hover:text-blue-600" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-blue-600" href="#why-choose">
              Why Choose
            </a>
            <a className="hover:text-blue-600" href="#contact">
              Contact
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Online-only notice */}
      <div className="bg-blue-50 text-blue-700 text-xs text-center py-0.5">
        100% Online Services • Clients from all over India
      </div>
    </nav>
  );
}

export default Navbar;
