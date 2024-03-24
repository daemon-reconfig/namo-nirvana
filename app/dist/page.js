"use strict";
exports.__esModule = true;
var background_beams_1 = require("@/components/ui/background-beams");
var navbar_1 = require("@/components/navbar");
var hero_1 = require("./components/sections/hero");
function Home() {
    return (React.createElement("main", null,
        React.createElement(background_beams_1.BackgroundBeams, { className: "inset-0" }),
        React.createElement(hero_1["default"], null),
        React.createElement(navbar_1["default"], null)));
}
exports["default"] = Home;
