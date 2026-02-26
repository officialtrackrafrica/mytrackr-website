import React, { useState } from 'react';
import { AddCircle, MinusCirlce } from 'iconsax-react';
import Support from '../../assets/support.png'

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is there a free trial available?",
      a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    { q: "Can I change my plan later?", a: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard settings." },
    { q: "What is your cancellation policy?", a: "You can cancel your subscription at any time. Your access will continue until the end of your current billing period." },
    { q: "Can other info be added to an invoice?", a: "Yes, you can add custom billing details, VAT numbers, and company addresses to your invoices." },
    { q: "How does billing work?", a: "We bill monthly or annually. All payments are processed securely through our payment partners." },
    { q: "How do I change my account email?", a: "You can update your email address in the 'Account Settings' section of your profile." }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-3xl mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Frequently asked questions</h2>
          <p className="text-[#475467] text-xl">Everything you need to know about MyTrackr and billing.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-blue transition-colors group"
              >
                <span className="text-lg font-semibold text-brand-dark group-hover:text-brand-blue">
                  {faq.q}
                </span>
                {activeIndex === idx ? (
                  <MinusCirlce size="24" color='#2E7EFF' className="text-brand-gray cursor-pointer" />
                ) : (
                  <AddCircle size="24" color='#2E7EFF' className="text-brand-gray cursor-pointer" />
                )}
              </button>
              
              {/* Animated Reveal */}
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-brand-gray leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      
        <div className="max-w-7xl mx-auto px-6 mb-12 mt-8">
      <div className="bg-slate-50 rounded-3xl p-10 text-center mx-auto">
        {/* Overlapping Avatar Group */}
          <img className="mx-auto mb-6" src={Support} alt="Support team" />
        
        <h3 className="text-xl font-bold text-brand-dark mb-4">Still have questions?</h3>
        <p className="text-brand-gray mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        
        <button className="bg-brand-blue text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
          Get in Touch
        </button>
      </div>
    </div>
    </section>
  );
};

export default FAQ