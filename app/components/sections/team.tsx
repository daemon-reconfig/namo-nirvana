import { TeamMem } from "@/components/animatedtool";

function OurTeam() {
  return (
    <section
      id="team"
      className="section mx-auto mt-6 w-full max-w-screen-xl overflow-x-hidden overflow-y-hidden px-6 sm:px-8 lg:px-12 lg:pb-16"
    >
      <h1 className="bg-opacity-50 bg-gradient-to-b from-orange-50 to-orange-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
        Our Team
      </h1>

      <TeamMem />
    </section>
  );
}

export default OurTeam;
