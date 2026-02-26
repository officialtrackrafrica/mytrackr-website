import React from 'react';
import { TickCircle } from 'iconsax-react';

const Pricing: React.FC = () => {
  const features = [
    "Access to basic features",
    "Basic reporting and analytics",
    "Up to 10 individual users",
    "20GB individual data each user",
    "Basic chat and email support",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Choose the plan that fit your scale</h2>
          <p className="text-brand-gray">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 relative overflow-hidden">
          {/* Plan Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[#475467] font-semibold text-sm">Basic plan</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-bold text-brand-dark">$10</span>
                  <span className="text-[#475467]">per month</span>
                </div>
              </div>
              <span className="bg-[#EAF2FF] text-[#1C4C9B] text-sm font-medium px-3 py-1 rounded-full border border-blue-100">
                Popular
              </span>
            </div>
            <p className="text-[#475467] mb-8">Basic features for up to 10 users.</p>
            <button className="w-full bg-[#2E7EFF] text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-200">
              Get started
            </button>
          </div>

          {/* Features List */}
          <div className="flex-1 text-[#475467]">
            <h4 className="font-bold text-brand-dark mb-6">FEATURES</h4>
            <p className="text-sm text-brand-gray mb-6">Everything in <span className="font-bold">Starter</span> plus....</p>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-gray">
                  <TickCircle size="20" variant="Bold" color='#2E7EFF' />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing