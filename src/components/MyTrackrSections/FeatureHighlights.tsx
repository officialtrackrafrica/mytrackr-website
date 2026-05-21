import React from 'react';
import { Moneys, Chart, DiscountShape } from 'iconsax-react';

const FeatureHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Track your money",
      desc: "Integrate your bank and website and keep track of business income and expenses in one place. Label transactions into categories like stock purchases, transport, rent, salaries, ads, utilities, and more",
      icon: <Moneys size="24" variant="Linear" color='#2E7EFF' className="text-brand-blue" />,
    },
    {
      title: "Understand your real profits",
      desc: "Generate simple financial reports to see your revenue, expenses, gross profit, and net profit without needing accounting knowledge. Know how much money is coming in, going out, and how much your business needs to operate monthly.",
      icon: <Chart size="24" variant="Linear" color='#2E7EFF' className="text-brand-blue" />,
    },
    {
      title: "Estimate your Taxes",
      desc: "Includes a tax calculator to get a simple estimate of your Personal or Company Income tax based on your business profit and type. Great for tax planning.",
      icon: <DiscountShape size="24" variant="Linear" color='#2E7EFF' className="text-brand-blue" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#050E1E] mb-6 md:leading-14">
            Running a business is hard enough. <br />Tracking the money shouldn’t be.
          </h2>
          <p className="text-[#475467] max-w-2xl mx-auto text-xl">
            MyTrackr helps you see everything clearly without stress so you can make smarter business decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center'>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              </div>
              <h3 className="text-xl font-semibold text-[#050E1E] mb-3">{item.title}</h3>
              <p className="text-[#475467] leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeatureHighlights