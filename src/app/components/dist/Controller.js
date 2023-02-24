'use client';
"use strict";
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var image_1 = require("next/image");
var music_png_1 = require("../../../resources/assets/avatar/music.png");
var Controller = function () {
    return (React.createElement("div", { className: "fixed z-50 bottom-0 py-8 px-6 md:px-10 md:py-5 bg-[rgba(29,33,35,0.3)] backdrop-blur-lg w-full border border-[rgba(255,255,255,0.1)]" },
        React.createElement("div", { className: "flex flex-row justify-between items-center md:gap-8" },
            React.createElement("div", { className: "flex flex-row gap-4 items-center" },
                React.createElement(image_1["default"], { className: "w-[57px] h-[57px] rounded-2xl", src: music_png_1["default"], alt: "Avatar" }),
                React.createElement("div", { className: "" },
                    React.createElement("p", { className: "text-sm" }, "Seasons in"),
                    React.createElement("p", { className: "text-xs opacity-50 mt-1" }, "James"))),
            React.createElement("div", { className: "hidden md:block md:flex-1" },
                React.createElement("div", { className: "flex flex-row gap-6 items-center justify-center text-base" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShuffle }),
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBackward }),
                    React.createElement("div", { className: "bg-secondary rounded-full flex justify-center items-center h-[34px] w-[34px] shadow-3xl" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlay })),
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faForward }),
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faRepeat })),
                React.createElement("div", { className: "w-full mt-6 bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full" },
                    React.createElement("div", { className: "w-[20%] h-1 bg-secondary" }))),
            React.createElement("div", { className: "hidden md:flex md:flex-row md:gap-4 md:items-center md:flex-initial md:w-48" },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faVolumeUp }),
                React.createElement("div", { className: "w-full bg-[rgba(255,255,255,0.04)] overflow-hidden rounded-full" },
                    React.createElement("div", { className: "w-[20%] h-1 bg-secondary" }))),
            React.createElement("div", { className: "flex flex-row items-center gap-6 md:hidden" },
                React.createElement("div", { className: "bg-secondary rounded-full flex justify-center items-center h-[34px] w-[34px] shadow-3xl" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlay })),
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faForward })))));
};
exports["default"] = Controller;
