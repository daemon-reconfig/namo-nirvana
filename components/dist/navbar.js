"use strict";
exports.__esModule = true;
// floating navbar
var react_1 = require("react");
var floating_nav_1 = require("./ui/floating-nav");
function Navbar() {
    return (react_1["default"].createElement(floating_nav_1.FloatingNav, { navItems: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Services',
                link: '/services'
            },
            {
                name: 'Contact',
                link: '/contact'
            },
        ] }));
}
exports["default"] = Navbar;
