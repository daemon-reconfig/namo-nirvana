import { Type } from "@/components/typewriter";
import { SparklesCore } from "@/components/ui/sparkkles";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Hero() {
    return (
        <section id="hero" className="h-screen flex flex-col items-center justify-center px-6">
            <div className="text-center">
                <div className="max-w-md mx-auto">
                    <Image src={logo} alt="Logo" className="w-48 h-48 md:w-64 md:h-64 mx-auto" />
                    <Type />
                    <div className="relative w-full">
                        <div className="absolute inset-x-4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-1 w-2/3 blur-sm" />
                        <div className="absolute inset-x-4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-2/3" />
                        <div className="absolute inset-x-12 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-2 w-1/3 blur-sm" />
                        <div className="absolute inset-x-12 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/3" />
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={800}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
                    </div>
                    <div className="mt-8">
                        <button className="relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <Link href="/">About Us!</Link>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
