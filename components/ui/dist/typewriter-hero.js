"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TypewriterEffectSmooth = exports.TypewriterEffect = void 0;
var utils_1 = require("@/lib/utils");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
exports.TypewriterEffect = function (_a) {
    var words = _a.words, className = _a.className, cursorClassName = _a.cursorClassName;
    // split text inside of words into array of characters
    var wordsArray = words.map(function (word) {
        return __assign(__assign({}, word), { text: word.text.split("") });
    });
    var _b = framer_motion_1.useAnimate(), scope = _b[0], animate = _b[1];
    var isInView = framer_motion_1.useInView(scope);
    react_1.useEffect(function () {
        if (isInView) {
            animate("span", {
                display: "inline-block",
                opacity: 1,
                width: "fit-content"
            }, {
                duration: 0.3,
                delay: framer_motion_1.stagger(0.1),
                ease: "easeInOut"
            });
        }
    }, [isInView]);
    var renderWords = function () {
        return (React.createElement(framer_motion_1.motion.div, { ref: scope, className: "inline" }, wordsArray.map(function (word, idx) {
            return (React.createElement("div", { key: "word-" + idx, className: "inline-block" },
                word.text.map(function (char, index) { return (React.createElement(framer_motion_1.motion.span, { initial: {}, key: "char-" + index, className: utils_1.cn("dark:text-white text-black opacity-0 hidden", word.className) }, char)); }),
                "\u00A0"));
        })));
    };
    return (React.createElement("div", { className: utils_1.cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className) },
        renderWords(),
        React.createElement(framer_motion_1.motion.span, { initial: {
                opacity: 0
            }, animate: {
                opacity: 1
            }, transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
            }, className: utils_1.cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName) })));
};
exports.TypewriterEffectSmooth = function (_a) {
    var words = _a.words, className = _a.className, cursorClassName = _a.cursorClassName;
    // split text inside of words into array of characters
    var wordsArray = words.map(function (word) {
        return __assign(__assign({}, word), { text: word.text.split("") });
    });
    var renderWords = function () {
        return (React.createElement("div", null, wordsArray.map(function (word, idx) {
            return (React.createElement("div", { key: "word-" + idx, className: "inline-block" },
                word.text.map(function (char, index) { return (React.createElement("span", { key: "char-" + index, className: utils_1.cn("dark:text-white text-black ", word.className) }, char)); }),
                "\u00A0"));
        })));
    };
    return (React.createElement("div", { className: utils_1.cn("flex space-x-1 my-6", className) },
        React.createElement(framer_motion_1.motion.div, { className: "overflow-hidden pb-2", initial: {
                width: "0%"
            }, whileInView: {
                width: "fit-content"
            }, transition: {
                duration: 2,
                ease: "linear",
                delay: 1
            } },
            React.createElement("div", { className: "text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold", style: {
                    whiteSpace: "nowrap"
                } },
                renderWords(),
                " "),
            " "),
        React.createElement(framer_motion_1.motion.span, { initial: {
                opacity: 0
            }, animate: {
                opacity: 1
            }, transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
            }, className: utils_1.cn("block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500", cursorClassName) })));
};
