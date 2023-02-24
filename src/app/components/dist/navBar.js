'use client';
"use strict";
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var logo_svg_1 = require("../../../resources/assets/svg/logo.svg");
var search_svg_1 = require("../../../resources/assets/svg/search.svg");
var image_1 = require("next/image");
var sideBar_1 = require("store/slice/sideBar");
var hook_1 = require("store/hook");
var NavBar = function () {
    var active = hook_1.useAppSelector(function (state) { return state.sidebar; });
    var dispatch = hook_1.useAppDispatch();
    var handleToggle = function () {
        dispatch(sideBar_1.activeSideBar(true));
    };
    return (React.createElement("nav", { className: "flex justify-between gap-8 items-center fixed top-0 w-full z-10 h-10 px-6 py-10 md:pl-36" },
        React.createElement("div", { className: "w-24 flex gap-5 md:hidden" },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "w-6 h-6 cursor-pointer", icon: free_solid_svg_icons_1.faBurger, onClick: handleToggle }),
            React.createElement(image_1["default"], { src: logo_svg_1["default"], alt: "logo" })),
        React.createElement("div", { className: "text-[rgba(255,255,255,0.25)]" },
            React.createElement("label", { className: "relative cursor-pointer", htmlFor: "search" },
                React.createElement("input", { className: "bg-transparent rounded-xl border-none px-2 py-1 md:pl-9 focus-within:outline-darkAlt", type: "text", name: "search", placeholder: "Search artists..." }),
                React.createElement(image_1["default"], { className: "absolute w-6 -top-1 right-2 md:left-1", src: search_svg_1["default"], alt: "search" })))));
};
exports["default"] = NavBar;
