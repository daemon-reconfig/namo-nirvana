"use strict";
exports.__esModule = true;
var typewriter_1 = require("@/components/typewriter");
var background_beams_1 = require("@/components/ui/background-beams");
var image_1 = require("next/image");
var logo_png_1 = require("@/public/logo.png");
var sparkkles_1 = require("@/components/ui/sparkkles");
var navbar_1 = require("@/components/navbar");
var link_1 = require("next/link");
function Home() {
    return (React.createElement("main", { className: "flex min-h-screen items-center justify-between p-24 md:items-center lg:justify-center" },
        React.createElement(background_beams_1.BackgroundBeams, { className: "inset-0" }),
        React.createElement("div", { className: "flex flex-col items-center justify-center space-y-8  md:items-center" },
            React.createElement(image_1["default"], { src: logo_png_1["default"], alt: "Logo", className: "w-96 h-96" }),
            React.createElement(typewriter_1.Type, null),
            React.createElement("div", { className: "w-[40rem] h-40 relative" },
                React.createElement("div", { className: "absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" }),
                React.createElement("div", { className: "absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" }),
                React.createElement("div", { className: "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" }),
                React.createElement("div", { className: "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" }),
                React.createElement(sparkkles_1.SparklesCore, { background: "transparent", minSize: 0.4, maxSize: 1, particleDensity: 1200, className: "w-full h-full", particleColor: "#FFFFFF" }),
                React.createElement("div", { className: "absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" })),
            React.createElement("div", null,
                React.createElement("button", { className: "relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" },
                    React.createElement("span", { className: "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" }),
                    React.createElement("span", { className: "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" },
                        React.createElement(link_1["default"], { href: "/" }, "About Us!")))),
            React.createElement(navbar_1["default"], null),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"),
            React.createElement("p", null, "s gr sdgrbtvdasacdf rgbwevfd"))));
}
exports["default"] = Home;
