'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var music_png_1 = require("../../../resources/assets/avatar/music.png");
var TopChartCard = function () {
    return (React.createElement("div", { className: "bg-darkAlt cursor-pointer rounded-2xl py-6 px-4 mr-3 md:py-4" },
        React.createElement("div", { className: "flex flex-row justify-between md:gap-4 md:items-center" },
            React.createElement("div", { className: "flex flex-col gap-4 md:flex-row" },
                React.createElement(image_1["default"], { className: "rounded-2xl h-[99px] w-[108px] md:h-[63px] md:w-[63px]", src: music_png_1["default"], alt: "avatar" }),
                React.createElement("div", { className: "flex flex-col gap-2 md:gap-0" },
                    React.createElement("div", { className: "text-[17px]" }, "Golden age of 80s"),
                    React.createElement("div", { className: "text-xs opacity-50" }, "Sean Swadder"),
                    React.createElement("div", { className: "text-sm text-white" }, "2:34:45"))),
            React.createElement("div", null,
                React.createElement("div", { className: "rounded-full border border-[rgba(255,255,255,0.11)] w-[37px] h-[37px] flex items-center justify-center" }, heart)))));
};
exports["default"] = TopChartCard;
var heart = (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1.1539 7.69874C0.349149 5.18624 1.28965 2.31449 3.9274 1.46474C5.3149 1.01699 6.8464 1.28099 7.9999 2.14874C9.09115 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.9999 14.7487 7.9999 14.7487C7.9999 14.7487 2.4484 11.7277 1.1539 7.69874Z", stroke: "#FACD66", "stroke-width": "0.5625", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    React.createElement("path", { opacity: "0.4", d: "M11 4.02502C11.8025 4.28452 12.3695 5.00077 12.4377 5.84152", stroke: "#FACD66", "stroke-width": "0.5625", "stroke-linecap": "round", "stroke-linejoin": "round" })));
