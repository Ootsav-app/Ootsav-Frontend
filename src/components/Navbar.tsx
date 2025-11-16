import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-8 py-6 md:px-16 lg:px-24">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <img src="/logo_landing.svg" alt="Ootsav Logo" />
        <div className="flex items-center gap-8 md:gap-12">
          <a
            href="#home"
            className="text-xl font-bold text-white transition-opacity font-darker-grotesque hover:opacity-80 px-6 py-3 rounded-full bg-gradient-to-r from-[#EF544F] to-[#8F4FEF]"
          >
            Home
          </a>
          <a
            href="#price"
            className="text-xl font-bold text-white transition-opacity font-darker-grotesque hover:opacity-80"
          >
            Price
          </a>
          <a
            href="#contact"
            className="text-xl font-bold text-white transition-opacity font-darker-grotesque hover:opacity-80"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
