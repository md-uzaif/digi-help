function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            Digi Help
          </span>
          <span className="hidden sm:inline text-xs text-gray-500">
            | Online Digital Services
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">How It Works</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
        >
          WhatsApp
        </a>
      </div>

      {/* Online-only notice */}
      <div className="bg-blue-50 text-blue-700 text-xs text-center py-1">
        100% Online Services • Clients from all over India
      </div>
    </nav>
  );
}

export default Navbar;
