import React, { useState } from 'react';
import { AddCircle, MinusCirlce } from 'iconsax-react';
import Support from '../../assets/support.png'

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const FAQS = [
  {
    question: 'Who is MyTrackr for?',
    answer: 'MyTrackr is built for growing businesses, freelancers, and service providers that want better visibility into their finances without stress, manual calculation, or complicated systems.'
  },
  {
    question: 'Is it safe to connect my bank account?',
    answer: 'Yes. MyTrackr only uses secure, read-only access to transaction data. We do not have access to move money or perform transactions on your account. If you prefer, you can also upload your bank statements manually instead of connecting your account.'
  },
  {
    question: 'Does MyTrackr work on mobile devices?',
    answer: 'Yes. MyTrackr is very mobile friendly. It works perfectly on desktop, tablet, and mobile browsers.'
  },
  {
    question: 'What should I do if my bank is not currently supported?',
    answer: 'We are working to ensure we support all banks. If your bank is not currently supported, you can still use MyTrackr by uploading your bank statements manually or by linking your website if you have one.'
  },
  {
    question: 'What makes MyTrackr different from other accounting software?',
    answer: 'MyTrackr focuses on simplicity. It helps growing business owners understand their money without the difficulty of traditional accounting tools.'
  },
  {
    question: 'Do I need accounting knowledge to use MyTrackr?',
    answer: 'No. MyTrackr was designed for everyday business owners, not accountants. The platform uses simple language and easy-to-understand reports.'
  },
  {
    question: 'Can I cancel or change my subscription plan?',
    answer: 'Yes. You can upgrade, downgrade, or cancel your subscription anytime. If you cancel your plan, you’ll continue to have access to MyTrackr until the end of your current billing period.'
  },
  {
    question: 'What if I sometimes spend business money personally?',
    answer: 'That’s common for many business owners. MyTrackr allows you to categorise personal withdrawals separately so you can better understand your actual business expenses and profit.'
  }
];

  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-3xl mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Frequently asked questions</h2>
          <p className="text-[#475467] text-xl">Everything you need to know about MyTrackr and billing.</p>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-blue transition-colors group"
              >
                <span className="text-lg font-semibold text-brand-dark group-hover:text-brand-blue">
                  {faq.question}
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
                  {faq.answer}
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
        
        <button className="bg-[#135ED6] text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
          Get in Touch
        </button>
      </div>
    </div>
    </section>
  );
};

export default FAQ