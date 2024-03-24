"use strict";
exports.__esModule = true;
var background_beams_1 = require("@/components/ui/background-beams");
var hero_1 = require("./components/sections/hero");
var rover_1 = require("./components/sections/rover");
var tracing_beam_1 = require("@/components/ui/tracing-beam");
var navbar_1 = require("./components/navbar");
var about_1 = require("./components/sections/about");
var achievements_1 = require("./components/sections/achievements");
var gemini_1 = require("./components/sections/gemini");
function Home() {
    return (React.createElement("main", null,
        React.createElement(background_beams_1.BackgroundBeams, { className: "inset-0" }),
        React.createElement(tracing_beam_1.TracingBeam, null,
            React.createElement(hero_1["default"], null),
            React.createElement(navbar_1["default"], { className: "top-10" }),
            React.createElement(rover_1["default"], null),
            React.createElement(about_1["default"], null),
            React.createElement(achievements_1["default"], null),
            React.createElement(gemini_1.FunEffect, null))));
}
exports["default"] = Home;
