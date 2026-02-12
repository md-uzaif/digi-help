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
            <li>WhatsApp: +918084860650</li>
            <li>
              Email:{" "}
              <a className="hover:text-emerald-200" href="mailto:digihelp.official@gmail.com">
                digihelp.official@gmail.com
              </a>
            </li>
            <li>Hours: Mon–Sat, 9:00 AM–7:00 PM</li>
          </ul>
          <a
            href="https://wa.me/918084860650"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Chat on WhatsApp
          </a>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M13.5 8H16V5h-2.5C10.9 5 9 6.9 9 9.5V12H7v3h2v4h3v-4h2.3l.7-3H12V9.5c0-.8.7-1.5 1.5-1.5z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M4 4h4.2l4 5.3L16.7 4H20l-6.1 7.2L20 20h-4.2l-4.6-6.1L6 20H2.7l6.4-7.5z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M21.4 4.6 18.3 19c-.2 1-1 1.3-1.8.8l-4.2-3.1-2 1.9c-.2.2-.4.4-.8.4l.3-4.3 7.8-7.1c.3-.3-.1-.4-.5-.1L7.6 13.4l-4.1-1.3c-.9-.3-.9-.9.2-1.3L20 4.4c.8-.3 1.6.2 1.4 1.2z" />
              </svg>
            </a>
          </div>
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
