import AgencyImage from '../assets/AgencyImage.png'
import AgencyImage2 from '../assets/AgencyImage2.png'
import CTASection from '../components/AgencySections/CTASection';

import OurServices from '../components/AgencySections/Services'
// import LogoCloud from '../components/MyTrackrSections/BusinessLogos';


const LandingPage = () => {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="bg-[#082656] text-white pt-20 pb-40 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Manage Your Finances - You Build the Life You Love.
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            MyTrackr helps growing businesses, agency founders, and creative CEOs take
            control of their finances by providing hands-on complete financial management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <button className="flex items-center gap-2 bg-white text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Demo
            </button> */}
             <a 
            href="https://dashboard.mytrackrservices.com/signup" target='blank'
            className="w-full md:w-auto px-8 py-3 bg-[#135ED6] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors inline-block text-center"
          >
            Sign up
          </a>
          </div>
        </div>
        <img src={AgencyImage} alt="" className='mt-16'/>
      </section>


      {/* SOCIAL PROOF SECTION */}
            {/* <img src={Logos} alt="logos" className="h-8 mx-auto" /> */}
      {/* <LogoCloud /> */}

      {/* FEATURE / ABOUT SECTION */}
      <section className="py-24 bg-[#EAF2FF] px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Your business is growing. Your finances should keep up.
            </h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                MyTrackr Finance was created specifically for the heroes building
                modern Nigerian businesses — the creative agency owner juggling
                10 clients, the founder scaling from zero, the influencer turning brand
                deals into a real income stream.
              </p>
              <p>
                We're not a boring accounting firm. We're your financial partner —
                we speak your language, understand your hustle, and make sure
                your money is working as hard as you are. No jargon. No judgment.
                Just clarity.
              </p>
            </div>
            <a href="https://dashboard.mytrackrservices.com/signup" target='blank'
            className="bg-[#1A56DB] text-white font-medium px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors mt-4 shadow-lg shadow-blue-200">
              Get Started
            </a>
          </div>
          <div className="flex-1">
            <img
              src={AgencyImage2}
              alt="Two colleagues reviewing documents"
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR SERVICES HEADER SECTION */}
      <OurServices />
      <CTASection />
    </main>
  );
};

export default LandingPage;