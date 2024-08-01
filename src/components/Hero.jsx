import Image from "next/image";
import Kscale from "/public/kscalelabs.png";
const Hero = () => {
  return (
    <div className=" h-[600px] w-[1280px] mx-auto relative flex   ">
      <div className=" ">
        <div className="h-[200px] mt-32 "></div>
        <h1 className="font-bold text-[40px] ">Moving humanity up</h1>
        <h1 className="text-[30px]">the Kardashev scale</h1>
      </div>
      <div className=" absolute  end-0  top-60 ">
        <Image
          src={Kscale}
          alt="Kscalelabs"
          className="w-[400px]   bg-transparent "
        />
      </div>
    </div>
  );
};

export default Hero;
