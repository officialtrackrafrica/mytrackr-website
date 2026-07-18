import { TickCircle } from 'iconsax-react';

const plans = [
  {
    name: "Solo",
    price: "2,900",
    description: "For businesses that want smart, automatic and seamless financial tracking",
    isPopular: true,
    features: [
      "Live sync – 1 bank account accounts",
      "All financial reports",
      "P&L, Cash Flow & Balance Sheet",
      "Tax estimator",
      "Automatic categorization rules",
      "Website linking and manual bank statement upload included"
    ]
  },
  {
    name: "Duo",
    price: "3,400",
    description: "Sync two bank accounts seamlessly, increase your clarity",
    isPopular: false,
    features: [
      "Live sync – 2 bank accounts",
      "All financial reports",
      "P&L, Cash Flow & Balance Sheet",
      "Tax estimator",
      "Automatic categorization rules",
      "Website linking and manual bank statement upload included"
    ]
  },
  {
    name: "Unlimited",
    price: "5,500",
    description: "All your accounts in one place, what could be better?",
    isPopular: false,
    features: [
      "Live sync – unlimited accounts",
      "All financial reports",
      "P&L, Cash Flow & Balance Sheet",
      "Tax estimator",
      "Automatic categorization rules",
      "Website linking and manual bank statement upload included"
    ]
  },
  {
    name: "Web",
    price: "1,200",
    description: "Connect via your shop website",
    isPopular: false,
    features: [
      "Link via website",
      "All financial reports",
      "P&L, Cash Flow & Balance Sheet",
      "Tax estimator",
      "Automatic categorization rules",
      "Upload your bank statement manually"
    ]
  },
  {
    name: "Starter",
    price: "500",
    description: "For businesses that want affordable manual tracking",
    isPopular: false,
    features: [
      "Upload your bank statement manually",
      "All financial reports",
      "P&L, Cash Flow & Balance Sheet",
      "Tax estimator",
      "Automatic categorization rules"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen" id='pricing'>
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[24px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#475467] font-semibold text-[15px]">
                  {plan.name}
                </span>
                {plan.isPopular && (
                  <span className="bg-[#EAF2FF] text-[#1C4C9B] text-xs font-semibold px-3 py-1.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[40px] leading-tight font-bold text-[#101828]">
                  ₦{plan.price}
                </span>
                <span className="text-[#667085] text-sm font-medium">
                  per month
                </span>
              </div>

              <p className="text-[#475467] text-[15px] leading-relaxed min-h-[66px] mb-4">
                {plan.description}
              </p>

              <a
              href="https://dashboard.mytrackrservices.com/signup" target='blank'
              className="w-full bg-[#1A56DB] text-white py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8 text-center">
                Get started
              </a>

              <div className="border-t border-gray-100 pt-8 flex-1">
                <h4 className="font-bold text-[#101828] text-xs tracking-wider mb-6">
                  FEATURES
                </h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-[#475467] text-[15px]">
                      <TickCircle 
                        size="22" 
                        variant="Linear" 
                        color="#1A56DB" 
                        className="shrink-0 mt-0.5" 
                      />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;