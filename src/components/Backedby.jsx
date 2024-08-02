import Image from "next/image";
import AI from "/public/aigrant.jpeg";
import FellowFunds from "/public/fellows.png";
import GET from "/public/GFT.png";
import Lombardstreet from "/public/lombardstreet.png";
import Ninja from "/public/ninja.png";
import Pioneer from "/public/pioneer.png";
import y from "/public/ycomobinator.png";

const Backedby = () => {
  const backedby = [
    { name: "Fellow Funds", logo: FellowFunds },
    {
      name: "GET",
      logo: GET,
    },
    {
      name: "Lombard Street",
      logo: Lombardstreet,
    },
    {
      name: "Ninja",
      logo: Ninja,
    },
    {
      name: "Ycomobinator",
      logo: y,
    },
    {
      name: "AI Grant",
      logo: AI,
    },
    {
      name: "Pioneer",
      logo: Pioneer,
    },
  ];
  return (
    <div className="flex flex-col gap-10 mx-10 ">
      <div className="h-[100px]"></div>
      <div className="font-bold text-[30px] text-white">BackedBy</div>
      {/* <marquee behavior="right" direction="" className="flex w-full"> */}
      <div id="backedby" className="flex   w-full  ">
        <div className="  grid grid-cols-4  flex  items-center justify-center flex-wrap gap-32  px-20 py-32   ">
          {backedby.map((items, index) => (
            <div key={items.name} className="">
              <Image
                src={items.logo}
                alt={items.name}
                className="w-[400px] h-[200px] flex p-10"
              />
            </div>
          ))}
        </div>
      </div>
      {/* </marquee> */}
    </div>
  );
};

export default Backedby;
