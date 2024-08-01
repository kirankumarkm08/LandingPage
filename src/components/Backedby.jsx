import Image from "next/image";
import AI from "/public/aigrant.jpeg";
import FellowFunds from "/public/fellows.png";
import GET from "/public/GFT.png";
import Lombardstreet from "/public/Lombardstreet.png";
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
    <div className="flex flex-col gap-10 ">
      <div className="h-[100px]"></div>
      <div className="font-bold text-[30px]">BackedBy</div>
      {/* <marquee behavior="right" direction="" className="flex w-full"> */}
      <div id="backedby" className="flex  w-full border-2 rounded-xl">
        <div className="flex items-center justify-center gap-10 px-6 py-32   ">
          {backedby.map((items) => (
            <div
              key={items.name}
              className="flex  items-start justify-center   "
            >
              <Image
                src={items.logo}
                alt={items.name}
                className="w-full flex"
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
