import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // When the component loads, check if they've already clicked a button
    const consent = localStorage.getItem('mytrackr_cookie_consent');
    
    // If there is no record of consent, show the banner
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAgree = () => {
    // Save their choice to the browser so it doesn't show up again
    localStorage.setItem('mytrackr_cookie_consent', 'agreed');
    setIsVisible(false);
  };

  const handleCancel = () => {
    // You can choose to remind them later, but for now, we'll dismiss it
    localStorage.setItem('mytrackr_cookie_consent', 'dismissed');
    setIsVisible(false);
  };

  // If they already agreed or cancelled, don't render anything
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-[100] px-6 py-5 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
        
        <p className="text-[13px] md:text-sm text-[#475467] leading-relaxed flex-1">
          This website uses cookies that provide necessary site functionality and improve your online experience. 
          By continuing to use this website, you agree to the use of cookies. Our{' '}
          <Link to="/privacy" className="text-[#1A56DB] hover:underline font-medium">Privacy Policy</Link> provides 
          more information about what cookies we use and how you can change them.
        </p>
        
        <div className="flex items-center gap-3 w-full md:w-auto justify-end shrink-0">
          <button 
            onClick={handleCancel}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Cancel
          </button>
          <button 
            onClick={handleAgree}
            className="px-5 py-2.5 text-sm font-medium text-white bg-[#091B37] hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Agree
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;