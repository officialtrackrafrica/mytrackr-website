import React from 'react';
import { TickCircle } from 'iconsax-react';
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'

const DetailedFeatures: React.FC = () => {
  return (
    <section className="py-24 space-y-24" id='features'>
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 leading-14">
          Simple financial management tool for solo <br className="hidden md:block" />  entrepreneurs and growing Businesses
        </h2>
        <p className="text-[#475467] max-w-2xl mx-auto text-xl">
          Whether you’re a vendor, a school principal, or a founder launching their first business, MyTrackr is built to give you insight into your business numbers, no complicated system involved
        </p>
      </div>

      {/* 1. Manage business performance */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
          
          <p className="text-2xl md:text-3xl font-semibold text-brand-dark mb-4">MyTrackr is suitable for product-based and service-based businesses.</p>
          
          <ul className="space-y-4 mb-10">
            {['No more pen, paper and spreadsheets to keep track of finances', ' Very easy to categorize transactions', 'No transaction goes unexplained', 'View and generate your numbers at anytime'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-gray ">
                <TickCircle size="22" color='#2E7EFF' className="text-brand-blue" variant="Linear" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#135ED6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
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
          
            <p className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">How It Works</p>
          
            <ul className="space-y-4 mb-10">
              {['Connect your bank account and website', 'Categorize your transactions', 'Allows you log cash transactions easily', 'Log your assets and debts', 'See your tax estimate', 'Generate your numbers, daily, weekly, or monthly'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-gray font-medium">
                  <TickCircle size="22" color='#2E7EFF' className="text-brand-blue" variant="Linear" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-[#135ED6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
              Join Our Waitlist
            </button>
          </div>
        </div>
      </div>

       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1">
         
          <p className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Your guaranteed transformation</p>
          
          <ul className="space-y-4 mb-10">
            {['Get peace of mind knowing your real numbers', 'No more scattered records, keep track of the money you send to yourself randomly', 'Boost your ability to get business loans or grants', 'Secure investor confidence', 'Steer your business in the right direction'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-gray font-medium">
                <TickCircle size="22" color='#2E7EFF' className="text-brand-blue" variant="Linear" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#135ED6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
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