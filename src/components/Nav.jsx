"use client";

import Link from "next/link";

const Nav = () => {
  const nav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "AboutUs",
      link: "#about",
    },
    {
      name: "Teams",
      link: "#teams",
    },
    {
      name: "Partaner",
      link: "#partner",
    },
    {
      name: "Product",
      link: "https://robolist.xyz/",
    },
  ];
  return (
    <div className=" fixed w-full  shadow-sm  z-50  bg-transparent backdrop-blur-md bg-white">
      <div className=" flex  items-center justify-between   py-6 sm:mx-32">
        <Link href="/" className="">
          <div className="flex font-bold  flex-wrap   text-[40px] hover:underline">
            <h1 className="">K-scale</h1>
            <h1 className="hidden md:block">labs</h1>
          </div>
        </Link>
        <div className=" flex gap-[30px] items-center ">
          {nav.map((items, index) => {
            // const isActive =
            //   (pathname.includes(items.link) && items.link.length > 0) ||
            //   pathname === items.link;
            return (
              <div className="" key={index}>
                <Link
                  key={index}
                  target={index === 4 ? "_blank" : "_self"}
                  href={items.link}
                  className="hover:underline "
                >
                  {items.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
