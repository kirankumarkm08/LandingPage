import About from "@/components/About";
import Backedby from "@/components/Backedby";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Team from "@/components/Team";

const page = () => {
  return (
    <div className="mx-auto bg-[#B2B5E0]   flex flex-col ">
      <Hero />
      <About />
      <Backedby />
      <Partner />
      <Team />
    </div>
  );
};

export default page;
