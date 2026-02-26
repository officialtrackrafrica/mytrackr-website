import React from 'react';
import { Graph } from 'iconsax-react';


const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
      hasBadge: "Solutions"
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"]
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]
    },
    {
      title: "Use cases",
      links: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"]
    },
    {
      title: "Social",
      links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"]
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
    }
  ];

  return (
    <footer className="bg-[#091B37] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top CTA Banner */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s get started on something great</h2>
          <p className="text-slate-400 mb-10">Join over 4,000+ businesses already growing with MyTrackr.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Chat with us
            </button>
            <button className="px-8 py-3 bg-[#2E7EFF] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors ">
              Get started
            </button>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20 border-t border-slate-800 pt-20">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-slate-500 font-semibold text-sm tracking-wider uppercase mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link} className="flex items-center gap-2">
                    <a href="#" className="text-slate-300 hover:text-white transition-colors font-medium">
                      {link}
                    </a>
                    {section.hasBadge === link && (
                      <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-full border border-slate-700">
                        New
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
                    <Graph size="32" color="#2E7EFF" variant="Bold"/>
            <span className="text-xl font-bold tracking-tight">MyTrackr</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 MyTrackr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;