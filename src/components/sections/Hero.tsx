import React from 'react';
import HeroImage from '../../assets/HeroSection.png'
import { PlayCircle } from 'iconsax-react';

const Hero: React.FC = () => {
  return (
    <section className='bg-[#EAF2FF]'>
        <div className="px-6 pt-16  md:pt-32  text-center max-w-7xl mx-auto ">
      {/* Badge/Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#2E7EFF] text-[#1C4C9B] text-sm font-medium mb-8">
        <span>Your Business Finances, Fully Under Control &rarr;</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-7xl font-semibold tracking-tight mb-6 text-[#050E1E]">
        Your Profits, Expenses and <br className="hidden md:block" />
        <span className="text-brand-blue">Cashflow Made Simple</span>
      </h1>

      {/* Subtext */}
      <p className="text-[#475467] text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged from anywhere.
      </p>

      {/* CTAs */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
        <button className="w-full md:w-auto px-8 py-3 bg-white border border-gray-200 text-brand-dark font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <PlayCircle size="28" color="black"/> Demo
        </button>
        <button className="w-full md:w-auto px-8 py-3 bg-[#2E7EFF] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
          Join Our Waitlist
        </button>
        
      </div>

      {/* Dashboard Preview Image */}
      <div className="">
        <img 
          src={HeroImage} 
          alt="MyTrackr Dashboard" 
          className="w-full h-auto"
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;