import Image from "next/image";
import Kscale from "/public/kscalelabs.png";

const Hero = () => {
  return (
    <div className=" min-h-screen     relative flex   ">
      <div className=" mx-32">
        <div className="h-[200px] mt-32 "></div>
        <div className="  p-20 text-white   relative backdrop-blur-md rounded-3xl shadow-black shadow-2xl ">
          <h1 className="font-bold text-[40px] ">Moving humanity up</h1>
          <h1 className="text-[30px]">the Kardashev scale</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className=" absolute   end-0 p-10 top-60 ">
          <Image
            src={Kscale}
            alt="Kscalelabs"
            className="w-[400px]   bg-transparent rounded-full  "
          />
        </div> */
}
