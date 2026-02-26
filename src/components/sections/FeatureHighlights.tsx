import React from 'react';
import { WalletMoney, Chart2, SecuritySafe } from 'iconsax-react';

const FeatureHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Track your money",
      desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      icon: <WalletMoney size="24" variant="Bulk" color='#2E7EFF' className="text-brand-blue" />,
    },
    {
      title: "Know your profits",
      desc: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      icon: <Chart2 size="24" variant="Bulk" color='#2E7EFF' className="text-brand-blue" />,
    },
    {
      title: "Avoid cash problems",
      desc: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
      icon: <SecuritySafe size="24" variant="Bulk" color='#2E7EFF' className="text-brand-blue" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#050E1E] mb-6">Exceptional Financial Services</h2>
          <p className="text-[#475467] max-w-2xl mx-auto text-xl">
            Experience seamless, secure, and flexible financial tools built to simplify your business flow and support your growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#050E1E] mb-3">{item.title}</h3>
              <p className="text-[#475467] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeatureHighlights