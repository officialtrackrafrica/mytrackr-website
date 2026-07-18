import React from 'react';
import { TickCircle, Moneys, Chart, DiscountShape } from 'iconsax-react';
import PeopleImage from '../../assets/webimg.png'
import PeopleImage2 from '../../assets/webimg2.png'
import PeopleImage3 from '../../assets/webimg3.png'

const HowItWorks: React.FC = () => {
  const sections = [
    {
      title: "Track your money",
      desc: "Connect your bank account and keep track of business income and expenses in one place.",
      features: [" Keeps track of the money coming in and going out", " Keeps track of the money coming in and going out", "Automatically sorts repeated transactions", "Updates your transactions automatically"],
      icon: <Moneys size="20" color='#2E7EFF' variant="Linear" />,
      img: PeopleImage // Replace with your asset
    },
    {
      title: "Understand your Business",
      desc: "See how much your business is truly making with simple financial reports and insights.",
      features: ["Your Real Profit/Loss (Income Statement)", "What You Own/Owe (Financial Position Statement)", "Money In, Money Out (Cashflow Summary)", "Estimated tax calculator"],
      icon: <Chart size="20" variant="Linear" color='#2E7EFF' />,
      img: PeopleImage2 // Replace with your asset
    },
     {
      title: "Plan Better",
      desc: "Be in control and make smarter financial decisions with clearer visibility into your business finances.",
      features: ["Money in vs money out", " Financial summaries", "Monthly burn rate", "Tax estimate calculator"],
      icon: <DiscountShape size="20" color='#2E7EFF' variant="Linear" />,
      img: PeopleImage3 // Replace with your asset
    },
  ];

  return (
    <section className="py-24 space-y-32">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-5xl font-semibold max-w-[90%] md:max-w-2xl text-[#050E1E] mb-6 mx-auto">How My Trackr works for your business</h2>
          <p className="text-[#475467] mx-auto text-xl max-w-[90%] md:max-w-2xl">
            Manage your finances, control cash flow and integrate with apps. See how MyTrackr can help your business type or industry.
          </p>
        </div>
      {sections.map((section, idx) => (
        <div key={idx} className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:odd:flex-row-reverse">
          {/* Text Content */}
          <div className="flex-1">
             <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center'>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                {section.icon}
              </div>
              </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">{section.title}</h2>
            <p className="text-brand-gray text-lg mb-8">{section.desc}</p>
            
            <ul className="space-y-4">
              {section.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-gray">
                  <TickCircle size="20" color='#D0DFF7' variant="Bold" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full">
            <div className="overflow-hidden ">
              <img src={section.img} alt={section.title} className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks