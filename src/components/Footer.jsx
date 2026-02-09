function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-white">Digi Help</h3>
          <p className="mt-3 text-sm text-slate-300">
            Trusted online assistance for forms, applications, and government services.
          </p>
          <div className="mt-4 text-sm text-slate-400">
            100% online • Serving clients across India
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-white" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#how-it-works">
                How It Works
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
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
