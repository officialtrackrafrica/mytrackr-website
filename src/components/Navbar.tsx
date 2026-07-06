import React, { useState } from 'react';
import logoWhite from '../assets/Logowhite.svg'
import logoColored from '../assets/logocolored.svg'
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

  // Check if we are on the landing page
  const isLandingPage = location.pathname === '/agency';

  // Dynamic styling variables based on the route
  const navBackground = isLandingPage ? 'bg-[#082656]' : 'bg-[#E7EFFB]';
  const activeLogo = isLandingPage ? logoWhite : logoColored;
  
  // We also need to change text colors so they are readable on both backgrounds
  const desktopLinkColor = isLandingPage ? 'text-gray-200 hover:text-white' : 'text-[#475467] hover:text-[#135ED6]';
  const loginBtnColor = isLandingPage ? 'text-white hover:text-gray-200' : 'text-[#0B3880] hover:text-[#091B37]';
  // const menuIconColor = isLandingPage ? 'text-white' : 'text-[#091B37]';
  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      hasDropdown: true,
      subItems: [
        { name: 'Agency', href: '/agency' }
      ]
    },
    { name: 'Resources', href: '#features', hasDropdown: true },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${navBackground} sticky top-0 z-50`}>
      <div className="max-w-[80%] mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <div className='flex gap-8 items-center justify-center'>
        <img src={activeLogo} alt="MyTrackr Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#091B37]">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-6">
                <a
                  href={link.href}
                  className={`${desktopLinkColor} transition-colors font-medium flex items-center gap-1`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Desktop Dropdown Menu */}
                {link.hasDropdown && link.subItems && (
                  <div className="absolute top-full left-0 mt-[-10px] w-56 bg-white rounded-xl shadow-lg py-2 hidden group-hover:block border border-gray-100 transition-all z-50">
                    {link.subItems.map((subItem) => (
                      <a 
                        key={subItem.name} 
                        href={subItem.href} 
                        className="block px-5 py-3 text-sm text-[#475467] hover:bg-[#F4F9F1] hover:text-[#135ED6] font-medium transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://dashboard.mytrackrservices.com/login" target='blank' className={`${loginBtnColor} font-medium hover:text-brand-dark`}>Log in</a>
          <a 
            href="https://dashboard.mytrackrservices.com/signup" target='blank'
            className="w-full md:w-auto px-8 py-3 bg-[#135ED6] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors inline-block text-center"
          >
            Sign up
          </a>
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