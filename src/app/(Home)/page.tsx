import About from "@/components/About";
import Backedby from "@/components/Backedby";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Team from "@/components/Team";

const page = () => {
  return (
    <div className="mx-auto bg-gradient-to-r from-indigo-500 via-purple-500   flex flex-col ">
      <Hero />
      <About />
      <Backedby />
      <Partner />
      <Team />
    </div>
  );
};

export default page;
