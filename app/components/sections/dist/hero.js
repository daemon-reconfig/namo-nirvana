"use strict";
exports.__esModule = true;
var typewriter_1 = require("@/components/typewriter");
var sparkkles_1 = require("@/components/ui/sparkkles");
var image_1 = require("next/image");
var link_1 = require("next/link");
var logo_png_1 = require("@/public/logo.png");
function Hero() {
    return (React.createElement("section", { id: "hero", className: "h-screen flex flex-col items-center justify-center px-6" },
        React.createElement("div", { className: "text-center" },
            React.createElement("div", { className: "max-w-md mx-auto" },
                React.createElement(image_1["default"], { src: logo_png_1["default"], alt: "Logo", className: "w-48 h-48 md:w-64 md:h-64 mx-auto" }),
                React.createElement(typewriter_1.Type, null),
                React.createElement("div", { className: "relative w-full" },
                    React.createElement("div", { className: "absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-1 w-2/3 blur-sm" }),
                    React.createElement("div", { className: "absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-2/3" }),
                    React.createElement("div", { className: "absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-2 w-1/3 blur-sm" }),
                    React.createElement("div", { className: "absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/3" }),
                    React.createElement(sparkkles_1.SparklesCore, { background: "transparent", minSize: 0.4, maxSize: 1, particleDensity: 800, className: "w-full h-full", particleColor: "#FFFFFF" }),
                    React.createElement("div", { className: "absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" })),
                React.createElement("div", { className: "mt-8" },
                    React.createElement("button", { className: "relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" },
                        React.createElement("span", { className: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" }),
                        React.createElement("span", { className: "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" },
                            React.createElement(link_1["default"], { href: "/" }, "About Us!"))))))));
}
exports["default"] = Hero;
