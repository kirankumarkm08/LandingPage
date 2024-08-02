import Image from "next/image";
import Myactuator from "/public/myactuator.png";
import Nvidia from "/public/nvidia.png";
import Seeed from "/public/seeed.png";

const Partner = () => {
  const partner = [
    {
      name: "myactuator",
      logo: Myactuator,
    },
    {
      name: "nvidia",
      logo: Nvidia,
    },
    {
      name: "seeed",
      logo: Seeed,
    },
  ];
  return (
    <div className="flex flex-col   mx-10" id="partner">
      <div className="h-[100px]"></div>
      <div className="font-bold text-[30px] text-white">Partner</div>
      <div className="flex justify-evenly items-center py-10   ">
        {partner.map((items) => (
          <div key={items.name} className="mr-10 flex justify-between ">
            <Image
              src={items.logo}
              alt={items.name}
              className=" w-[300px]  flex p-10 backdrop-blur-3xl rounded-3xl shadow-black shadow-2xl "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
