
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/navbar";
import Hero from "./components/sections/hero";

export default function Home() {
  return (
    <main >
      {/* Hero */}
      <BackgroundBeams className="inset-0" />
      <Hero />
      <Navbar />
      
    </main>
  );
}
