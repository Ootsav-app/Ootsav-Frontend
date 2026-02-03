import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/favicon.svg';

const NavbarPrivacyPolicy: React.FC = () => {
  return (
    <nav className="w-full bg-white py-5 px-6 md:px-12 border-b border-gray-100 flex justify-between items-center">
      {/* Left Side: Logo */}
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img src={favicon} alt="Ootsav Tech Solutions" className="h-10 w-10" />
        <span className="text-2xl font-bold tracking-tight text-black">Ootsav</span>
      </Link>

      {/* Right Side: Back to Home Button with Gradient Style */}
      <Link
        to="/"
        className="text-base lg:text-xl font-bold text-white transition-opacity font-darker-grotesque hover:opacity-80 px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#EF544F] to-[#8F4FEF]"
      >
        Back to Home
      </Link>
    </nav>
  );
};

export default NavbarPrivacyPolicy;