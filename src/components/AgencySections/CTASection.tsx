import icon from '../../assets/ctaicon.svg'; 

const CTASection = () => {
  return (
    <section className="py-24 bg-white px-6 flex justify-center items-center">
      <div className="relative w-full max-w-[80%] bg-white rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden py-20 px-8 md:px-16 text-center border border-gray-50">
        
        {/* Background Logo - Left */}
        <div className="absolute top-2/3 -translate-y-1/2 -left-24 md:-left-16 w-64 md:w-80 h-auto pointer-events-none select-none">
         <img src={icon} alt="" className=''/>
        </div>

        {/* Background Logo - Right */}
        <div className="absolute top-2/3 -translate-y-1/2 -right-24 md:-right-16 w-64 md:w-80 h-auto pointer-events-none select-none">
        <img src={icon} alt="" className=''/>

        </div>

        {/* Content Wrapper (z-10 ensures it sits above the watermarks) */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#091B37] leading-tight mb-6">
            It’s time to take control of your <br className="hidden md:block" /> finances — by relaxing.
          </h2>
          
          <p className="text-[#475467] leading-relaxed mb-10 max-w-2xl">
            Whether you’re not ready for the commitment of a full-time accountant, or you’re 
            simply ready to stop stressing about your financial future. It is our mission to help 
            you take control of your finances, secure your financial future and have peace of 
            mind. Let’s help you create a financial safety net and secure your financial future.
          </p>

          <button className="bg-[#135ED6] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Secure your Spot
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;