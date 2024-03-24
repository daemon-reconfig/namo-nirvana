"use client";
"use strict";
exports.__esModule = true;
exports.ImgLayout = void 0;
var react_1 = require("react");
var layout_grid_1 = require("@/components/ui/layout-grid");
function ImgLayout() {
    return (react_1["default"].createElement("div", { className: "h-screen py-20 w-full" },
        react_1["default"].createElement(layout_grid_1.LayoutGrid, { cards: cards })));
}
exports.ImgLayout = ImgLayout;
var SkeletonOne = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "font-bold text-4xl text-orange-300" }, "1st Place"),
        react_1["default"].createElement("p", { className: "font-bold text-4xl text-orange" }, "in NIT Trichy Pragyan-24 Hackathon"),
        react_1["default"].createElement("p", { className: "font-normal text-base text-white" }),
        react_1["default"].createElement("p", { className: "font-normal text-base my-4 max-w-lg text-neutral-200" }, "Our team's success at the NIT Trichy Pragyan-24 Hackathon highlights our dedication and excellence in developing cutting-edge solutions amidst intense competition.")));
};
var SkeletonTwo = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "font-bold text-4xl text-orange-300" }, "1st Place"),
        react_1["default"].createElement("p", { className: "font-bold text-4xl text-orange" }, "in NIT Trichy Pragyan-24 Hackathon"),
        react_1["default"].createElement("p", { className: "font-normal text-base text-white" }),
        react_1["default"].createElement("p", { className: "font-normal text-base my-4 max-w-lg text-neutral-200" }, "showcasing innovative problem-solving and teamwork skills.")));
};
var SkeletonThree = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", { className: "font-bold text-4xl text-orange-300" }, "ISRO Robotics Challenge"),
        react_1["default"].createElement("p", { className: "font-normal text-base text-white" }),
        react_1["default"].createElement("p", { className: "font-normal text-base my-4 max-w-lg text-neutral-200" }, "Securing advancement through the first round of the esteemed ISRO Robotics Challenge signifies a significant milestone in our journey, showcasing adeptness in robotics, meticulous planning, and adaptability to complex challenges set forth by the esteemed organization.")));
};
var cards = [
    {
        id: 1,
        content: react_1["default"].createElement(SkeletonOne, null),
        className: "md:col-span-2",
        thumbnail: "/1.jpg"
    },
    {
        id: 2,
        content: react_1["default"].createElement(SkeletonTwo, null),
        className: "col-span-1",
        thumbnail: "/2.jpg"
    },
    {
        id: 3,
        content: react_1["default"].createElement(SkeletonThree, null),
        className: "md:col-span-3",
        thumbnail: "/3.jpg"
    },
];
