import About from "@/components/About";
import Backedby from "@/components/Backedby";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Team from "@/components/Team";

const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col ">
      <Hero />
      <About />
      <Backedby />
      <Partner />
      <Team />
    </div>
  );
};

export default page;
