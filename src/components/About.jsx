import Image from "next/image";
import AboutImage from "/public/About.png";

const About = () => {
  return (
    <div className=" gap-10 flex flex-col mx-10 " id="about">
      <div className="h-[100px]"></div>
      <div className=" w-full flex flex-col gap-10 ">
        <h1 className="text-[30px] font-bold"> About Us</h1>
        <div className="rounded-lg border-2 px-8 py-36 border-black  flex justify-between relative  bg-white   ">
          <h1 className=" max-w-[500px] ">
            K-Scale Labs is a machine learning startup building software for the
            next generation of embodied artificial intelligence. Located near
            Stanford in the heart of Silicon Valley, we are a team of engineers
            and researchers with the mission to build a future where billions of
            humanoid robots assist humans with everything from household chores
            to industrial labor. Our first development, Stompy, is an
            open-source bipedal humanoid robot that can be easily manufactured
            by individuals using 3D printing. Stompy is a template low-cost
            humanoid robot that can be customized or used as a reference design.
          </h1>
          <div className=" absolute bottom-1  end-20">
            <Image src={AboutImage} alt="about" className="w-[500px]  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
