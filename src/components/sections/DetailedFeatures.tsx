import React from 'react';
import { TickCircle, Profile2User, Chart2 } from 'iconsax-react';
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'

const DetailedFeatures: React.FC = () => {
  return (
    <section className="py-24 space-y-24">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
          Powerful Features Built for <br className="hidden md:block" /> Modern Businesses
        </h2>
        <p className="text-brand-gray max-w-2xl mx-auto">
          Discover powerful tools that simplify managing transactions and business cashflow for product and service based businesses.
        </p>
      </div>

      {/* 1. Manage business performance */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-6">
            <Profile2User size="20" color='#2E7EFF' variant="Bulk" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Manage business performance</h3>
          <p className="text-brand-gray mb-8">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
          <ul className="space-y-4 mb-10">
            {['Leverage automation to move fast', 'Always give customers a human to chat to', 'Automate customer support and close leads faster'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-gray font-medium">
                <TickCircle size="22" color='#2E7EFF' className="text-brand-blue" variant="Bold" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#2E7EFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
            Join Our Waitlist
          </button>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <img src={Image1} alt="Performance chart" className="w-full h-auto drop-shadow-2xl" />
        </div>
      </div>

      {/* 2. Real-time accounting (Blue Background Section) */}
      <div className="bg-[#EAF2FF] py-8 w-[80%] mx-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <img src={Image2} alt="Accounting illustration" className="w-full h-auto drop-shadow-2xl" />
          </div>
          <div className="flex-1">
            <div className="w-10 h-10 bg-white text-brand-blue rounded-lg shadow-sm flex items-center justify-center mb-6">
              <Chart2 size="20" color='#2E7EFF' variant="Bulk" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Real-time accounting at your finger tip</h3>
            <p className="text-brand-gray mb-8">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
            <ul className="space-y-4 mb-10">
              {['Keep your customers in the loop with live chat', 'Embed help articles right on your website', 'Customers never have to leave the page to find an answer'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-gray font-medium">
                  <TickCircle size="22" color='#2E7EFF' className="text-brand-blue" variant="Bold" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-[#2E7EFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
              Join Our Waitlist
            </button>
          </div>
        </div>
      </div>

       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-6">
            <Profile2User size="20" color='#2E7EFF' variant="Bulk" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Manage business performance</h3>
          <p className="text-brand-gray mb-8">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
          <ul className="space-y-4 mb-10">
            {['Leverage automation to move fast', 'Always give customers a human to chat to', 'Automate customer support and close leads faster'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-gray font-medium">
                <TickCircle size="22" color='#2E7EFF' className="text-brand-blue" variant="Bold" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#2E7EFF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
            Join Our Waitlist
          </button>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <img src={Image3} alt="Performance chart" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;