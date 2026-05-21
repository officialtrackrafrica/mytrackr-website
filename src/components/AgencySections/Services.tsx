import { TickCircle } from 'iconsax-react';
import services1 from '../../assets/services1.svg'
import services2 from '../../assets/services2.svg'
import services3 from '../../assets/services3.svg'
const servicesData = [
  {
    title: "The Agency Boss Pack",
    bgColor: "bg-[#F4FAEA]", // Lightest green
    imagePlaceholder: services1,
    features: [
      "Financial system setup and bookkeeping management",
      "Cash flow tracking, budgeting, and profitability monitoring",
      "Payroll, contractor payments, and expense management",
      "Tax planning, compliance, and financial reporting",
      "Revenue forecasting and strategic financial support for growth"
    ]
  },
  {
    title: "The Founder Survival Kit",
    bgColor: "bg-[#EAF5D5]", // Medium light green
    imagePlaceholder: services2,
    features: [
      "Business finance setup and accounting system implementation",
      "Bookkeeping, expense tracking, and cash flow management",
      "Budgeting, financial planning, and runway monitoring",
      "Tax compliance, filings, and business structuring support",
      "Financial reports and investor-ready financial insights"
    ]
  },
  {
    title: "The Creative CEO",
    bgColor: "bg-[#DFEFC0]", // Darkest light green
    imagePlaceholder: services3,
    features: [
      "Income & expense tracking across all revenue streams",
      "Budgeting, cash flow management, and financial planning",
      "Tax planning, filings, retirement planning and business structuring",
      "Monthly financial reports and business performance insights",
      "Invoice management, payment tracking, and general finance support"
    ]
  }
];

const OurServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091B37] mb-4">
            Our Services
          </h2>
          <p className="text-[#475467] text-lg">
            We get it — because we built this for you. Now choose you.
          </p>
        </div>

        {/* Services Grid (Seamlessly connected columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-none overflow-hidden border border-gray-100">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} p-8 md:p-12 flex flex-col h-full`}
            >
              {/* Illustration Placeholder */}
              <div className="w-full h-48 mb-8 flex items-center justify-center">
                {/* TODO: Replace this img tag with your actual illustration assets */}
                <img 
                  src={service.imagePlaceholder} 
                  alt={service.title} 
                  className="max-h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#091B37] mb-8">
                {service.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-5 flex-1">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <TickCircle 
                      size="24" 
                      color="#5C8B46" 
                      variant="Outline" 
                      className="shrink-0 mt-0.5" 
                    />
                    <span className="text-[#475467] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;