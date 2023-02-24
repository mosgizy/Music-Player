'use client';
"use strict";
exports.__esModule = true;
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var cover_svg_1 = require("../../../resources/assets/avatar/cover.svg");
var react_1 = require("react");
var Collections = function () {
    var _a = react_1.useState(false), active = _a[0], setActive = _a[1];
    var handleClick = function () {
        setActive(function (prev) { return !prev; });
    };
    return (React.createElement("section", { className: "pt-20 px-5" },
        React.createElement("div", { className: "flex flex-row gap-3 justify-between md:justify-start" },
            React.createElement("button", { className: "flex-1 md:flex-none rounded-[27px] px-2.5 py-2.5 md:px-9 cursor-pointer text-sm bg-secondary text-dark " + (active && 'bg-transparent border border-light text-light opacity-25'), onClick: handleClick }, "My collection"),
            React.createElement("button", { className: "flex-1 md:flex-none rounded-[27px] px-2.5 py-2.5 md:px-9 cursor-pointer text-sm bg-secondary text-dark " + (!active &&
                    'bg-transparent border border-light text-light opacity-25'), onClick: handleClick }, "Likes")),
        React.createElement("div", { className: "mt-6 flex flex-col flex-wrap gap-6 md:flex-row md:items-start" },
            React.createElement("div", { className: "group bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]  overflow-hidden", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light transition-transform md:translate-y-11 md:group-hover:translate-y-0" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full transition-all md:hidden md:group-hover:flex" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "group bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))),
            React.createElement("div", { className: "bg-no-repeat bg-cover flex flex-row justify-between items-end rounded-[20px] w-full h-[234px] p-5 md:flex-[1_0_24%] lg:flex-[1_0_18.6%]", style: {
                    backgroundImage: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%),url(" + cover_svg_1["default"].src + ")"
                } },
                React.createElement("div", { className: "flex flex-col gap-6 text-light" },
                    React.createElement("div", { className: "flex flex-col gap-0" },
                        React.createElement("h1", { className: "text-[24px] font-normal" }, "Limits"),
                        React.createElement("p", { className: "text-[10px] opacity-40" }, "John watts")),
                    React.createElement("div", { className: "text-sm text-white font-normal" }, "2.3m likes")),
                React.createElement("div", { className: "flex justify-center items-center cursor-pointer bg-[rgba(250,205,102,0.4)] w-[34px] h-[34px] rounded-full" },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-secondary", icon: free_solid_svg_icons_1.faPlay }))))));
};
exports["default"] = Collections;
