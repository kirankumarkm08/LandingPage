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
    <div className="flex flex-col gap-10  mx-10" id="partner">
      <div className="h-[100px]"></div>
      <div className="font-bold text-[30px]">Partner</div>
      <div className="flex justify-evenly  px-10 py-20 rounded-lg">
        {partner.map((items) => (
          <div key={items.name} className="mr-10 flex justify-between ">
            <Image src={items.logo} alt={items.name} className=" flex " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
