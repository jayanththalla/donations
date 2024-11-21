import React, { useState } from 'react';
import { Menu as MenuIcon, X as CloseIcon, Gift as DonateIcon, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto relative">
        {/* Logo with charitable design */}
        <a 
          href="/" 
          className="flex items-center space-x-3 text-white font-bold text-2xl 
          transform hover:scale-105 transition-transform duration-300"
        >
          <img 
            src="https://e7.pngegg.com/pngimages/600/250/png-clipart-donation-computer-icons-gift-charity-offers-miscellaneous-text.png" 
            alt="Hope Link Logo" 
            className="w-12 h-12 rounded-full border-2 border-white "
          />
          <span className="tracking-wider text-white text-opacity-90">Hope Link</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="/login" 
            className="text-white hover:text-blue-200 transition-all duration-300 font-semibold flex items-center space-x-2 
            hover:bg-blue-700 hover:rounded-md py-2 px-4"
          >
            <DonateIcon className="w-5 h-5 transition-transform duration-300" />
            <span>Donations</span>
          </a>
          <a 
            href="/create" 
            className="text-white hover:text-blue-200 transition-all duration-300 font-semibold flex items-center space-x-2 
            hover:bg-blue-700 hover:rounded-md py-2 px-4"
          >
            <UserIcon className="w-5 h-5 transition-transform duration-300" />
            <span>Donate Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-4 bg-white shadow-2xl rounded-lg 
          md:hidden w-56 animate-slide-in-top">
            <div className="p-4 text-center bg-blue-50 rounded-t-lg">
              <p className="text-blue-800 font-semibold text-sm">Help Us Make a Difference</p>
            </div>
            <div className="p-2 space-y-2">
              <a 
                href="/donate" 
                className="block px-4 py-3 text-blue-700 hover:bg-blue-100 
                rounded-md transition-colors duration-200 text-center font-medium flex items-center space-x-2 
                hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <DonateIcon className="w-5 h-5" />
                <span>Donate Now</span>
              </a>
              <a 
                href="/create" 
                className="block px-4 py-3 text-blue-700 hover:bg-blue-100 
                rounded-md transition-colors duration-200 text-center font-medium flex items-center space-x-2 
                hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserIcon className="w-5 h-5" />
                <span>Create Account</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
