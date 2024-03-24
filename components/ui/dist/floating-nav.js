"use client";
"use strict";
exports.__esModule = true;
exports.FloatingNav = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var utils_1 = require("@/lib/utils");
var link_1 = require("next/link");
exports.FloatingNav = function (_a) {
    var navItems = _a.navItems, className = _a.className;
    var scrollYProgress = framer_motion_1.useScroll().scrollYProgress;
    var _b = react_1.useState(false), visible = _b[0], setVisible = _b[1];
    framer_motion_1.useMotionValueEvent(scrollYProgress, "change", function (current) {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            var direction = current - scrollYProgress.getPrevious();
            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            }
            else {
                if (direction < 0) {
                    setVisible(true);
                }
                else {
                    setVisible(false);
                }
            }
        }
    });
    return (react_1["default"].createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
        react_1["default"].createElement(framer_motion_1.motion.div, { initial: {
                opacity: 1,
                y: -100
            }, animate: {
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0
            }, transition: {
                duration: 0.2
            }, className: utils_1.cn("flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-white/[0.2] dark:border-white/[0.2] rounded-full dark:bg-black bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4", className) },
            navItems.map(function (navItem, idx) { return (react_1["default"].createElement(link_1["default"], { key: "link=" + idx, href: navItem.link, className: utils_1.cn("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-50 dark:hover:text-neutral-300 hover:text-orange-500") },
                react_1["default"].createElement("span", { className: "block sm:hidden" }, navItem.icon),
                react_1["default"].createElement("span", { className: "hidden sm:block text-sm" }, navItem.name))); }),
            react_1["default"].createElement("button", { className: "border text-sm font-medium relative border-white/[0.2] dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full" },
                react_1["default"].createElement("span", null, "Login"),
                react_1["default"].createElement("span", { className: "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" })))));
};
