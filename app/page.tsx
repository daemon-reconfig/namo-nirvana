
import { BackgroundBeams } from "@/components/ui/background-beams";

import Hero from "./components/sections/hero";
import Rover from "./components/sections/rover";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Menu } from "@/components/ui/nav";
import Navbar from "./components/navbar";
import AboutUs from "./components/sections/about";
import Achievements from "./components/sections/achievements";
import { FunEffect } from "./components/sections/gemini";

export default function Home() {
  
  return (
    <main >
      {/* Hero */}
      <BackgroundBeams className="inset-0" />
      
      <TracingBeam>
        <Hero />
        <Navbar className="top-10" />
        <Rover />
        <AboutUs />
        <Achievements />
        <FunEffect />
      </TracingBeam>
      
    </main>
  );
}
