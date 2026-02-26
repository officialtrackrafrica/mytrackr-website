import React, { useState } from 'react';
import { Graph } from 'iconsax-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Pricing', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-[#EAF2FF] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[80%] mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <div className='flex gap-8 items-center justify-center'>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            {/* <span className="text-white font-bold text-xs">MT</span> */}
            <Graph size="32" color="#2E7EFF" variant="Bold"/>
          </div>
          <span className="text-xl font-semibold ">MyTrackr</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#091B37]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-gray hover:text-brand-blue transition-colors font-medium flex items-center gap-1"
            >
              {link.name}
              {link.hasDropdown && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </div>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#1C4C9B] font-medium hover:text-brand-dark">Log in</button>
          <button className="bg-[#2E7EFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all">
            Signup
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 py-6 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-brand-dark border-b border-gray-50 pb-2">
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full py-3 text-brand-dark font-medium border border-gray-200 rounded-lg">Log in</button>
            <button className="w-full py-3 bg-brand-blue text-white font-semibold rounded-lg">Signup</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;