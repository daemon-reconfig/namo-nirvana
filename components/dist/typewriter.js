"use client";
"use strict";
exports.__esModule = true;
exports.Type = void 0;
var typewriter_hero_1 = require("../components/ui/typewriter-hero");
function Type() {
    var words = [
        {
            text: "Welcome",
            className: "text-grey-500 dark:text-grey-500"
        },
        {
            text: "to",
            className: "text-grey-500 dark:text-grey-500"
        },
        {
            text: "Namo",
            className: "text-orange-500 dark:text-blue-500"
        },
        {
            text: "Nirvana.",
            className: "text-grey-500 dark:text-grey-500"
        },
    ];
    return (React.createElement(typewriter_hero_1.TypewriterEffect, { words: words }));
}
exports.Type = Type;
