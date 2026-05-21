const BackgroundLines: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10  pointer-events-none" aria-hidden="true">
      {/* Top Left Diagonal Stripe */}
      <div 
        className="absolute  w-full h-[400px] bg-blue-100 opacity-50 -rotate-12"
      />
      ddddddddddddddddddddd
      {/* Middle Right Diagonal Stripe */}
      <div 
        className="absolute w-full  h-[300px] bg-blue-300 rotate-12"
      />

      {/* Subtle Bottom Stripe */}
      <div 
        className="absolute w-full bottom-[10%] -left-[10%]  h-[500px] bg-slate-50 -rotate-6"
      />
    </div>
  );
};

export default BackgroundLines