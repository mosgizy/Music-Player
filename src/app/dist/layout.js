'use client';
"use strict";
exports.__esModule = true;
var navBar_1 = require("./components/navBar");
var sideBar_1 = require("./components/sideBar");
var provider_1 = require("../../store/provider");
var Controller_1 = require("./components/Controller");
var navigation_1 = require("next/navigation");
var Lead_image_svg_1 = require("../../resources/assets/Lead-image.svg");
require("./globals.css");
function RootLayout(_a) {
    var children = _a.children;
    var pathname = navigation_1.usePathname();
    var path = pathname === null || pathname === void 0 ? void 0 : pathname.includes('/chart/');
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null),
        React.createElement("body", { className: "bg-dark text-light min-height-screen overflow-x-hidden" },
            React.createElement(provider_1.Providers, null,
                React.createElement(navBar_1["default"], null),
                React.createElement(sideBar_1["default"], null),
                React.createElement("div", { className: "hidden md:block" },
                    React.createElement(Controller_1["default"], null)),
                React.createElement("main", { className: "md:pl-24 md:pt-8 md:pb-28 bg-no-repeat bg-fixed bg-cover bg-center", style: {
                        backgroundImage: "" + (path
                            ? "linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%),url(" + Lead_image_svg_1["default"].src + ")"
                            : '')
                    } }, children)))));
}
exports["default"] = RootLayout;
