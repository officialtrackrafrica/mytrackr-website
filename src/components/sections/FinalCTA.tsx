import Logos from '../../assets/Contents.png'
import Image from '../../assets/HeroSection.png'

const FinalCTA: React.FC = () => {
   return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-6 leading-tight">
              Join over 4,000+ startups <br /> growing teams with MyTrackr
            </h2>
            <p className="text-[#475467] text-lg mb-10">
              Start your 30-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white border border-gray-200 text-brand-dark font-semibold rounded-lg hover:bg-gray-50 transition-all">
                Learn more
              </button>
              <button className="px-8 py-3 bg-[#2E7EFF] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all ">
                Get started
              </button>
            </div>
          </div>

          {/* Secondary Logo Cloud */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 opacity-60">
            {secondaryLogos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-200 rounded-md"></div> 
                <span className="font-bold text-slate-800">{logo.name}</span>
              </div>
            ))}
          </div> */}
          <img src={Logos} alt="" />

        </div>

        {/* Peeking Dashboard Image */}
        <div className="relative mx-auto ">
          <div className="">
            <img 
              src={Image} 
              alt="MyTrackr Dashboard Full View" 
              className="w-full h-auto rounded-t-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA