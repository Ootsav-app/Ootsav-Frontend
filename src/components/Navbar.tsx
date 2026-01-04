import React from "react";

const Navbar: React.FC = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-4 md:px-8 md:py-6 lg:px-16">
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        <img
          src="/logo_landing.svg"
          alt="Ootsav Logo"
          className="h-8 md:h-10 w-auto"
        />

        {/* Desktop Menu - Commented out for now */}
        {/* <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#home"
            className="text-base lg:text-xl font-bold text-white transition-opacity font-darker-grotesque hover:opacity-80 px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#EF544F] to-[#8F4FEF]"
          >
            Home
          </a>
          <a
            href="#price"
            className="text-base lg:text-xl font-bold text-white transition-opacity font-darker-grotesque hover:opacity-80"
          >
            Price
          </a>
          <a
            href="#contact"
            className="text-base lg:text-xl font-bold text-white transition-opacity font-darker-grotesque hover:opacity-80"
          >
            Contact
          </a>
        </div> */}

        {/* Mobile Menu Button - Commented out for now */}
        {/* <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button> */}
      </div>

      {/* Mobile Menu - Commented out for now */}
      {/* {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg z-40 px-4 py-6 space-y-4">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-bold text-white font-darker-grotesque px-6 py-3 rounded-full bg-gradient-to-r from-[#EF544F] to-[#8F4FEF] text-center"
          >
            Home
          </a>
          <a
            href="#price"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-bold text-white font-darker-grotesque py-3 text-center"
          >
            Price
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-bold text-white font-darker-grotesque py-3 text-center"
          >
            Contact
          </a>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
