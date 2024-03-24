
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/navbar";
import Hero from "./components/sections/hero";
import AboutUs from "./components/sections/about";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main >
      {/* Hero */}
      <BackgroundBeams className="inset-0" />
      <TracingBeam>
        <Hero />

        
      
        <AboutUs />
      </TracingBeam>
      
    </main>
  );
}
