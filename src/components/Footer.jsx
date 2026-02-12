function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href="/" className="inline-flex items-center" aria-label="Digi Help home">
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="h-10 w-10 opacity-90"
                role="img"
              >
                <defs>
                  <linearGradient id="digiHelpLogoFooter" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f766e" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
                <rect x="3" y="3" width="42" height="42" rx="10" fill="url(#digiHelpLogoFooter)" />
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
            </a>
            <div>
              <h3 className="text-xl font-semibold text-white">Digi Help</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                Online Digital Services
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Trusted online assistance for forms, applications, and government services with a
            fast, secure, and transparent process.
          </p>
          <div className="mt-4 text-sm text-slate-400">
            100% online • Serving clients across India
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
            Policies
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <a className="hover:text-emerald-200" href="#privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-200" href="#terms-and-conditions">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-200" href="#refund-and-returns-policy">
                Refund and Returns Policy
              </a>
            </li>
          </ul>
          <a
            className="mt-4 inline-flex text-xs font-semibold tracking-widest text-emerald-200 hover:text-white"
            href="#faqs"
          >
            View FAQ
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>WhatsApp: +91 XXXXXXXXXX</li>
            <li>Email: support@digihelp.in</li>
            <li>Hours: Mon–Sat, 9:00 AM–7:00 PM</li>
          </ul>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 Digi Help. All rights reserved.</span>
          <span>Built for fast, reliable online service support.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
