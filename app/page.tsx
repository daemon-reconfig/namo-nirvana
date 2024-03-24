import { Type } from "@/components/typewriter";
import { BackgroundBeams } from "@/components/ui/background-beams";

import Image from "next/image";
import logo from "@/public/logo.png";
import { SparklesCore } from "@/components/ui/sparkkles";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 md:items-center lg:justify-center">
      {/* Hero */}
      <BackgroundBeams className="inset-0" />
      
      <div className="flex flex-col items-center justify-center space-y-8  md:items-center">
        <Image src={logo} alt="Logo" className="w-96 h-96" />
      
        <Type />
        <div className="w-[40rem] h-40 relative">

            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />


            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            
        </div>
        <div>
          <button className="relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href="/">About Us!</Link>
            </span>
          </button>
        </div>
        <Navbar />
        <p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p>
      <p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p>
      <p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p><p>
        s gr sdgrbtvdasacdf rgbwevfd 
      </p>
      </div>
      
    </main>
  );
}
