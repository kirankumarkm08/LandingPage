import Image from "next/image";
import Kscale from "/public/kscalelabs.png";
const Hero = () => {
  return (
    <div className=" h-[600px] w-[1280px] mx-auto  flex   ">
      <div className=" ">
        <div className="h-[200px] mt-32 "></div>
        <div className="border-2 border-transparent rounded-xl px-5 py-10 shadow-2xl relative ">
          <h1 className="font-bold text-[40px] ">Moving humanity up</h1>
          <h1 className="text-[30px]">the Kardashev scale</h1>
          {/* <div className=" absolute  end-0  top-60 ">
            <Image
              src={Kscale}
              alt="Kscalelabs"
              className="w-[400px]   bg-transparent "
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
