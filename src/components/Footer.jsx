import Image from "next/image";
import Link from "next/link";
import Discord from "/public/Social/discord.png";
import FB from "/public/Social/fb.png";
import Feedback from "/public/Social/feedback.png";
import Git from "/public/Social/github.png";
import Insta from "/public/Social/instagram.png";
import Call from "/public/Social/schedule.png";
import X from "/public/Social/twitter.png";
import Wiki from "/public/Social/Wiki.png";

const Footer = () => {
  const SocialLinks = [
    {
      name: "Discord",
      link: "https://discord.gg/rhCy6UdBRD",
      icon: Discord,
    },
    {
      name: "X",
      link: "https://twitter.com/kscalelabs",
      icon: X,
    },
    {
      name: "Git",
      link: "https://github.com/kscalelabs",
      icon: Git,
    },
    {
      name: " FaceBook",
      link: "https://www.facebook.com/kscalelabs",
      icon: FB,
    },
    {
      name: " Instagram",
      link: "https://www.instagram.com/kscalelabs",
      icon: Insta,
    },
  ];

  const about = [
    {
      name: "wiki",
      link: "https://humanoids.wiki/",
      icon: Wiki,
    },
    {
      name: "Schedule a call",
      link: "https://calendly.com/kscale/one-on-one-with-me",
      icon: Call,
    },
    {
      name: "Leave Feedback",
      link: "https://forms.gle/s67zhddCotYgY5AY6",
      icon: Feedback,
    },
  ];
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500   ">
      <div className="    py-10 px-20 flex  justify-between  mx-40 ">
        <div className="">
          <h1 className="font-bold w-[100px]">Follow us</h1>
          <div className=" gap-10 md:flex  mt-10     ">
            {SocialLinks.map((links) => (
              <div className=" hover:underline " key={links.name}>
                <Link href={links.link}>
                  <Image
                    src={links.icon}
                    alt={links.name}
                    className=" w-[30px] justify-center items-center "
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <h1 className="font-bold">Learn More about Us</h1>
          <div className="gap-10 lg:flex mt-10  h-[30px] flex items-center justify-center  ">
            {about.map((items) => (
              <div
                key={items.name}
                className="hover:ease-in-out flex items-center justify-center  "
              >
                <Link href={items.link}>
                  <Image
                    src={items.icon}
                    alt={items.name}
                    className="w-[30px] h-[30px] hover:scale-50"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex justify-center py-5">
        <h1>@ 2024 k-scale labs All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
