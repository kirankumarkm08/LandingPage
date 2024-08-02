import Image from "next/image";
import Link from "next/link";
import Linkedin from "/public/Social/linkedin.png";
import Benjamin from "/public/Teams/Benjaminbolte.jpeg";
import Matt from "/public/Teams/MattFreed.jpeg";
import Pawel from "/public/Teams/Pawel.jpeg";
import Tom from "/public/Teams/TOM.jpeg";

const Team = () => {
  const teams = [
    {
      name: "Ben Bolte",
      image: Benjamin,
      descripion:
        "New York based roboticist and machine learning engineer, with experience at Tesla AI, FAIR, Google Research and Amazon. Interested in self-supervised learning and fast neural network inference.",
      linkedin: "https://www.linkedin.com/in/benjaminbolte/",
    },
    {
      name: "Matt Freed",
      image: Matt,
      descripion:
        "Co-founder at Malamute, Inc | Techstars x STANLEY ‘21 | Software & Mechanical Engineer | All things AI, Spatial Computing & Robotics",
      linkedin: "https://www.linkedin.com/in/matthew-freed/",
    },
    {
      name: "Pawel Budzianowski",
      image: Pawel,
      descripion:
        "I build affordable and open-source humanoids at KScale Labs hoping to get us up that Kardashev ladder. I also created and co-lecture the joint NLP course for ML Master’s programs at Warsaw University and Jagiellonian University. ",
      linkedin:
        "https://www.linkedin.com/in/pawe%C5%82-budzianowski-698a5a141/",
    },
    {
      name: "Tom Mloduchowski",
      image: Tom,
      descripion:
        "Research and Technology consultant with broad background and interests, covering electronics, embedded hardware, software, web applications. Experienced in managing people and resources, as well as 'McNamara' style system analysis.",
      linkedin: "https://www.linkedin.com/in/tomaszmloduchowski/",
    },
  ];
  return (
    <div className=" gap-10 flex flex-col  " id="teams">
      <div className="h-[100px]"></div>
      <h1 className="font-bold text-[30px] mx-10">Teams</h1>
      <div className=" w-[1280px] mx-auto">
        <div
          id="teams"
          className=" gap-10 flex overflow-auto  w-[800px] mx-auto grid grid-cols-2  " //grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        >
          {teams.map((team) => (
            <div
              key={team.name}
              className="  rounded-lg border-2  border-black gap-5 flex flex-col px-4 py-2 relative"
            >
              <Image
                src={team.image}
                className="h-[400px] w-fit flex  rounded-lg "
                alt={team.name}
              />
              <h2 className="text-[20px] font-bold">{team.name}</h2>
              <h3 className="h-[150px]">{team.descripion}</h3>
              <Link href={team.linkedin} className="w-[30px] flex  gap-5">
                <Image src={Linkedin} alt="linkedin" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[150px]"></div>
    </div>
  );
};

export default Team;
