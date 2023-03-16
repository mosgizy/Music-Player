'use client';
"use strict";
exports.__esModule = true;
var herodesign_svg_1 = require("../../../resources/assets/svg/herodesign.svg");
var herodeskbg_svg_1 = require("../../../resources/assets/svg/herodeskbg.svg");
var heart_svg_1 = require("../../../resources/assets/svg/heart.svg");
var hero_svg_1 = require("../../../resources/assets/avatar/hero.svg");
var image_1 = require("next/image");
var Herocard = function (_a) {
    var imageUrls = _a.imageUrls;
    return (React.createElement("section", { className: "px-5 md:flex-[1_1_65%]" },
        React.createElement("div", { className: "bg-card rounded-3xl py-8 px-10 flex flex-col gap-38 relative md:gap-20 md:items-between md:py-8 md:rounded-[40px] overflow-hidden" },
            React.createElement("div", { className: "absolute top-0 right-0 bottom-0 md:hidden" },
                React.createElement(image_1["default"], { src: herodesign_svg_1["default"], alt: "design" })),
            React.createElement("div", { className: "hidden md:block md:absolute top-0 bottom-0 h-full right-0" },
                React.createElement(image_1["default"], { className: "h-full", src: herodeskbg_svg_1["default"], alt: "design desktop" })),
            React.createElement("div", { className: "hidden md:block md:absolute h-full top-0 right-0 bottom-0" },
                React.createElement(image_1["default"], { className: "h-full", src: hero_svg_1["default"], alt: "design desktop" })),
            React.createElement("div", { className: "text-xs font-normal" }, "Currated playlist"),
            React.createElement("div", { className: "flex flex-col gap-6 mt-16 md:mt-0" },
                React.createElement("div", { className: "md:mb-16" },
                    React.createElement("h1", { className: "text-4xl font-bold" }, "R & B Hits"),
                    React.createElement("p", { className: "text-sm mt-2 md:w-[40ch]" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus laudantium harum asperiores obcaecati pariatur sit dolores, eius enim sunt?")),
                React.createElement("div", { className: "flex gap-6 items-center justify-between md:justify-start" },
                    React.createElement("div", { className: "flex -space-x-5 rounded-none overflow-hidden" }, imageUrls.map(function (image, index) {
                        return (React.createElement(image_1["default"], { key: index, className: "inline-block ring-2 md:w-[40px] rounded-full", src: image, alt: "avatar", width: 40, height: 40 }));
                    })),
                    React.createElement("div", { className: "flex flex-row gap-4 items-center" },
                        React.createElement(image_1["default"], { className: "md:w-[20px] md:h-[18.67px]", src: heart_svg_1["default"], alt: "heart" }),
                        React.createElement("h2", { className: "text-1xl md:text-lg" }, "33k Likes")))))));
};
exports["default"] = Herocard;
