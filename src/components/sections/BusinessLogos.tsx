import Logos from '../../assets/Logos.png'


const LogoCloud = () => (
  <div className="py-12 bg-white">
    <p className="text-center text-[#475467] mb-8 font-medium text-2xl">Trusted by 4,000+ growing businesses</p>
    <div className="">
      {/* Map your logo assets here */}
      <img src={Logos} alt="logos" className="h-8 mx-auto w-[70%]" />
     
    </div>
  </div>
);

export default LogoCloud