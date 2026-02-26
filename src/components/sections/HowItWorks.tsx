import React from 'react';
import { TickCircle, Profile2User, Shop } from 'iconsax-react';
import PeopleImage from '../../assets/PeopleImage.png'
import PeopleImage2 from '../../assets/PeopleImage2.png'

const HowItWorks: React.FC = () => {
  const sections = [
    {
      category: "Service providers",
      title: "Manage your finances, control cash flow",
      desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      features: ["Leverage automation to move fast", "Always give customers a human to chat to", "Automate customer support and close leads faster"],
      icon: <Profile2User size="20" color='#2E7EFF' variant="Bulk" />,
      img: PeopleImage // Replace with your asset
    },
    {
      category: "Retail/ Wholesale business owners",
      title: "An all-in-one customer service platform",
      desc: "Helps you balance everything your customers need to be happy, from inventory tracking to point-of-sale integration.",
      features: ["Keep your customers in the loop with live chat", "Embed help articles right on your website", "Customers never have to leave the page to find an answer"],
      icon: <Shop size="20" variant="Bulk" color='#2E7EFF' />,
      img: PeopleImage2 // Replace with your asset
    },
     {
      category: "Service providers",
      title: "Manage your finances, control cash flow",
      desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      features: ["Leverage automation to move fast", "Always give customers a human to chat to", "Automate customer support and close leads faster"],
      icon: <Profile2User size="20" color='#2E7EFF' variant="Bulk" />,
      img: PeopleImage // Replace with your asset
    },
  ];

  return (
    <section className="py-24 space-y-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl text-[#050E1E] mb-6 mx-auto">How My Trackr works for your business</h2>
          <p className="text-[#475467] max-w-2xl mx-auto text-xl">
            Manage your finances, control cash flow and integrate with apps. See how MyTrackr can help your business type or industry.
          </p>
        </div>
      {sections.map((section, idx) => (
        <div key={idx} className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 md:odd:flex-row-reverse">
          {/* Text Content */}
          <div className="flex-1">
            <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-6">
              {section.icon}
            </div>
            <h3 className="text-blue-600 font-semibold mb-2">{section.category}</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">{section.title}</h2>
            <p className="text-brand-gray text-lg mb-8">{section.desc}</p>
            
            <ul className="space-y-4">
              {section.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-gray">
                  <TickCircle size="20" color='#2E7EFF' variant="Bold" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full">
            <div className="overflow-hidden ">
              <img src={section.img} alt={section.title} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks